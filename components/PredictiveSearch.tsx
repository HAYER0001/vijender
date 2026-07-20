"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ArrowRight, Hash, User, Image, Newspaper, MessageCircle } from "lucide-react"
import { filterSearch, highlightMatch, type SearchItem } from "@/lib/searchData"

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])
  return debounced
}

const categoryIcons: Record<string, typeof Hash> = {
  Page: Hash,
  Achievement: User,
  Gallery: Image,
  Media: Newspaper,
  Connect: MessageCircle,
}

export function PredictiveSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState(searchParams.get("q") || "")
  const [activeIndex, setActiveIndex] = useState(-1)

  const debouncedValue = useDebounce(inputValue, 300)
  const results = filterSearch(debouncedValue)
  const showResults = open && results.length > 0
  const showEmpty = open && debouncedValue.trim() && results.length === 0

  useEffect(() => {
    const q = searchParams.get("q") || ""
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (q !== inputValue) setInputValue(q)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
        setOpen(true)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onOutside)
    return () => document.removeEventListener("mousedown", onOutside)
  }, [])

  const syncUrl = useCallback(
    (val: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (val.trim()) {
        params.set("q", val.trim())
      } else {
        params.delete("q")
      }
      router.replace(`?${params.toString()}`, { scroll: false })
    },
    [router, searchParams],
  )

  const onChange = (val: string) => {
    setInputValue(val)
    setActiveIndex(-1)
    setOpen(true)
    syncUrl(val)
  }

  const onClear = () => {
    setInputValue("")
    setOpen(false)
    setActiveIndex(-1)
    syncUrl("")
    inputRef.current?.focus()
  }

  const onSelect = (item: SearchItem) => {
    setOpen(false)
    setInputValue("")
    syncUrl("")
    router.push(item.href)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") setOpen(true)
      return
    }

    switch (e.key) {
      case "Escape":
        onClear()
        inputRef.current?.blur()
        break
      case "ArrowDown":
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, results.length - 1))
        break
      case "ArrowUp":
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
        break
      case "Enter":
        e.preventDefault()
        if (activeIndex >= 0 && activeIndex < results.length) {
          onSelect(results[activeIndex])
        } else if (results.length > 0) {
          onSelect(results[0])
        }
        break
    }
  }

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const child = listRef.current.children[activeIndex] as HTMLElement | undefined
      child?.scrollIntoView({ block: "nearest" })
    }
  }, [activeIndex])

  return (
    <div ref={containerRef} className="relative">
      <div className="relative flex items-center">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--page-fg)]/40 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Search...  ⌘K"
          aria-label="Search site"
          className="w-40 lg:w-52 pl-9 pr-8 py-2 text-sm rounded-xl bg-[var(--page-bg)] border border-[var(--page-border)] text-[var(--page-fg)] placeholder:text-[var(--page-fg)]/40 focus:outline-none focus:border-[#FF9933]/50 focus:ring-1 focus:ring-[#FF9933]/20 transition-all duration-200 font-[family-name:var(--font-mukta)]"
        />
        {inputValue && (
          <button
            onClick={onClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-[var(--page-fg)]/40 hover:text-[var(--page-fg)] hover:bg-[var(--page-border)]/50 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {(showResults || showEmpty) && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full mt-2 left-0 right-0 z-50 min-w-[280px] sm:min-w-[380px]"
          >
            <div className="bg-[var(--page-surface)]/95 backdrop-blur-xl rounded-2xl border border-[var(--page-border)] shadow-xl overflow-hidden">
              {showResults && (
                <div ref={listRef} className="py-2 max-h-72 overflow-y-auto">
                  {results.map((item, i) => {
                    const Icon = categoryIcons[item.category] || Hash
                    const isActive = i === activeIndex
                    return (
                      <button
                        key={`${item.href}-${item.title}`}
                        onClick={() => onSelect(item)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors ${
                          isActive
                            ? "bg-[#FF9933]/10 text-[var(--page-fg)]"
                            : "text-[var(--page-fg)] hover:bg-[var(--page-border)]/30"
                        }`}
                      >
                        <div
                          className={`shrink-0 mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center ${
                            item.category === "Achievement"
                              ? "bg-[#FF9933]/10 text-[#FF9933]"
                              : "bg-[#0F523A]/10 text-[#0F523A]"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className="text-sm font-semibold font-[family-name:var(--font-khand)] tracking-wide leading-tight"
                            dangerouslySetInnerHTML={{
                              __html: highlightMatch(item.title, debouncedValue),
                            }}
                          />
                          <div
                            className="text-xs text-[var(--page-fg)]/60 mt-0.5 line-clamp-1 font-[family-name:var(--font-mukta)]"
                            dangerouslySetInnerHTML={{
                              __html: highlightMatch(item.description, debouncedValue),
                            }}
                          />
                        </div>
                        <div className="shrink-0 flex items-center gap-1.5">
                          <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--page-fg)]/40 font-[family-name:var(--font-mukta)]">
                            {item.category}
                          </span>
                          <ArrowRight
                            className={`w-3.5 h-3.5 transition-opacity ${
                              isActive ? "opacity-100" : "opacity-0"
                            } text-[#FF9933]`}
                          />
                        </div>
                      </button>
                    )
                  })}
                </div>
              )}

              {showEmpty && (
                <div className="px-4 py-8 text-center">
                  <Search className="w-8 h-8 mx-auto mb-2 text-[var(--page-fg)]/20" />
                  <p className="text-sm text-[var(--page-fg)]/50 font-[family-name:var(--font-mukta)]">
                    No results for &ldquo;{debouncedValue}&rdquo;
                  </p>
                  <p className="text-xs text-[var(--page-fg)]/30 mt-1 font-[family-name:var(--font-mukta)]">
                    Try searching for achievements, pages, or keywords
                  </p>
                </div>
              )}

              <div className="px-4 py-2 border-t border-[var(--page-border)] bg-[var(--page-bg)]/50">
                <div className="flex items-center gap-3 text-[10px] text-[var(--page-fg)]/30 font-mono">
                  <span>
                    <kbd className="px-1 py-0.5 rounded bg-[var(--page-border)] text-[var(--page-fg)]/40">
                      ↑↓
                    </kbd>{" "}
                    Navigate
                  </span>
                  <span>
                    <kbd className="px-1 py-0.5 rounded bg-[var(--page-border)] text-[var(--page-fg)]/40">
                      ⏎
                    </kbd>{" "}
                    Select
                  </span>
                  <span>
                    <kbd className="px-1 py-0.5 rounded bg-[var(--page-border)] text-[var(--page-fg)]/40">
                      Esc
                    </kbd>{" "}
                    Close
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
