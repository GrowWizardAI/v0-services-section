import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | GrowWizardAI",
  description: "Learn how GrowWizardAI collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative z-10 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
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
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: March 1, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              GrowWizardAI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI automation services, custom language models, and workflow optimization solutions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-medium text-foreground/90 mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Name, email address, and contact information</li>
              <li>Company name, job title, and business information</li>
              <li>Billing and payment information</li>
              <li>Account credentials and authentication data</li>
            </ul>
            
            <h3 className="text-lg font-medium text-foreground/90 mb-3 mt-6">Usage Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>API usage logs and request metadata</li>
              <li>Model interaction data (prompts, completions, and feedback)</li>
              <li>Performance metrics and analytics</li>
              <li>Device information and IP addresses</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground/90 mb-3 mt-6">Customer Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              Data you provide through our AI services, including training datasets, documents for processing, and workflow configurations. We process this data solely to provide our services and do not use customer data to train our foundational models without explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To provide, maintain, and improve our AI services</li>
              <li>To process transactions and send billing notifications</li>
              <li>To respond to support requests and communicate with you</li>
              <li>To monitor and analyze usage patterns for service optimization</li>
              <li>To detect, prevent, and address security incidents</li>
              <li>To comply with legal obligations and enforce our agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground/90">Service Providers:</strong> Cloud infrastructure, payment processors, and analytics tools that help us operate our services</li>
              <li><strong className="text-foreground/90">Legal Requirements:</strong> When required by law, subpoena, or government request</li>
              <li><strong className="text-foreground/90">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong className="text-foreground/90">With Your Consent:</strong> When you explicitly authorize sharing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. For AI inference requests, we offer zero data retention options where data is processed in real-time and immediately discarded. Account data is retained for the duration of your subscription plus 90 days, unless you request earlier deletion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 encryption in transit, role-based access controls, multi-factor authentication, and continuous security monitoring. We maintain SOC 2 Type II certification and undergo regular third-party security audits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground/90">Access:</strong> Request a copy of your personal data</li>
              <li><strong className="text-foreground/90">Correction:</strong> Update inaccurate or incomplete data</li>
              <li><strong className="text-foreground/90">Deletion:</strong> Request erasure of your personal data</li>
              <li><strong className="text-foreground/90">Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong className="text-foreground/90">Objection:</strong> Object to certain processing activities</li>
              <li><strong className="text-foreground/90">Restriction:</strong> Request limited processing of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. International Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer regional data residency options (US, EU, APAC) to meet your compliance requirements. For international transfers, we rely on Standard Contractual Clauses and other approved mechanisms to ensure adequate protection of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            </p>
            <div className="mt-4 p-4 rounded-lg border border-border/40 bg-card/20">
              <p className="text-foreground font-medium">GrowWizardAI Privacy Team</p>
              <p className="text-muted-foreground">privacy@growwizardai.com</p>
              <p className="text-muted-foreground">Data Protection Officer: dpo@growwizardai.com</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
