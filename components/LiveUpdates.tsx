"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const MOCK_UPDATES = [
  { id: 1, title: "Kisan Train Flagged Off", time: "2 hours ago", type: "Achievement" },
  { id: 2, title: "Addressed rally at Sri Karanpur", time: "5 hours ago", type: "Event" },
  { id: 3, title: "Meeting with ZRUCC officials", time: "1 day ago", type: "Meeting" }
]

export function LiveUpdates() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MOCK_UPDATES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 bg-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 font-display text-xl font-bold text-saffron tracking-wider">
            LIVE UPDATES
          </div>
          <div className="flex-1 h-12 relative overflow-hidden bg-white/10 rounded-xl px-6 py-3 border border-white/10 backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center px-6"
              >
                <span className="text-saffron text-sm font-semibold mr-3">
                  {MOCK_UPDATES[currentIndex].time}
                </span>
                <span className="text-white font-medium">
                  {MOCK_UPDATES[currentIndex].title}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
