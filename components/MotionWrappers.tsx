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
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-[-15%] w-[130%] h-[130%]">
        {children}
      </motion.div>
    </div>
  )
}

export function KineticHeadline({ text, highlightText }: { text: string, highlightText?: string }) {
  const letters = Array.from(text)
  
  return (
    <div className="flex flex-wrap overflow-hidden leading-[1.1] pb-2">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotate: 10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.5, delay: i * 0.04, type: "spring", stiffness: 100 }}
          className={letter === " " ? "w-4 md:w-8" : ""}
        >
          {letter}
        </motion.span>
      ))}
      {highlightText && (
        <div className="w-full flex overflow-hidden pt-2">
          {Array.from(highlightText).map((letter, i) => (
            <motion.span
              key={`h-${i}`}
              initial={{ opacity: 0, y: 50, rotate: 10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: (letters.length + i) * 0.04, type: "spring", stiffness: 100 }}
              className={`text-saffron ${letter === " " ? "w-4 md:w-8" : ""}`}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  )
}
