export const maxDuration = 15

export async function POST(req: Request) {
  const { email, url, report }: { email: string; url: string; report: string } =
    await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "A valid email is required." }, { status: 400 })
  }

  if (!report) {
    return Response.json({ error: "No report to send." }, { status: 400 })
  }

  // Log the lead for now — this gets captured in server logs / Vercel Logs
  // Replace with a database insert or CRM API call when ready
  console.log(
    `[GrowWizardAI Lead] Email: ${email} | URL: ${url} | Timestamp: ${new Date().toISOString()}`
  )

  // If RESEND_API_KEY is configured, send the actual email
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "GrowWizardAI <onboarding@resend.dev>",
          to: [email],
          subject: `Your AI Readiness Snapshot for ${url}`,
          html: buildEmailHtml(url, report),
        }),
      })
    } catch (err) {
      console.error("[GrowWizardAI] Resend email failed:", err)
      // Don't fail the request — we still captured the lead
    }
  }

  return Response.json({ success: true })
}

function buildEmailHtml(url: string, report: string) {
  const reportHtml = report
    .split("\n")
    .map((line) => {
      if (line.startsWith("## ")) {
        return `<h2 style="color:#34d399;font-size:18px;margin:20px 0 8px;font-weight:600;">${line.replace("## ", "")}</h2>`
      }
      if (line.startsWith("- ")) {
        return `<li style="color:#d4d4d4;margin:4px 0;padding-left:4px;">${line.replace("- ", "")}</li>`
      }
      if (line.trim() === "") {
        return "<br/>"
      }
      return `<p style="color:#d4d4d4;margin:4px 0;line-height:1.6;">${line}</p>`
    })
    .join("")

  return `
    <div style="max-width:600px;margin:0 auto;background:#0a0a0a;border-radius:12px;padding:32px;font-family:Inter,system-ui,sans-serif;">
      <div style="text-align:center;margin-bottom:24px;">
        <h1 style="color:#fafafa;font-size:22px;margin:0;">AI Readiness Snapshot</h1>
        <p style="color:#a1a1aa;font-size:14px;margin:8px 0 0;">${url}</p>
      </div>
      <div style="border-top:1px solid #27272a;padding-top:20px;">
        ${reportHtml}
      </div>
      <div style="margin-top:28px;padding:16px;background:#34d39910;border:1px solid #34d39930;border-radius:8px;text-align:center;">
        <p style="color:#d4d4d4;font-size:13px;margin:0 0 12px;">
          Want the full, hands-on audit with a custom AI prototype?
        </p>
        <a href="https://calendly.com/billhawk-growwizardai/30min" style="display:inline-block;background:#34d39920;color:#34d399;border:1px solid #34d39940;padding:10px 24px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:500;">
          Book a Free Discovery Call &rarr;
        </a>
      </div>
      <p style="color:#52525b;font-size:11px;text-align:center;margin-top:24px;">
        &copy; ${new Date().getFullYear()} GrowWizardAI. All rights reserved.
      </p>
    </div>
  `
}
