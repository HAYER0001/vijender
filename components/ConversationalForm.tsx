"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  MessageCircle,
  Send,
  User,
  MapPin,
  FileText,
  Paperclip,
  Phone,
  CheckCircle2,
  Clock,
  Sparkles,
  Check,
} from "lucide-react"

interface FormData {
  name: string
  villageCity: string
  gramPanchayat: string
  phone: string
  message: string
  documentName: string
}

const INITIAL: FormData = {
  name: "",
  villageCity: "",
  gramPanchayat: "",
  phone: "",
  message: "",
  documentName: "",
}

export function ConversationalForm() {
  const [data, setData] = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      update("documentName", e.target.files[0].name)
    }
  }

  const isFormValid =
    data.name.trim().length >= 2 &&
    data.villageCity.trim().length >= 2 &&
    data.message.trim().length >= 5

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return

    setSubmitted(true)
    const docNote = data.documentName ? `\n📎 Document: ${data.documentName}` : ""
    const phoneNote = data.phone ? `\n📞 Contact: ${data.phone}` : ""
    const messageText = `*New Grievance / Message for Vijender Pal Singh Ji*\n\n👤 *Name:* ${data.name}${phoneNote}\n📍 *Village/City:* ${data.villageCity}\n🏛️ *Gram Panchayat / Area:* ${data.gramPanchayat || "Sri Karanpur"}\n\n📝 *Message:*\n${data.message}${docNote}`

    const waUrl = `https://wa.me/919414089131?text=${encodeURIComponent(messageText)}`
    window.open(waUrl, "_blank")
  }

  const resetForm = () => {
    setData(INITIAL)
    setSubmitted(false)
  }

  return (
    <section id="contact" className="relative py-12 lg:py-16 overflow-hidden">
      {/* Symmetrical Container Aligned with Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Symmetrical & Balanced */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 text-saffron-dark dark:text-saffron text-xs font-semibold uppercase tracking-widest mb-3">
            <MessageCircle className="w-4 h-4 text-saffron" />
            Direct Public Connect · सीधा संवाद
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-green dark:text-emerald-400">
            Share Your Grievance or Suggestion
          </h1>
          <p className="mt-3 text-base sm:text-lg text-fg/75 font-sans leading-relaxed">
            Reach Vijender Pal Singh directly. He answers his own phone and personally follows up on public concerns across Sri Karanpur.
          </p>
        </div>

        {/* Unified 1-Section Form & Side Info: Symmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Contact Form — All in One Unified Section */}
          <div className="lg:col-span-8 bg-white dark:bg-[#121826] rounded-3xl border-2 border-black/10 dark:border-white/10 p-6 sm:p-10 shadow-xl relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <Check className="w-8 h-8" strokeWidth={3} />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-green dark:text-white mb-2">
                  Message Prepared for WhatsApp
                </h3>
                <p className="text-fg/70 font-sans text-sm sm:text-base max-w-md mx-auto mb-6">
                  WhatsApp will open with your pre-filled message directly to Vijender Pal Singh (+91 94140 89131).
                </p>

                {data.documentName && (
                  <div className="p-4 rounded-2xl bg-saffron/10 border border-saffron/20 max-w-md mx-auto mb-6 text-xs text-saffron-dark font-medium">
                    📌 Please remember to attach your document (<strong>{data.documentName}</strong>) in the WhatsApp chat.
                  </div>
                )}

                <button
                  onClick={resetForm}
                  className="px-6 py-3 rounded-full bg-green text-white hover:bg-green-light font-semibold text-sm transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name and Contact (Symmetric 2 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    {/* Question / Label in Dark Display Font like Header */}
                    <label className="block font-display font-bold text-lg sm:text-xl text-[#0B0F19] dark:text-white uppercase tracking-wider mb-2">
                      Your Name <span className="text-saffron">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-fg/40" />
                      <input
                        type="text"
                        required
                        value={data.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="e.g. Ramesh Kumar (आपका नाम)"
                        className="w-full rounded-2xl border-2 border-black/15 dark:border-white/20 bg-white dark:bg-[#1A2234] pl-11 pr-4 py-3.5 text-base font-sans text-[#0B0F19] dark:text-white placeholder:text-gray-400 focus:border-saffron focus:ring-4 focus:ring-saffron/15 outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    {/* Question / Label in Dark Display Font like Header */}
                    <label className="block font-display font-bold text-lg sm:text-xl text-[#0B0F19] dark:text-white uppercase tracking-wider mb-2">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-fg/40" />
                      <input
                        type="tel"
                        value={data.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="e.g. 98290 XXXXX (मोबाइल नंबर)"
                        className="w-full rounded-2xl border-2 border-black/15 dark:border-white/20 bg-white dark:bg-[#1A2234] pl-11 pr-4 py-3.5 text-base font-sans text-[#0B0F19] dark:text-white placeholder:text-gray-400 focus:border-saffron focus:ring-4 focus:ring-saffron/15 outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Village / City and Gram Panchayat (Symmetric 2 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    {/* Question / Label in Dark Display Font like Header */}
                    <label className="block font-display font-bold text-lg sm:text-xl text-[#0B0F19] dark:text-white uppercase tracking-wider mb-2">
                      Village / City <span className="text-saffron">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-fg/40" />
                      <input
                        type="text"
                        required
                        value={data.villageCity}
                        onChange={(e) => update("villageCity", e.target.value)}
                        placeholder="e.g. Padampur / Sri Karanpur"
                        className="w-full rounded-2xl border-2 border-black/15 dark:border-white/20 bg-white dark:bg-[#1A2234] pl-11 pr-4 py-3.5 text-base font-sans text-[#0B0F19] dark:text-white placeholder:text-gray-400 focus:border-saffron focus:ring-4 focus:ring-saffron/15 outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    {/* Question / Label in Dark Display Font like Header */}
                    <label className="block font-display font-bold text-lg sm:text-xl text-[#0B0F19] dark:text-white uppercase tracking-wider mb-2">
                      Gram Panchayat / Ward
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-fg/40" />
                      <input
                        type="text"
                        value={data.gramPanchayat}
                        onChange={(e) => update("gramPanchayat", e.target.value)}
                        placeholder="e.g. Gram Panchayat 3 CC / Ward No."
                        className="w-full rounded-2xl border-2 border-black/15 dark:border-white/20 bg-white dark:bg-[#1A2234] pl-11 pr-4 py-3.5 text-base font-sans text-[#0B0F19] dark:text-white placeholder:text-gray-400 focus:border-saffron focus:ring-4 focus:ring-saffron/15 outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Your Message Box — PURE WHITE COLOR as requested */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    {/* Question / Label in Dark Display Font like Header */}
                    <label className="block font-display font-bold text-lg sm:text-xl text-[#0B0F19] dark:text-white uppercase tracking-wider">
                      Your Message <span className="text-saffron">*</span>
                    </label>
                    <span className="text-xs font-mono text-fg/50">
                      {data.message.length} characters
                    </span>
                  </div>

                  {/* Explicit Pure White Message Box with High Contrast Dark Font */}
                  <textarea
                    required
                    rows={5}
                    value={data.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Describe your issue, grievance, or message in detail... (अपनी समस्या, मांग या सुझाव का विवरण लिखें)"
                    className="w-full rounded-2xl border-2 border-black/15 dark:border-white/20 bg-white text-[#0B0F19] dark:text-[#0B0F19] placeholder:text-gray-400 p-4 sm:p-5 text-base font-sans leading-relaxed focus:border-saffron focus:ring-4 focus:ring-saffron/15 outline-none transition-all shadow-sm resize-none"
                    style={{ backgroundColor: "#FFFFFF", color: "#0B0F19" }}
                  />
                </div>

                {/* Row 4: Attachment & Action Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-black/15 dark:border-white/20 bg-black/5 dark:bg-white/5 hover:bg-saffron/10 hover:border-saffron text-xs font-semibold text-fg/75 hover:text-saffron transition-all"
                    >
                      <Paperclip className="w-4 h-4 text-saffron" />
                      <span>{data.documentName ? "Change File" : "Attach Application / Photo"}</span>
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {data.documentName && (
                      <span className="text-xs font-mono text-green dark:text-emerald-400 truncate max-w-[200px] font-semibold">
                        ✓ {data.documentName}
                      </span>
                    )}
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white shadow-lg transition-all ${
                      isFormValid
                        ? "bg-[#25D366] hover:bg-[#20ba59] shadow-[#25D366]/30 active:scale-98 cursor-pointer"
                        : "bg-gray-400 opacity-60 cursor-not-allowed"
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <p className="text-xs text-fg/50 font-sans text-center pt-2">
                  🔒 Direct end-to-end connect. Opens directly in WhatsApp to Vijender Pal Singh&apos;s phone.
                </p>
              </form>
            )}
          </div>

          {/* Symmetrical Right Side: Direct Connect Cards */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Call Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#141B2D] border border-black/10 dark:border-white/10 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-saffron font-bold block">
                    Direct Citizen Helpline
                  </span>
                  <h3 className="font-display font-bold text-lg text-green dark:text-white">
                    He Answers His Own Phone
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-fg/70 font-sans mb-4 leading-relaxed">
                No bureaucratic delays. Call directly or send a WhatsApp message anytime for constituency matters.
              </p>
              <a
                href="tel:+919414089131"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-black/5 dark:bg-white/10 hover:bg-green hover:text-white font-mono font-bold text-sm text-fg dark:text-white transition-all"
              >
                <span>+91 94140 89131</span>
              </a>
            </div>

            {/* Office Address Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#141B2D] border border-black/10 dark:border-white/10 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-saffron/15 text-saffron flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-saffron font-bold block">
                    Constituency Office
                  </span>
                  <h3 className="font-display font-bold text-lg text-green dark:text-white">
                    3 CC Padampur
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-fg/70 font-sans leading-relaxed mb-3">
                Village &amp; Post 3 CC, Tehsil Padampur, Sri Karanpur Constituency, District Sri Ganganagar, Rajasthan — 335041.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-saffron-dark dark:text-saffron font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Open for Public Interaction Daily</span>
              </div>
            </div>

            {/* Verified Karyakarta Assurance */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-saffron/10 via-cream/80 to-green/10 border border-saffron/20 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-green" />
                <span className="font-display font-bold text-sm uppercase text-green tracking-wider">
                  Sabka Saath, Sabka Vikas
                </span>
              </div>
              <p className="text-xs text-fg/75 font-sans leading-relaxed">
                Serving the people of Sri Karanpur since 1993 with utmost integrity, accessibility, and selfless dedication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
