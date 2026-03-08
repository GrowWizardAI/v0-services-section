import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compliance | GrowWizardAI",
  description: "GrowWizardAI's compliance certifications, AI governance, and regulatory readiness.",
}

const complianceFrameworks = [
  {
    name: "SOC 2 Type II",
    category: "Security",
    description: "Independently audited controls for security, availability, and confidentiality",
    details: [
      "Annual third-party audit by Big 4 accounting firm",
      "Covers security, availability, and confidentiality trust principles",
      "Continuous monitoring of 100+ security controls",
      "Report available under NDA for enterprise customers",
    ],
  },
  {
    name: "ISO 27001",
    category: "Security",
    description: "International standard for information security management systems",
    details: [
      "Certified Information Security Management System (ISMS)",
      "Risk-based approach to information security",
      "Regular internal and external audits",
      "Continuous improvement cycle",
    ],
  },
  {
    name: "GDPR",
    category: "Privacy",
    description: "European Union General Data Protection Regulation compliance",
    details: [
      "Data Processing Agreements (DPA) available",
      "EU data residency option with Frankfurt region",
      "Right to access, rectification, and erasure workflows",
      "Data portability in machine-readable formats",
      "72-hour breach notification commitment",
    ],
  },
  {
    name: "CCPA",
    category: "Privacy",
    description: "California Consumer Privacy Act compliance",
    details: [
      "Consumer rights request handling",
      "Do Not Sell My Personal Information opt-out",
      "Transparent data collection disclosures",
      "Annual privacy rights report",
    ],
  },
  {
    name: "HIPAA",
    category: "Healthcare",
    description: "Health Insurance Portability and Accountability Act readiness",
    details: [
      "Business Associate Agreement (BAA) available",
      "PHI encryption and access controls",
      "Audit logging for all PHI access",
      "Employee HIPAA training certification",
      "Dedicated healthcare-compliant infrastructure",
    ],
  },
  {
    name: "PCI DSS",
    category: "Financial",
    description: "Payment Card Industry Data Security Standard compliance",
    details: [
      "Level 1 Service Provider certification",
      "Annual penetration testing and vulnerability scans",
      "Tokenization for payment data",
      "Secure payment processing integration",
    ],
  },
]

const aiGovernance = [
  {
    title: "Model Transparency",
    description: "Full visibility into AI decision-making",
    items: [
      "Explainability reports for all model predictions",
      "Feature importance and attribution analysis",
      "Confidence scores and uncertainty quantification",
      "Model cards documenting capabilities and limitations",
    ],
  },
  {
    title: "Bias Monitoring",
    description: "Proactive fairness testing and mitigation",
    items: [
      "Automated bias detection across protected attributes",
      "Regular fairness audits by third-party experts",
      "Disparate impact analysis for model outputs",
      "Continuous monitoring dashboards for production models",
    ],
  },
  {
    title: "Data Lineage",
    description: "Complete traceability for training data",
    items: [
      "Full provenance tracking for all training datasets",
      "Data quality scoring and validation",
      "Consent management for data sources",
      "Audit trails for data transformations",
    ],
  },
  {
    title: "EU AI Act Readiness",
    description: "Prepared for emerging AI regulations",
    items: [
      "Risk classification for all deployed models",
      "High-risk AI system documentation",
      "Human oversight mechanisms",
      "Conformity assessment procedures",
    ],
  },
]

const dataResidency = [
  { region: "United States", location: "Virginia (us-east-1)", flag: "US" },
  { region: "European Union", location: "Frankfurt (eu-central-1)", flag: "EU" },
  { region: "Asia Pacific", location: "Singapore (ap-southeast-1)", flag: "SG" },
  { region: "United Kingdom", location: "London (eu-west-2)", flag: "UK" },
]

export default function CompliancePage() {
  return (
    <main className="relative z-10 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Home
          </a>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Compliance & AI Governance
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            GrowWizardAI maintains rigorous compliance with industry standards and regulations. We believe responsible AI deployment requires transparency, accountability, and adherence to the highest governance standards.
          </p>
        </div>

        {/* Compliance Frameworks */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Certifications & Frameworks</h2>
          <div className="space-y-4">
            {complianceFrameworks.map((framework) => (
              <div
                key={framework.name}
                className="rounded-xl border border-border/40 bg-card/20 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{framework.name}</h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {framework.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{framework.description}</p>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-5 w-5 text-primary"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {framework.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="h-4 w-4 mt-0.5 text-primary/60 shrink-0"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Governance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-2">AI Governance</h2>
          <p className="text-muted-foreground mb-6">
            Beyond traditional compliance, we implement comprehensive AI-specific governance to ensure responsible deployment.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {aiGovernance.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/40 bg-card/20 p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.items.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4 mt-0.5 text-primary shrink-0"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Data Residency */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-2">Data Residency Options</h2>
          <p className="text-muted-foreground mb-6">
            Choose where your data is processed and stored to meet regulatory requirements.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {dataResidency.map((region) => (
              <div
                key={region.region}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/40 bg-card/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
                  {region.flag}
                </div>
                <div>
                  <p className="font-medium text-foreground">{region.region}</p>
                  <p className="text-sm text-muted-foreground">{region.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vendor Assessment */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-2">Vendor Security Assessment</h2>
          <p className="text-muted-foreground mb-6">
            We understand enterprise procurement requires thorough due diligence. We&apos;re prepared to support your vendor assessment process.
          </p>
          <div className="rounded-xl border border-border/40 bg-card/20 p-6">
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Pre-filled security questionnaires (SIG, CAIQ, VSA)",
                "SOC 2 Type II report (under NDA)",
                "Penetration test executive summary",
                "Insurance certificates (cyber liability, E&O)",
                "Business continuity and disaster recovery plans",
                "Subprocessor list with DPA coverage",
                "Architecture diagrams and data flow documentation",
                "Custom security questionnaire completion",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4 mt-0.5 text-primary shrink-0"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Compliance Inquiries</h2>
          <div className="p-6 rounded-xl border border-border/40 bg-card/20">
            <p className="text-muted-foreground mb-4">
              For compliance documentation, audit reports, or to discuss specific regulatory requirements, please contact our compliance team:
            </p>
            <div className="space-y-2">
              <p className="text-foreground font-medium">GrowWizardAI Compliance Team</p>
              <p className="text-muted-foreground">compliance@growwizardai.com</p>
              <p className="text-muted-foreground">Data Protection Officer: dpo@growwizardai.com</p>
            </div>
            <div className="mt-6 pt-6 border-t border-border/40 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                Download Trust Center Package
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 10l5 5 5-5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V3" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                Request SOC 2 Report
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
