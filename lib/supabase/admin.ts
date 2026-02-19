import { createClient } from "@supabase/supabase-js"

/**
 * Server-only Supabase client using the service_role key.
 * Bypasses RLS — only use in trusted server-side contexts (API routes, server actions).
 * Never expose this client or the service_role key to the browser.
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )
}
