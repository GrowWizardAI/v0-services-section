"use client"

import { useState, type FormEvent } from "react"

const tiers = [
  {
    name: "Starter",
    price: "$2,400",
    period: "/mo",
    description: "For teams exploring AI automation with guided onboarding.",
    features: [
      "1 custom model fine-tune",
      "Up to 500k API calls / mo",
      "Standard support (48h SLA)",
      "Single-region deployment",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$7,500",
    period: "/mo",
    description: "For scaling teams that need production-grade AI infrastructure.",
    features: [
      "3 custom model fine-tunes",
      "Up to 5M API calls / mo",
      "Priority support (4h SLA)",
      "Multi-region deployment",
      "Vector DB seeding pipeline",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Dedicated infrastructure, compliance, and white-glove service.",
    features: [
      "Unlimited fine-tunes",
      "Unlimited API calls",
      "Dedicated success engineer",
      "On-prem / private cloud",
      "SOC 2 & HIPAA ready",
      "Custom SLA",
    ],
    highlighted: false,
  },
]

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 shrink-0 text-primary"
      aria-hidden="true"
    >
      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
    </svg>
  )
}

function TierCard({ tier }: { tier: (typeof tiers)[0] }) {
  return (
    <div
      className={`relative flex flex-col gap-5 rounded-xl border p-6 transition-all duration-300 ${
        tier.highlighted
          ? "border-primary/30 bg-primary/[0.04] shadow-[0_0_30px_rgba(52,211,153,0.06)]"
          : "border-border/40 bg-transparent hover:border-border/60 hover:bg-primary/[0.02]"
      }`}
    >
      {tier.highlighted && (
        <span className="absolute -top-2.5 left-5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
          Popular
        </span>
      )}

      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-semibold tracking-tight text-foreground">
          {tier.name}
        </h4>
        <div className="flex items-baseline gap-0.5">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            {tier.price}
          </span>
          {tier.period && (
            <span className="text-xs text-muted-foreground">{tier.period}</span>
          )}
        </div>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {tier.description}
        </p>
      </div>

      <div className="h-px bg-border/30" />

      <ul className="flex flex-col gap-2.5">
        {tier.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`mt-auto w-full rounded-lg border px-4 py-2.5 text-xs font-medium tracking-wide transition-all duration-300 ${
          tier.highlighted
            ? "border-primary/30 bg-primary/10 text-primary backdrop-blur-md hover:border-primary/50 hover:bg-primary/15 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]"
            : "border-border/40 bg-transparent text-foreground/80 hover:border-primary/30 hover:bg-primary/[0.04] hover:text-primary"
        }`}
      >
        {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
      </button>
    </div>
  )
}

export function GetStartedSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/3 h-[500px] w-[600px] translate-x-1/4 rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-primary">
              Start Building
            </span>
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Get Started
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Choose the plan that fits your scale, or tell us about your use case
            and we will architect a solution.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-10">
          {/* Left: Pricing tiers */}
          <div className="flex flex-col gap-4 lg:w-3/5">
            <div className="grid gap-4 sm:grid-cols-3">
              {tiers.map((tier) => (
                <TierCard key={tier.name} tier={tier} />
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:w-2/5">
            <div className="flex h-full flex-col rounded-xl border border-border/40 bg-card/30 p-8 backdrop-blur-sm">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Talk to our team
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Describe your AI use case and we will respond within 24 hours
                with a tailored proposal.
              </p>

              <div className="mt-1 h-px bg-border/30" />

              {submitted ? (
                <div className="my-auto flex flex-col items-center gap-3 py-12 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    Submitted successfully
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {"We'll be in touch within 24 hours."}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 flex flex-1 flex-col gap-5"
                >
                  {/* Company Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="company"
                      className="text-xs font-medium text-foreground/80"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Acme Corp"
                      className="w-full rounded-lg border border-border/50 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all duration-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* AI Use Case */}
                  <div className="flex flex-1 flex-col gap-1.5">
                    <label
                      htmlFor="usecase"
                      className="text-xs font-medium text-foreground/80"
                    >
                      AI Use Case
                    </label>
                    <textarea
                      id="usecase"
                      name="usecase"
                      required
                      rows={4}
                      placeholder="Describe what you want to automate or optimize..."
                      className="w-full flex-1 resize-none rounded-lg border border-border/50 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all duration-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full rounded-lg border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:shadow-[0_0_24px_rgba(52,211,153,0.12)]"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
