"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function FadeUpReveal({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxImage({ children, offset = 100, className = "" }: { children: React.ReactNode, offset?: number, className?: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])
  
  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  )
}

export function KineticHeadline({ text, highlightText }: { text: string, highlightText?: string }) {
  // Split by words instead of letters to preserve Hindi/Devanagari ligatures
  const words = text.split(" ")
  const highlightWords = highlightText ? highlightText.split(" ") : []
  
  return (
    <div className="flex flex-wrap justify-center lg:justify-start overflow-hidden leading-[1.1] pb-2">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotate: 10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
          className="inline-block mr-4 md:mr-6"
        >
          {word}
        </motion.span>
      ))}
      {highlightWords.length > 0 && (
        <div className="w-full flex justify-center lg:justify-start overflow-hidden pt-2">
          {highlightWords.map((word, i) => (
            <motion.span
              key={`h-${i}`}
              initial={{ opacity: 0, y: 50, rotate: 10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: (words.length + i) * 0.1, type: "spring", stiffness: 100 }}
              className="inline-block text-saffron mr-4 md:mr-6"
            >
              {word}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  )
}
