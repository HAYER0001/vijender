"use client"

import { useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageCircle,
  ChevronRight,
  ArrowLeft,
  Check,
  Send,
  User,
  MapPin,
  Tag,
  FileText,
} from "lucide-react"

const AREAS = [
  "Padampur", "Sri Karanpur City", "Ganganagar", "Anupgarh",
  "Raisinghnagar", "Suratgarh", "Vijainagar", "Gharsana",
  "Kesrisinghpur", "Sadulshahar", "Other",
]

const CATEGORIES = [
  { value: "development", label: "Development Project" },
  { value: "grievance", label: "Grievance / Complaint" },
  { value: "greeting", label: "Personal Greeting" },
  { value: "meeting", label: "Meeting Request" },
]

const stepIcons = [User, MapPin, Tag, FileText]

const stepLabels = [
  "Your Name",
  "Your Area",
  "Query Category",
  "Your Message",
]

interface FormData {
  name: string
  area: string
  category: string
  message: string
}

const INITIAL: FormData = { name: "", area: "", category: "", message: "" }

function validateStep(step: number, data: FormData): boolean {
  if (step === 0) return data.name.trim().length >= 2
  if (step === 1) return data.area.length > 0
  if (step === 2) return data.category.length > 0
  if (step === 3) return data.message.trim().length >= 10
  return false
}

