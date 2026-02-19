"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"

type Tab = "chat" | "audit"

const QUICK_ASKS = [
  "What services do you offer?",
  "How does pricing work?",
  "What makes you different?",
]

/* ------------------------------------------------------------------ */
/*  Chat Tab                                                          */
/* ------------------------------------------------------------------ */
function ChatTab() {
  const [input, setInput] = useState("")
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
  })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  function handleSend(text: string) {
    if (!text.trim() || isLoading) return
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
            placeholder="Ask about our services..."
            disabled={isLoading}
            className="flex-1 rounded-lg border border-border/50 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all duration-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
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

  async function handleAudit() {
    if (!url.trim()) return
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
      if (!res.ok) {
        setError(data.error || "Something went wrong.")
      } else {
        setReport(data.report)
      }
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4 px-4 py-4 sm:px-6">
      <p className="text-xs leading-relaxed text-muted-foreground">
        {"Enter your website URL and we'll analyze it for automation opportunities -- completely free, no strings attached."}
      </p>

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
          disabled={loading}
          className="flex-1 rounded-lg border border-border/50 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all duration-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !url.trim()}
          className="whitespace-nowrap rounded-lg border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] disabled:opacity-40 disabled:hover:border-primary/30 disabled:hover:bg-primary/10 disabled:hover:shadow-none"
        >
          {loading ? "Analyzing..." : "Run Free Audit"}
        </button>
      </form>

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

          {/* CTA */}
          <div className="flex items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.04] px-4 py-3">
            <p className="text-xs text-muted-foreground">
              {"Want the full, hands-on audit? "}
              <a
                href="#contact-form"
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                Book a free discovery call
              </a>
            </p>
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
            Chat with our AI assistant or run an instant automation audit on
            your website. No signup required.
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
                Free URL Audit
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
