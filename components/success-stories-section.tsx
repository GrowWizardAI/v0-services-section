import Image from "next/image"

const stories = [
  {
    company: "NovaTrans Logistics",
    role: "Head of Operations",
    name: "Maren Calloway",
    quote:
      "GrowWizardAI cut our route-planning cycle from hours to seconds. The custom LLM understands our constraint matrix better than any off-the-shelf tool ever could.",
    stat: "+40%",
    statLabel: "Operational Efficiency",
    image: "/images/dashboard-logistics.jpg",
    imageAlt: "NovaTrans logistics analytics dashboard showing route optimization metrics",
  },
  {
    company: "Apex Capital Partners",
    role: "Chief Technology Officer",
    name: "David Osei",
    quote:
      "Their vector database seeding pipeline ingested our entire regulatory corpus in under a day. Compliance reviews that took a week now resolve in minutes.",
    stat: "3.2x",
    statLabel: "Faster Compliance Review",
    image: "/images/dashboard-fintech.jpg",
    imageAlt: "Apex Capital financial analytics dashboard showing AI-driven compliance metrics",
  },
]

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
    </svg>
  )
}

function StoryCard({
  story,
  reversed,
}: {
  story: (typeof stories)[0]
  reversed?: boolean
}) {
  return (
    <div
      className={`flex flex-col items-stretch gap-0 overflow-hidden rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm lg:flex-row ${reversed ? "lg:flex-row-reverse" : ""}`}
    >
      {/* Dashboard image */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden lg:aspect-auto lg:w-1/2">
        <Image
          src={story.image}
          alt={story.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card/30" />
      </div>

      {/* Content */}
      <div className="flex w-full flex-col justify-center gap-6 p-8 lg:w-1/2 lg:p-12">
        {/* Stat */}
        <div className="flex flex-col gap-1">
          <span className="text-5xl font-bold tracking-tighter text-primary sm:text-6xl">
            {story.stat}
          </span>
          <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            {story.statLabel}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px w-12 bg-primary/30" />

        {/* Quote */}
        <div className="relative">
          <QuoteIcon className="absolute -top-1 -left-1 h-6 w-6 text-primary/15" />
          <blockquote className="pl-6 text-sm leading-relaxed text-foreground/80">
            {story.quote}
          </blockquote>
        </div>

        {/* Attribution */}
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold text-foreground">
            {story.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {story.role}, {story.company}
          </span>
        </div>
      </div>
    </div>
  )
}

export function SuccessStoriesSection() {
  return (
    <section id="success-stories" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-primary">
              Proven Results
            </span>
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Success Stories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Real outcomes from teams that partnered with GrowWizardAI to
            transform their operations with custom AI infrastructure.
          </p>
        </div>

        {/* Stories */}
        <div className="flex flex-col gap-8">
          {stories.map((story, i) => (
            <StoryCard key={story.company} story={story} reversed={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
