"use client"

import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export function AnimatePresenceWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  )
}
