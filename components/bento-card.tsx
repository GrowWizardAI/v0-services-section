"use client"

import { type ReactNode, useState } from "react"

interface BentoCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  visual: ReactNode
  span?: "wide" | "tall" | "default"
}

export function BentoCard({
  icon,
  title,
  description,
  features,
  visual,
  span = "default",
}: BentoCardProps) {
  const [hovered, setHovered] = useState(false)

  const spanClass =
    span === "wide"
      ? "md:col-span-2"
      : span === "tall"
        ? "md:row-span-2"
        : ""

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 ${spanClass}`}
      style={{
        boxShadow: hovered
          ? "0 0 40px rgba(45, 212, 160, 0.06), 0 0 0 1px rgba(45, 212, 160, 0.12)"
          : "none",
      }}
    >
      {/* Glow gradient on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(45, 212, 160, 0.04), transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        <ul className="flex flex-col gap-1.5">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground/80">
              <span className="h-1 w-1 rounded-full bg-primary/50" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual area */}
      <div className="relative mt-auto h-44 overflow-hidden border-t border-border/30 bg-secondary/30">
        {visual}
      </div>

      {/* CTA on hover */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-gradient-to-t from-card via-card/90 to-transparent pb-5 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/15 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]">
          {"Learn more"} <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </div>
  )
}
