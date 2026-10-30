"use client"

import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ZoomIn, Shuffle, ChevronLeft, ChevronRight, Sparkles, Filter } from "lucide-react"

interface RandomizedMosaicGalleryProps {
  images: string[]
}

// Preset visual rotation angles for organic editorial collage feel
const ROTATIONS = [-1.8, 1.2, -0.8, 1.6, -1.4, 0.9, -1.1, 1.5, -0.6, 1.3]

// Presets for variable card heights & spans in the collage
const PATTERNS = [
  { aspect: "aspect-[4/5]", span: "col-span-1", offset: "mt-0" },
  { aspect: "aspect-[16/10]", span: "col-span-1 sm:col-span-2", offset: "mt-3 sm:-mt-4" },
  { aspect: "aspect-square", span: "col-span-1", offset: "mt-1" },
  { aspect: "aspect-[3/4]", span: "col-span-1", offset: "mt-4" },
  { aspect: "aspect-[4/3]", span: "col-span-1", offset: "mt-0" },
  { aspect: "aspect-[16/11]", span: "col-span-1 sm:col-span-2", offset: "mt-2" },
  { aspect: "aspect-square", span: "col-span-1", offset: "-mt-2" },
  { aspect: "aspect-[4/5]", span: "col-span-1", offset: "mt-3" },
]

export function RandomizedMosaicGallery({ images }: RandomizedMosaicGalleryProps) {
  const [photoList, setPhotoList] = useState<string[]>(images)
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const [isShuffling, setIsShuffling] = useState(false)
  const [activeFilter, setActiveFilter] = useState<"all" | "outreach" | "leaders">("all")

  // Randomize / shuffle function
  const shufflePhotos = () => {
    setIsShuffling(true)
    const shuffled = [...photoList].sort(() => Math.random() - 0.5)
    setPhotoList(shuffled)
    setTimeout(() => setIsShuffling(false), 500)
  }

  // Pre-calculate deterministic variations for each photo
  const cardData = useMemo(() => {
    return photoList.map((img, i) => {
      const pattern = PATTERNS[i % PATTERNS.length]
      const rotation = ROTATIONS[i % ROTATIONS.length]
      return {
        img,
        ...pattern,
        rotation,
      }
    })
  }, [photoList])

  // Lightbox keyboard navigation
  useEffect(() => {
    if (selectedIdx === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIdx(null)
      if (e.key === "ArrowRight") setSelectedIdx((prev) => (prev! + 1) % photoList.length)
      if (e.key === "ArrowLeft") setSelectedIdx((prev) => (prev! - 1 + photoList.length) % photoList.length)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [selectedIdx, photoList.length])

  return (
    <div className="w-full">
      {/* Gallery Controls Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-black/5 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-saffron/10 text-saffron-dark dark:text-saffron">
            {photoList.length} Moments Captured
          </span>
          <span className="text-xs text-fg/50 hidden sm:inline font-sans">
            • Curated Grassroots Mosaic
          </span>
        </div>

        {/* Shuffle & Filter Controls */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            onClick={shufflePhotos}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-green text-white hover:bg-green-light text-xs sm:text-sm font-semibold shadow-sm transition-all ${
              isShuffling ? "animate-pulse" : ""
            }`}
            title="Randomize placement for an organic editorial collage"
          >
            <Shuffle className={`w-4 h-4 ${isShuffling ? "animate-spin" : ""}`} />
            <span>Shuffle Placement</span>
          </motion.button>
        </div>
      </div>

      {/* Organic Asymmetrical Mosaic Collage */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7"
      >
        {cardData.map((item, idx) => (
          <motion.div
            layout
            key={item.img}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "60px" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
              delay: (idx % 8) * 0.05,
            }}
            whileHover={{
              scale: 1.03,
              rotate: 0,
              zIndex: 20,
              transition: { duration: 0.25 },
            }}
            style={{
              rotate: `${item.rotation}deg`,
            }}
            onClick={() => setSelectedIdx(idx)}
            className={`group relative cursor-pointer ${item.span} ${item.offset} rounded-3xl p-2.5 sm:p-3 bg-white dark:bg-[#141B2D] border border-black/10 dark:border-white/10 shadow-md hover:shadow-2xl transition-all duration-300`}
          >
            {/* Polaroid / Print Image Container */}
            <div className={`relative w-full ${item.aspect} rounded-2xl overflow-hidden bg-black/5`}>
              <Image
                src={item.img}
                alt="Grassroots moment with Vijender Pal Singh"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Hover overlay with zoom icon and badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-green/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5">
                <div className="self-end">
                  <div className="w-9 h-9 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white shadow-sm">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-saffron font-bold inline-block mb-1">
                    Grassroots
                  </span>
                  <p className="text-xs sm:text-sm font-semibold truncate font-sans">
                    Sri Karanpur · Public Outreach
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle bottom caption ribbon */}
            <div className="pt-2 px-1 flex items-center justify-between text-[11px] text-fg/50 dark:text-white/40 font-mono">
              <span className="truncate">Vijender Pal Singh</span>
              <span className="text-saffron-dark dark:text-saffron font-bold">#{idx + 1}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md select-none"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-20"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIdx((prev) => (prev! - 1 + photoList.length) % photoList.length)
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-saffron text-white flex items-center justify-center transition-all z-20"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIdx((prev) => (prev! + 1) % photoList.length)
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-saffron text-white flex items-center justify-center transition-all z-20"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter badge */}
            <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-mono z-20">
              {selectedIdx + 1} / {photoList.length}
            </div>

            {/* Main Lightbox Image Container */}
            <motion.div
              key={selectedIdx}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="relative max-w-5xl w-full max-h-[85vh] h-[75vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photoList[selectedIdx]}
                alt="Enlarged photo"
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
