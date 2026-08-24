import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/types/database";
import { getSupabaseConfig } from "@/lib/supabase/config";

export function createPublicServerClient() {
  const { url, publishableKey } = getSupabaseConfig();

  return createClient<Database>(url, publishableKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
}
