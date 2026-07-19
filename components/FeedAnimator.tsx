"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function FeedAnimator({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(".feed-reveal")
      if (!cards?.length) return

      gsap.from(cards, {
        y: 40,
        rotation: 2,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: "power3.out",
        transformOrigin: "center bottom",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return <div ref={containerRef}>{children}</div>
}
