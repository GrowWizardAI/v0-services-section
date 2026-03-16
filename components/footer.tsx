const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#services" },
      { label: "Contact", href: "mailto:billhawk@growwizardai.com" },
      { label: "SMB Resources", href: "https://smb.growwizardai.com" },
      { label: "Book a Call", href: "#contact-form" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Reactivation Campaigns", href: "#services" },
      { label: "Inbound AI Agent", href: "#services" },
      { label: "Done-for-You Setup", href: "#services" },
      { label: "Get Started", href: "#get-started" },
    ],
  },
  {
    title: "Stack",
    links: [
      { label: "Vapi", href: "https://vapi.ai" },
      { label: "ElevenLabs", href: "https://elevenlabs.io" },
      { label: "n8n", href: "https://n8n.io" },
      { label: "Supabase", href: "https://supabase.com" },
    ],
  },
]

function FooterLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 shadow-[0_0_12px_rgba(52,211,153,0.08)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4.5 w-4.5 text-primary"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
          />
        </svg>
      </div>
      <span className="text-lg font-semibold tracking-tight text-foreground drop-shadow-[0_0_8px_rgba(52,211,153,0.25)]">
        GrowWizardAI
      </span>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Brand column */}
          <div className="flex flex-col gap-5 lg:max-w-xs">
            <FooterLogo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              AI voice reactivation campaigns for small businesses. We turn dead
              lead lists into booked appointments — fully automated, no human dialers.
            </p>
            {/* Social row */}
            <div className="flex items-center gap-3">
              {["X", "GH", "LI"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/40 bg-transparent text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:text-primary"
                >
                  {label === "X" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {label === "GH" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  )}
                  {label === "LI" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {"© 2026 GrowWizardAI. All rights reserved."}
          </p>
          <p className="text-xs text-muted-foreground/60">
            Powered by Vapi · ElevenLabs · n8n · Supabase
          </p>
        </div>
      </div>
    </footer>
  )
}
