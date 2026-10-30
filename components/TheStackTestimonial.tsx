"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Quote,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Users,
  Cpu,
  Sprout,
  BookOpen,
  Award,
  Check,
  Copy,
  RotateCcw,
} from "lucide-react"

export interface StackCardItem {
  id: string
  category: "value" | "commitment"
  number: string
  hindiTitle: string
  englishTitle: string
  quote: string
  elaboration: string
  tag: string
  accentColor: string
  badgeColor: string
  icon: React.ComponentType<{ className?: string }>
}

const STACK_ITEMS: StackCardItem[] = [
  {
    id: "nation-first",
    category: "value",
    number: "01",
    hindiTitle: "राष्ट्र सर्वोपरि",
    englishTitle: "Nation First",
    quote: "Every decision should strengthen India and serve its people.",
    elaboration:
      "Putting national sovereignty, unity, and the welfare of every citizen at the heart of all public initiatives and policymaking.",
    tag: "CORE VALUE 01",
    accentColor: "#FF6B00",
    badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    icon: Sparkles,
  },
  {
    id: "integrity",
    category: "value",
    number: "02",
    hindiTitle: "सत्यनिष्ठा",
    englishTitle: "Integrity",
    quote: "Honesty, transparency, and accountability remain non-negotiable.",
    elaboration:
      "Upholding the highest standards of moral clarity, ethical governance, and open communication with the public at all times.",
    tag: "CORE VALUE 02",
    accentColor: "#059669",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    icon: ShieldCheck,
  },
  {
    id: "service",
    category: "value",
    number: "03",
    hindiTitle: "सेवा भाव",
    englishTitle: "Service",
    quote: "Public service is both a responsibility and a privilege.",
    elaboration:
      "Working tirelessly on the ground in Sri Karanpur, addressing grievances directly and standing shoulder-to-shoulder with the community.",
    tag: "CORE VALUE 03",
    accentColor: "#D97706",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    icon: HeartHandshake,
  },
  {
    id: "inclusive-development",
    category: "value",
    number: "04",
    hindiTitle: "समावेशी विकास",
    englishTitle: "Inclusive Development",
    quote: "Progress is meaningful only when it benefits every citizen.",
    elaboration:
      "Fulfilling the vision of 'Sabka Saath, Sabka Vikas, Sabka Vishwas, Sabka Prayas' so that prosperity reaches the last person in society.",
    tag: "CORE VALUE 04",
    accentColor: "#2563EB",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    icon: Users,
  },
  {
    id: "innovation",
    category: "value",
    number: "05",
    hindiTitle: "नवाचार एवं तकनीक",
    englishTitle: "Innovation",
    quote: "Technology is a catalyst for better governance and better lives.",
    elaboration:
      "Leveraging modern digital infrastructure, IT systems, and smart workflows to streamline citizen services and enhance administrative responsiveness.",
    tag: "CORE VALUE 05",
    accentColor: "#7C3AED",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    icon: Cpu,
  },
  {
    id: "grassroots-empowerment",
    category: "value",
    number: "06",
    hindiTitle: "जमीनी सशक्तिकरण",
    englishTitle: "Grassroots Empowerment",
    quote: "Strong communities build a strong nation.",
    elaboration:
      "Empowering agricultural producers, rural youth, and local enterprises to foster durable self-reliance and community prosperity.",
    tag: "CORE VALUE 06",
    accentColor: "#16A34A",
    badgeColor: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    icon: Sprout,
  },
  {
    id: "continuous-learning",
    category: "value",
    number: "07",
    hindiTitle: "सतत सीखने की ललक",
    englishTitle: "Continuous Learning",
    quote: "Leadership demands humility, adaptability, and lifelong learning.",
    elaboration:
      "Listening attentively to public feedback, adapting to contemporary socioeconomic dynamics, and continuously evolving to serve better.",
    tag: "CORE VALUE 07",
    accentColor: "#0D9488",
    badgeColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    icon: BookOpen,
  },
  {
    id: "personal-commitment",
    category: "commitment",
    number: "★",
    hindiTitle: "व्यक्तिगत संकल्प",
    englishTitle: "A Personal Commitment",
    quote:
      "I believe leadership begins with listening, grows through service, and earns trust through action. My commitment is to work with integrity, embrace innovation, and dedicate myself to building a stronger, more inclusive, and developed India—where every citizen has the opportunity to grow with dignity and contribute to the nation's progress.",
    elaboration:
      "A pledge of selfless dedication towards the people of Sri Karanpur, grounded in grassroots discipline and the overarching goal of Viksit Bharat 2047.",
    tag: "PERSONAL COMMITMENT",
    accentColor: "#FF6B00",
    badgeColor: "bg-saffron/15 text-saffron-dark dark:text-saffron border-saffron/30 font-semibold",
    icon: Award,
  },
]

