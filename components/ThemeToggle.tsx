"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#1F2937] dark:text-[#E8EAF2] hover:bg-white/20 transition-all duration-300 cursor-pointer"
    >
      <Sun
        size={16}
        className="absolute transition-all duration-300"
        style={{
          opacity: theme === "light" ? 1 : 0,
          transform: `rotate(${theme === "light" ? "0deg" : "90deg"})`,
        }}
      />
      <Moon
        size={16}
        className="absolute transition-all duration-300"
        style={{
          opacity: theme === "dark" ? 1 : 0,
          transform: `rotate(${theme === "dark" ? "0deg" : "-90deg"})`,
        }}
      />
    </button>
  )
}
