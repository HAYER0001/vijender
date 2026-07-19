"use client"

import { MessageCircle } from "lucide-react"

export function StickyContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-green/95 backdrop-blur-md border-t border-green/20 pb-2">
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 py-3 px-4 text-white font-semibold text-sm active:bg-green-light transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        Get in Touch
      </a>
    </div>
  )
}
