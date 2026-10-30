"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react"

const SITEMAP = [
  { label: "Home", href: "/" },
  { label: "About", href: "/journey" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Thoughts", href: "/thoughts" },
  { label: "Game 🎮", href: "/game" },
  { label: "Connect", href: "/connect" },
]

export function GlobalFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#0F523A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center shrink-0 relative">
                <Image
                  src="/images/bjp-logo.png"
                  alt="BJP Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-[#FF9933]">
                  Vijender Pal Singh
                </h3>
                <p className="text-white/50 text-xs">3 CC Padampur</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              BJP Karyakarta since 1993. Working for the people of Sri Karanpur
              with dedication, transparency, and grassroots connect.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-[#FF9933] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {SITEMAP.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#FF9933] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-[#FF9933] mb-5">
              Connect
            </h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF9933] shrink-0" />
                <a
                  href="https://wa.me/919414089131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9933] transition-colors"
                >
                  WhatsApp (94140 89131)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF9933] shrink-0" />
                <Link href="/connect" className="hover:text-[#FF9933] transition-colors">
                  Share Your Grievance
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF9933] shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps?client=firefox-b-d&hs=XGIq&sca_esv=d51e216af84ce14e&biw=1714&bih=861&output=search&q=doaba+3+cc+map&source=lnms&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832SMIiTl3t-JZ4hGJOxPbHYTU1b4eMHgVSc8-UQwsgjK0L88zb7NQVKaqOIid6xblVPsFCsonwP2ZqobUjAc1lKQupAGVpljI2sU0bm19deOpHreKNvP-HxL68mk85WOrfe8Adt8SoqPWqkg39aIKJVBAckLM9gPOtbaSCYH7Qo8Qx3x7kw&entry=mc&ved=1t:200715&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9933] transition-colors"
                >
                  Sri Karanpur, Rajasthan
                </a>
              </li>
            </ul>
            
            <div className="flex items-center justify-between gap-3 mt-8 mb-5">
              <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-[#FF9933]">
                Social Media
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/vijenderpals3cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook (@vijenderpals3cc)"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-white/80 transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                  </svg>
                </a>
                <a
                  href="https://www.x.com/vijenderpals3cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  title="X Twitter (@vijenderpals3cc)"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-black hover:text-white flex items-center justify-center text-white/80 transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/vijenderpals3cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram (@vijenderpals3cc)"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white flex items-center justify-center text-white/80 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://wa.me/919414089131?text=Hello%20Vijender%20Pal%20Singh%20Ji"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp (94140 89131)"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-white/80 transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center shrink-0 relative">
                <Image
                  src="/images/bjp-logo.png"
                  alt="BJP Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-display font-semibold text-sm">
                  Bharatiya Janata Party
                </p>
                <p className="text-white/50 text-xs">Official karyakarta</p>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              This is an individual karyakarta&apos;s public service page. Not
              an official BJP website.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Vijender Pal Singh. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/connect" className="hover:text-[#FF9933] transition-colors">
              Contact
            </Link>
            <span className="text-white/20">·</span>
            <span>Sri Karanpur, Rajasthan</span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-1 text-white/60 hover:text-[#FF9933] transition-colors"
              aria-label="Scroll to top"
            >
              Back to top
              <ArrowUp className="w-3 h-3" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
