"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const MIN_DISPLAY = 1200

export function SkeletonLoader() {
  const [ready, setReady] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mql.matches)
  }, [])

  useEffect(() => {
    const load = async () => {
      await Promise.all([
        new Promise<void>((resolve) => {
          if (document.readyState === "complete") {
            resolve()
          } else {
            const handler = () => {
              if (document.readyState === "complete") {
                document.removeEventListener("readystatechange", handler)
                resolve()
              }
            }
            document.addEventListener("readystatechange", handler)
          }
        }),
        new Promise((resolve) => setTimeout(resolve, MIN_DISPLAY)),
      ])
      setReady(true)
    }
    load()
  }, [])

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          key="skeleton"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[var(--page-bg)] flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#FF9933]/30 to-[#0F523A]/20 ${
                reduced ? "" : "animate-pulse"
              }`}
            />
            <div className="flex flex-col items-center gap-2">
              <div
                className={`h-3 w-48 rounded-full bg-[#FF9933]/10 ${
                  reduced ? "" : "animate-pulse"
                }`}
              />
              <div
                className={`h-2 w-32 rounded-full bg-[#FF9933]/10 ${
                  reduced ? "" : "animate-pulse"
                }`}
              />
            </div>
            <div className="flex gap-1.5 mt-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full bg-[#FF9933]/20 ${
                    reduced
                      ? ""
                      : "animate-bounce"
                  }`}
                  style={reduced ? undefined : { animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
