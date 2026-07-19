"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  { year: "1993", title: "Joined as BJP Karyakarta", desc: "Started grassroots service, mobilizing local communities." },
  { year: "2015", title: "Secured Kisan Train", desc: "For Ganganagar Kinnow farmers to export to Bangladesh." },
  { year: "2018", title: "19 FF Rail Track Underbridge", desc: "Built to ensure village safety." },
  { year: "2022", title: "State Co-Incharge, Minority Morcha", desc: "Appointed to lead BJP Minority Morcha Rajasthan." },
  { year: "2023", title: "ZRUCC Member, NWR Railways", desc: "Advocating for passenger and freight improvements." },
  { year: "2024", title: "Bikaner War Room Manager", desc: "Managed successful war room for Union Minister Arjun Ram Meghwal." },
]

export function VerticalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pathLength = lineRef.current?.getTotalLength() || 0
      if (lineRef.current) {
        gsap.set(lineRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength })
        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        })
      }
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative py-20">
      <svg className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-4 h-full pointer-events-none z-0">
        <path
          ref={lineRef}
          d="M2 0 L2 2000"
          stroke="#FF9933"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-24">
        {milestones.map((m, i) => (
          <div key={i} className={`flex items-center ${i % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
            <div className="w-1/2" />
            <div className="w-6 h-6 rounded-full bg-green border-4 border-[#FDFBF7] shadow flex-shrink-0 absolute left-1/2 -translate-x-1/2" />
            <motion.div 
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`w-1/2 ${i % 2 === 0 ? "pl-12" : "pr-12 text-right"}`}
            >
              <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-black/5">
                <span className="text-saffron font-bold font-display text-2xl">{m.year}</span>
                <h3 className="text-green font-display text-xl mt-2 font-semibold">{m.title}</h3>
                <p className="text-fg/70 mt-2">{m.desc}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
