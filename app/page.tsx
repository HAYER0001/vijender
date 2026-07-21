import { HeroCanvas } from "@/components/HeroCanvas"
import { LiveSocialFeed } from "@/components/LiveSocialFeed"
import { AIAnswerBlock } from "@/components/AIAnswerBlock"
import { NewsTicker } from "@/components/NewsTicker"
import { FadeUpReveal, KineticHeadline, ParallaxImage } from "@/components/MotionWrappers"
import { VectorAccentsBg, VectorAccentsFg } from "@/components/VectorAccents"
import { FeaturedStory } from "@/components/FeaturedStory"
import { MediaPlayer } from "@/components/MediaPlayer"
import { Articles } from "@/components/sections/Articles"
import Image from "next/image"

export const revalidate = 3600

export default function Home() {
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
                width={600}
                height={800}
                className="w-full h-auto object-cover sticker-effect"
                priority
              />
            </ParallaxImage>
          </div>
          
          {/* 2. Middle: Text content */}
          <div className="flex-1 lg:w-[40%] space-y-8 text-center lg:text-left z-20">
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-green drop-shadow-sm">
              <KineticHeadline text="वादे नहीं" highlightText="ईरादे" />
            </h1>
            <FadeUpReveal delay={0.3}>
              <p className="text-lg md:text-xl text-fg/80 max-w-xl mx-auto lg:mx-0 font-eagle leading-relaxed">
                Vijender Pal Singh has been working for the people of Sri Karanpur since 1993. A dedicated BJP Karyakarta, driving infrastructure, social justice, and community welfare. Sabka Sath, Sabka Vikas.
              </p>
            </FadeUpReveal>
          </div>

          {/* 3. Right: Scrolling Newspaper Cuttings */}
          <FadeUpReveal delay={0.6} className="w-full lg:w-[30%] shrink-0">
            <NewsTicker />
          </FadeUpReveal>

        </div>
        <VectorAccentsFg />
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20 relative">
        <FeaturedStory />
        <MediaPlayer />
      </section>

      <Articles />

      <LiveSocialFeed />

      <AIAnswerBlock />
    </>
  )
}
