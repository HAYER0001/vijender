"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const MOCK_UPDATES = [
  { id: 1, title: "Grateful to the BJP leadership for appointing me as State Co-Incharge of BJP Minority Morcha...", time: "Latest on Facebook", type: "Achievement", url: "https://www.facebook.com/vijenderpals3cc" },
  { id: 2, title: "The newly constructed 19 FF Rail Track Underbridge in Sri Karanpur is now fully operational...", time: "Latest on Instagram", type: "Event", url: "https://www.instagram.com/vijenderpals3cc" },
  { id: 3, title: "Historic Kisan Train service from Ganganagar to Bangladesh now operational...", time: "Latest on X", type: "Update", url: "https://www.x.com/vijenderpals3cc" }
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
                className="absolute inset-0 flex items-center"
              >
                <a href={MOCK_UPDATES[currentIndex].url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center px-6 group hover:bg-white/5 transition-colors rounded-xl">
                  <span className="text-saffron text-sm font-semibold mr-3 whitespace-nowrap">
                    {MOCK_UPDATES[currentIndex].time}
                  </span>
                  <span className="text-white font-medium truncate group-hover:text-saffron transition-colors">
                    {MOCK_UPDATES[currentIndex].title}
                  </span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
