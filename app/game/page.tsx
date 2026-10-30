"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Trophy,
  Timer,
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Share2,
  ArrowRight,
  Flame,
  Award,
  Gamepad2,
} from "lucide-react"

interface Question {
  id: number
  question: string
  hindiQuestion: string
  options: string[]
  correctIndex: number
  explanation: string
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What is Vijender Pal Singh's signature guiding motto for public service?",
    hindiQuestion: "विजेंद्र पाल सिंह का जनसेवा का मुख्य ध्येय वाक्य क्या है?",
    options: [
      "वादे नहीं, इरादे (Actions, Not Just Promises)",
      "सिर्फ भाषण, कोई काम नहीं",
      "धीमी गति, सुरक्षित नीति",
      "आराम से विकास",
    ],
    correctIndex: 0,
    explanation:
      "Vijender Pal Singh's core guiding motto is 'वादे नहीं, इरादे' — emphasizing tangible grassroots delivery over empty words.",
  },
  {
    id: 2,
    question: "Which landmark railway safety project did Vijender Pal Singh successfully secure for local villagers in Sri Karanpur?",
    hindiQuestion: "श्रीकरणपुर के ग्रामीणों की सुरक्षा के लिए कौन सा ऐतिहासिक रेलवे प्रोजेक्ट मंजूर करवाया?",
    options: [
      "19 FF Rail Track Underbridge",
      "50 KM Highway Express",
      "Bullet Train Station",
      "Metro Extension Line",
    ],
    correctIndex: 0,
    explanation:
      "The 19 FF Rail Track Underbridge eliminated life-threatening level-crossing hazards for rural schoolchildren and daily travelers.",
  },
  {
    id: 3,
    question: "To which country was the dedicated Kisan Train launched from Sri Ganganagar for Kinnow fruit export?",
    hindiQuestion: "गंगानगर के किन्नू उत्पादक किसानों के लिए समर्पित किसान ट्रेन किस देश के लिए शुरू की गई थी?",
    options: [
      "Bangladesh (बांग्लादेश)",
      "United Kingdom (ब्रिटेन)",
      "Japan (जापान)",
      "Australia (ऑस्ट्रेलिया)",
    ],
    correctIndex: 0,
    explanation:
      "The historic Kisan Train transported citrus harvests directly to Bangladesh, opening international export revenues for regional farmers.",
  },
  {
    id: 4,
    question: "In what year did Vijender Pal Singh begin his dedicated grassroots journey as a BJP Karyakarta?",
    hindiQuestion: "विजेंद्र पाल सिंह ने भाजपा कार्यकर्ता के रूप में अपनी जनसेवा यात्रा किस वर्ष शुरू की थी?",
    options: ["1993", "2010", "2019", "2024"],
    correctIndex: 0,
    explanation:
      "Vijender Pal Singh has been serving the party and the people of Sri Karanpur tirelessly since 1993 — over 3 decades of selfless service.",
  },
  {
    id: 5,
    question: "What is the target year for the national goal of 'Viksit Bharat' championed by PM Narendra Modi and Vijender Pal Singh?",
    hindiQuestion: "'विकसित भारत' के राष्ट्रीय संकल्प का लक्ष्य वर्ष क्या है?",
    options: ["2047", "2030", "2050", "2035"],
    correctIndex: 0,
    explanation:
      "Viksit Bharat 2047 represents the centenary of India's independence, aiming for an inclusive, self-reliant, and developed nation.",
  },
]

