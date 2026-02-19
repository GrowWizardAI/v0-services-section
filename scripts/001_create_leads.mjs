import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL, { ssl: "require" });

await sql`
  create table if not exists public.leads (
    id uuid primary key default gen_random_uuid(),
    email text not null,
    url text,
    report text,
    source text not null default 'audit_snapshot',
    created_at timestamptz not null default now()
  )
`;

await sql`alter table public.leads enable row level security`;

// Allow inserts (service role bypasses RLS anyway, but this is explicit)
await sql`
  do $$
  begin
    if not exists (
      select 1 from pg_policies where tablename = 'leads' and policyname = 'service_role_insert'
    ) then
      execute 'create policy service_role_insert on public.leads for insert with check (true)';
    end if;
  end
  $$
`;

// Deny public select
await sql`
  do $$
  begin
    if not exists (
      select 1 from pg_policies where tablename = 'leads' and policyname = 'deny_public_select'
    ) then
      execute 'create policy deny_public_select on public.leads for select using (false)';
    end if;
  end
  $$
`;

console.log("leads table created successfully");
await sql.end();
