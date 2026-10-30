"use client"

import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ZoomIn, ChevronLeft, ChevronRight, Newspaper, Calendar, CheckCircle } from "lucide-react"

interface MediaPressGridProps {
  images: string[]
}

export function MediaPressGrid({ images }: MediaPressGridProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const [selectedYear, setSelectedYear] = useState<string>("all")

  // Parse media items from image filenames
  const parsedItems = useMemo(() => {
    return images.map((img) => {
      const filename = img.split("/").pop() || ""
      const cleanName = decodeURIComponent(filename.replace(/\.(jpg|jpeg|png)$/i, ""))

      // Extract year (matches 4 digits like 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026 or 2-digit years like -20 or -21)
      const yearMatch = cleanName.match(/\b(201\d|202\d)\b/) || cleanName.match(/[-_](\d{2})\b/)
      let year = "Archive"
      if (yearMatch) {
        year = yearMatch[1].length === 2 ? `20${yearMatch[1]}` : yearMatch[1]
      }

      // Extract publication name
      let pub = cleanName
        .replace(/\b(201\d|202\d)\b/g, "")
        .replace(/\b\d{1,2}[-_.]\d{1,2}[-_.]\d{2,4}\b/g, "")
        .replace(/[-_]/g, " ")
        .trim()
      if (!pub || pub.length < 3) pub = "Regional Press"

      return {
        src: img,
        filename,
        title: pub,
        year,
      }
    })
  }, [images])

  // Extract unique available years for filter tabs
  const availableYears = useMemo(() => {
    const years = new Set<string>()
    parsedItems.forEach((item) => {
      if (item.year !== "Archive" && parseInt(item.year) >= 2018 && parseInt(item.year) <= 2026) {
        years.add(item.year)
      }
    })
    return Array.from(years).sort().reverse()
  }, [parsedItems])

  // Filter items based on year
  const filteredItems = useMemo(() => {
    if (selectedYear === "all") return parsedItems
    return parsedItems.filter((item) => item.year === selectedYear)
  }, [parsedItems, selectedYear])

  // Lightbox keyboard navigation
  useEffect(() => {
    if (selectedIdx === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIdx(null)
      if (e.key === "ArrowRight") setSelectedIdx((prev) => (prev! + 1) % filteredItems.length)
      if (e.key === "ArrowLeft") setSelectedIdx((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [selectedIdx, filteredItems.length])

  return (
    <div className="w-full">
      {/* Year Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-5 border-b border-black/5 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Newspaper className="w-4 h-4 text-saffron" />
          <span className="text-sm font-semibold text-fg/80 font-sans">
            Press Archive ({filteredItems.length} Clippings)
          </span>
        </div>

        {/* Year filter pills with reduced subtle year font */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setSelectedYear("all")}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
              selectedYear === "all"
                ? "bg-green text-white shadow-sm"
                : "bg-black/5 dark:bg-white/5 text-fg/60 hover:text-fg"
            }`}
          >
            All Years
          </button>
          {availableYears.map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedYear === yr
                  ? "bg-saffron text-white shadow-sm"
                  : "bg-black/5 dark:bg-white/5 text-fg/60 hover:text-fg"
              }`}
            >
              {yr}
            </button>
          ))}
        </div>
      </div>

      {/* Strictly 3 in a row grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "60px" }}
            transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
            onClick={() => setSelectedIdx(idx)}
            className="group card-editorial p-0 overflow-hidden flex flex-col bg-white dark:bg-[#141B2D] border border-black/10 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-saffron/40 transition-all duration-300 cursor-pointer rounded-2xl"
          >
            {/* Top Bar: Reduced year font & Vijender Pal Singh badge */}
            <div className="px-4 py-2.5 bg-black/5 dark:bg-white/5 flex items-center justify-between border-b border-black/5 dark:border-white/10 text-xs">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-saffron shrink-0" />
                {/* Year font reduced to subtle clean style */}
                <span className="font-mono text-[11px] font-semibold text-fg/60 dark:text-white/60">
                  {item.year}
                </span>
              </div>
              {/* Clean Vijender Pal Singh tag */}
              <div className="flex items-center gap-1 text-[11px] font-medium text-green dark:text-emerald-400 bg-green/10 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
                <span>Vijender Pal Singh</span>
                <CheckCircle className="w-3 h-3 text-saffron shrink-0" />
              </div>
            </div>

            {/* Clipping Image with Zoom on Hover */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-base text-fg dark:text-white truncate group-hover:text-saffron transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-fg/50 dark:text-white/40 mt-1 line-clamp-1 font-sans">
                  Published press coverage · Sri Karanpur
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-fg/40">
                <span>Clipping #{idx + 1}</span>
                <span className="text-saffron font-medium group-hover:underline">Click to read →</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md select-none"
            onClick={() => setSelectedIdx(null)}
          >
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-20"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIdx((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length)
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-saffron text-white flex items-center justify-center transition-all z-20"
              aria-label="Previous clipping"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIdx((prev) => (prev! + 1) % filteredItems.length)
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-saffron text-white flex items-center justify-center transition-all z-20"
              aria-label="Next clipping"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute top-6 left-6 flex items-center gap-2 z-20">
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-mono">
                {selectedIdx + 1} / {filteredItems.length}
              </span>
              <span className="px-3 py-1 rounded-full bg-saffron text-white text-xs font-semibold">
                {filteredItems[selectedIdx].year}
              </span>
            </div>

            <motion.div
              key={selectedIdx}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="relative max-w-5xl w-full max-h-[85vh] h-[75vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/40"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredItems[selectedIdx].src}
                alt={filteredItems[selectedIdx].title}
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
