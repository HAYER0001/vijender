import { MessageCircle, Newspaper, ExternalLink, CalendarDays } from "lucide-react"
import { FeedAnimator } from "@/components/FeedAnimator"

const PRESS_ITEMS = [
  {
    date: "2025",
    category: "Agriculture",
    headline: "Kisan Train for Ganganagar Kinnow Farmers to Bangladesh",
    summary:
      "Vijender Pal Singh secured a dedicated Kisan Train connecting Ganganagar's Kinnow farmers directly to Bangladesh, opening international markets for Rajasthan's citrus produce. The initiative ensures better price realisation for small and marginal farmers across Sri Karanpur district.",
    source: "Regional Agriculture Desk",
    platform: "Read full report",
    href: "#",
  },
  {
    date: "2024",
    category: "Infrastructure",
    headline: "19 FF Rail Track Underbridge Delivered for Village Safety",
    summary:
      "A critical 19 FF Rail Track Underbridge was completed under Vijender Pal Singh's persistent follow-up, eliminating a hazardous level-crossing and ensuring safe passage for schoolchildren and daily commuters in Sri Karanpur's rural belt.",
    source: "Railway Development Cell",
    platform: "Read full report",
    href: "#",
  },
  {
    date: "2024",
    category: "Minority Outreach",
    headline: "Appointed State Co-Incharge, BJP Minority Morcha Rajasthan",
    summary:
      "Vijender Pal Singh was appointed State Co-Incharge of BJP Minority Morcha Rajasthan, tasked with strengthening inter-community trust and outreach across the state's minority-concentrated districts.",
    source: "BJP Rajasthan HQ",
    platform: "Read full report",
    href: "#",
  },
  {
    date: "2023",
    category: "Railway Development",
    headline: "ZRUCC Appointment Strengthens Sri Karanpur's Rail Connectivity",
    summary:
      "As Zonal Railway Users Consultative Council (ZRUCC) Member for North Western Railways, Vijender Pal Singh now represents Sri Karanpur's rail infrastructure needs — from new station halts to freight corridors for agricultural produce.",
    source: "Ministry of Railways",
    platform: "Read full report",
    href: "#",
  },
  {
    date: "2024",
    category: "Election Management",
    headline: "War Room Command for Union Minister Arjun Ram Meghwal's Victory",
    summary:
      "Vijender Pal Singh managed the strategic War Room for Union Minister Arjun Ram Meghwal's successful Bikaner Lok Sabha campaign, coordinating booth management, voter outreach, and real-time response across the constituency.",
    source: "BJP Bikaner Campaign",
    platform: "Read full report",
    href: "#",
  },
]

export function PressReleaseFeed() {
  return (
    <section id="press" className="py-28 sm:py-36 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeedAnimator>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-display font-semibold text-saffron text-sm tracking-widest uppercase flex items-center justify-center gap-2">
              <Newspaper className="w-4 h-4" />
              Press & Media
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-green">
              Stances & Coverage
            </h2>
            <p className="mt-4 text-fg/70 text-base sm:text-lg">
              Vijender Pal Singh&apos;s key policy stances and media coverage
              on agricultural growth, railway safety, and constituency development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            {PRESS_ITEMS.map((item, i) => (
              <article
                key={i}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-saffron/10 p-6 sm:p-8 hover:shadow-lg hover:border-saffron/20 transition-all duration-400"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="hidden sm:flex flex-col items-center gap-2 pt-1">
                    <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center shrink-0">
                      <CalendarDays className="w-5 h-5 text-saffron" />
                    </div>
                    <span className="font-display text-xs font-semibold text-saffron tracking-wider whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 sm:hidden">
                      <span className="font-display text-xs font-semibold text-saffron tracking-wider">
                        {item.date}
                      </span>
                      <span className="text-fg/20">·</span>
                      <span className="text-xs text-fg/50 font-body">
                        {item.category}
                      </span>
                    </div>

                    <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-saffron/5 text-saffron text-xs font-display font-semibold tracking-wider mb-3">
                      {item.category}
                    </span>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-green mt-1 mb-2 leading-tight">
                      {item.headline}
                    </h3>

                    <p className="text-fg/70 text-sm sm:text-base leading-relaxed max-w-2xl">
                      {item.summary}
                    </p>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-green/5">
                      <span className="text-xs text-fg/40 font-body">
                        {item.source}
                      </span>
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-saffron text-xs font-display font-semibold tracking-wide hover:text-saffron-dark transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        {item.platform}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </FeedAnimator>
      </div>
    </section>
  )
}
