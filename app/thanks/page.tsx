import type { Metadata } from "next"
import Link from "next/link"
import { GrainOverlay } from "@/components/grain-overlay"

export const metadata: Metadata = {
  title: "You're Booked! | GrowWizardAI",
  description:
    "Your discovery call with GrowWizardAI is confirmed. Here's what to expect.",
}

export default function ThanksPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background px-4 py-20">
      <GrainOverlay />

      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "oklch(0.74 0.17 162)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center text-center">
        {/* Sparkle icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-[0_0_40px_rgba(52,211,153,0.12)]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-primary"
            aria-hidden="true"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .963L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4M22 5h-4" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {"You're on the calendar!"}
        </h1>

        <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          {"Your discovery call is confirmed. We're already excited to learn about your business and map out what AI can do for you."}
        </p>

        {/* What to expect card */}
        <div className="mt-10 w-full rounded-xl border border-border/40 bg-card/30 p-6 text-left backdrop-blur-sm">
          <h2 className="text-sm font-semibold tracking-tight text-foreground">
            {"Here's what happens next"}
          </h2>
          <div className="mt-1 h-px bg-border/30" />
          <ul className="mt-4 flex flex-col gap-4">
            {[
              {
                step: "1",
                title: "Check your inbox",
                description:
                  "You'll get a calendar invite with a meeting link. Add it to your calendar so you don't forget.",
              },
              {
                step: "2",
                title: "Think about the clutter",
                description:
                  "Before the call, jot down 2-3 repetitive tasks your team handles every week. That's where the magic starts.",
              },
              {
                step: "3",
                title: "Show up and talk",
                description:
                  "No prep work required. We'll ask the right questions, listen carefully, and map out a plan together.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs font-semibold text-primary">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/#ai-demo"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/40 bg-transparent px-5 py-2.5 text-sm font-medium text-foreground/80 transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.04] hover:text-primary"
          >
            Try the AI Demo
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Trust line */}
        <p className="mt-10 text-xs text-muted-foreground/40">
          {"30 minutes. Zero obligation. 100% focused on your business."}
        </p>
      </div>
    </div>
  )
}
