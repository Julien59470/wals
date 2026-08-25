create extension if not exists pgcrypto;

create table if not exists public.website_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  audience text not null check (audience in ('merchant', 'partner')),
  full_name text not null check (char_length(trim(full_name)) between 2 and 120),
  email text not null check (char_length(trim(email)) between 5 and 254 and lower(email) = email),
  business_name text check (business_name is null or char_length(trim(business_name)) between 2 and 140),
  phone text check (phone is null or char_length(trim(phone)) <= 32),
  activity text check (activity is null or char_length(trim(activity)) between 2 and 80),
  message text check (message is null or char_length(message) <= 1600),
  privacy_acknowledged boolean not null check (privacy_acknowledged = true),
  marketing_opt_in boolean not null default false,
  source text not null default 'website' check (source = 'website'),
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed')),
  check ((audience = 'merchant' and business_name is not null) or (audience = 'partner' and activity is not null))
);

create index if not exists website_leads_created_at_idx on public.website_leads (created_at desc);
create index if not exists website_leads_audience_status_idx on public.website_leads (audience, status, created_at desc);
create index if not exists website_leads_email_idx on public.website_leads (lower(email));

create table if not exists public.launch_subscriptions (
  id uuid primary key default gen_random_uuid(),
  email text not null check (char_length(trim(email)) between 5 and 254 and lower(email) = email),
  audience text not null check (audience in ('merchant', 'partner')),
  consent_at timestamptz not null default now(),
  source text not null default 'website' check (source = 'website'),
  unsubscribed_at timestamptz
);

create unique index if not exists launch_subscriptions_email_audience_uidx on public.launch_subscriptions (lower(email), audience);
create index if not exists launch_subscriptions_active_idx on public.launch_subscriptions (audience, consent_at desc) where unsubscribed_at is null;

create table if not exists public.website_rate_limits (
  bucket text primary key,
  hits integer not null default 1 check (hits > 0),
  expires_at timestamptz not null
);
create index if not exists website_rate_limits_expires_idx on public.website_rate_limits (expires_at);

alter table public.website_leads enable row level security;
alter table public.launch_subscriptions enable row level security;
alter table public.website_rate_limits enable row level security;

revoke all on table public.website_leads from anon, authenticated;
revoke all on table public.launch_subscriptions from anon, authenticated;
revoke all on table public.website_rate_limits from anon, authenticated;

create or replace function public.record_website_lead(
  p_audience text,
  p_full_name text,
  p_email text,
  p_business_name text,
  p_phone text,
  p_activity text,
  p_message text,
  p_privacy_acknowledged boolean,
  p_marketing_opt_in boolean,
  p_fingerprint text
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_bucket text;
  v_hits integer;
  v_lead_id uuid;
begin
  if p_audience not in ('merchant', 'partner') then raise exception 'invalid_audience' using errcode = '22023'; end if;
  if p_fingerprint is null or char_length(p_fingerprint) <> 64 then raise exception 'invalid_fingerprint' using errcode = '22023'; end if;
  if p_privacy_acknowledged is distinct from true then raise exception 'privacy_not_acknowledged' using errcode = '22023'; end if;

  v_bucket := p_fingerprint || ':' || floor(extract(epoch from now()) / 900)::bigint::text;
  insert into public.website_rate_limits (bucket, hits, expires_at)
  values (v_bucket, 1, now() + interval '20 minutes')
  on conflict (bucket) do update set hits = public.website_rate_limits.hits + 1, expires_at = greatest(public.website_rate_limits.expires_at, excluded.expires_at)
  returning hits into v_hits;
  if v_hits > 8 then raise exception 'rate_limited' using errcode = 'P0001'; end if;

  insert into public.website_leads (audience, full_name, email, business_name, phone, activity, message, privacy_acknowledged, marketing_opt_in, source)
  values (p_audience, trim(p_full_name), lower(trim(p_email)), nullif(trim(p_business_name), ''), nullif(trim(p_phone), ''), nullif(trim(p_activity), ''), nullif(trim(p_message), ''), p_privacy_acknowledged, coalesce(p_marketing_opt_in, false), 'website')
  returning id into v_lead_id;

  if coalesce(p_marketing_opt_in, false) then
    insert into public.launch_subscriptions (email, audience, consent_at, source, unsubscribed_at)
    values (lower(trim(p_email)), p_audience, now(), 'website', null)
    on conflict ((lower(email)), audience) do update set consent_at = excluded.consent_at, source = 'website', unsubscribed_at = null;
  end if;

  delete from public.website_rate_limits where expires_at < now() - interval '1 hour';
  return v_lead_id;
end;
$$;

create or replace function public.unsubscribe_launch(p_email text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if p_email is null or char_length(trim(p_email)) < 5 then return; end if;
  update public.launch_subscriptions set unsubscribed_at = coalesce(unsubscribed_at, now()) where lower(email) = lower(trim(p_email));
end;
$$;

revoke all on function public.record_website_lead(text, text, text, text, text, text, text, boolean, boolean, text) from public;
revoke all on function public.unsubscribe_launch(text) from public;
grant execute on function public.record_website_lead(text, text, text, text, text, text, text, boolean, boolean, text) to anon, authenticated;
grant execute on function public.unsubscribe_launch(text) to anon, authenticated;

insert into public.launch_subscriptions (email, audience, consent_at, source, unsubscribed_at)
select lower(trim(email)), 'partner', created_at, 'website', unsubscribed_at from public.partner_waitlist where email is not null
on conflict ((lower(email)), audience) do nothing;

insert into public.website_leads (created_at, audience, full_name, email, business_name, phone, activity, message, privacy_acknowledged, marketing_opt_in, source, status)
select created_at, 'partner', full_name, lower(trim(email)), null, phone, activity, message, true, false, 'website', status from public.partner_leads;

revoke all on table public.partner_waitlist from anon, authenticated;
revoke all on table public.partner_leads from anon, authenticated;

comment on table public.website_leads is 'Demandes publiques WALS séparées par audience commerçant ou partenaire.';
comment on table public.launch_subscriptions is 'Souscriptions facultatives aux informations de lancement WALS, séparées par audience.';
comment on table public.website_rate_limits is 'Compteurs techniques temporaires anti-abus. Aucun identifiant réseau brut n est stocké.';
comment on function public.record_website_lead is 'Valide et enregistre un lead public avec contrôle de fréquence persistant.';
comment on function public.unsubscribe_launch is 'Désactive les informations de lancement pour une adresse email sans révéler son statut.';
