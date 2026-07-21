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
  FileText,
  Upload,
  Paperclip
} from "lucide-react"
import { Magnetic } from "./Magnetic"

const stepIcons = [User, MapPin, FileText]

const stepLabels = [
  "Personal Info",
  "Gram Panchayat",
  "Your Message",
]

interface FormData {
  name: string
  villageCity: string
  gramPanchayat: string
  message: string
  documentName: string
}

const INITIAL: FormData = { name: "", villageCity: "", gramPanchayat: "", message: "", documentName: "" }

function validateStep(step: number, data: FormData): boolean {
  if (step === 0) return data.name.trim().length >= 2 && data.villageCity.trim().length >= 2
  if (step === 1) return data.gramPanchayat.trim().length >= 2
  if (step === 2) return data.message.trim().length >= 10
  return false
}

export function ConversationalForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(INITIAL)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  // Create multiple refs for focus management
  const nameInputRef = useRef<HTMLInputElement>(null)
  const villageInputRef = useRef<HTMLInputElement>(null)
  const panchayatInputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const update = useCallback(<K extends keyof FormData>(
    key: K, value: FormData[K]
  ) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      update("documentName", e.target.files[0].name)
    }
  }

  const canProceed = validateStep(step, data)

  const goNext = useCallback(() => {
    if (!canProceed) return
    if (step < 2) {
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
    if (!validateStep(2, data)) return
    setSubmitted(true)
    const docNote = data.documentName ? "%0A*(Has document to attach)*" : ""
    const text = `Name: ${data.name}%0AVillage/City: ${data.villageCity}%0AGram Panchayat / Municipal Area: ${data.gramPanchayat}%0AMessage: ${data.message}${docNote}`
    const url = `https://wa.me/919414089131?text=${text}`
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
            <p className="text-fg/70 text-base mb-2">
              Your message has been compiled. WhatsApp will open with a
              pre-filled message to Vijender Pal Singh.
            </p>
            {data.documentName && (
               <p className="text-saffron font-medium mb-8 bg-saffron/5 p-3 rounded-xl inline-block">
                 Important: Don't forget to attach your document "{data.documentName}" in the WhatsApp chat!
               </p>
            )}
            <br />
            <button
              onClick={resetForm}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-saffron text-white font-semibold text-sm hover:bg-saffron-dark transition-colors shadow-lg shadow-saffron/20 mt-4"
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
      className="relative py-28 sm:py-36 bg-[var(--page-bg)] overflow-hidden"
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
          <div className="card-editorial">
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
                {step + 1} / 3
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
                    {step === 0 && "What is your name and location?"}
                    {step === 1 && "Which Municipal Area / Gram Panchayat?"}
                    {step === 2 && "Write down your message details..."}
                  </p>

                  {step === 0 && (
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fg/30" />
                        <input
                          ref={nameInputRef}
                          type="text"
                          value={data.name}
                          onChange={(e) => update("name", e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && data.name.trim().length >= 2 && villageInputRef.current?.focus()}
                          placeholder="Your Name (e.g. Ramesh Kumar)"
                          className="input-editorial pl-12"
                          autoFocus
                        />
                      </div>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fg/30" />
                        <input
                          ref={villageInputRef}
                          type="text"
                          value={data.villageCity}
                          onChange={(e) => update("villageCity", e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && goNext()}
                          placeholder="Your Village / City"
                          className="input-editorial pl-12"
                        />
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fg/30" />
                      <input
                        ref={panchayatInputRef}
                        type="text"
                        value={data.gramPanchayat}
                        onChange={(e) => update("gramPanchayat", e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && goNext()}
                        placeholder="Municipal Area / Gram Panchayat"
                        className="input-editorial pl-12"
                        autoFocus
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="relative">
                      <textarea
                        ref={textareaRef}
                        value={data.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Describe your query, suggestion, or grievance in detail..."
                        rows={4}
                        className="input-editorial resize-none mb-3 min-h-[120px]"
                        autoFocus
                      />
                      
                      <div className="flex items-center justify-between mb-2">
                        <button 
                          onClick={() => fileInputRef.current?.click()}
                          className="flex items-center gap-2 text-sm text-fg/60 hover:text-saffron transition-colors px-3 py-2 bg-saffron/5 rounded-lg border border-saffron/20"
                        >
                          <Paperclip className="w-4 h-4" />
                          {data.documentName ? 'Change Document' : 'Attach Document'}
                        </button>
                        
                        <input 
                          type="file" 
                          className="hidden" 
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />

                        <p className="text-xs text-fg/40 text-right">
                          {data.message.length} char{data.message.length !== 1 ? "s" : ""}
                          {data.message.trim().length > 0 && data.message.trim().length < 10 && (
                            <span className="text-saffron ml-1">
                              (min 10 chars)
                            </span>
                          )}
                        </p>
                      </div>
                      
                      {data.documentName && (
                        <div className="flex items-center justify-between bg-green/5 px-3 py-2 rounded-lg border border-green/10 text-xs text-green">
                          <span className="truncate max-w-[200px] font-medium">{data.documentName}</span>
                          <span className="text-fg/50">(Attach in WhatsApp later)</span>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-green/5">
              <Magnetic>
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
              </Magnetic>

              {step < 2 ? (
                <Magnetic>
                  <button
                    onClick={goNext}
                    disabled={!canProceed}
                    className={`btn-pill text-sm ${
                      !canProceed && "opacity-50 pointer-events-none"
                    }`}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </Magnetic>
              ) : (
                <Magnetic>
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed}
                    className={`btn-pill text-sm ${
                      !canProceed && "opacity-50 pointer-events-none"
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                </Magnetic>
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
        {step < 2 ? (
          <Magnetic>
            <button
              onClick={goNext}
              disabled={!canProceed}
              className={`btn-pill text-sm ${
                !canProceed && "opacity-50 pointer-events-none"
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </Magnetic>
        ) : (
          <Magnetic>
            <button
              onClick={handleSubmit}
              disabled={!canProceed}
              className={`btn-pill text-sm ${
                !canProceed && "opacity-50 pointer-events-none"
              }`}
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </Magnetic>
        )}
      </div>
    </section>
  )
}
