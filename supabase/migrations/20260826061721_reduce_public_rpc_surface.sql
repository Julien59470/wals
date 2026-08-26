revoke execute on function public.record_website_lead(text, text, text, text, text, text, text, boolean, boolean, text) from anon, authenticated;
revoke execute on function public.subscribe_launch(text, text, text) from authenticated;
revoke execute on function public.unsubscribe_launch(text) from authenticated;

comment on function public.record_website_lead is 'Ancien endpoint de prise de contact désactivé pendant la phase de pré-lancement WALS.';
