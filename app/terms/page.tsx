import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Terms of Service - GrowWizardAI",
  description: "Terms of Service for GrowWizardAI enterprise AI automation platform.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm shadow-[0_0_12px_rgba(52,211,153,0.08)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] group-hover:border-primary/30">
              <Image
                src="/logo.svg"
                alt="GrowWizardAI"
                width={28}
                height={32}
                style={{ width: "auto", height: "auto" }}
                className="drop-shadow-[0_0_4px_rgba(240,208,96,0.3)]"
              />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              GrowWizardAI
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <header className="mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            Legal
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Effective Date: March 10, 2026
          </p>
        </header>

        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            By accessing or using the services provided by GrowWizardAI, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Services & Usage Limits</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Usage rights are determined by your selected subscription tier as outlined on our Pricing Page:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground/90">Starter:</strong> Limited to 1 custom model fine-tune and 500k API calls/mo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground/90">Growth:</strong> Limited to 3 custom model fine-tunes and 5M API calls/mo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground/90">Enterprise:</strong> Custom limits as defined in your individual Service Order.</span>
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Service Level Agreements (SLA)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We commit to providing reliable infrastructure. Support response times are tiered:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground/90">Starter:</strong> 48-hour SLA.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground/90">Growth:</strong> 4-hour Priority SLA.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground/90">Enterprise:</strong> Dedicated Success Engineer and custom uptime guarantees.</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong className="text-foreground/90">Availability:</strong> We strive for 99.9% uptime for our inference endpoints, excluding scheduled maintenance.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Data Ownership & Intellectual Property</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground/90">Input Data:</strong> You retain all rights, title, and interest in the data you provide for seeding or fine-tuning.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground/90">Model Outputs:</strong> To the extent permitted by law, you own the outputs generated by your custom-tuned models.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground/90">Our Platform:</strong> GrowWizardAI retains all rights to our proprietary algorithms, "Wizard" orchestration tools, and infrastructure.</span>
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to use GrowWizardAI to:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive/60" />
                <span>Generate or distribute illegal, harmful, or defamatory content.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive/60" />
                <span>{"Attempt to reverse-engineer our orchestration layer or \"bleed\" data from shared environments."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive/60" />
                <span>Exceed the API rate limits associated with your plan without prior authorization.</span>
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Fees and Payments</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground/90">Subscription:</strong> Fees are billed monthly or annually in advance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground/90">Overage:</strong> API calls exceeding your plan limit may incur additional charges or temporary rate-limiting.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground/90">Cancellations:</strong> You may cancel your subscription via the Dashboard at any time; however, previously paid fees are non-refundable.</span>
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              {"GrowWizardAI provides AI tools \"as is.\" While we offer high-performance infrastructure, we are not responsible for the accuracy of outputs generated by your custom-tuned models or for business decisions made based on those outputs."}
            </p>
          </section>

          {/* Contact */}
          <section className="mt-14 rounded-xl border border-border/40 bg-card/30 p-6 backdrop-blur-sm">
            <h3 className="text-base font-semibold text-foreground mb-2">Questions?</h3>
            <p className="text-sm text-muted-foreground">
              {"If you have any questions about these Terms, please contact us at "}
              <a href="mailto:legal@growwizardai.com" className="text-primary hover:text-primary/80 transition-colors">
                legal@growwizardai.com
              </a>
            </p>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border/30 px-6 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          {"© 2026 GrowWizardAI. All rights reserved."}
        </p>
      </footer>
    </main>
  )
}