export function TheStackTestimonial() {
  const [filter, setFilter] = useState<"all" | "values" | "commitment">("all")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [copied, setCopied] = useState(false)
  const [direction, setDirection] = useState<1 | -1>(1)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const [progress, setProgress] = useState(0)

  // Filter items based on selected tab
  const filteredItems = STACK_ITEMS.filter((item) => {
    if (filter === "values") return item.category === "value"
    if (filter === "commitment") return item.category === "commitment"
    return true
  })

  // Ensure current index stays in bounds
  const safeIndex = currentIndex % (filteredItems.length || 1)
  const currentCard = filteredItems[safeIndex] || STACK_ITEMS[0]

  const nextCard = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
    setProgress(0)
  }, [filteredItems.length])

  const prevCard = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
    setProgress(0)
  }, [filteredItems.length])

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0)
    setProgress(0)
  }, [filter])

  // Auto-play timer (6 seconds per card)
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
      return
    }

    const duration = 6000
    const step = 50
    let elapsed = 0

    progressIntervalRef.current = setInterval(() => {
      elapsed += step
      setProgress(Math.min(100, (elapsed / duration) * 100))
    }, step)

    timerRef.current = setInterval(() => {
      nextCard()
      elapsed = 0
    }, duration)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
  }, [isPlaying, nextCard, safeIndex])

  const copyQuote = () => {
    if (!currentCard) return
    const textToCopy = `"${currentCard.quote}" — Vijender Pal Singh (${currentCard.englishTitle})`
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    })
  }

  return (
    <div className="w-full my-12 relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE1] dark:from-[#0E131F] dark:via-[#0A0E18] dark:to-[#070A12] border border-saffron/20 dark:border-white/10 p-6 sm:p-10 lg:p-14 shadow-xl">
      {/* Background ambient decorative glows */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentCard.accentColor }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: "#06402B" }}
      />

      {/* Header section */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-black/5 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 text-saffron-dark dark:text-saffron text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
            The Stack · Motion Reveal
          </div>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-green dark:text-emerald-400">
            Core Values &amp; Personal Commitment
          </h3>
          <p className="mt-2 text-fg/70 font-sans text-base sm:text-lg max-w-2xl">
            Interactive testimonial stack showcasing the principles and lifelong pledge driving Vijender Pal Singh&apos;s grassroots leadership.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 p-1 rounded-2xl border border-black/5 dark:border-white/10 self-start md:self-auto shrink-0">
          <button
            onClick={() => setFilter("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-white dark:bg-[#1A2234] text-saffron shadow-sm"
                : "text-fg/70 hover:text-fg"
            }`}
          >
            All Stack ({STACK_ITEMS.length})
          </button>
          <button
            onClick={() => setFilter("values")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === "values"
                ? "bg-white dark:bg-[#1A2234] text-saffron shadow-sm"
                : "text-fg/70 hover:text-fg"
            }`}
          >
            Core Values (7)
          </button>
          <button
            onClick={() => setFilter("commitment")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === "commitment"
                ? "bg-white dark:bg-[#1A2234] text-saffron shadow-sm"
                : "text-fg/70 hover:text-fg"
            }`}
          >
            Commitment (1)
          </button>
        </div>
      </div>

      {/* Main Stack Container */}
      <div
        className="relative z-10 w-full max-w-4xl mx-auto py-4"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* The Card Deck viewport */}
        <div className="relative min-h-[420px] sm:min-h-[380px] md:min-h-[360px] flex items-center justify-center">
          {/* Peeking Background Card 2 (Bottom layer) */}
          {filteredItems.length > 2 && (
            <div
              className="absolute w-full max-w-3xl rounded-3xl bg-white/70 dark:bg-[#141B2D]/70 border border-black/5 dark:border-white/5 shadow-md pointer-events-none transition-all duration-500"
              style={{
                height: "92%",
                transform: "translateY(28px) scale(0.92)",
                opacity: 0.45,
                zIndex: 10,
              }}
            />
          )}

          {/* Peeking Background Card 1 (Middle layer) */}
          {filteredItems.length > 1 && (
            <div
              className="absolute w-full max-w-3xl rounded-3xl bg-white/85 dark:bg-[#172036]/85 border border-black/10 dark:border-white/10 shadow-lg pointer-events-none transition-all duration-500"
              style={{
                height: "96%",
                transform: "translateY(14px) scale(0.96)",
                opacity: 0.75,
                zIndex: 20,
              }}
            />
          )}

          {/* Active Front Card with Motion Reveal */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentCard.id}
              initial={{
                opacity: 0,
                y: direction === 1 ? 40 : -40,
                scale: 0.95,
                rotate: direction === 1 ? 2 : -2,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 280,
                  damping: 24,
                  mass: 0.8,
                },
              }}
              exit={{
                opacity: 0,
                y: direction === 1 ? -60 : 60,
                scale: 0.94,
                rotate: direction === 1 ? -3 : 3,
                transition: { duration: 0.22, ease: "easeInOut" },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60 || info.velocity.x < -300) {
                  nextCard()
                } else if (info.offset.x > 60 || info.velocity.x > 300) {
                  prevCard()
                }
              }}
              className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#161D2E] border-2 border-saffron/30 dark:border-emerald-500/30 p-7 sm:p-10 shadow-2xl z-30 cursor-grab active:cursor-grabbing select-none"
            >
              {/* Giant watermark quote in background */}
              <div className="absolute top-4 right-6 text-saffron/10 dark:text-white/5 pointer-events-none font-serif text-8xl md:text-9xl leading-none font-black select-none">
                “
              </div>

              {/* Card Top Row: Badge, Category, Number */}
              <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs tracking-wider uppercase ${currentCard.badgeColor}`}
                  >
                    <currentCard.icon className="w-3.5 h-3.5" />
                    <span>{currentCard.tag}</span>
                  </div>
                  <span className="text-xs font-mono text-fg/50 dark:text-white/40 font-semibold">
                    {currentCard.hindiTitle}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-fg/40 dark:text-white/30 font-bold tracking-widest">
                    {safeIndex + 1} / {filteredItems.length}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      copyQuote()
                    }}
                    title="Copy statement"
                    className="p-1.5 rounded-lg text-fg/50 hover:text-saffron hover:bg-saffron/10 transition-colors"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Card Title */}
              <div className="relative z-10 mb-4">
                <h4 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-green dark:text-white tracking-tight flex items-baseline gap-3">
                  <span>{currentCard.englishTitle}</span>
                  <span className="text-base sm:text-lg font-sans font-normal text-saffron-dark dark:text-saffron">
                    ({currentCard.hindiTitle})
                  </span>
                </h4>
              </div>

              {/* The Core Quote Statement */}
              <blockquote className="relative z-10 my-4 text-lg sm:text-xl md:text-2xl font-serif italic text-fg dark:text-slate-100 leading-snug sm:leading-relaxed">
                &ldquo;{currentCard.quote}&rdquo;
              </blockquote>

              {/* Elaboration Note */}
              <p className="relative z-10 text-sm sm:text-base text-fg/70 dark:text-slate-300 font-sans leading-relaxed mb-6 pt-2 border-t border-black/5 dark:border-white/5">
                {currentCard.elaboration}
              </p>

              {/* Card Footer: Attribution & Author */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/5 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-saffron shadow-sm shrink-0">
                    <Image
                      src="/hero-scroll/scroll-1/mrrc9k1y-69a65f731d0da03032026041131.jpg.jpeg"
                      alt="Vijender Pal Singh"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 font-sans font-bold text-sm sm:text-base text-fg dark:text-white">
                      <span>Vijender Pal Singh</span>
                      <span className="w-4 h-4 rounded-full bg-saffron text-white text-[10px] flex items-center justify-center font-bold" title="Verified Karyakarta">
                        ✓
                      </span>
                    </div>
                    <p className="text-xs text-fg/60 dark:text-slate-400 font-sans">
                      BJP Karyakarta · Sri Karanpur
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-saffron-dark dark:text-saffron font-medium bg-saffron/10 px-3 py-1 rounded-full">
                  {currentCard.category === "commitment" ? "Pledge Statement" : "Guiding Principle"}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Timer Progress Bar */}
        <div className="w-full max-w-3xl mx-auto mt-4 px-2">
          <div className="w-full h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-saffron transition-all duration-75 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Stack Controls: Arrows, Play/Pause, Step Counter */}
        <div className="flex items-center justify-between max-w-3xl mx-auto mt-6 px-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/5 dark:bg-white/10 hover:bg-saffron hover:text-white transition-all text-fg/70"
              title={isPlaying ? "Pause auto-reveal" : "Play auto-reveal"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>
            <button
              onClick={() => {
                setCurrentIndex(0)
                setProgress(0)
              }}
              className="p-1.5 rounded-full text-fg/50 hover:text-saffron transition-colors"
              title="Reset to first card"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="hidden sm:flex items-center gap-1.5">
            {filteredItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > safeIndex ? 1 : -1)
                  setCurrentIndex(idx)
                  setProgress(0)
                }}
                className={`transition-all rounded-full ${
                  idx === safeIndex
                    ? "w-6 h-2 bg-saffron"
                    : "w-2 h-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
                }`}
                title={`Jump to card ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevCard}
              className="p-2.5 rounded-full bg-white dark:bg-[#1A2234] border border-black/10 dark:border-white/10 shadow-sm text-fg/80 hover:text-saffron hover:border-saffron transition-all active:scale-95"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextCard}
              className="p-2.5 rounded-full bg-saffron text-white shadow-md hover:bg-saffron-dark transition-all active:scale-95"
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick jump pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-3xl mx-auto">
          {filteredItems.map((item, idx) => {
            const isActive = idx === safeIndex
            return (
              <button
                key={item.id}
                onClick={() => {
                  setDirection(idx > safeIndex ? 1 : -1)
                  setCurrentIndex(idx)
                  setProgress(0)
                }}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-green text-white shadow-sm ring-2 ring-saffron"
                    : "bg-black/5 dark:bg-white/5 text-fg/70 hover:bg-black/10 dark:hover:bg-white/10 hover:text-fg"
                }`}
              >
                <span className="font-mono text-xs opacity-60 mr-1.5">#{item.number}</span>
                {item.englishTitle}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
