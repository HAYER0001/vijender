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
    authorHandle: "@vijenderpals3cc",
    avatarInitials: "VP",
    content:
      "Proud to have secured the Kisan Train for our hardworking Kinnow farmers from Ganganagar to Bangladesh. This will open new export markets and ensure better prices for our farmers. Sabka Sath, Sabka Vikas! 🚂🇮🇳",
    imageUrl: "/images/kisan-train-scene.jpg",
    timestamp: "2026-07-18T10:30:00Z",
    timestampLabel: "1 day ago",
    likes: 2847,
    shares: 892,
    url: "https://www.x.com/vijenderpals3cc",
  },
  {
    id: "vps-002",
    platform: "instagram",
    authorName: "Vijender Pal Singh",
    authorHandle: "@vijenderpals3cc",
    avatarInitials: "VP",
    content:
      "|| मन की बात कार्यक्रम ||\nदेश के यशस्वी प्रधानमंत्री श्री नरेन्द्र मोदी जी 'मन की बात' कार्यक्रम के माध्यम से देशवासियों से संवाद करेंगे।\n🗓️ : रविवार, 28 जून 2026\n\n#MannKiBaat #NarendraModi #VijenderPalSingh #SriKaranpur",
    imageUrl: "/images/underbridge-1.jpg",
    timestamp: "2026-07-15T14:00:00Z",
    timestampLabel: "4 days ago",
    likes: 4521,
    shares: 1205,
    url: "https://www.instagram.com/vijenderpals3cc",
  },
  {
    id: "vps-003",
    platform: "facebook",
    authorName: "Vijender Pal Singh",
    authorHandle: "@vijenderpals3cc",
    avatarInitials: "VP",
    content:
      "Grateful to the party leadership for appointing me as State Co-Incharge of BJP Minority Morcha, Rajasthan. I will work tirelessly to strengthen our bonds across all communities and ensure every voice is heard.",
    imageUrl: "/images/morcha-event.jpg",
    timestamp: "2026-07-10T09:00:00Z",
    timestampLabel: "1 week ago",
    likes: 3102,
    shares: 645,
    url: "https://www.facebook.com/vijenderpals3cc",
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

export async function fetchSocial(): Promise<SocialPost[]> {
  if (apiUrl) {
    try {
      const res = await fetch(apiUrl, {
        next: { revalidate: 3600 },
      })
      if (!res.ok) throw new Error(`API responded with ${res.status}`)
      const data: SocialPost[] = await res.json()
      return data.length > 0 ? data : MOCK_POSTS
    } catch {
      return [FALLBACK_POST]
    }
  }

  try {
    return MOCK_POSTS
  } catch {
    return [FALLBACK_POST]
  }
}
