"use client"

import { Suspense, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Phone, ArrowRight } from "lucide-react"
import { Magnetic } from "./Magnetic"
import { ThemeToggle } from "./ThemeToggle"
import { PredictiveSearch } from "./PredictiveSearch"

const ROUTES = [
  { label: "Home", href: "/" },
  { label: "About", href: "/journey" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Thoughts", href: "/thoughts" },
  { label: "Game 🎮", href: "/game" },
  { label: "Connect", href: "/connect" },
]

export function AnimatedWhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      href="https://wa.me/919414089131?text=Hello%20Vijender%20Pal%20Singh%20Ji"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Connect directly on WhatsApp (94140 89131)"
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/30 hover:shadow-lg hover:shadow-[#25D366]/50 transition-all group shrink-0 ${className}`}
    >
      {/* Animated glowing pulse ring */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75 duration-1000" />
      <span className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-30 group-hover:scale-125 transition-transform duration-300" />
      {/* Official WhatsApp SVG Icon */}
      <svg
        className="w-5 h-5 fill-current relative z-10 transition-transform duration-300 group-hover:rotate-12"
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    </motion.a>
  )
}

export function GlobalNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
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

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const name = "VIJENDER PAL SINGH"

  return (
    <>
      <nav
              className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              scrolled
                ? "bg-[var(--page-bg)]/80 backdrop-blur-xl border-b border-[var(--page-border)] shadow-sm"
                : "bg-[var(--page-bg)]/50 backdrop-blur-sm"
            }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-3 group">
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
                  <span className="text-sm font-semibold tracking-widest text-[var(--page-fg)] font-[family-name:var(--font-khand)]">
                    {name}
                  </span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-sm font-semibold tracking-widest text-[var(--page-fg)] font-[family-name:var(--font-khand)]"
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
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {ROUTES.map((route) => {
                const isActive = pathname === route.href
                return (
                  <Magnetic key={route.href}>
                    <Link
                      href={route.href}
                      data-magnetic
                      className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 font-[family-name:var(--font-mukta)] ${
                        isActive
                          ? "text-[#FF9933] bg-[#FF9933]/5"
                          : "text-[#4A5568] hover:text-[#FF9933] hover:bg-[#FF9933]/5"
                      }`}
                    >
                      {route.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[#FF9933] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </Magnetic>
                )
              })}
              <div className="flex items-center gap-2 ml-3 pl-3 border-l border-[var(--page-border)]">
                <Suspense fallback={null}><PredictiveSearch /></Suspense>
                <div className="flex items-center gap-2 pl-2 border-l border-[var(--page-border)]">
                  <ThemeToggle />
                  <AnimatedWhatsAppIcon />
                </div>
              </div>
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
          <div className="absolute top-16 left-4 right-4 bg-[var(--page-bg)]/95 backdrop-blur-xl rounded-2xl border border-[var(--page-border)] shadow-xl p-6">
            <div className="mb-4">
              <Suspense fallback={null}><PredictiveSearch /></Suspense>
            </div>
            <div className="flex flex-col gap-2">
              {ROUTES.map((route) => {
                const isActive = pathname === route.href
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors font-[family-name:var(--font-mukta)] ${
                      isActive
                        ? "bg-[#FF9933]/10 text-[#FF9933]"
                        : "text-[var(--page-fg)] hover:bg-[#FF9933]/5 hover:text-[#FF9933]"
                    }`}
                  >
                    {route.label}
                  </Link>
                )
              })}
              <div className="flex items-center gap-3 mt-3 px-4 py-2">
                <span className="text-xs font-medium text-[var(--page-fg)]/60 font-[family-name:var(--font-mukta)]">
                  Theme
                </span>
                <ThemeToggle />
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919414089131?text=Hello%20Vijender%20Pal%20Singh%20Ji"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-md hover:bg-[#20ba59] transition-all font-[family-name:var(--font-mukta)]"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
