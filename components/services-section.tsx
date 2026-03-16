"use client"

import { BentoCard } from "@/components/bento-card"
import { AutomationIcon, LlmIcon, WorkflowIcon } from "@/components/service-icon"
import { AutomationVisual, LlmVisual, WorkflowVisual } from "@/components/card-visuals"

const services = [
  {
    icon: <AutomationIcon className="h-5 w-5" />,
    title: "Database Reactivation Campaigns",
    description:
      "We take your list of dead leads or lapsed customers, run automated AI voice call campaigns that qualify interest in real time, and book appointments directly to your calendar — zero human dialers.",
    features: [
      "Up to 500 contacts per campaign",
      "Real-time qualification conversations",
      "Direct Google Calendar booking",
      "Full call transcript & lead scoring",
    ],
    visual: <AutomationVisual />,
    span: "wide" as const,
  },
  {
    icon: <LlmIcon className="h-5 w-5" />,
    title: "Inbound AI Voice Agent",
    description:
      "Never miss a call. Our AI voice agent answers inbound calls 24/7, qualifies the caller, and books them — even when you're on a job, with a client, or closed for the day.",
    features: [
      "24/7 call answering",
      "Natural qualification conversations",
      "Instant calendar booking",
      "Call summary delivered to your inbox",
    ],
    visual: <LlmVisual />,
    span: "default" as const,
  },
  {
    icon: <WorkflowIcon className="h-5 w-5" />,
    title: "Done-for-You Setup",
    description:
      "We build and run the entire system for you. No software to manage, no prompts to write. You provide the lead list — we deliver booked appointments.",
    features: [
      "Full campaign build & launch",
      "Custom AI voice scripting",
      "CRM and calendar integration",
      "Ongoing optimization & reporting",
    ],
    visual: <WorkflowVisual />,
    span: "default" as const,
  },
]

const stats = [
  { value: "500+", label: "Contacts per Campaign" },
  { value: "$1,500", label: "Campaign Starting Price" },
  { value: "24/7", label: "Automated Calling" },
  { value: "0", label: "Human Dialers Needed" },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/[0.04] blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[600px] translate-x-1/4 translate-y-1/4 rounded-full bg-primary/[0.02] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-primary">
              Our Services
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            AI voice automation for small businesses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We turn dead lead lists into booked appointments using AI voice agents —
            fully automated, no human dialers, no monthly staff costs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <BentoCard key={service.title} {...service} />
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-xl border border-border/40 bg-card/40 p-5 text-center backdrop-blur-sm"
            >
              <span className="text-2xl font-bold tracking-tight text-primary">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
