"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import {
  Train,
  Building2,
  Users,
  Award,
  Vote,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  {
    icon: Train,
    title: "Kisan Train for Kinnow Farmers",
    description:
      "Secured a dedicated Kisan Train for Ganganagar Kinnow farmers to export their produce to Bangladesh — opening new markets and better prices.",
    color: "text-saffron",
    bgColor: "bg-saffron/5",
    borderColor: "border-saffron/20",
    image: "/images/kisan-train-clipping.jpg",
    imageAlt: "Kisan Train newspaper coverage",
  },
  {
    icon: Building2,
    title: "19 FF Rail Track Underbridge",
    description:
      "Built a 19 FF Rail Track Underbridge for village safety, ensuring families no longer risk crossing active railway lines.",
    color: "text-green",
    bgColor: "bg-green/5",
    borderColor: "border-green/20",
    image: "/images/underbridge-1.jpg",
    imageAlt: "Railway underbridge construction",
  },
  {
    icon: Users,
    title: "State Co-Incharge — BJP Minority Morcha",
    description:
      "Appointed State Co-Incharge of BJP Minority Morcha, Rajasthan — working to build bridges across communities.",
    color: "text-saffron",
    bgColor: "bg-saffron/5",
    borderColor: "border-saffron/20",
    image: "/images/morcha-event.jpg",
    imageAlt: "Minority Morcha event",
  },
  {
    icon: Award,
    title: "ZRUCC Member — NWR Railways",
    description:
      "Appointed Zonal Railway Users' Consultative Committee member for North Western Railways — representing citizen interests.",
    color: "text-green",
    bgColor: "bg-green/5",
    borderColor: "border-green/20",
    image: "/images/zrucc-certificate.jpg",
    imageAlt: "ZRUCC appointment certificate",
  },
  {
    icon: Vote,
    title: "War Room Manager — Bikaner Victory",
    description:
      "Managed the War Room for Union Minister Arjun Ram Meghwal's victorious Bikaner campaign — a testament to strategic grassroots organization.",
    color: "text-saffron",
    bgColor: "bg-saffron/5",
    borderColor: "border-saffron/20",
    image: "/images/meghwal-campaign-1.jpg",
    imageAlt: "Arjun Ram Meghwal campaign event",
  },
]

export function AchievementsGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const ctx = gsap.context(() => {
      gsap.from(gridRef.current!.querySelectorAll(".achieve-card"), {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="py-28 sm:py-36 bg-[var(--page-bg)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-display font-semibold text-saffron text-sm tracking-widest uppercase">
            Track Record
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-green">
            Delivering for Sri Karanpur
          </h2>
          <p className="mt-4 text-fg/70 text-base sm:text-lg">
            Three decades of concrete achievements that changed lives in the
            constituency.
          </p>
        </motion.div>

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className={`achieve-card group relative p-6 sm:p-8 rounded-2xl border ${item.borderColor} ${item.bgColor} hover:shadow-lg transition-all duration-500 overflow-hidden ${
                  i === achievements.length - 1
                    ? "lg:col-start-2"
                    : ""
                }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[var(--page-bg)]/90 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bgColor} ${item.color} mb-5`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-green mb-3">
                    {item.title}
                  </h3>
                  <p className="text-fg/70 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
