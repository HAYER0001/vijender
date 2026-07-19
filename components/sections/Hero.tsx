"use client"

import Image from "next/image"
import { HeroText } from "@/components/HeroText"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--page-bg)]">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/images/saffron-banner.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <HeroText />

          <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-green/10">
            <Image
              src="/images/vp-portrait.jpg"
              alt="Vijender Pal Singh — BJP Karyakarta, Sri Karanpur"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-green">
                <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                3 CC Padampur — Sri Karanpur
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent pointer-events-none" />
    </section>
  )
}
