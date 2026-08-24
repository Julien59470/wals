const fallbackUrl = "https://kcamudmbokjlnvrslniu.supabase.co";
const fallbackPublishableKey = "sb_publishable_GQq53h-EIzTYTcIvV_zAzg_EoTmykNZ";

export function getSupabaseConfig() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? fallbackUrl,
    publishableKey:
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? fallbackPublishableKey,
  };
}
