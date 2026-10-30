"use client"

import { motion } from "framer-motion"
import { ExternalLink, CheckCircle2 } from "lucide-react"

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    handle: "@vijenderpals3cc",
    url: "https://www.facebook.com/vijenderpals3cc",
    color: "#1877F2",
    bgHover: "hover:bg-[#1877F2] hover:border-[#1877F2]",
    textHover: "group-hover:text-white",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    handle: "@vijenderpals3cc",
    url: "https://www.x.com/vijenderpals3cc",
    color: "#000000",
    bgHover: "hover:bg-black hover:border-black",
    textHover: "group-hover:text-white",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@vijenderpals3cc",
    url: "https://www.instagram.com/vijenderpals3cc",
    color: "#E1306C",
    bgHover: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent",
    textHover: "group-hover:text-white",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+91 94140 89131",
    url: "https://wa.me/919414089131?text=Hello%20Vijender%20Pal%20Singh%20Ji",
    color: "#25D366",
    bgHover: "hover:bg-[#25D366] hover:border-[#25D366]",
    textHover: "group-hover:text-white",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    ),
  },
]

export function LiveSocialFeed() {
  return (
    <section id="social" className="py-16 sm:py-20 bg-gradient-to-r from-saffron/5 via-cream/80 to-green/5 border-y border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-white/80 dark:bg-black/30 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-saffron/20 shadow-md">
          {/* Left: Text Info */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/10 text-saffron-dark dark:text-saffron text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
              Direct Official Connect
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-green dark:text-emerald-400">
              Social Media Channels
            </h2>
            <p className="mt-2 text-fg/75 font-sans text-base sm:text-lg">
              Follow Vijender Pal Singh on official platforms for real-time announcements, grassroots updates, and direct public dialogue across Sri Karanpur.
            </p>
          </div>

          {/* Right: Actual Branded Social Icons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {SOCIAL_LINKS.map((item) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className={`group flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-sm transition-all duration-300 ${item.bgHover}`}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors group-hover:text-white"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className={`font-sans font-bold text-sm text-fg dark:text-white transition-colors ${item.textHover}`}>
                      {item.name}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-saffron shrink-0" />
                  </div>
                  <span className={`text-xs text-fg/50 dark:text-white/50 block font-mono transition-colors ${item.textHover}`}>
                    {item.handle}
                  </span>
                </div>
                <ExternalLink className={`w-3.5 h-3.5 text-fg/30 transition-colors ${item.textHover} ml-1`} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
