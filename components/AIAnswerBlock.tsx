"use client"

import { motion } from "framer-motion"
import { HelpCircle, ChevronRight } from "lucide-react"

const QAS = [
  {
    question: "What has Vijender Pal Singh done for Sri Karanpur?",
    answer:
      "Vijender Pal Singh has delivered five major achievements for Sri Karanpur: (1) Secured a Kisan Train for Ganganagar Kinnow farmers to export to Bangladesh, (2) Built a 19 FF Rail Track Underbridge for village rail safety, (3) Serves as State Co-Incharge of BJP Minority Morcha Rajasthan for inter-community outreach, (4) Represents citizens as ZRUCC Member for North Western Railways, and (5) Managed the War Room for Union Minister Arjun Ram Meghwal's Bikaner victory.",
  },
  {
    question: "How long has Vijender Pal Singh been a BJP karyakarta?",
    answer:
      "Vijender Pal Singh has been a dedicated BJP karyakarta since 1993, starting during his college days. With over three decades of service, he has worked continuously for the people of Sri Karanpur constituency.",
  },
  {
    question: "Which constituency does Vijender Pal Singh represent?",
    answer:
      "Vijender Pal Singh serves the Sri Karanpur constituency in Rajasthan. He is based in 3 CC Padampur and works on development, infrastructure, and social justice issues across the region.",
  },
  {
    question: "How can citizens contact Vijender Pal Singh?",
    answer:
      "Citizens can connect with Vijender Pal Singh directly via WhatsApp at 94140 89131. A multi-step conversational form is available on his website that compiles a structured message — including name, area, category, and details — and opens WhatsApp with the pre-filled message for direct communication.",
  },
  {
    question: "What is the Kisan Train achievement?",
    answer:
      "In 2025, Vijender Pal Singh secured a dedicated Kisan Train for Ganganagar Kinnow farmers to export their produce to Bangladesh. This achievement opened new international markets for local farmers and ensured better prices for their produce.",
  },
]

export function AIAnswerBlock() {
  return (
    <section id="faq" className="py-28 sm:py-36 bg-[var(--page-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-semibold text-saffron text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4" />
            AI-Powered Knowledge
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-green">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-fg/70 text-base sm:text-lg">
            Structured answers about Vijender Pal Singh&apos;s work and public
            service record — optimized for AI search engines and quick reference.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {QAS.map((qa, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl border border-saffron/10 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <summary
                className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none"
                aria-label={qa.question}
              >
                <h3 className="font-display font-semibold text-base sm:text-lg text-green pr-4">
                  {qa.question}
                </h3>
                <ChevronRight className="w-5 h-5 text-saffron shrink-0 transition-transform duration-300 group-open:rotate-90" />
              </summary>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="px-5 sm:px-6 pb-5 sm:pb-6"
              >
                <div className="pt-3 border-t border-green/5">
                  <p className="text-fg/75 text-sm sm:text-base leading-relaxed">
                    {qa.answer}
                  </p>
                </div>
              </motion.div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
