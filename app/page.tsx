import { HeroCanvas } from "@/components/HeroCanvas"
import { LiveSocialFeed } from "@/components/LiveSocialFeed"
import { AIAnswerBlock } from "@/components/AIAnswerBlock"
import { NewsTicker } from "@/components/NewsTicker"
import { FadeUpReveal, KineticHeadline, ParallaxImage } from "@/components/MotionWrappers"
import { VectorAccentsBg, VectorAccentsFg } from "@/components/VectorAccents"
import { Articles } from "@/components/sections/Articles"
import { Gallery } from "@/components/sections/Gallery"
import { MediaSection } from "@/components/sections/MediaSection"
import { getImagesFromDirectory } from "@/lib/mediaManager"
import Image from "next/image"

export const revalidate = 3600

export default function Home() {
  const scroll1 = getImagesFromDirectory("hero-scroll/scroll-1")
  const scroll2 = getImagesFromDirectory("hero-scroll/scroll-2")

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[var(--page-bg)]">
        <HeroCanvas />
        <VectorAccentsBg />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* 1. Left: Portrait */}
          <div className="relative w-full lg:w-[30%] max-w-md mx-auto shrink-0 z-30">
            <ParallaxImage className="transition-transform duration-700 hover:scale-105">
              <Image
                src="/hero-portrait.png"
                alt="Vijender Pal Singh"
                width={816}
                height={1900}
                className="w-full h-auto object-contain sticker-effect"
                priority
              />
            </ParallaxImage>
          </div>
          
          {/* 2. Middle: Text content */}
          <div className="flex-1 lg:w-[40%] space-y-8 text-center lg:text-left z-20">
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-green drop-shadow-sm">
              <KineticHeadline text="वादे नहीं," highlightText="इरादे" />
            </h1>
            <FadeUpReveal delay={0.3}>
              <p className="text-xl md:text-2xl text-fg font-sans font-semibold mb-2">
                Technology Professional • Social Worker • BJP Karyakarta
              </p>
              <p className="text-lg md:text-xl text-fg/80 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
                Driven by service. Powered by technology. Committed to Nation First.
              </p>
            </FadeUpReveal>
          </div>

          {/* 3. Right: Scrolling Newspaper Cuttings */}
          <FadeUpReveal delay={0.6} className="w-full lg:w-[30%] shrink-0">
            <NewsTicker scroll1={scroll1} scroll2={scroll2} />
          </FadeUpReveal>

        </div>
        <VectorAccentsFg />
      </section>

      <FadeUpReveal>
        <Articles />
      </FadeUpReveal>

      <FadeUpReveal>
        <Gallery />
      </FadeUpReveal>

      <FadeUpReveal>
        <MediaSection />
      </FadeUpReveal>

      <LiveSocialFeed />

      <AIAnswerBlock />
    </>
  )
}
