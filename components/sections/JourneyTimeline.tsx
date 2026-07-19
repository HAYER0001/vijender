"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import {
  Heart,
  Building2,
  Users,
  Award,
  Vote,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const CIRCUMFERENCE = 2 * Math.PI * 54

const items = [
  {
    year: "1993",
    icon: Heart,
    title: "Dedicated to Service",
    description:
      "Began his journey as a BJP karyakarta during college, driven by a belief in development and a passion for making a tangible difference in people's lives.",
    color: "text-saffron",
    accent: "bg-saffron",
    accentLight: "bg-saffron/10",
    border: "border-saffron/20",
    ring: "ring-saffron/20",
    image: "/images/vp-rally-2.jpg",
    imageAlt: "Vijender Pal Singh's early years in public service",
  },
  {
    year: "2022",
    icon: Users,
    title: "State Co-Incharge — Minority Morcha",
    description:
      "Appointed State Co-Incharge of BJP Minority Morcha, Rajasthan. Works to build bridges across communities and ensure every voice is heard in the political process.",
    color: "text-green",
    accent: "bg-green",
    accentLight: "bg-green/10",
    border: "border-green/20",
    ring: "ring-green/20",
    image: "/images/morcha-portrait.jpg",
    imageAlt: "Minority Morcha event in Rajasthan",
  },
  {
    year: "2023",
    icon: Building2,
    title: "ZRUCC Member — NWR Railways",
    description:
      "Appointed to the Zonal Railway Users' Consultative Committee for North Western Railways. Represents citizen interests in railway infrastructure decisions.",
    color: "text-saffron",
    accent: "bg-saffron",
    accentLight: "bg-saffron/10",
    border: "border-saffron/20",
    ring: "ring-saffron/20",
    image: "/images/zrucc-document.jpg",
    imageAlt: "ZRUCC appointment certificate",
  },
  {
    year: "2024",
    icon: Vote,
    title: "War Room Manager — Bikaner Victory",
    description:
      "Managed the War Room for Union Minister Arjun Ram Meghwal's victorious Bikaner campaign. A masterclass in strategic grassroots mobilization.",
    color: "text-green",
    accent: "bg-green",
    accentLight: "bg-green/10",
    border: "border-green/20",
    ring: "ring-green/20",
    image: "/images/meghwal-campaign-2.jpg",
    imageAlt: "Meghwal campaign war room management",
  },
  {
    year: "2025",
    icon: Award,
    title: "Kisan Train & Rail Safety",
    description:
      "Secured a dedicated Kisan Train for Ganganagar Kinnow farmers to export to Bangladesh, and built the 19 FF Rail Track Underbridge — infrastructure that saves lives and opens markets.",
    color: "text-saffron",
    accent: "bg-saffron",
    accentLight: "bg-saffron/10",
    border: "border-saffron/20",
    ring: "ring-saffron/20",
    image: "/images/kisan-train-clipping.jpg",
    imageAlt: "Kisan Train and railway safety achievements",
  },
]

export function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const circleRef = useRef<SVGCircleElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const ctx = gsap.context(() => {
      if (circleRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.2,
          onUpdate: (self) => {
            const progress = self.progress
            circleRef.current!.style.strokeDashoffset = String(
              CIRCUMFERENCE * (1 - progress)
            )
            if (progressRef.current) {
              progressRef.current.textContent = `${Math.round(progress * 100)}`
            }
            if (lineRef.current) {
              lineRef.current.style.transform = `scaleY(${Math.min(progress * 1.1, 1)})`
              lineRef.current.style.transformOrigin = "top center"
            }
          },
        })
      }

      cardsRef.current.forEach((card) => {
        if (!card) return
        const textReveals = card.querySelectorAll<HTMLElement>(".reveal-text")
        const imgClip = card.querySelector<HTMLElement>(".reveal-img")

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })

        tl.from(card, {
          x: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })

        textReveals.forEach((el) => {
          tl.from(
            el,
            {
              clipPath: "inset(0 0 100% 0)",
              y: 20,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.3"
          )
        })

        if (imgClip) {
          tl.from(
            imgClip,
            {
              clipPath: "inset(0 0 100% 0)",
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.4"
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative py-28 sm:py-36 bg-[var(--page-bg)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-display font-semibold text-green text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <Award className="w-4 h-4" />
            The Journey
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-green">
            A Legacy of Service
          </h2>
          <p className="mt-4 text-fg/70 text-base sm:text-lg">
            From college karyakarta to a leader who delivers — every milestone
            touched the lives of the people.
          </p>
        </motion.div>

        <div className="relative lg:grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-4 relative">
            <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-0.5 bg-green/10">
              <div
                ref={lineRef}
                className="w-full h-0 bg-gradient-to-b from-saffron to-green rounded-full"
              />
            </div>

            <div className="space-y-10 sm:space-y-16">
              {items.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    ref={(el) => { cardsRef.current[i] = el }}
                    className="relative pl-14 sm:pl-20"
                    aria-label={`${item.year} — ${item.title}`}
                  >
                    <div
                      className={`absolute left-3 sm:left-4 top-1 w-5 h-5 sm:w-7 sm:h-7 rounded-full ${item.accent} ring-4 ring-white flex items-center justify-center shadow-md z-10`}
                    >
                      <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>

                    <div className="lg:flex gap-6 items-start">
                      <div className="lg:w-3/5">
                        <span
                          className={`reveal-text inline-block font-display font-bold text-sm sm:text-base ${item.color} mb-2`}
                          style={{ clipPath: "inset(0 0 0% 0)" }}
                        >
                          {item.year}
                        </span>

                        <h3
                          className="reveal-text font-display font-semibold text-xl sm:text-2xl lg:text-3xl text-green mb-3 leading-tight"
                          style={{ clipPath: "inset(0 0 0% 0)" }}
                        >
                          {item.title}
                        </h3>

                        <p
                          className="reveal-text text-fg/70 text-sm sm:text-base leading-relaxed"
                          style={{ clipPath: "inset(0 0 0% 0)" }}
                        >
                          {item.description}
                        </p>
                      </div>

                      <div className="reveal-img mt-4 lg:mt-0 lg:w-2/5 shrink-0">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md ring-1 ring-green/5">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 30vw"
                          />
                        </div>
                      </div>
                    </div>

                    {i < items.length - 1 && (
                      <div
                        className={`hidden lg:block absolute -bottom-8 left-3 sm:left-4 w-5 h-5 rounded-full border-2 ${item.border} bg-white`}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-1 items-start justify-center pt-8">
            <div className="sticky top-32 flex flex-col items-center gap-3">
              <svg
                width="140"
                height="140"
                viewBox="0 0 140 140"
                className="transform -rotate-90"
              >
                <circle
                  cx="70"
                  cy="70"
                  r="54"
                  fill="none"
                  stroke="#0F523A10"
                  strokeWidth="8"
                />
                <circle
                  ref={circleRef}
                  cx="70"
                  cy="70"
                  r="54"
                  fill="none"
                  stroke="#FF9933"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={CIRCUMFERENCE}
                  style={{ transition: "stroke-dashoffset 0.1s linear" }}
                />
              </svg>
              <div className="flex flex-col items-center">
                <span
                  ref={progressRef}
                  className="font-display font-bold text-2xl text-green"
                >
                  0
                </span>
                <span className="text-xs text-fg/50 tracking-wider uppercase">
                  % Journey
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
