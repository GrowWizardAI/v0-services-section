import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — GrowWizardAI",
  description: "GrowWizardAI privacy policy and data practices.",
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
      <div className="mb-10">
        <a
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to GrowWizardAI
        </a>
      </div>

      {/*
        TODO: Replace the div below with your Termly policy embed.
        In Termly → your policy → Embed → copy the <div> embed snippet and paste it here.
        It looks like:
          <div name="termly-embed" data-id="YOUR_POLICY_ID" data-type="iframe"></div>

        Also add the Termly auto-blocker script to app/layout.tsx <head> if you want
        cookie consent management:
          <Script src="https://app.termly.io/resource-blocker/YOUR_WEBSITE_UUID?autoBlock=on" strategy="beforeInteractive" />
      */}
      <div
        name="termly-embed"
        data-id="YOUR_PRIVACY_POLICY_ID"
        data-type="iframe"
      />

      {/* Termly embed loader — swap YOUR_WEBSITE_UUID with your actual UUID from Termly */}
      <script
        type="text/javascript"
        src="https://app.termly.io/embed-policy.min.js"
      />
    </main>
  )
}
