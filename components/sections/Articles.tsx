"use client"
import { ExternalLink, BookOpen } from "lucide-react"

const articles = [
  {
    title: "The Future of Sri Karanpur's Agriculture",
    date: "July 2026",
    excerpt: "Discussing modern farming techniques and how direct export access is changing the game for our Kinnow farmers.",
    link: "#"
  },
  {
    title: "Youth and Governance",
    date: "June 2026",
    excerpt: "Why the next generation of leadership must blend technology with deep grassroots connection.",
    link: "#"
  },
  {
    title: "Infrastructure as a Human Right",
    date: "May 2026",
    excerpt: "A deep dive into how securing the 19 FF Rail Track Underbridge saved lives and connected communities.",
    link: "#"
  }
]

export function Articles() {
  return (
    <section className="py-24 bg-[var(--page-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-display font-semibold text-saffron text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4" />
            Gllan Battan Column
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-green">
            Latest Articles & Thoughts
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <a 
              key={i} 
              href={article.link}
              className="card-editorial flex flex-col group hover:-translate-y-2 !p-8"
            >
              <div className="flex-1">
                <span className="text-sm font-semibold text-fg/50 mb-4 block">
                  {article.date}
                </span>
                <h3 className="font-display text-2xl font-bold text-fg mb-4 group-hover:text-saffron transition-colors">
                  {article.title}
                </h3>
                <p className="text-fg/70 font-eagle leading-relaxed mb-8">
                  {article.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t-4 border-[var(--page-border)] mt-auto">
                <span className="font-bold text-sm tracking-wider uppercase">Read Article</span>
                <ExternalLink className="w-5 h-5 text-saffron" strokeWidth={3} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
