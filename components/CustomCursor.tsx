"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 400, damping: 28 })
  const springY = useSpring(cursorY, { stiffness: 400, damping: 28 })

  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [reduced, setReduced] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number }[]>([])
  const rafRef = useRef<number>(0)

  const addParticles = useCallback((x: number, y: number) => {
    if (reduced) return
    const ps = particlesRef.current
    for (let i = 0; i < 2; i++) {
      ps.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        life: 0,
        maxLife: 20 + Math.random() * 20,
        size: 1.5 + Math.random() * 2,
      })
    }
    if (ps.length > 120) ps.splice(0, ps.length - 120)
  }, [reduced])

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mql.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (reduced) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = 0; let h = 0

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight
      canvas.width = w; canvas.height = h
    }
    resize()
    window.addEventListener("resize", resize)

    const animate = () => {
      ctx.clearRect(0, 0, w, h)
      const ps = particlesRef.current
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i]
        p.life++
        if (p.life >= p.maxLife) { ps.splice(i, 1); continue }
        p.x += p.vx; p.y += p.vy
        const progress = p.life / p.maxLife
        const alpha = (1 - progress) * 0.25
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * (1 - progress * 0.5), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 153, 51, ${alpha})`
        ctx.fill()
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [reduced])

  useEffect(() => {
    if (reduced) return

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      addParticles(e.clientX, e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const leave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", move)
    document.addEventListener("mouseleave", leave)
    return () => {
      window.removeEventListener("mousemove", move)
      document.removeEventListener("mouseleave", leave)
    }
  }, [reduced, addParticles, cursorX, cursorY, isVisible])

  useEffect(() => {
    if (reduced) return

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.hasAttribute("data-cursor-hover")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    document.addEventListener("mouseover", handleMouseOver)
    return () => document.removeEventListener("mouseover", handleMouseOver)
  }, [reduced])

  if (reduced) return null

  return (
    <>
      <style>{`
        body, body * { cursor: none !important; }
      `}</style>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
        aria-hidden="true"
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          animate={{
            width: isHovering ? 40 : 20,
            height: isHovering ? 40 : 20,
            opacity: isVisible ? 1 : 0,
            x: isHovering ? -20 : -10,
            y: isHovering ? -20 : -10,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full border border-[#FF9933]/60 bg-[#FF9933]/10"
        />
        <motion.div
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isHovering ? 0.5 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF9933]"
        />
      </motion.div>
    </>
  )
}
