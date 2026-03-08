"use client"

import { useState } from "react"

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Audited security controls",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "ISO 27001",
    description: "Information security certified",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    name: "GDPR Compliant",
    description: "EU data protection ready",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    name: "HIPAA Ready",
    description: "Healthcare data compliant",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    ),
  },
]

const trustStats = [
  { value: "256-bit", label: "AES Encryption" },
  { value: "99.99%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Security Monitoring" },
  { value: "<1hr", label: "Incident Response" },
]

const complianceDetails = [
  {
    title: "AI Governance & Ethics",
    items: [
      "Model transparency with full explainability reports",
      "Automated bias detection and mitigation pipelines",
      "Complete data lineage tracking for all training data",
      "EU AI Act readiness assessments",
      "Regular third-party AI risk audits",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Data Protection",
    items: [
      "AES-256 encryption at rest and TLS 1.3 in transit",
      "Regional data residency options (US, EU, APAC)",
      "Zero data retention for inference (opt-in)",
      "Automated data lifecycle management",
      "GDPR-compliant right to erasure workflows",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
        <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
        <path d="M12 9v6" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Infrastructure Security",
    items: [
      "Annual penetration testing by certified third parties",
      "24/7 SOC monitoring with real-time threat detection",
      "Role-based access control (RBAC) with MFA enforcement",
      "SSO integration (SAML 2.0, OIDC, Active Directory)",
      "Immutable audit logs with 7-year retention",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Vendor & Supply Chain",
    items: [
      "Rigorous third-party vendor security assessments",
      "Continuous dependency vulnerability scanning",
      "Software Bill of Materials (SBOM) for all deployments",
      "Signed container images with provenance attestation",
      "Isolated multi-tenant architecture",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  },
]

export function ComplianceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="compliance" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-1/4 top-1/2 h-[500px] w-[700px] -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-primary">
              Security & Compliance
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Enterprise-grade trust
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Built with security at the core. Our infrastructure meets the strictest
            compliance standards for regulated industries.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-8">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border/40 bg-card/30 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.03]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
                {cert.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{cert.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats Bar */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-12">
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-xl border border-border/40 bg-card/40 p-4 text-center backdrop-blur-sm"
            >
              <span className="text-xl font-bold tracking-tight text-primary">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Detailed Accordion */}
        <div className="space-y-3">
          {complianceDetails.map((detail, index) => (
            <div
              key={detail.title}
              className="rounded-xl border border-border/40 bg-card/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                    {detail.icon}
                  </div>
                  <span className="text-base font-semibold text-foreground">
                    {detail.title}
                  </span>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="px-5 pb-5 pt-0 space-y-2.5 ml-14">
                    {detail.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mt-0.5 text-primary shrink-0"
                        >
                          <path d="M9 12l2 2 4-4" />
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Download Security Whitepaper
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="M7 10l5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
