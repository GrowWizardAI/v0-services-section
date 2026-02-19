const capabilities = [
  {
    title: "Custom Fine-tuning",
    description:
      "Adapt foundation models to your domain with proprietary datasets, achieving production-grade accuracy on specialized tasks.",
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
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3" />
        <circle cx="12" cy="12" r="4" />
        <path d="m14.83 9.17 1.41-1.41m-8.48 8.48 1.41-1.41m0-5.66-1.41-1.41m8.48 8.48-1.41-1.41" />
      </svg>
    ),
  },
  {
    title: "Vector Database Seeding",
    description:
      "Ingest, chunk, and embed millions of documents into high-performance vector stores for sub-second semantic retrieval.",
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
  {
    title: "Automated QA",
    description:
      "Continuous evaluation pipelines that benchmark model outputs against golden datasets and flag regression in real time.",
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
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
        <path d="M12 7v1m0 8v1" />
      </svg>
    ),
  },
  {
    title: "Deployment Orchestration",
    description:
      "Zero-downtime rollouts with canary testing, automatic rollback, and multi-region inference endpoint management.",
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
]

export function CapabilitiesSection() {
  return (
    <section className="relative z-10 px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h3 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Core Capabilities
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            The building blocks behind every deployment — engineered for
            reliability, speed, and precision.
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
