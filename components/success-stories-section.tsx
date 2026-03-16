const verticals = [
  {
    title: "Medical Spas & Aesthetics",
    description:
      "Reactivate lapsed clients for Botox, filler, and laser appointments. High ticket value makes one reactivated client worth the entire campaign cost.",
    stat: "$300–$1,200",
    statLabel: "Avg. transaction value",
  },
  {
    title: "Home Services",
    description:
      "Roofing, HVAC, remodeling, and landscaping businesses sitting on years of old estimates. AI calls to qualify who's still in the market — and books the follow-up.",
    stat: "$1,500–$15,000",
    statLabel: "Avg. project value",
  },
  {
    title: "Fitness Studios & Gyms",
    description:
      "Win back cancelled members and inactive leads with a reactivation offer campaign. Low reactivation cost, high lifetime value.",
    stat: "$600–$2,400",
    statLabel: "Annual member value",
  },
  {
    title: "Auto Detailing & Dealerships",
    description:
      "Past customers are warm leads. AI calls reintroduce your business, offer a seasonal deal, and book the next service appointment automatically.",
    stat: "$150–$800",
    statLabel: "Avg. service ticket",
  },
  {
    title: "Chiropractic & Dental",
    description:
      "Practices with large inactive patient lists see the fastest ROI. AI handles recall outreach that staff never had time to do.",
    stat: "$200–$2,000",
    statLabel: "Avg. patient visit value",
  },
]

function VerticalCard({ vertical }: { vertical: (typeof verticals)[0] }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border/40 bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.03]">
      <div className="flex flex-col gap-0.5">
        <span className="text-2xl font-bold tracking-tight text-primary">
          {vertical.stat}
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {vertical.statLabel}
        </span>
      </div>
      <div className="h-px w-10 bg-primary/30" />
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold tracking-tight text-foreground">
          {vertical.title}
        </h3>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {vertical.description}
        </p>
      </div>
    </div>
  )
}

export function SuccessStoriesSection() {
  return (
    <section id="success-stories" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-primary">
              Target Markets
            </span>
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Who it's built for
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            High-ticket, repeat-service businesses with existing lead lists and no time to follow up.
            One reactivated client covers the campaign cost — the rest is pure margin.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v) => (
            <VerticalCard key={v.title} vertical={v} />
          ))}
        </div>
      </div>
    </section>
  )
}
