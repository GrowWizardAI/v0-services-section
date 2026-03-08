import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | GrowWizardAI",
  description: "Terms and conditions governing the use of GrowWizardAI services.",
}

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: March 1, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using GrowWizardAI&apos;s services (&quot;Services&quot;), including our AI automation platform, custom language models, workflow optimization tools, and related APIs, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Description of Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GrowWizardAI provides enterprise AI solutions including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground/90">AI Automation:</strong> Intelligent process automation powered by machine learning</li>
              <li><strong className="text-foreground/90">Custom LLMs:</strong> Domain-specific language models trained on your data</li>
              <li><strong className="text-foreground/90">Workflow Optimization:</strong> AI-driven analysis and improvement of business processes</li>
              <li><strong className="text-foreground/90">API Access:</strong> Programmatic access to our AI capabilities</li>
              <li><strong className="text-foreground/90">Consulting Services:</strong> Expert guidance on AI strategy and implementation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Account Registration</h2>
            <p className="text-muted-foreground leading-relaxed">
              To access our Services, you must create an account. You agree to provide accurate, complete information and maintain the security of your account credentials. You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to use our Services to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Generate content that is illegal, harmful, threatening, abusive, or discriminatory</li>
              <li>Create deepfakes, misinformation, or deceptive content</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Attempt to reverse engineer, extract, or steal our models or algorithms</li>
              <li>Circumvent usage limits, rate limits, or access controls</li>
              <li>Engage in competitive benchmarking without written consent</li>
              <li>Process data in violation of applicable privacy laws</li>
              <li>Develop weapons, surveillance tools, or systems designed to harm individuals</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Customer Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              You retain all rights to data you provide to our Services (&quot;Customer Data&quot;). You grant us a limited license to process Customer Data solely to provide the Services. We will not use Customer Data to train our foundational models without your explicit written consent. For inference requests, we offer zero data retention options where your data is processed and immediately discarded.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground/90">Our IP:</strong> GrowWizardAI owns all rights to the Services, including our models, algorithms, software, documentation, and trademarks. These Terms do not grant you any rights to our intellectual property except as expressly stated.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground/90">Output Ownership:</strong> Subject to these Terms and your subscription agreement, you own the outputs generated by our Services using your Customer Data, provided you have the necessary rights to the input data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Service Level Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              For enterprise customers, we provide a Service Level Agreement (SLA) guaranteeing 99.99% uptime for our production APIs. SLA credits may be issued for downtime exceeding these commitments, as detailed in your subscription agreement. Scheduled maintenance windows are excluded from SLA calculations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Fees and Payment</h2>
            <p className="text-muted-foreground leading-relaxed">
              Fees for our Services are set forth in your subscription agreement or on our pricing page. Usage-based charges are calculated monthly. Payment is due within 30 days of invoice. Late payments may incur interest at 1.5% per month. We reserve the right to suspend access for accounts with outstanding balances exceeding 60 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              Both parties agree to maintain confidentiality of proprietary information disclosed during the business relationship. This includes pricing terms, technical specifications, and business strategies. Confidentiality obligations survive termination for three years.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Warranties and Disclaimers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We warrant that our Services will perform substantially as described in our documentation. AI outputs may contain errors or inaccuracies; you are responsible for reviewing and validating outputs before use.
            </p>
            <p className="text-muted-foreground leading-relaxed uppercase text-sm">
              EXCEPT AS EXPRESSLY PROVIDED, SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed uppercase text-sm">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, GROWWIZARDAI&apos;S TOTAL LIABILITY SHALL NOT EXCEED THE FEES PAID BY YOU IN THE TWELVE MONTHS PRECEDING THE CLAIM. WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">12. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless GrowWizardAI from claims arising from: (a) your use of the Services, (b) your Customer Data, (c) your violation of these Terms, or (d) your violation of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">13. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              Either party may terminate these Terms with 30 days written notice. We may suspend or terminate access immediately for breach of these Terms or non-payment. Upon termination, you may request export of your Customer Data within 30 days. After this period, we will delete your data in accordance with our data retention policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">14. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may modify these Terms by posting updated terms on our website. Material changes will be communicated via email at least 30 days before taking effect. Continued use of Services after changes constitutes acceptance. If you disagree with changes, you may terminate your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">15. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration administered by JAMS in San Francisco, California, except for injunctive relief which may be sought in any court of competent jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">16. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms, contact us at:
            </p>
            <div className="mt-4 p-4 rounded-lg border border-border/40 bg-card/20">
              <p className="text-foreground font-medium">GrowWizardAI Legal Team</p>
              <p className="text-muted-foreground">legal@growwizardai.com</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
