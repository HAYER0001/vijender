export interface SocialUpdate {
  id: string
  title: string
  excerpt: string
  content: string
  imageUrl?: string
  source: "twitter" | "instagram" | "facebook" | "official"
  sourceLabel: string
  date: string
  timestamp: string
  url: string
  category: string
}

const DEFAULT_API = "https://api.example.com/vijender-updates"

const MOCK_UPDATES: SocialUpdate[] = [
  {
    id: "update-kisan-train",
    title: "Kisan Train flagged for Ganganagar Kinnow farmers",
    excerpt: "Historic Kisan Train service from Ganganagar to Bangladesh now operational — opening new export corridors for our Kinnow farmers.",
    content:
      "After persistent efforts, the first Kisan Train carrying premium Kinnow from Ganganagar has been flagged off to Bangladesh. This corridor will reduce post-harvest losses by 40% and give our farmers direct access to international markets. A landmark achievement for Rajasthan's horticulture sector — and a promise delivered to the farming community of Sri Karanpur.",
    imageUrl: "/images/social-post-1.jpg",
    source: "twitter",
    sourceLabel: "X (Twitter)",
    date: "18 July 2026",
    timestamp: "2026-07-18T10:30:00Z",
    url: "https://x.com/VijenderBJP/status/1",
    category: "development",
  },
  {
    id: "update-underbridge",
    title: "19 FF Rail Track Underbridge completed",
    excerpt: "New underbridge eliminates dangerous rail crossings for hundreds of families in Sri Karanpur.",
    content:
      "The newly constructed 19 FF Rail Track Underbridge in Sri Karanpur is now fully operational. This structure eliminates the risk of crossing active railway lines for hundreds of families, especially children commuting to school. Safety and connectivity — Sabka Vikas in action on the ground.",
    imageUrl: "/images/social-post-2.jpg",
    source: "instagram",
    sourceLabel: "Instagram",
    date: "15 July 2026",
    timestamp: "2026-07-15T14:00:00Z",
    url: "https://instagram.com/vijenderbjp",
    category: "infrastructure",
  },
  {
    id: "update-morcha",
    title: "Appointed State Co-Incharge — BJP Minority Morcha",
    excerpt: "Party leadership entrusts Vijender Pal Singh with strengthening community outreach across Rajasthan.",
    content:
      "Grateful to the BJP leadership for appointing me as State Co-Incharge of BJP Minority Morcha, Rajasthan. I will work tirelessly to strengthen our bonds across all communities, ensure every voice is heard, and take the party's message of inclusive development to every corner of the state.",
    imageUrl: "/images/social-post-3.jpg",
    source: "facebook",
    sourceLabel: "Facebook",
    date: "10 July 2026",
    timestamp: "2026-07-10T09:00:00Z",
    url: "https://facebook.com/VijenderPalBJP",
    category: "appointment",
  },
]

const FALLBACK_UPDATES: SocialUpdate[] = [
  {
    id: "fallback-zrucc",
    title: "ZRUCC Appointment — North Western Railways",
    excerpt:
      "Shri Vijender Pal Singh appointed to Zonal Railway Users' Consultative Committee for NWR.",
    content:
      "Shri Vijender Pal Singh has been appointed as ZRUCC (Zonal Railway Users' Consultative Committee) Member for North Western Railways. In this capacity, he will represent the interests of Sri Karanpur's citizens on all matters of railway infrastructure, safety, and service improvements. His proven record of public service — from securing the Kisan Train for Kinnow farmers to building the 19 FF Rail Track Underbridge for village safety to managing the War Room for Union Minister Arjun Ram Meghwal's Bikaner victory — positions him to drive meaningful railway development for the region.",
    source: "official",
    sourceLabel: "Official Notification — North Western Railways",
    date: "8 July 2026",
    timestamp: "2026-07-08T11:00:00Z",
    url: "#",
    category: "appointment",
  },
]

export const revalidate = 3600

let customApiUrl: string | null = null

export function setSocialApiUrl(url: string) {
  customApiUrl = url
}

export async function fetchUpdates(): Promise<SocialUpdate[]> {
  const url = customApiUrl || process.env.SOCIAL_API_URL || DEFAULT_API

  if (customApiUrl || process.env.SOCIAL_API_URL) {
    try {
      const res = await fetch(url, {
        next: { revalidate },
        headers: {
          "User-Agent": "VijenderPalSingh-Portfolio/1.0",
          Accept: "application/json",
        },
      })
      if (!res.ok) throw new Error(`API returned ${res.status}`)
      const data: SocialUpdate[] = await res.json()
      if (!Array.isArray(data) || data.length === 0)
        throw new Error("Empty response")
      return data.slice(0, 3)
    } catch {
      return FALLBACK_UPDATES
    }
  }

  return MOCK_UPDATES
}
