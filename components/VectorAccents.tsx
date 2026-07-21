"use client"

import { motion } from "framer-motion"

export function VectorAccentsBg() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Wavy Line 1 */}
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-[20%] left-[-5%] w-[40%] text-saffron/40 stroke-current"
        viewBox="0 0 400 100"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
      >
        <path d="M0,50 Q50,0 100,50 T200,50 T300,50 T400,50" />
      </motion.svg>

      {/* Stylized Star/Lotus shape */}
      <motion.svg
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", delay: 0.5 }}
        className="absolute bottom-[20%] left-[10%] w-16 h-16 text-green/20 fill-current"
        viewBox="0 0 100 100"
      >
        <path d="M50 0 C55 20 80 45 100 50 C80 55 55 80 50 100 C45 80 20 55 0 50 C20 45 45 20 50 0 Z" />
      </motion.svg>

      {/* Abstract Doodle */}
      <motion.svg
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute top-[15%] right-[15%] w-24 h-24 text-saffron-dark/30 stroke-current"
        viewBox="0 0 100 100"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <circle cx="50" cy="50" r="40" strokeDasharray="10 10" />
        <path d="M30 50 L70 50 M50 30 L50 70" />
      </motion.svg>

      {/* Bottom right wave */}
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
        className="absolute bottom-[5%] right-[-5%] w-[50%] text-green-light stroke-current"
        viewBox="0 0 500 150"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
      >
        <path d="M0,75 C100,150 200,0 300,75 C400,150 500,0 500,75" />
      </motion.svg>
    </div>
  )
}

export function VectorAccentsFg() {
  return (
    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Hand-drawn underline crossing over the portrait */}
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.9 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        className="absolute top-[60%] left-[10%] w-[35%] text-saffron drop-shadow-md stroke-current"
        viewBox="0 0 300 50"
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
      >
        <path d="M0,25 C100,5 200,45 300,25" />
      </motion.svg>

      {/* Floating stars over the image */}
      <motion.svg
        initial={{ scale: 0, opacity: 0, rotate: 45 }}
        animate={{ scale: 1, opacity: 1, rotate: 15 }}
        transition={{ duration: 0.8, type: "spring", delay: 1.2 }}
        className="absolute top-[25%] left-[25%] w-10 h-10 text-saffron-dark fill-current drop-shadow-lg"
        viewBox="0 0 100 100"
      >
        <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
      </motion.svg>
    </div>
  )
}

