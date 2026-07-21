"use client"
import { Play, Pause, FastForward, Rewind, Volume2 } from "lucide-react"
import { useState } from "react"

export function MediaPlayer() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="card-editorial bg-[var(--page-surface)] max-w-md mx-auto my-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="font-display font-semibold text-saffron text-xs tracking-widest uppercase block mb-1">
            Latest Audio
          </span>
          <h4 className="font-display font-bold text-xl text-fg">
            Speech at Sri Karanpur Rally
          </h4>
        </div>
        <Volume2 className="w-5 h-5 text-fg/50" />
      </div>

      <div className="bg-fg/5 h-2 rounded-full w-full mb-6 relative overflow-hidden border-2 border-[var(--page-border)]">
        <div className="absolute top-0 left-0 h-full bg-saffron w-1/3 border-r-2 border-[var(--page-fg)]" />
      </div>

      <div className="flex items-center justify-center gap-6">
        <button className="p-2 text-fg/70 hover:text-saffron transition-colors">
          <Rewind className="w-6 h-6" fill="currentColor" />
        </button>
        <button 
          onClick={() => setPlaying(!playing)}
          className="btn-pill !px-4 !py-4 rounded-full"
        >
          {playing ? <Pause className="w-6 h-6" fill="currentColor" /> : <Play className="w-6 h-6" fill="currentColor" />}
        </button>
        <button className="p-2 text-fg/70 hover:text-saffron transition-colors">
          <FastForward className="w-6 h-6" fill="currentColor" />
        </button>
      </div>
    </div>
  )
}
