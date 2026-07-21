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

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
  </svg>
)

const platformIcons: Record<SocialPost["platform"], React.FC<React.SVGProps<SVGSVGElement>>> = {
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
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
      className="group card-editorial p-0 overflow-hidden flex flex-col relative !bg-[var(--page-surface)] hover:z-10"
    >
      
      {/* Platform Name on Top */}
      <div className="relative px-6 pt-5 pb-4 border-b-4 border-inherit flex items-center justify-between bg-black/5 dark:bg-white/5 z-10">
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
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center shrink-0 relative">
            <Image
              src="/images/bjp-logo.png"
              alt="Avatar Logo"
              width={48}
              height={48}
              className="object-contain"
            />
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

      <div className="relative px-6 sm:px-8 py-4 border-t-4 border-inherit flex items-center justify-between bg-[var(--page-surface)] z-10">
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
