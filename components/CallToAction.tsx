import Link from "next/link"
import { MessageCircle, ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green via-green to-green-dark pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-saffron/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-saffron/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="font-display font-semibold text-saffron text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Connect Directly
          </span>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Have a Concern or Suggestion?
          </h2>

          <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
            Vijender Pal Singh believes in direct, open communication with every
            citizen of Sri Karanpur. Share your grievance, suggestion, or
            greeting — he answers his own phone.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/connect"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-saffron text-white font-display font-bold text-sm tracking-wide hover:bg-saffron-dark transition-colors shadow-xl shadow-saffron/25 active:scale-[0.97]"
            >
              <MessageCircle className="w-5 h-5" />
              Share Your Grievance
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-white/10 text-white font-display font-bold text-sm tracking-wide border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Direct
            </a>
          </div>

          <p className="mt-6 text-white/40 text-xs font-body">
            No data stored. Your message goes directly to Vijender Pal Singh&apos;s WhatsApp.
          </p>
        </div>
      </div>
    </section>
  )
}
