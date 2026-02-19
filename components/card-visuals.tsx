"use client"

import { useEffect, useRef } from "react"

export function AutomationVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = canvas.offsetWidth * dpr
    canvas.height = canvas.offsetHeight * dpr
    ctx.scale(dpr, dpr)

    const w = canvas.offsetWidth
    const h = canvas.offsetHeight

    let frame = 0
    let animId: number

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)

      const nodes = [
        { x: 30, y: h / 2 },
        { x: w * 0.3, y: h * 0.25 },
        { x: w * 0.3, y: h * 0.75 },
        { x: w * 0.6, y: h / 2 },
        { x: w - 30, y: h / 2 },
      ]

      const edges = [
        [0, 1], [0, 2], [1, 3], [2, 3], [3, 4],
      ]

      edges.forEach(([a, b]) => {
        const from = nodes[a]
        const to = nodes[b]
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = "rgba(45, 212, 160, 0.15)"
        ctx.lineWidth = 1.5
        ctx.stroke()
      })

      const progress = (frame % 180) / 180
      edges.forEach(([a, b], i) => {
        const from = nodes[a]
        const to = nodes[b]
        const delay = i * 0.15
        let t = (progress - delay) * 2.5
        if (t < 0 || t > 1) return
        t = t * t * (3 - 2 * t)

        const px = from.x + (to.x - from.x) * t
        const py = from.y + (to.y - from.y) * t

        const grad = ctx.createRadialGradient(px, py, 0, px, py, 12)
        grad.addColorStop(0, "rgba(45, 212, 160, 0.8)")
        grad.addColorStop(1, "rgba(45, 212, 160, 0)")
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(px, py, 12, 0, Math.PI * 2)
        ctx.fill()
      })

      nodes.forEach((n, i) => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, i === 0 || i === nodes.length - 1 ? 6 : 5, 0, Math.PI * 2)
        ctx.fillStyle = i === 0 || i === nodes.length - 1 ? "rgba(45, 212, 160, 0.9)" : "rgba(45, 212, 160, 0.5)"
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.x, n.y, i === 0 || i === nodes.length - 1 ? 10 : 8, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(45, 212, 160, 0.2)"
        ctx.lineWidth = 1
        ctx.stroke()
      })

      frame++
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ width: "100%", height: "100%" }}
    />
  )
}

export function LlmVisual() {
  return (
    <div className="flex flex-col gap-1.5 p-3 font-mono text-[11px] leading-relaxed h-full overflow-hidden">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="h-2 w-2 rounded-full bg-red-500/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
        <span className="h-2 w-2 rounded-full bg-green-500/70" />
        <span className="ml-2 text-muted-foreground/50">model.py</span>
      </div>
      <code className="text-muted-foreground/60">
        <span className="text-primary/80">class</span>{" "}
        <span className="text-foreground/90">CustomLLM</span>
        <span className="text-muted-foreground/40">{"(BaseModel):"}</span>
      </code>
      <code className="text-muted-foreground/60 pl-4">
        <span className="text-primary/80">def</span>{" "}
        <span className="text-foreground/70">__init__</span>
        <span className="text-muted-foreground/40">{"(self, config):"}</span>
      </code>
      <code className="text-muted-foreground/40 pl-8">
        {"self.layers = "}
        <span className="text-primary/70">128</span>
      </code>
      <code className="text-muted-foreground/40 pl-8">
        {"self.attention = "}
        <span className="text-foreground/60">{'"multi-head"'}</span>
      </code>
      <code className="text-muted-foreground/60 pl-4 mt-1">
        <span className="text-primary/80">def</span>{" "}
        <span className="text-foreground/70">forward</span>
        <span className="text-muted-foreground/40">{"(self, x):"}</span>
      </code>
      <code className="text-muted-foreground/40 pl-8">
        {"x = self."}
        <span className="text-foreground/60">embed</span>{"(x)"}
      </code>
      <code className="text-muted-foreground/40 pl-8">
        <span className="text-primary/60">return</span>{" self."}
        <span className="text-foreground/60">generate</span>{"(x)"}
      </code>
      <div className="mt-auto flex items-center gap-2 pt-2 border-t border-border/30">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-primary/60 text-[10px]">Training... 98.7% accuracy</span>
      </div>
    </div>
  )
}

export function WorkflowVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 h-full">
      {[
        { label: "Ingest", status: "complete" },
        { label: "Process", status: "active" },
        { label: "Deploy", status: "pending" },
      ].map((step, i) => (
        <div key={step.label} className="flex items-center gap-3 w-full max-w-[200px]">
          <div
            className={`shrink-0 h-8 w-8 rounded-lg flex items-center justify-center text-xs font-medium ${
              step.status === "complete"
                ? "bg-primary/20 text-primary"
                : step.status === "active"
                  ? "bg-primary/10 text-primary border border-primary/30 shadow-[0_0_12px_rgba(45,212,160,0.15)]"
                  : "bg-secondary text-muted-foreground"
            }`}
          >
            {step.status === "complete" ? (
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              i + 1
            )}
          </div>
          <div className="flex flex-col">
            <span
              className={`text-xs font-medium ${
                step.status === "active" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {step.label}
            </span>
            <span className="text-[10px] text-muted-foreground/50">
              {step.status === "complete"
                ? "Done"
                : step.status === "active"
                  ? "Running..."
                  : "Queued"}
            </span>
          </div>
          {step.status === "active" && (
            <div className="ml-auto h-1 w-12 rounded-full bg-secondary overflow-hidden">
              <div className="h-full w-2/3 rounded-full bg-primary/60 animate-pulse" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
