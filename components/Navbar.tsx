"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About Me", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Connect", href: "#connect" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mql.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const name = "VIJENDER PAL SINGH"

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FDFBF7]/80 backdrop-blur-xl border-b border-[#FF9933]/10 shadow-sm"
            : "bg-[#FDFBF7]/50 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center relative bg-white/10 shrink-0">
                <Image
                  src="/images/bjp-logo.png"
                  alt="BJP Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                {reduced ? (
                  <span className="text-sm font-semibold tracking-widest text-[#1F2937] font-[family-name:var(--font-khand)]">
                    {name}
                  </span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-sm font-semibold tracking-widest text-[#1F2937] font-[family-name:var(--font-khand)]"
                  >
                    {name.split("").map((char, i) => (
                      <motion.span
                        key={`${char}-${i}`}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: i * 0.025,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                )}
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-magnetic
                  className="relative text-sm font-medium text-[#4A5568] hover:text-[#FF9933] transition-colors duration-200 font-[family-name:var(--font-mukta)]"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF9933] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="px-5 py-2 rounded-full bg-[#FF9933] text-white text-sm font-semibold hover:bg-[#E67E22] transition-all duration-300 font-[family-name:var(--font-mukta)]"
              >
                Connect on WhatsApp
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-[#4A5568] hover:text-[#FF9933] transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-16 left-4 right-4 bg-[#FDFBF7]/95 backdrop-blur-xl rounded-2xl border border-[#FF9933]/10 shadow-xl p-6">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-[#1F2937] hover:text-[#FF9933] transition-colors font-[family-name:var(--font-mukta)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 rounded-full bg-[#FF9933] text-white text-center font-semibold hover:bg-[#E67E22] transition-all font-[family-name:var(--font-mukta)]"
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
