"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"

type Tab = "chat" | "audit"

const MAX_CHAT_MESSAGES = 10
const MAX_AUDITS = 2

const QUICK_ASKS = [
  "What services do you offer?",
  "How does pricing work?",
  "What makes you different?",
]

function LimitBanner({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-primary/20 bg-primary/[0.04] px-4 py-5 text-center">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-primary"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
      <p className="text-sm text-muted-foreground">{message}</p>
      <a
        href="#contact-form"
        className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]"
      >
        Book a Free Discovery Call
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  )
}

function UsageCounter({ used, max, label }: { used: number; max: number; label: string }) {
  const remaining = max - used
  return (
    <div className="flex items-center gap-2 text-[10px] text-muted-foreground/60">
      <div className="flex gap-0.5">
        {Array.from({ length: max }).map((_, i) => (
          <span
            key={i}
            className={`block h-1 w-3 rounded-full transition-colors ${
              i < used ? "bg-primary/50" : "bg-border/50"
            }`}
          />
        ))}
      </div>
      <span>
        {remaining} {label} left
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Chat Tab                                                          */
/* ------------------------------------------------------------------ */
function ChatTab() {
  const [input, setInput] = useState("")
  const [chatCount, setChatCount] = useState(0)
  const [limitReached, setLimitReached] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Hey there! I'm the GrowWizardAI assistant. Ask me anything about our services, pricing, or how we can help automate the busywork in your business.",
          },
        ],
      },
    ],
    onError: useCallback((error: Error) => {
      if (error.message?.includes("limit")) {
        setLimitReached(true)
      }
    }, []),
  })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  // Track user message count
  useEffect(() => {
    const userMsgCount = messages.filter((m) => m.role === "user").length
    setChatCount(userMsgCount)
    if (userMsgCount >= MAX_CHAT_MESSAGES) {
      setLimitReached(true)
    }
  }, [messages])

  function handleSend(text: string) {
    if (!text.trim() || isLoading || limitReached) return
    sendMessage({ text })
    setInput("")
  }

  return (
    <div className="flex flex-col">
      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex flex-col gap-3 overflow-y-auto px-4 py-4 sm:px-6"
        style={{ maxHeight: "400px" }}
      >
        {messages.map((message) => {
          const isUser = message.role === "user"
          return (
            <div
              key={message.id}
              className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                  isUser
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "bg-card/60 text-foreground/90 border border-border/30"
                }`}
              >
                {message.parts
                  ?.filter(
                    (p): p is { type: "text"; text: string } =>
                      p.type === "text"
                  )
                  .map((p, i) => (
                    <span key={i} className="whitespace-pre-wrap">
                      {p.text}
                    </span>
                  ))}
              </div>
            </div>
          )
        })}

        {isLoading &&
          messages[messages.length - 1]?.role !== "assistant" && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-xl border border-border/30 bg-card/60 px-4 py-3">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary/60" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary/60 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary/60 [animation-delay:300ms]" />
              </div>
            </div>
          )}
      </div>

      {/* Quick asks */}
      {messages.length <= 1 && (
        <div className="flex flex-wrap gap-2 px-4 pb-3 sm:px-6">
          {QUICK_ASKS.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => handleSend(q)}
              className="rounded-lg border border-border/40 bg-transparent px-3 py-1.5 text-xs text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.04] hover:text-primary"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Limit reached */}
      {limitReached && (
        <div className="px-4 pb-3 sm:px-6">
          <LimitBanner
            message={`You've used all ${MAX_CHAT_MESSAGES} demo messages. Book a call to keep the conversation going with a real human!`}
          />
        </div>
      )}

      {/* Input */}
      <div className="border-t border-border/30 px-4 py-3 sm:px-6">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend(input)
          }}
          className="flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={limitReached ? "Demo limit reached" : "Ask about our services..."}
            disabled={isLoading || limitReached}
            className="flex-1 rounded-lg border border-border/50 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all duration-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim() || limitReached}
            className="flex items-center justify-center rounded-lg border border-primary/30 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] disabled:opacity-40 disabled:hover:border-primary/30 disabled:hover:bg-primary/10 disabled:hover:shadow-none"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </form>
        {chatCount > 0 && !limitReached && (
          <div className="mt-2">
            <UsageCounter used={chatCount} max={MAX_CHAT_MESSAGES} label="messages" />
          </div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Audit Tab                                                         */
/* ------------------------------------------------------------------ */
function AuditTab() {
  const [url, setUrl] = useState("")
  const [report, setReport] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [auditCount, setAuditCount] = useState(0)
  const [limitReached, setLimitReached] = useState(false)
  const [email, setEmail] = useState("")
  const [emailSending, setEmailSending] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState("")

  async function handleAudit() {
    if (!url.trim() || limitReached) return
    setLoading(true)
    setError("")
    setReport("")

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      })
      const data = await res.json()
      if (res.status === 429) {
        setLimitReached(true)
        setError(data.error)
      } else if (!res.ok) {
        setError(data.error || "Something went wrong.")
      } else {
        setReport(data.report)
        const newCount = auditCount + 1
        setAuditCount(newCount)
        if (newCount >= MAX_AUDITS) {
          setLimitReached(true)
        }
      }
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4 px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs leading-relaxed text-muted-foreground">
          {"Get a free AI Readiness Snapshot for your business. Here's what you'll receive:"}
        </p>
        <ul className="grid grid-cols-1 gap-1 text-[11px] text-muted-foreground/70 sm:grid-cols-2">
          <li className="flex items-center gap-1.5">
            <span className="h-1 w-1 flex-shrink-0 rounded-full bg-primary/50" />
            Top 3 tasks AI can automate
          </li>
          <li className="flex items-center gap-1.5">
            <span className="h-1 w-1 flex-shrink-0 rounded-full bg-primary/50" />
            Quick wins for week one
          </li>
          <li className="flex items-center gap-1.5">
            <span className="h-1 w-1 flex-shrink-0 rounded-full bg-primary/50" />
            Estimated time/cost savings
          </li>
          <li className="flex items-center gap-1.5">
            <span className="h-1 w-1 flex-shrink-0 rounded-full bg-primary/50" />
            What a full audit covers
          </li>
        </ul>
      </div>

      {/* Limit reached */}
      {limitReached && !report && (
        <LimitBanner
          message={`You've used your ${MAX_AUDITS} free audits. Book a call and we'll do a full, hands-on audit together.`}
        />
      )}

      {/* URL input */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleAudit()
        }}
        className="flex gap-2"
      >
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://yourcompany.com"
          disabled={loading || limitReached}
          className="flex-1 rounded-lg border border-border/50 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all duration-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !url.trim() || limitReached}
          className="whitespace-nowrap rounded-lg border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] disabled:opacity-40 disabled:hover:border-primary/30 disabled:hover:bg-primary/10 disabled:hover:shadow-none"
        >
          {loading ? "Analyzing..." : "Run Free Audit"}
        </button>
      </form>
      {auditCount > 0 && !limitReached && (
        <UsageCounter used={auditCount} max={MAX_AUDITS} label="audits" />
      )}

      {/* Loading state */}
      {loading && (
        <div className="flex flex-col items-center gap-3 py-8">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
          </div>
          <p className="text-xs text-muted-foreground">
            {"Our AI is reviewing your site. This may take a moment..."}
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Report */}
      {report && (
        <div className="flex flex-col gap-4">
          <div
            className="overflow-y-auto rounded-lg border border-border/30 bg-card/40 px-5 py-4 text-sm leading-relaxed text-foreground/90"
            style={{ maxHeight: "360px" }}
          >
            {report.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h4
                    key={i}
                    className="mb-2 mt-4 text-sm font-semibold tracking-tight text-primary first:mt-0"
                  >
                    {line.replace("## ", "")}
                  </h4>
                )
              }
              if (line.startsWith("- ")) {
                return (
                  <div key={i} className="mb-1 flex gap-2 pl-1">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" />
                    <span className="text-muted-foreground">
                      {line.replace("- ", "")}
                    </span>
                  </div>
                )
              }
              if (line.trim() === "") {
                return <div key={i} className="h-2" />
              }
              return (
                <p key={i} className="mb-1 text-muted-foreground">
                  {line}
                </p>
              )
            })}
          </div>

          {/* Email capture */}
          <div className="rounded-lg border border-primary/20 bg-primary/[0.04] px-4 py-4">
            {emailSent ? (
              <div className="flex flex-col items-center gap-2 py-1 text-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xs font-medium text-foreground">
                  Snapshot sent!
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {"Check your inbox. Want even more? "}
                  <a
                    href="#contact-form"
                    className="font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Book a discovery call
                  </a>
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 flex-shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <p className="text-xs text-muted-foreground">
                    Want a copy? Enter your email and we{"'"}ll send this
                    snapshot to your inbox.
                  </p>
                </div>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault()
                    if (!email.trim() || emailSending) return
                    setEmailSending(true)
                    setEmailError("")
                    try {
                      const res = await fetch("/api/audit/email", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: email.trim(), url, report }),
                      })
                      const data = await res.json()
                      if (!res.ok) {
                        setEmailError(data.error || "Something went wrong.")
                      } else {
                        setEmailSent(true)
                      }
                    } catch {
                      setEmailError("Network error. Please try again.")
                    } finally {
                      setEmailSending(false)
                    }
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    disabled={emailSending}
                    className="flex-1 rounded-lg border border-border/50 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all duration-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={emailSending || !email.trim()}
                    className="whitespace-nowrap rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] disabled:opacity-40"
                  >
                    {emailSending ? "Sending..." : "Email My Snapshot"}
                  </button>
                </form>
                {emailError && (
                  <p className="text-xs text-red-400">{emailError}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section Wrapper                                                   */
/* ------------------------------------------------------------------ */
export function AiDemoSection() {
  const [activeTab, setActiveTab] = useState<Tab>("chat")

  return (
    <section id="ai-demo" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.74 0.17 162) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-[11px] font-medium tracking-widest text-primary uppercase">
            Live Demo
          </span>
          <h3 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Try Our AI — Free
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Chat with our AI assistant or get a free AI Readiness Snapshot
            for your website. No signup required.
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
          {/* Tabs */}
          <div className="flex border-b border-border/30">
            <button
              type="button"
              onClick={() => setActiveTab("chat")}
              className={`flex-1 px-4 py-3 text-xs font-medium tracking-wide transition-all duration-200 ${
                activeTab === "chat"
                  ? "border-b-2 border-primary text-primary bg-primary/[0.04]"
                  : "text-muted-foreground hover:text-foreground/80 hover:bg-primary/[0.02]"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Ask Our AI
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("audit")}
              className={`flex-1 px-4 py-3 text-xs font-medium tracking-wide transition-all duration-200 ${
                activeTab === "audit"
                  ? "border-b-2 border-primary text-primary bg-primary/[0.04]"
                  : "text-muted-foreground hover:text-foreground/80 hover:bg-primary/[0.02]"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                AI Readiness Snapshot
              </span>
            </button>
          </div>

          {/* Tab content */}
          {activeTab === "chat" ? <ChatTab /> : <AuditTab />}
        </div>
      </div>
    </section>
  )
}
