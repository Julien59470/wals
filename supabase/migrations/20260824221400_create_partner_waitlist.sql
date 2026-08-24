create table if not exists public.partner_waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null check (char_length(trim(email)) between 5 and 254),
  consent_launch boolean not null default true check (consent_launch = true),
  source text not null default 'website' check (source = 'website'),
  unsubscribed_at timestamptz
);

create unique index if not exists partner_waitlist_email_unique_idx
on public.partner_waitlist (lower(email));

create index if not exists partner_waitlist_created_at_idx
on public.partner_waitlist (created_at desc);

alter table public.partner_waitlist enable row level security;

revoke all on table public.partner_waitlist from anon, authenticated;
grant insert (email, consent_launch, source)
on table public.partner_waitlist to anon, authenticated;

drop policy if exists "partner_waitlist_public_insert" on public.partner_waitlist;
create policy "partner_waitlist_public_insert"
on public.partner_waitlist
for insert
to anon, authenticated
with check (
  consent_launch = true
  and source = 'website'
  and char_length(trim(email)) between 5 and 254
  and lower(email) = email
);

comment on table public.partner_waitlist is
'Liste d attente des revendeurs souhaitant être avertis lors de l ouverture de WALS.';
