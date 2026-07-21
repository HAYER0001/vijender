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
  { label: "About Me", href: "/journey" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Connect", href: "/connect" },
]

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
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/919414089131?text=Hello"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-magnetic
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9933] text-white text-sm font-semibold hover:bg-[#E67E22] transition-all duration-300 font-[family-name:var(--font-mukta)]"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Connect
                  </motion.a>
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
                href="https://wa.me/919414089131?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FF9933] text-white font-semibold text-sm hover:bg-[#E67E22] transition-all font-[family-name:var(--font-mukta)]"
              >
                <Phone className="w-4 h-4" />
                Connect on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
