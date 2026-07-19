"use client"

import { useEffect, useRef, useId } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Phone } from "lucide-react"
import { Magnetic } from "./Magnetic"

gsap.registerPlugin(ScrollTrigger)

export function HeroText() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const uid = useId()

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.hero-line-${uid.replace(/\W/g, "")}`,
        { y: 50, opacity: 0, rotateX: 8 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [uid])

  const lineClass = `hero-line-${uid.replace(/\W/g, "")}`

  return (
    <div ref={sectionRef} className="space-y-6">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`${lineClass} inline-block text-saffron font-display font-semibold text-sm sm:text-base tracking-widest uppercase`}
      >
        3 CC Padampur — Sri Karanpur
      </motion.span>

      <h1 className={`${lineClass} font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] text-green`}>
        Sabka Sath, Sabka Vikas
        <br />
        <span className="text-saffron">in Sri Karanpur</span>
      </h1>

      <p className={`${lineClass} mt-4 text-base sm:text-lg leading-relaxed text-fg/80 max-w-xl`}>
        Working as a BJP karyakarta since 1993 — dedicated to social
        justice, grassroots development, and the welfare of every citizen
        in Sri Karanpur constituency.
      </p>

      <div className={`${lineClass} pt-4 flex flex-wrap gap-4`}>
        <Magnetic>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-lg shadow-md hover:bg-saffron-dark transition-colors cursor-none"
          >
            Explore the Journey
            <ArrowRight className="w-4 h-4" />
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green text-green font-semibold rounded-lg hover:bg-green hover:text-white transition-colors cursor-none"
          >
            <Phone className="w-4 h-4" />
            Connect Instantly
          </a>
        </Magnetic>
      </div>
    </div>
  )
}