export default function GamePage() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [gameOver, setGameOver] = useState(false)

  const currentQ = QUESTIONS[currentIdx]

  // Timer countdown
  useEffect(() => {
    if (gameOver || isAnswered) return

    if (timeLeft <= 0) {
      handleAnswer(-1) // Time's up
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, gameOver, isAnswered])

  const handleAnswer = (optionIdx: number) => {
    if (isAnswered) return
    setSelectedOpt(optionIdx)
    setIsAnswered(true)

    const isCorrect = optionIdx === currentQ.correctIndex
    if (isCorrect) {
      const timeBonus = Math.max(1, Math.floor(timeLeft / 3))
      setScore((s) => s + 100 + timeBonus * 10)
      setStreak((st) => {
        const nextSt = st + 1
        if (nextSt > maxStreak) setMaxStreak(nextSt)
        return nextSt
      })
    } else {
      setStreak(0)
    }
  }

  const nextQuestion = () => {
    if (currentIdx + 1 < QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1)
      setSelectedOpt(null)
      setIsAnswered(false)
      setTimeLeft(15)
    } else {
      setGameOver(true)
    }
  }

  const resetGame = () => {
    setCurrentIdx(0)
    setSelectedOpt(null)
    setIsAnswered(false)
    setScore(0)
    setStreak(0)
    setMaxStreak(0)
    setTimeLeft(15)
    setGameOver(false)
  }

  const shareScore = () => {
    const text = `🏆 I scored ${score} pts in the Sri Karanpur & Viksit Bharat Challenge with Vijender Pal Singh! Can you beat my score? Play here: https://vijenderpalsingh.in/game`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <div className="bg-[var(--page-bg)] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron/10 text-saffron-dark dark:text-saffron text-xs font-semibold uppercase tracking-widest mb-3">
            <Gamepad2 className="w-4 h-4 text-saffron" />
            Civic Trivia Quest
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-green dark:text-emerald-400">
            Viksit Bharat &amp; Sri Karanpur Quiz
          </h1>
          <p className="mt-2 text-fg/70 font-sans text-sm sm:text-base">
            Test your knowledge about grassroots milestones, farmer initiatives, and vision for Rajasthan!
          </p>
        </div>

        {!gameOver ? (
          <div className="bg-white dark:bg-[#141B2D] rounded-3xl border border-black/10 dark:border-white/10 p-6 sm:p-10 shadow-xl relative overflow-hidden">
            {/* Top Status Bar: Question Count, Timer, Score, Streak */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-black/5 dark:border-white/10">
              <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-fg/70">
                <span className="w-6 h-6 rounded-full bg-green text-white flex items-center justify-center text-xs">
                  {currentIdx + 1}
                </span>
                <span>OF {QUESTIONS.length}</span>
              </div>

              {/* Timer Bar */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold">
                <Timer className="w-3.5 h-3.5" />
                <span>{timeLeft}s</span>
              </div>

              {/* Streak */}
              {streak > 1 && (
                <div className="flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-full animate-bounce">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>{streak}x Streak</span>
                </div>
              )}

              {/* Score */}
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono tracking-wider text-fg/40 block">Score</span>
                <span className="font-mono text-base font-bold text-saffron">{score} pts</span>
              </div>
            </div>

            {/* Time progress line */}
            <div className="w-full h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-saffron transition-all duration-1000 ease-linear rounded-full"
                style={{ width: `${(timeLeft / 15) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="mb-8">
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-green dark:text-white leading-snug">
                {currentQ.question}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-fg/60 dark:text-slate-400 font-sans">
                {currentQ.hindiQuestion}
              </p>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = selectedOpt === oIdx
                const isCorrect = oIdx === currentQ.correctIndex
                let btnStyle = "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 hover:border-saffron/50 text-fg dark:text-white"

                if (isAnswered) {
                  if (isCorrect) {
                    btnStyle = "bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold"
                  } else if (isSelected) {
                    btnStyle = "bg-red-500/15 border-red-500 text-red-600 dark:text-red-400"
                  } else {
                    btnStyle = "opacity-50 border-transparent text-fg/40"
                  }
                }

                return (
                  <button
                    key={oIdx}
                    disabled={isAnswered}
                    onClick={() => handleAnswer(oIdx)}
                    className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between gap-4 transition-all duration-200 font-sans text-sm sm:text-base ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Explanation on Answer */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-saffron/10 border border-saffron/20 mb-6 text-xs sm:text-sm text-fg/80 font-sans leading-relaxed"
                >
                  <p className="font-bold text-saffron-dark dark:text-saffron mb-1">
                    {selectedOpt === currentQ.correctIndex ? "🎉 Brilliant! Correct!" : "💡 Did you know?"}
                  </p>
                  <p>{currentQ.explanation}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next Button */}
            {isAnswered && (
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={nextQuestion}
                className="w-full py-4 rounded-2xl bg-green text-white hover:bg-green-light font-bold text-base shadow-lg flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <span>{currentIdx + 1 === QUESTIONS.length ? "View Final Results" : "Next Question"}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        ) : (
          /* Game Over Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-[#141B2D] rounded-3xl border-2 border-saffron/30 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="w-20 h-20 rounded-full bg-saffron/15 text-saffron mx-auto flex items-center justify-center mb-6">
              <Trophy className="w-10 h-10 animate-bounce" />
            </div>

            <span className="text-xs uppercase tracking-widest font-mono text-saffron font-bold">
              Mission Accomplished
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-green dark:text-white mt-1 mb-2">
              Grassroots Champion Certificate
            </h2>
            <p className="text-fg/70 font-sans text-sm sm:text-base max-w-md mx-auto mb-6">
              You have completed the Sri Karanpur &amp; Viksit Bharat 2047 Quiz!
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5">
                <span className="text-xs font-mono text-fg/50 block">Final Score</span>
                <span className="font-mono text-2xl font-bold text-saffron">{score}</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5">
                <span className="text-xs font-mono text-fg/50 block">Best Streak</span>
                <span className="font-mono text-2xl font-bold text-green dark:text-emerald-400">{maxStreak}x</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={shareScore}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Score on WhatsApp</span>
              </button>

              <button
                onClick={resetGame}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-green text-white hover:bg-green-light font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Play Again</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
