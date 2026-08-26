create or replace function public.subscribe_launch(
  p_email text,
  p_audience text,
  p_fingerprint text
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
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

  insert into public.launch_subscriptions (email, audience, consent_at, source, unsubscribed_at)
  values (v_email, p_audience, now(), 'website', null)
  on conflict ((lower(email)), audience) do update
    set consent_at = excluded.consent_at,
        source = 'website',
        unsubscribed_at = null;

  delete from public.website_rate_limits where expires_at < now() - interval '1 hour';
end;
$$;

revoke all on function public.subscribe_launch(text, text, text) from public;
grant execute on function public.subscribe_launch(text, text, text) to anon;

comment on function public.subscribe_launch is 'Inscrit une adresse aux informations de lancement WALS avec limitation anti-abus.';
