create or replace function public.unsubscribe_launch_secure(
  p_email text,
  p_fingerprint text
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $function$
declare
  v_bucket text;
  v_hits integer;
begin
  if p_email is null or char_length(trim(p_email)) < 5 then
    return;
  end if;

  if p_fingerprint is null or char_length(p_fingerprint) <> 64 then
    raise exception 'invalid_fingerprint' using errcode = '22023';
  end if;

  v_bucket := p_fingerprint || ':unsubscribe:' || floor(extract(epoch from now()) / 900)::bigint::text;

  insert into public.website_rate_limits (bucket, hits, expires_at)
  values (v_bucket, 1, now() + interval '20 minutes')
  on conflict (bucket) do update
    set hits = public.website_rate_limits.hits + 1,
        expires_at = greatest(public.website_rate_limits.expires_at, excluded.expires_at)
  returning hits into v_hits;

  if v_hits > 10 then
    raise exception 'rate_limited' using errcode = 'P0001';
  end if;

  delete from public.launch_subscriptions
  where lower(email) = lower(trim(p_email));

  delete from public.website_rate_limits where expires_at < now() - interval '1 hour';
end;
$function$;

revoke all on function public.unsubscribe_launch_secure(text, text) from public, authenticated;
grant execute on function public.unsubscribe_launch_secure(text, text) to anon;

comment on function public.unsubscribe_launch_secure(text, text) is 'Supprime une inscription de lancement sans révéler son statut et limite les abus.';
