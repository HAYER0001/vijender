import Image from "next/image"
import { fetchSocial, type SocialPost } from "@/lib/fetchSocial"
import { FeedAnimator } from "./FeedAnimator"
import { SocialCard } from "./SocialCard"



export async function LiveSocialFeed() {
  let posts: SocialPost[] = []
  try {
    posts = await fetchSocial()
  } catch {
    posts = [
      {
        id: "vps-fallback",
        platform: "twitter",
        authorName: "Vijender Pal Singh",
        authorHandle: "@vijenderpals3cc",
        avatarInitials: "VP",
        content:
          "Honoured to be appointed as ZRUCC Member for North Western Railways. I will continue to raise the voice of Sri Karanpur's citizens on every platform — ensuring our railway infrastructure serves the people first.",
        imageUrl: "/media/images/Seema%20Sandesh%2005-05-20.jpg",
        timestamp: "2026-07-08T11:00:00Z",
        timestampLabel: "Last week",
        likes: 2100,
        shares: 430,
        url: "https://www.x.com/vijenderpals3cc",
      }
    ]
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <SocialCard key={post.id} post={post} />
            ))}
          </div>
        </FeedAnimator>
      </div>
    </section>
  )
}
