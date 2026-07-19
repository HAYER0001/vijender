export type SocialPost = {
  id: string
  platform: "twitter" | "instagram" | "facebook"
  authorName: string
  authorHandle: string
  avatarInitials: string
  content: string
  imageUrl?: string
  timestamp: string
  timestampLabel: string
  likes: number
  shares: number
  url: string
}

const MOCK_POSTS: SocialPost[] = [
  {
    id: "vps-001",
    platform: "twitter",
    authorName: "Vijender Pal Singh",
    authorHandle: "@VijenderBJP",
    avatarInitials: "VP",
    content:
      "Proud to have secured the Kisan Train for our hardworking Kinnow farmers from Ganganagar to Bangladesh. This will open new export markets and ensure better prices for our farmers. Sabka Sath, Sabka Vikas! 🚂🇮🇳",
    timestamp: "2026-07-18T10:30:00Z",
    timestampLabel: "1 day ago",
    likes: 2847,
    shares: 892,
    url: "https://x.com/VijenderBJP/status/1",
  },
  {
    id: "vps-002",
    platform: "instagram",
    authorName: "Vijender Pal Singh",
    authorHandle: "@vijenderbjp",
    avatarInitials: "VP",
    content:
      "Inspection of the newly constructed 19 FF Rail Track Underbridge in Sri Karanpur. This bridge eliminates the risk of crossing active railway lines for hundreds of families. Development that reaches every doorstep.",
    timestamp: "2026-07-15T14:00:00Z",
    timestampLabel: "4 days ago",
    likes: 4521,
    shares: 1205,
    url: "https://instagram.com/vijenderbjp",
  },
  {
    id: "vps-003",
    platform: "facebook",
    authorName: "Vijender Pal Singh",
    authorHandle: "VijenderPalBJP",
    avatarInitials: "VP",
    content:
      "Grateful to the party leadership for appointing me as State Co-Incharge of BJP Minority Morcha, Rajasthan. I will work tirelessly to strengthen our bonds across all communities and ensure every voice is heard.",
    timestamp: "2026-07-10T09:00:00Z",
    timestampLabel: "1 week ago",
    likes: 3102,
    shares: 645,
    url: "https://facebook.com/VijenderPalBJP",
  },
]

const FALLBACK_POST: SocialPost = {
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

let apiUrl: string | null = null

export function setSocialApiUrl(url: string) {
  apiUrl = url
}

export async function fetchSocial(): Promise<SocialPost> {
  if (apiUrl) {
    try {
      const res = await fetch(apiUrl, {
        next: { revalidate: 3600 },
      })
      if (!res.ok) throw new Error(`API responded with ${res.status}`)
      const data: SocialPost[] = await res.json()
      return data[0] ?? MOCK_POSTS[0]
    } catch {
      return FALLBACK_POST
    }
  }

  try {
    return MOCK_POSTS[Math.floor(Math.random() * MOCK_POSTS.length)]
  } catch {
    return FALLBACK_POST
  }
}
