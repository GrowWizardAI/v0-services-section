import { generateText } from "ai"

export const maxDuration = 60

const AUDIT_SYSTEM_PROMPT = `You are a website automation consultant for GrowWizardAI. Given a website URL, produce a concise automation audit report.

Structure your response EXACTLY like this, using these headings:

## Site Overview
A 1-2 sentence summary of what the site appears to do based on the URL/domain.

## Manual Processes We Can Automate
A bulleted list of 3-5 specific manual tasks or workflows this type of business likely handles that AI could automate (e.g. customer support replies, lead qualification, data entry, content generation, scheduling).

## AI Opportunities
A bulleted list of 2-4 high-impact AI integrations tailored to this business (e.g. custom chatbot trained on their knowledge base, automated email triage, smart CRM enrichment).

## Estimated Efficiency Gains
A short paragraph estimating time/cost savings in concrete terms (e.g. "10-15 hours per week" or "reduce response time from hours to seconds").

## Recommended Next Step
A single sentence recommending they book a free discovery call to get a full, hands-on audit.

Keep the entire report under 300 words. Be specific and practical, not generic. Write in a confident but approachable tone. Do not use jargon without explaining it.`

export async function POST(req: Request) {
  const { url }: { url: string } = await req.json()

  if (!url || typeof url !== "string") {
    return Response.json({ error: "A valid URL is required." }, { status: 400 })
  }

  try {
    const { text } = await generateText({
      model: "google/gemini-2.0-flash",
      system: AUDIT_SYSTEM_PROMPT,
      prompt: `Analyze this website and produce an automation audit report: ${url}`,
    })

    return Response.json({ report: text })
  } catch {
    return Response.json(
      { error: "Something went wrong generating the audit. Please try again." },
      { status: 500 }
    )
  }
}
