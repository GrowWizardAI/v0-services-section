"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Docs", href: "#docs" },
  { label: "Pricing", href: "#pricing" },
]

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 backdrop-blur-sm shadow-[0_0_12px_rgba(52,211,153,0.08)]">
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
      <span className="text-lg font-semibold tracking-tight text-foreground">
        GrowWizardAI
      </span>
    </a>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-foreground"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M6 18L18 6" />
        </>
      ) : (
        <>
          <path d="M4 8h16" />
          <path d="M4 16h16" />
        </>
      )}
    </svg>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/30 bg-background/60 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#get-started"
          className="hidden rounded-xl border border-primary/20 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/15 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] md:inline-flex"
        >
          Get Started
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/40 bg-card/30 backdrop-blur-md transition-colors hover:bg-card/50 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/20 bg-background/80 backdrop-blur-xl px-6 pb-6 pt-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary/[0.04] hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 border-t border-border/20 pt-4">
            <a
              href="#get-started"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-xl border border-primary/20 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/15 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
