"use client"

import { useEffect, useRef } from "react"

export function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const size = 256
    canvas.width = size
    canvas.height = size

    function generateGrain() {
      if (!ctx) return
      const imageData = ctx.createImageData(size, size)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255
        data[i] = v
        data[i + 1] = v
        data[i + 2] = v
        data[i + 3] = 18
      }

      ctx.putImageData(imageData, 0, 0)
    }

    generateGrain()

    const interval = setInterval(generateGrain, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-[0.035]"
        style={{
          imageRendering: "pixelated",
          animation: "grain 8s steps(10) infinite",
        }}
      />
    </div>
  )
}
