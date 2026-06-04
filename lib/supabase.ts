import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Returns a server-side Supabase client, or `null` when the environment isn't
 * configured. A `null` client is the signal for the API route to fall back to
 * its zero-setup, log-only mode so the page is fully demoable with no backend.
 *
 * Uses the service-role key, so this must only ever run on the server.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) return null;

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
