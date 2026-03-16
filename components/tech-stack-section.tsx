const partners = [
  {
    name: "Vapi",
    description: "Voice AI Platform",
    href: "https://vapi.ai",
  },
  {
    name: "ElevenLabs",
    description: "Voice Synthesis",
    href: "https://elevenlabs.io",
  },
  {
    name: "n8n",
    description: "Workflow Automation",
    href: "https://n8n.io",
  },
  {
    name: "Supabase",
    description: "Database & CRM",
    href: "https://supabase.com",
  },
  {
    name: "Google Calendar",
    description: "Appointment Booking",
    href: "https://calendar.google.com",
  },
]

export function TechStackSection() {
  return (
    <section className="relative z-10 border-y border-border/20 bg-card/20 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
          Powered by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl border border-border/40 bg-transparent px-5 py-3 transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.04]"
            >
              <span className="text-sm font-semibold text-foreground/80 transition-colors group-hover:text-foreground">
                {partner.name}
              </span>
              <span className="hidden text-xs text-muted-foreground/50 sm:inline">
                — {partner.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
