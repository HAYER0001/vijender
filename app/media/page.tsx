import { SchemaMarkup } from "@/components/SchemaMarkup"
import { MediaSection } from "@/components/sections/MediaSection"
import { MediaPressGrid } from "@/components/MediaPressGrid"
import { getImagesFromDirectory } from "@/lib/mediaManager"
import { Train, ShieldAlert, Award, Vote, Users, Newspaper } from "lucide-react"

export const metadata = {
  title: "Media & Press",
  description: "Press releases, achievements, and news about Vijender Pal Singh.",
}

const ACHIEVEMENTS = [
  {
    title: "19 FF Rail Track Underbridge",
    category: "Infrastructure",
    icon: Train,
    points: [
      "Secured formal sanction and fast-tracked construction of the railway underbridge.",
      "Eliminated daily life hazards for rural schoolchildren and daily travelers.",
      "Dramatically improved emergency and transport connectivity for surrounding villages.",
    ],
  },
  {
    title: "Kisan Train for Kinnow Farmers",
    category: "Farmer Welfare",
    icon: Award,
    points: [
      "Championed dedicated Kisan Train cargo logistics connecting Sri Ganganagar to Bangladesh.",
      "Facilitated direct export access for regional citrus cultivators without middlemen.",
      "Significantly boosted agricultural profit margins and market access across the district.",
    ],
  },
  {
    title: "ZRUCC Member, NWR Railways",
    category: "Public Advocacy",
    icon: ShieldAlert,
    points: [
      "Appointed to Zonal Railway Users' Consultative Committee for North Western Railways.",
      "Advocating regional passenger halts, train frequency, and commuter comfort.",
      "Presenting public demands for direct connectivity between rural hubs and major cities.",
    ],
  },
  {
    title: "State Co-Incharge, Minority Morcha",
    category: "State Leadership",
    icon: Users,
    points: [
      "Appointed State Co-Incharge of BJP Minority Morcha, Rajasthan.",
      "Working actively across districts under 'Sabka Saath, Sabka Vikas, Sabka Vishwas'.",
      "Fostering inter-community dialogue, government scheme saturation, and empowerment.",
    ],
  },
  {
    title: "Bikaner Lok Sabha War Room",
    category: "Election Command",
    icon: Vote,
    points: [
      "Spearheaded strategic Election War Room for Union Minister Shri Arjun Ram Meghwal.",
      "Coordinated real-time data analytics, booth monitoring, and digital media response.",
      "Contributed to sweeping electoral victory through disciplined organizational teamwork.",
    ],
  },
  {
    title: "Regional Media & IT Leadership",
    category: "Media Strategy",
    icon: Newspaper,
    points: [
      "Over 24 years of IT and digital communication leadership in mainstream media.",
      "Writes influential Punjabi column 'Gallan Baatan' in Rajasthan Patrika.",
      "Pioneering digital-first governance and citizen outreach mechanisms.",
    ],
  },
]

export default function MediaPage() {
  const mediaPhotos = getImagesFromDirectory("media/images")

  return (
    <div className="bg-[var(--page-bg)] min-h-screen pt-32 pb-20">
      <SchemaMarkup type="Person" />
      <SchemaMarkup type="GovernmentOrganization" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display font-semibold text-saffron text-sm tracking-widest uppercase">
            Press &amp; Stances Archive
          </span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-green dark:text-emerald-400">
            Media &amp; Public Initiatives
          </h1>
          <p className="mt-4 text-base sm:text-lg text-fg/75 font-sans leading-relaxed">
            Documenting three decades of impactful grassroots milestones, public stances, and published press coverage of Vijender Pal Singh in Sri Karanpur.
          </p>
        </header>

        {/* Key Milestones — Strictly 3 in a Row Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/5 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-saffron font-bold">
                Proven Track Record
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-green dark:text-white">
                Key Public Achievements &amp; Responsibilities
              </h2>
            </div>
            <span className="text-xs font-mono text-fg/50 hidden sm:inline">
              Sri Karanpur Constituency
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((item, idx) => (
              <div
                key={idx}
                className="card-editorial p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#141B2D] border border-black/10 dark:border-white/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-saffron/10 text-saffron-dark dark:text-saffron">
                      {item.category}
                    </span>
                    <item.icon className="w-5 h-5 text-green dark:text-emerald-400" />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-green dark:text-white mb-3">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 text-xs sm:text-sm text-fg/75 dark:text-slate-300 font-sans">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-saffron font-bold text-base leading-none">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-mono text-fg/40">
                  <span>Vijender Pal Singh</span>
                  <span className="text-green dark:text-emerald-400 font-bold">Delivered ✓</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Coverage Section */}
        <div className="mb-20">
          <MediaSection />
        </div>

        {/* Press Photos & Clippings Archive — Strictly 3 in a Row */}
        {mediaPhotos.length > 0 && (
          <section className="mt-16">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-saffron font-bold">
                Printed Heritage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-green dark:text-white">
                Newspaper &amp; Media Clippings
              </h2>
              <p className="mt-2 text-sm sm:text-base text-fg/70 font-sans">
                Extensive coverage across leading dailies including <em>Dainik Bhaskar</em>, <em>Seema Sandesh</em>, <em>Ahuti</em>, and <em>Rajasthan Patrika</em>.
              </p>
            </div>
            <MediaPressGrid images={mediaPhotos} />
          </section>
        )}
      </div>
    </div>
  )
}
