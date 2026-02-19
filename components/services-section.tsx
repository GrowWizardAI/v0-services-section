"use client"

import { BentoCard } from "@/components/bento-card"
import { AutomationIcon, LlmIcon, WorkflowIcon } from "@/components/service-icon"
import { AutomationVisual, LlmVisual, WorkflowVisual } from "@/components/card-visuals"

const services = [
  {
    icon: <AutomationIcon className="h-5 w-5" />,
    title: "AI Automation",
    description:
      "Deploy intelligent agents that handle repetitive tasks, reduce human error, and operate around the clock at enterprise scale.",
    features: [
      "Autonomous task orchestration",
      "Real-time decision engines",
      "Multi-system integration pipelines",
      "Self-healing error recovery",
    ],
    visual: <AutomationVisual />,
    span: "wide" as const,
  },
  {
    icon: <LlmIcon className="h-5 w-5" />,
    title: "Custom LLMs",
    description:
      "Purpose-built language models fine-tuned on your proprietary data for maximum accuracy and domain expertise.",
    features: [
      "Domain-specific fine-tuning",
      "RAG-powered knowledge retrieval",
      "Sub-100ms inference latency",
      "SOC 2 compliant training pipelines",
    ],
    visual: <LlmVisual />,
    span: "default" as const,
  },
  {
    icon: <WorkflowIcon className="h-5 w-5" />,
    title: "Workflow Optimization",
    description:
      "AI-driven process mining and optimization that identifies bottlenecks and automates complex business workflows.",
    features: [
      "Process intelligence mapping",
      "Adaptive routing logic",
      "Predictive capacity planning",
      "Real-time performance dashboards",
    ],
    visual: <WorkflowVisual />,
    span: "default" as const,
  },
]

const stats = [
  { value: "10x", label: "Faster Processing" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "500+", label: "Models Deployed" },
  { value: "$2.4M", label: "Avg. Cost Savings" },
]

export function ServicesSection() {
  return (
    <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
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
            Enterprise AI, built for scale
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            From intelligent automation to custom language models, we deliver the
            infrastructure that powers the next generation of business operations.
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
