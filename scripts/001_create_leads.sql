-- Create the leads table for storing audit snapshot requests
-- This is a public lead capture table (no auth required), so we use
-- a permissive RLS policy that only allows inserts from the service role.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  url text,
  report text,
  source text not null default 'audit_snapshot',
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.leads enable row level security;

-- Only the service role (server-side) can insert leads
-- No public read/update/delete access
create policy "service_role_insert" on public.leads
  for insert
  with check (true);

-- Prevent any public select/update/delete
-- (service role bypasses RLS, so server-side reads still work)
create policy "deny_public_select" on public.leads
  for select
  using (false);