export function ConversationalForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(INITIAL)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const update = useCallback(<K extends keyof FormData>(
    key: K, value: FormData[K]
  ) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }, [])

  const canProceed = validateStep(step, data)

  const goNext = useCallback(() => {
    if (!canProceed) return
    if (step < 3) {
      setDirection(1)
      setStep((s) => s + 1)
    }
  }, [canProceed, step])

  const goBack = useCallback(() => {
    if (step > 0) {
      setDirection(-1)
      setStep((s) => s - 1)
    }
  }, [step])

  const handleSubmit = useCallback(() => {
    if (!validateStep(3, data)) return
    setSubmitted(true)
    const text = `Name: ${data.name}%0AArea: ${data.area}%0ACategory: ${data.category}%0AMessage: ${data.message}`
    const url = `https://wa.me/91XXXXXXXXXX?text=${text}`
    window.open(url, "_blank")
  }, [data])

  const resetForm = useCallback(() => {
    setData(INITIAL)
    setStep(0)
    setSubmitted(false)
  }, [])

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({
      x: d > 0 ? -60 : 60,
      opacity: 0,
    }),
  }

  if (submitted) {
    return (
      <section id="contact" className="py-28 sm:py-36 bg-cream/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
          >
            <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-green mb-3">
              Redirecting to WhatsApp
            </h3>
            <p className="text-fg/70 text-base mb-8">
              Your message has been compiled. WhatsApp will open with a
              pre-filled message to Vijender Pal Singh.
            </p>
            <button
              onClick={resetForm}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-saffron text-white font-semibold text-sm hover:bg-saffron-dark transition-colors shadow-lg shadow-saffron/20"
            >
              <Send className="w-4 h-4" />
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 bg-[#FDFBF7] overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-saffron/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-green/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-display font-semibold text-saffron text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Share Your Grievance
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-green">
            Connect with Vijender Pal Singh
          </h2>
          <p className="mt-4 text-fg/70 text-base sm:text-lg">
            Have a concern, suggestion, or greeting? Share it directly via
            WhatsApp — he answers his own phone.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-saffron/10 shadow-xl shadow-saffron/5 p-6 sm:p-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                {stepIcons.map((Icon, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-400 ${
                      i === step
                        ? "bg-saffron text-white shadow-md shadow-saffron/20 scale-110"
                        : i < step
                          ? "bg-green/10 text-green"
                          : "bg-green/5 text-fg/30"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                ))}
              </div>
              <span className="font-display text-xs font-semibold text-fg/40 tracking-wider">
                {step + 1} / 4
              </span>
            </div>

            <div className="min-h-[260px] sm:min-h-[220px] flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full"
                >
                  <p className="font-display text-lg sm:text-xl font-semibold text-green mb-6">
                    {step === 0 && "What is your name?"}
                    {step === 1 && "Which area of Sri Karanpur are you from?"}
                    {step === 2 && "Select the category of your query:"}
                    {step === 3 && "Write down your message details..."}
                  </p>

                  {step === 0 && (
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fg/30" />
                      <input
                        ref={inputRef as React.Ref<HTMLInputElement>}
                        type="text"
                        value={data.name}
                        onChange={(e) => update("name", e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && goNext()}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-green/10 bg-white focus:border-saffron/40 focus:ring-2 focus:ring-saffron/10 outline-none text-fg text-base transition-all"
                        autoFocus
                      />
                    </div>
                  )}

                  {step === 1 && (
                    <div className="flex flex-wrap gap-2">
                      {AREAS.map((area) => (
                        <button
                          key={area}
                          onClick={() => update("area", area)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            data.area === area
                              ? "bg-saffron text-white shadow-md shadow-saffron/20"
                              : "bg-cream/60 text-fg/70 hover:bg-saffron/10 hover:text-saffron border border-green/5"
                          }`}
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="grid sm:grid-cols-2 gap-3">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.value}
                          onClick={() => update("category", cat.value)}
                          className={`p-4 rounded-xl text-left transition-all border ${
                            data.category === cat.value
                              ? "bg-saffron/5 border-saffron/30 text-green shadow-sm"
                              : "bg-white border-green/5 text-fg/70 hover:border-saffron/20 hover:bg-saffron/[0.02]"
                          }`}
                        >
                          <span className="font-display font-semibold text-sm">
                            {cat.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 3 && (
                    <div className="relative">
                      <textarea
                        ref={textareaRef}
                        value={data.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Describe your query, suggestion, or grievance in detail..."
                        rows={4}
                        className="w-full p-4 rounded-xl border border-green/10 bg-white focus:border-saffron/40 focus:ring-2 focus:ring-saffron/10 outline-none text-fg text-base transition-all resize-none"
                        autoFocus
                      />
                      <p className="mt-2 text-xs text-fg/40 text-right">
                        {data.message.length} char{data.message.length !== 1 ? "s" : ""}
                        {data.message.trim().length > 0 && data.message.trim().length < 10 && (
                          <span className="text-saffron ml-1">
                            (min 10 chars)
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-green/5">
              <button
                onClick={goBack}
                disabled={step === 0}
                className={`flex items-center gap-1.5 text-sm font-medium transition-all ${
                  step === 0
                    ? "text-fg/20 cursor-not-allowed"
                    : "text-fg/50 hover:text-saffron"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              {step < 3 ? (
                <button
                  onClick={goNext}
                  disabled={!canProceed}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    canProceed
                      ? "bg-saffron text-white shadow-md shadow-saffron/20 hover:bg-saffron-dark active:scale-[0.97]"
                      : "bg-green/5 text-fg/30 cursor-not-allowed"
                  }`}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    canProceed
                      ? "bg-green text-white shadow-md shadow-green/20 hover:bg-green-light active:scale-[0.97]"
                      : "bg-green/5 text-fg/30 cursor-not-allowed"
                  }`}
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </button>
              )}
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-fg/40 leading-relaxed">
            Your message will be sent directly to Vijender Pal Singh&apos;s
            WhatsApp. No data is stored on this website.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-xl border-t border-saffron/10 px-4 py-3 flex items-center justify-between shadow-2xl">
        <span className="font-display text-xs text-fg/60 tracking-wider">
          {stepLabels[step]}
        </span>
        {step < 3 ? (
          <button
            onClick={goNext}
            disabled={!canProceed}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              canProceed
                ? "bg-saffron text-white shadow-md shadow-saffron/20"
                : "bg-green/5 text-fg/30 cursor-not-allowed"
            }`}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canProceed}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              canProceed
                ? "bg-green text-white shadow-md shadow-green/20"
                : "bg-green/5 text-fg/30 cursor-not-allowed"
            }`}
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        )}
      </div>
    </section>
  )
}
