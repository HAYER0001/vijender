"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Repeat2, MessageCircle, ExternalLink, Verified, Twitter, Instagram, Facebook } from "lucide-react"
import { type SocialPost } from "@/lib/fetchSocial"

const platformLabels: Record<SocialPost["platform"], string> = {
  twitter: "X (Twitter)",
  instagram: "Instagram",
  facebook: "Facebook",
}

const platformIcons: Record<SocialPost["platform"], React.ElementType> = {
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
}

const platformTextColors: Record<SocialPost["platform"], string> = {
  twitter: "text-[#1DA1F2]",
  instagram: "text-[#E1306C]",
  facebook: "text-[#1877F2]",
}

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`
  return String(n)
}

export function SocialCard({ post }: { post: SocialPost }) {
  const imgSrc = post.imageUrl
  const PlatformIcon = platformIcons[post.platform]

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-white border border-saffron/10 rounded-[2rem] shadow-xl shadow-saffron/5 overflow-hidden flex flex-col relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-saffron/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Platform Name on Top */}
      <div className="relative px-6 pt-5 pb-4 border-b border-saffron/10 flex items-center justify-between bg-cream/30 z-10">
        <div className="flex items-center gap-2.5">
          <PlatformIcon className={`w-5 h-5 ${platformTextColors[post.platform]}`} />
          <span className={`font-display font-bold text-sm tracking-wide uppercase ${platformTextColors[post.platform]}`}>
            {platformLabels[post.platform]}
          </span>
        </div>
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-fg/40 hover:text-saffron transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      
      <div className="relative p-6 sm:p-8 flex-1 flex flex-col pt-6">
        <div className="flex items-center gap-3 mb-5">
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
          <span className="text-fg/40 text-xs whitespace-nowrap bg-green/5 px-2.5 py-1.5 rounded-lg border border-green/10">
            {post.timestampLabel}
          </span>
        </div>

        <p className="text-fg/85 text-sm sm:text-base leading-relaxed whitespace-pre-line relative z-10">
          {post.content}
        </p>

        {imgSrc && (
          <div className="mt-6 relative overflow-hidden rounded-2xl aspect-[4/5] bg-green/5 shadow-inner">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src={imgSrc}
                alt="Post image"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </motion.div>
          </div>
        )}
      </div>

      <div className="relative px-6 sm:px-8 py-4 border-t border-saffron/10 flex items-center justify-between bg-white z-10">
        <div className="flex items-center gap-6 text-fg/45 text-sm font-medium">
          <button className="flex items-center gap-1.5 transition-colors hover:text-[#E1306C]">
            <Heart className="w-4 h-4" />
            {formatNumber(post.likes)}
          </button>
          <button className="flex items-center gap-1.5 transition-colors hover:text-[#1877F2]">
            <Repeat2 className="w-4 h-4" />
            {formatNumber(post.shares)}
          </button>
          <button className="flex items-center gap-1.5 transition-colors hover:text-[#1DA1F2]">
            <MessageCircle className="w-4 h-4" />
            {formatNumber(Math.round(post.likes * 0.12))}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
