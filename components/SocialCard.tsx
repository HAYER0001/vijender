"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Repeat2, MessageCircle, ExternalLink, Verified } from "lucide-react"
import { type SocialPost } from "@/lib/fetchSocial"

const platformLabels: Record<SocialPost["platform"], string> = {
  twitter: "X (Twitter)",
  instagram: "Instagram",
  facebook: "Facebook",
}

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`
  return String(n)
}

export function SocialCard({ post }: { post: SocialPost }) {
  const imgSrc = post.imageUrl

  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-white border border-saffron/10 rounded-[2rem] shadow-xl shadow-saffron/5 overflow-hidden flex flex-col relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-saffron/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-6 sm:p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron/20 to-green/20 flex items-center justify-center font-display font-bold text-green text-lg shrink-0">
            {post.avatarInitials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-semibold text-green text-sm sm:text-base truncate">
                {post.authorName}
              </span>
              <Verified className="w-4 h-4 text-saffron shrink-0" />
            </div>
            <p className="text-fg/50 text-xs sm:text-sm truncate">
              {post.authorHandle}
            </p>
          </div>
          <span className="text-fg/40 text-xs whitespace-nowrap">
            {post.timestampLabel}
          </span>
        </div>

        <p className="text-fg/85 text-sm sm:text-base leading-relaxed whitespace-pre-line">
          {post.content}
        </p>

        {imgSrc && (
          <div className="mt-6 relative overflow-hidden rounded-2xl aspect-[4/5] bg-green/5 shadow-inner">
            <Image
              src={imgSrc}
              alt="Post image"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        )}
      </div>

      <div className="relative px-6 sm:px-8 py-4 border-t border-saffron/10 flex items-center justify-between bg-cream/30">
        <div className="flex items-center gap-5 text-fg/45 text-xs">
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" />
            {formatNumber(post.likes)}
          </span>
          <span className="flex items-center gap-1">
            <Repeat2 className="w-3.5 h-3.5" />
            {formatNumber(post.shares)}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5" />
            {formatNumber(Math.round(post.likes * 0.12))}
          </span>
        </div>
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-saffron hover:text-green text-sm font-bold transition-colors"
        >
          View on {platformLabels[post.platform]}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  )
}
