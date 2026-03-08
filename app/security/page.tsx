import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security | GrowWizardAI",
  description: "Learn about GrowWizardAI's enterprise-grade security measures and infrastructure protection.",
}

const securityFeatures = [
  {
    title: "Encryption",
    description: "All data protected with military-grade encryption",
    items: [
      "AES-256 encryption for data at rest",
      "TLS 1.3 for all data in transit",
      "End-to-end encryption for sensitive workflows",
      "Hardware Security Modules (HSM) for key management",
      "Automatic key rotation every 90 days",
    ],
  },
  {
    title: "Access Control",
    description: "Granular permissions and authentication",
    items: [
      "Role-Based Access Control (RBAC)",
      "Multi-Factor Authentication (MFA) enforcement",
      "Single Sign-On (SSO) via SAML 2.0 and OIDC",
      "Active Directory and LDAP integration",
      "IP allowlisting and geofencing",
      "Session management with configurable timeouts",
    ],
  },
  {
    title: "Network Security",
    description: "Defense-in-depth infrastructure protection",
    items: [
      "Web Application Firewall (WAF)",
      "DDoS protection and mitigation",
      "Private network connectivity (VPC peering, PrivateLink)",
      "Network segmentation and micro-segmentation",
      "Intrusion Detection and Prevention Systems (IDS/IPS)",
    ],
  },
  {
    title: "Monitoring & Detection",
    description: "24/7 threat monitoring and response",
    items: [
      "Security Operations Center (SOC) with 24/7 coverage",
      "Real-time threat detection and alerting",
      "SIEM integration for log aggregation",
      "Anomaly detection using machine learning",
      "Incident response SLA under 1 hour",
    ],
  },
  {
    title: "Vulnerability Management",
    description: "Proactive security testing and patching",
    items: [
      "Annual penetration testing by certified third parties",
      "Continuous automated vulnerability scanning",
      "Bug bounty program for responsible disclosure",
      "Critical patches deployed within 24 hours",
      "Dependency vulnerability monitoring",
    ],
  },
  {
    title: "Data Protection",
    description: "Comprehensive data lifecycle security",
    items: [
      "Regional data residency (US, EU, APAC)",
      "Zero data retention option for inference",
      "Secure data deletion with cryptographic erasure",
      "Backup encryption and geographic redundancy",
      "Data Loss Prevention (DLP) controls",
    ],
  },
]

const certifications = [
  { name: "SOC 2 Type II", description: "Annual audit of security controls" },
  { name: "ISO 27001", description: "Information security management" },
  { name: "GDPR", description: "EU data protection compliance" },
  { name: "HIPAA", description: "Healthcare data ready (BAA available)" },
  { name: "CCPA", description: "California privacy compliance" },
  { name: "PCI DSS", description: "Payment card data security" },
]

export default function SecurityPage() {
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
            Security at GrowWizardAI
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            We understand that entrusting your data to an AI platform requires confidence in our security posture. Security is not an afterthought at GrowWizardAI—it&apos;s foundational to everything we build.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mb-16 p-6 rounded-xl border border-primary/20 bg-primary/[0.03]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5 text-primary"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Zero security breaches</p>
                <p className="text-xs text-muted-foreground">Since company founding</p>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-border/40" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5 text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">99.99% uptime</p>
                <p className="text-xs text-muted-foreground">Enterprise SLA guarantee</p>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-border/40" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5 text-primary"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{"<"}1 hour response</p>
                <p className="text-xs text-muted-foreground">Critical incident SLA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Certifications & Compliance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col gap-1 p-4 rounded-xl border border-border/40 bg-card/20"
              >
                <p className="font-semibold text-foreground">{cert.name}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Security Infrastructure</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border/40 bg-card/20 p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
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
            ))}
          </div>
        </section>

        {/* Security Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Our Security Practices</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">Secure Development Lifecycle</h3>
              <p>
                Every line of code goes through security review. We employ static analysis, dependency scanning, and mandatory code review before deployment. Our CI/CD pipeline includes automated security testing, and all releases are signed and verified.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">Employee Security</h3>
              <p>
                All employees undergo background checks and complete security awareness training annually. Access to production systems requires multi-factor authentication and is granted on a least-privilege basis. We maintain detailed audit logs of all administrative actions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">Incident Response</h3>
              <p>
                We maintain a documented incident response plan with defined escalation procedures. Our security team conducts regular tabletop exercises and post-incident reviews. Customers are notified within 72 hours of any breach affecting their data, as required by GDPR and other regulations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">Business Continuity</h3>
              <p>
                Our infrastructure spans multiple availability zones with automatic failover. We perform regular disaster recovery testing and maintain Recovery Time Objectives (RTO) of 4 hours and Recovery Point Objectives (RPO) of 1 hour for critical systems.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Security Contact</h2>
          <div className="p-6 rounded-xl border border-border/40 bg-card/20">
            <p className="text-muted-foreground mb-4">
              To report a security vulnerability or request our security documentation (SOC 2 report, penetration test summary, security questionnaire), please contact our security team:
            </p>
            <div className="space-y-2">
              <p className="text-foreground font-medium">GrowWizardAI Security Team</p>
              <p className="text-muted-foreground">security@growwizardai.com</p>
              <p className="text-muted-foreground">PGP Key: Available upon request</p>
            </div>
            <div className="mt-6 pt-6 border-t border-border/40">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                Download Security Whitepaper (PDF)
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
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
