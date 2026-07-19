"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react"

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-green text-white pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-xl font-bold text-saffron mb-3">
              Vijender Pal Singh
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              3 CC Padampur, Sri Karanpur
              <br />
              BJP Karyakarta Since 1993
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-saffron mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-saffron text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-saffron mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-saffron" />
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-saffron transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-saffron" />
                <span>Connect via form</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                <span>Sri Karanpur, Rajasthan</span>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
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
                <p className="text-white/50 text-xs">
                  Official karyakarta
                </p>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              This is an individual karyakarta&apos;s public service page. Not
              an official BJP website.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Vijender Pal Singh. All rights
            reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-1 text-white/70 hover:text-saffron transition-colors"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
