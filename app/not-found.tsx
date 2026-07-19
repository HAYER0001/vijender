import Link from "next/link"
import { Interactive404Canvas } from "@/components/Interactive404Canvas"
import { Magnetic } from "@/components/Magnetic"

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100dvh-5rem)] flex items-center justify-center overflow-hidden">
      <Interactive404Canvas />

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 sm:p-14 shadow-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FF9933]/10 text-[#FF9933] mb-6">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-3 tracking-tight">
            404
          </h1>
          <div className="w-12 h-1 bg-[#FF9933] rounded-full mx-auto mb-5" />

          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-[family-name:var(--font-mukta)]">
            The path you are looking for has been redirected or no longer exists.
          </p>

          <div className="mt-8">
            <Magnetic>
              <Link
                href="/"
                data-magnetic
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF9933] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#E67E22] transition-all duration-300 shadow-lg shadow-[#FF9933]/25"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Return to Base
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  )
}
