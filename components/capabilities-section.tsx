const capabilities = [
  {
    title: "Vapi — Voice Orchestration",
    description:
      "Real-time AI phone call infrastructure. Handles call routing, speech detection, interruption handling, and live conversation management at scale.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    title: "ElevenLabs — Voice Synthesis",
    description:
      "Human-quality AI voices for every outbound call. Natural prosody, real-time generation, and voices indistinguishable from human agents.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
  },
  {
    title: "n8n — Workflow Automation",
    description:
      "Self-hosted open source automation engine. Powers campaign scheduling, webhook handling, lead routing, and calendar booking — no per-task SaaS fees.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="2" y="3" width="6" height="6" rx="1" />
        <rect x="16" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M5 9v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
        <path d="M12 13v2" />
      </svg>
    ),
  },
  {
    title: "Supabase — Lead Database",
    description:
      "Multi-tenant PostgreSQL CRM with row-level security. Stores lead lists, call outcomes, qualification scores, and client data — fully isolated per client.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
        <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
      </svg>
    ),
  },
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative z-10 px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h3 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Built on best-in-class infrastructure
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Every campaign runs on a purpose-built stack — open source where possible,
            best-in-class where quality matters most.
          </p>
        </div>

        {/* 4-column Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group flex flex-col gap-4 rounded-xl border border-border/40 bg-transparent p-6 transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.03]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
                {cap.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-sm font-semibold tracking-tight text-foreground">
                  {cap.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
