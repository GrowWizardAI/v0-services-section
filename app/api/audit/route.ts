import { generateText } from "ai"
import { cookies } from "next/headers"

export const maxDuration = 60

const MAX_AUDITS = 2
const SESSION_COOKIE = "gw_audit_count"

const AUDIT_SYSTEM_PROMPT = `You are a senior website automation consultant for GrowWizardAI. Given a website URL, produce a structured "AI Readiness Snapshot" — a free, concise audit that demonstrates GrowWizardAI's expertise while giving the prospect genuine, actionable value.

Structure your response EXACTLY like this, using these headings:

## What We Found
A 2-3 sentence overview of the business based on the URL/domain name, including the industry vertical and apparent primary offering.

## Top 3 Tasks AI Can Handle For You
A numbered list of exactly 3 specific, repetitive tasks this type of business almost certainly handles manually today. For each one, include:
- The task name in bold
- A one-sentence description of how AI would handle it
- Example: "**Customer Inquiry Triage** — An AI agent reads every incoming email or form submission, categorizes it by urgency, and routes it to the right team member in under 5 seconds."

## Quick Wins (Week 1)
A bulleted list of 2-3 automations that could be live within the first week of working with GrowWizardAI. These should be simple, high-ROI wins (e.g. auto-replies, FAQ chatbot, lead scoring).

## Estimated Impact
A single short paragraph with concrete, specific estimates: hours saved per week, percentage reduction in response time, or projected cost savings. Use realistic ranges (e.g. "8-12 hours/week" not "thousands of hours").

## What a Full Audit Covers
A bulleted list of exactly 4 items that the paid, hands-on audit includes that this free snapshot does not:
- Full workflow mapping across every department
- Custom AI prototype built on your real data
- Integration blueprint for your existing tools (Slack, CRM, email, etc.)
- 90-day implementation roadmap with projected ROI milestones

Keep the entire report under 350 words. Be specific to the business type — never give generic advice. Write in a confident, approachable tone. Avoid jargon unless you immediately explain it.`

export async function POST(req: Request) {
  const cookieStore = await cookies()
  const count = parseInt(cookieStore.get(SESSION_COOKIE)?.value ?? "0", 10)

  if (count >= MAX_AUDITS) {
    return Response.json(
      {
        error: `You've used your ${MAX_AUDITS} free audits for this session. Want a deeper analysis? Book a free discovery call and we'll do a full hands-on audit together.`,
      },
      { status: 429 }
    )
  }

  const { url }: { url: string } = await req.json()

  if (!url || typeof url !== "string") {
    return Response.json({ error: "A valid URL is required." }, { status: 400 })
  }

  try {
    const { text } = await generateText({
      model: "google/gemini-2.0-flash",
      system: AUDIT_SYSTEM_PROMPT,
      prompt: `Analyze this website and produce an AI Readiness Snapshot audit report: ${url}`,
    })

    const response = Response.json({ report: text })
    response.headers.set(
      "Set-Cookie",
      `${SESSION_COOKIE}=${count + 1}; Path=/; SameSite=Lax; Max-Age=3600`
    )
    return response
  } catch {
    return Response.json(
      { error: "Something went wrong generating the audit. Please try again." },
      { status: 500 }
    )
  }
}
