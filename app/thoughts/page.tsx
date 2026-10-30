import { SchemaMarkup } from "@/components/SchemaMarkup"
import { BookOpen, Newspaper, Calendar, Sparkles, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Thoughts & Columns",
  description: "Editorial perspectives, column articles, and visionary thoughts by Vijender Pal Singh.",
}

const THOUGHTS_ARTICLES = [
  {
    id: 1,
    title: "Gallan Baatan: Voices from the Border Belt",
    punjabiTitle: "ਗੱਲਾਂ ਬਾਤਾਂ • ਰਾਜਸਥਾਨ ਪੱਤ੍ਰਿਕਾ",
    category: "Newspaper Column",
    date: "July 2026",
    publication: "Rajasthan Patrika (Punjabi Column)",
    readTime: "4 min read",
    excerpt:
      "Highlighting regional concerns, rural heritage, and the unspoken aspirations of border villages in Sri Ganganagar. A regular reflection on social harmony and shared community values.",
    highlight: "Featured Column",
  },
  {
    id: 2,
    title: "Technology as the Great Equalizer for Viksit Bharat 2047",
    punjabiTitle: "ਤਕਨਾਲੋਜੀ ਅਤੇ ਲੋਕ ਭਲਾਈ",
    category: "Vision 2047",
    date: "June 2026",
    publication: "National Governance Forum",
    readTime: "6 min read",
    excerpt:
      "Why digital public infrastructure and transparent digital tools must reach the last farmer and rural entrepreneur to truly realize the vision of a developed, self-reliant India.",
    highlight: "Policy Vision",
  },
  {
    id: 3,
    title: "The Kisan Train Revolution: Bypassing Middlemen for Rural Prosperity",
    punjabiTitle: "ਕਿਸਾਨ ਰੇਲ ਅਤੇ ਖੇਤੀਬਾੜੀ ਵਿਕਾਸ",
    category: "Farmer Welfare",
    date: "May 2026",
    publication: "Agrarian Dispatch",
    readTime: "5 min read",
    excerpt:
      "How direct rail cargo logistics to Bangladesh transformed profit margins for Ganganagar Kinnow growers, demonstrating the power of persistent public advocacy.",
    highlight: "Grassroots Impact",
  },
  {
    id: 4,
    title: "Infrastructure as a Basic Human Right: The 19 FF Story",
    punjabiTitle: "ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਅਤੇ ਸੁਰੱਖਿਆ",
    category: "Infrastructure",
    date: "April 2026",
    publication: "Constituency Diary",
    readTime: "4 min read",
    excerpt:
      "Level-crossing accidents should never be accepted as fate. The relentless pursuit to secure the 19 FF Underbridge proved that safety and connectivity save lives.",
    highlight: "Field Report",
  },
  {
    id: 5,
    title: "Youth Leadership Rooted in Humility and Service",
    punjabiTitle: "ਨੌਜਵਾਨ ਸ਼ਕਤੀ ਅਤੇ ਸੇਵਾ",
    category: "Youth & Society",
    date: "March 2026",
    publication: "Leadership Journal",
    readTime: "5 min read",
    excerpt:
      "True leadership is not about title or prestige—it begins with listening, grows through discipline, and earns public trust through consistent ground-level action.",
    highlight: "Editorial",
  },
  {
    id: 6,
    title: "Sabka Saath, Sabka Vikas: Social Harmony in Modern Rajasthan",
    punjabiTitle: "ਸਮਾਜਿਕ ਏਕਤਾ ਅਤੇ ਵਿਕਾਸ",
    category: "Social Harmony",
    date: "January 2026",
    publication: "Minority Morcha Perspectives",
    readTime: "6 min read",
    excerpt:
      "Ensuring that government welfare programs, educational scholarships, and self-employment initiatives saturate minority and marginalized communities without discrimination.",
    highlight: "Community",
  },
]

export default function ThoughtsPage() {
  return (
    <div className="bg-[var(--page-bg)] min-h-screen pt-32 pb-24">
      <SchemaMarkup type="Person" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — Same Theme as Media Page */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display font-semibold text-saffron text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4" />
            Editorial Perspectives &amp; Writing
          </span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-green dark:text-emerald-400">
            Thoughts &amp; Published Columns
          </h1>
          <p className="mt-4 text-base sm:text-lg text-fg/75 font-sans leading-relaxed">
            Reflections, editorial columns, and policy thoughts by Vijender Pal Singh on grassroots governance, agricultural progress, and the national journey towards Viksit Bharat 2047.
          </p>
        </header>

        {/* Featured Column Banner */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-green/10 via-saffron/10 to-green/5 border border-green/20 dark:border-white/10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-green text-white text-xs font-mono font-semibold">
                Weekly Column
              </span>
              <span className="text-xs font-bold text-saffron-dark dark:text-saffron font-sans">
                Rajasthan Patrika
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-green dark:text-white">
              Gallan Baatan (ਗੱਲਾਂ ਬਾਤਾਂ)
            </h2>
            <p className="text-sm sm:text-base text-fg/75 mt-2 font-sans">
              Authored by Vijender Pal Singh in Rajasthan Patrika, exploring regional heritage, civic issues, farming realities, and border-district narratives in the regional dialect.
            </p>
          </div>
          <div className="px-5 py-3 rounded-2xl bg-white dark:bg-black/30 border border-black/10 dark:border-white/10 text-xs font-mono text-fg/70 self-start md:self-auto shrink-0">
            Over 100+ Published Editions
          </div>
        </div>

        {/* 3 in a Row Grid Matching Media Page Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {THOUGHTS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="card-editorial p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#141B2D] border border-black/10 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-saffron/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Category, Date, Highlight */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-black/5 dark:border-white/10 text-xs">
                  <span className="px-2.5 py-1 rounded-full font-semibold bg-saffron/10 text-saffron-dark dark:text-saffron">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-fg/50 font-mono text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-saffron" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Subtitle / Punjabi Title */}
                <span className="text-xs font-mono font-medium text-green dark:text-emerald-400 block mb-1">
                  {article.punjabiTitle}
                </span>

                {/* Article Headline */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-fg dark:text-white mb-3 group-hover:text-saffron transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-fg/70 dark:text-slate-300 font-sans leading-relaxed line-clamp-4">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Attribution */}
              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-fg/80 dark:text-white block font-sans">
                    Vijender Pal Singh
                  </span>
                  <span className="text-[11px] text-fg/50 font-mono block">
                    {article.publication}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-saffron/10 text-saffron flex items-center justify-center group-hover:bg-saffron group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
