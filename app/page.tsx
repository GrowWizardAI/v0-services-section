import { ServicesSection } from "@/components/services-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 lg:px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4.5 w-4.5 text-primary"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            GrowWizardAI
          </span>
        </div>
        <nav className="hidden items-center gap-8 sm:flex">
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </a>
          <a
            href="#"
            className="text-sm text-primary font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </a>
        </nav>
        <a
          href="#"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get Started
        </a>
      </header>

      {/* Services */}
      <ServicesSection />

      {/* Footer */}
      <footer className="border-t border-border/40 px-6 py-8 text-center lg:px-8">
        <p className="text-xs text-muted-foreground">
          &copy; 2026 GrowWizardAI. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
