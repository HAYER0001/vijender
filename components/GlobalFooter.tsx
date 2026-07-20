"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react"

const SITEMAP = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/journey" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF9933] to-[#FF9933]/70 flex items-center justify-center text-white font-bold text-sm font-[family-name:var(--font-khand)]">
                VP
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
                <span>Sri Karanpur, Rajasthan</span>
              </li>
            </ul>
            
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-[#FF9933] mt-8 mb-5">
              Social Media
            </h4>
            <div className="flex items-center gap-4 text-white/60">
              <a href="https://www.facebook.com/vijenderpals3cc" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9933] transition-colors">Facebook</a>
              <a href="https://www.x.com/vijenderpals3cc" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9933] transition-colors">X (Twitter)</a>
              <a href="https://www.instagram.com/vijenderpals3cc" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9933] transition-colors">Instagram</a>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center shrink-0 relative">
                <Image
                  src="/bjp-logo.png"
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
