import Image from "next/image"
import { fetchSocial, type SocialPost } from "@/lib/fetchSocial"
import { FeedAnimator } from "./FeedAnimator"
import { Heart, Repeat2, MessageCircle, ExternalLink, Verified } from "lucide-react"

const platformLabels: Record<SocialPost["platform"], string> = {
  twitter: "X (Twitter)",
  instagram: "Instagram",
  facebook: "Facebook",
}

const postImages: Record<string, string> = {
  "vps-kisan-train": "/images/social-post-1.jpg",
  "vps-underbridge": "/images/social-post-2.jpg",
  "vps-minority-morcha": "/images/social-post-3.jpg",
  "vps-fallback": "/images/social-post-4.jpg",
}

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`
  return String(n)
}

function SocialCard({ post }: { post: SocialPost }) {
  const imgSrc = postImages[post.id]

  return (
    <div className="bg-[#FDFBF7] border border-saffron/20 rounded-2xl shadow-lg shadow-saffron/5 overflow-hidden">
      <div className="p-5 sm:p-7">
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
          <div className="mt-4 relative overflow-hidden rounded-xl aspect-[4/3] bg-green/5">
            <Image
              src={imgSrc}
              alt="Post image"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        )}
      </div>

      <div className="px-5 sm:px-7 py-3 border-t border-saffron/10 flex items-center justify-between">
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
          className="inline-flex items-center gap-1.5 text-saffron hover:text-saffron-dark text-xs font-semibold transition-colors"
        >
          Read more on {platformLabels[post.platform]}
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}

export async function LiveSocialFeed() {
  let post: SocialPost
  try {
    post = await fetchSocial()
  } catch {
    post = {
      id: "vps-fallback",
      platform: "twitter",
      authorName: "Vijender Pal Singh",
      authorHandle: "@VijenderBJP",
      avatarInitials: "VP",
      content:
        "Honoured to be appointed as ZRUCC Member for North Western Railways. I will continue to raise the voice of Sri Karanpur's citizens on every platform — ensuring our railway infrastructure serves the people first.",
      timestamp: "2026-07-08T11:00:00Z",
      timestampLabel: "Last week",
      likes: 2100,
      shares: 430,
      url: "https://x.com/VijenderBJP/status/2",
    }
  }

  return (
    <section id="updates" className="py-28 sm:py-36 bg-[#FFFBF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeedAnimator>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-display font-semibold text-saffron text-sm tracking-widest uppercase">
              Latest Update
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-green">
              What&apos;s New
            </h2>
            <p className="mt-4 text-fg/70 text-base sm:text-lg">
              Recent news and announcements from Sri Karanpur.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <SocialCard post={post} />
          </div>
        </FeedAnimator>
      </div>
    </section>
  )
}
