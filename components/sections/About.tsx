"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { ScrollText } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current!.querySelectorAll(".reveal-item"), {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-28 sm:py-36 bg-cream/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div ref={contentRef} className="lg:col-span-3 card-editorial !p-8 sm:!p-12 !bg-[var(--page-bg)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <ScrollText className="w-6 h-6 text-saffron" />
              <span className="font-display font-semibold text-green text-sm tracking-widest uppercase">
                About
              </span>
            </motion.div>

            <h2 className="reveal-item font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-green leading-tight">
              A Karyakarta Since 1993
            </h2>

            <div className="mt-8 space-y-5 text-fg/80 text-base sm:text-lg leading-relaxed">
              <p className="reveal-item">
                Vijender Pal Singh — fondly known across Sri Karanpur as a man who
                answers his own phone — has been a dedicated BJP karyakarta since
                his college days in the early 90s. What started as a student&apos;s
                belief in the party&apos;s vision of development quickly became a
                lifelong commitment to public service.
              </p>
              <p className="reveal-item">
                Over three decades, he has worked shoulder-to-shoulder with the
                people of Sri Karanpur — from securing critical railway
                infrastructure to empowering farmers with export access. His work
                is driven by a simple philosophy: politics must make a tangible
                difference in ordinary lives.
              </p>
              <p className="reveal-item">
                Tech-savvy, approachable, and deeply passionate about social
                justice, Vijender Pal Singh represents a new generation of Indian
                leadership — one that combines grassroots connect with
                modern governance.
              </p>
            </div>

            <div className="reveal-item mt-10 grid grid-cols-3 gap-6 sm:gap-10 pt-10 border-t-4 border-[var(--page-border)]">
              <div className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-saffron">
                  30+
                </div>
                <div className="mt-1 text-sm text-fg/60">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-saffron">
                  5
                </div>
                <div className="mt-1 text-sm text-fg/60">Major Achievements</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-saffron">
                  1
                </div>
                <div className="mt-1 text-sm text-fg/60">Constituency — Sri Karanpur</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-[var(--page-fg)] shadow-[8px_8px_0px_var(--color-saffron)]">
              <Image
                src="/images/vp-rally-1.jpg"
                alt="Vijender Pal Singh at a public event"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-4 py-2 rounded-full bg-[var(--page-surface)] border-2 border-[var(--page-fg)] text-xs font-bold uppercase tracking-wider text-[var(--page-fg)] shadow-[4px_4px_0px_var(--color-saffron)]">
                  Public Engagement
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-[var(--page-fg)] shadow-[6px_6px_0px_var(--color-saffron)]">
                <Image
                  src="/images/vp-with-supporters.jpg"
                  alt="With supporters in Sri Karanpur"
                  fill
                  className="object-cover object-center"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-[var(--page-fg)] shadow-[6px_6px_0px_var(--color-saffron)]">
                <Image
                  src="/images/vp-group-photo.jpg"
                  alt="Community gathering"
                  fill
                  className="object-cover object-center"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
