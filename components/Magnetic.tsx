"use client"

import { useRef, useEffect, type ReactNode } from "react"
import gsap from "gsap"

interface MagneticProps {
  children: ReactNode
  className?: string
}

export function Magnetic({ children, className = "" }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(pointer: coarse)").matches) return

    const quickX = gsap.quickTo(el, "x", {
      duration: 0.6,
      ease: "power3.out",
      overwrite: "auto",
    })
    const quickY = gsap.quickTo(el, "y", {
      duration: 0.6,
      ease: "power3.out",
      overwrite: "auto",
    })

    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect()
      const x = (e.clientX - left - width / 2) * 0.35
      const y = (e.clientY - top - height / 2) * 0.35
      quickX(Math.max(-35, Math.min(35, x)))
      quickY(Math.max(-35, Math.min(35, y)))
    }

    const onLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.15)",
        overwrite: "auto",
      })
    }

    el.addEventListener("mousemove", onMove, { passive: true })
    el.addEventListener("mouseleave", onLeave, { passive: true })

    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
      gsap.killTweensOf(el)
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
