create extension if not exists pgcrypto;

create table public.partner_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null check (char_length(trim(full_name)) between 2 and 120),
  email text not null check (char_length(trim(email)) between 5 and 254),
  phone text check (phone is null or char_length(trim(phone)) <= 32),
  activity text not null check (activity in ('independent', 'agency', 'sales', 'other')),
  message text check (message is null or char_length(message) <= 1200),
  consent_privacy boolean not null default false check (consent_privacy = true),
  source text not null default 'website' check (source = 'website'),
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed'))
);

create index partner_leads_created_at_idx on public.partner_leads (created_at desc);
create index partner_leads_email_idx on public.partner_leads (lower(email));

alter table public.partner_leads enable row level security;

revoke all on table public.partner_leads from anon, authenticated;
grant insert (full_name, email, phone, activity, message, consent_privacy, source)
on table public.partner_leads to anon, authenticated;

create policy "partner_leads_public_insert"
on public.partner_leads
for insert
to anon, authenticated
with check (
  consent_privacy = true
  and source = 'website'
  and char_length(trim(full_name)) between 2 and 120
  and char_length(trim(email)) between 5 and 254
);

comment on table public.partner_leads is
'Demandes de contact provenant de la vitrine publique WALS.';
