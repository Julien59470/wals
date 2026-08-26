alter table public.launch_subscriptions
  add column if not exists consent_version text,
  add column if not exists expires_at timestamptz;

update public.launch_subscriptions
set consent_version = coalesce(consent_version, 'launch-notification-v1'),
    expires_at = coalesce(expires_at, consent_at + interval '24 months');

alter table public.launch_subscriptions
  alter column consent_version set default 'launch-notification-v1',
  alter column consent_version set not null,
  alter column expires_at set default (now() + interval '24 months'),
  alter column expires_at set not null;

create index if not exists launch_subscriptions_expires_at_idx
  on public.launch_subscriptions (expires_at);

create or replace function public.subscribe_launch(
  p_email text,
  p_audience text,
  p_fingerprint text
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $function$
declare
  v_email text;
  v_bucket text;
  v_hits integer;
begin
  v_email := lower(trim(coalesce(p_email, '')));

  if p_audience not in ('merchant', 'partner') then
    raise exception 'invalid_audience' using errcode = '22023';
  end if;

  if char_length(v_email) < 5 or char_length(v_email) > 254 or position('@' in v_email) < 2 then
    raise exception 'invalid_email' using errcode = '22023';
  end if;

  if p_fingerprint is null or char_length(p_fingerprint) <> 64 then
    raise exception 'invalid_fingerprint' using errcode = '22023';
  end if;

  v_bucket := p_fingerprint || ':launch:' || floor(extract(epoch from now()) / 900)::bigint::text;

  insert into public.website_rate_limits (bucket, hits, expires_at)
  values (v_bucket, 1, now() + interval '20 minutes')
  on conflict (bucket) do update
    set hits = public.website_rate_limits.hits + 1,
        expires_at = greatest(public.website_rate_limits.expires_at, excluded.expires_at)
  returning hits into v_hits;

  if v_hits > 10 then
    raise exception 'rate_limited' using errcode = 'P0001';
  end if;

  insert into public.launch_subscriptions (
    email,
    audience,
    consent_at,
    consent_version,
    expires_at,
    source,
    unsubscribed_at
  )
  values (
    v_email,
    p_audience,
    now(),
    'launch-notification-v1',
    now() + interval '24 months',
    'website',
    null
  )
  on conflict ((lower(email)), audience) do update
    set consent_at = excluded.consent_at,
        consent_version = excluded.consent_version,
        expires_at = excluded.expires_at,
        source = 'website',
        unsubscribed_at = null;

  delete from public.website_rate_limits where expires_at < now() - interval '1 hour';
end;
$function$;

revoke all on function public.subscribe_launch(text, text, text) from public;
grant execute on function public.subscribe_launch(text, text, text) to anon;

create extension if not exists pg_cron with schema pg_catalog;

do $block$
declare
  v_job_id bigint;
begin
  select jobid into v_job_id from cron.job where jobname = 'wals_launch_retention' limit 1;
  if v_job_id is not null then
    perform cron.unschedule(v_job_id);
  end if;
end;
$block$;

select cron.schedule(
  'wals_launch_retention',
  '17 3 * * *',
  $command$
    delete from public.launch_subscriptions where expires_at <= now();
    delete from public.website_rate_limits where expires_at < now() - interval '1 hour';
  $command$
);

comment on column public.launch_subscriptions.consent_version is 'Version du texte de consentement affiché lors de l inscription à la notification de lancement.';
comment on column public.launch_subscriptions.expires_at is 'Date limite de conservation de l inscription de lancement.';
