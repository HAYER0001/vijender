export interface SearchItem {
  title: string
  description: string
  category: string
  href: string
  keywords: string[]
}

export const searchData: SearchItem[] = [
  {
    title: "Home - Vijender Pal Singh",
    description: "BJP Karyakarta since 1993 | Sri Karanpur constituency",
    category: "Page",
    href: "/",
    keywords: ["home", "vijender", "pal", "singh", "bjp", "sri karanpur", "karyakarta", "leader"],
  },
  {
    title: "My Journey",
    description: "The complete journey of Vijender Pal Singh — from college to BJP karyakarta",
    category: "Page",
    href: "/journey",
    keywords: ["journey", "timeline", "achievements", "about", "biography", "history"],
  },
  {
    title: "Sri Karanpur Constituency",
    description: "Development work and initiatives in Sri Karanpur constituency",
    category: "Page",
    href: "/sri-karanpur",
    keywords: ["sri karanpur", "constituency", "development", "work", "ganganagar"],
  },
  {
    title: "Gallery",
    description: "Photo gallery featuring events, rallies, and public engagements",
    category: "Page",
    href: "/gallery",
    keywords: ["gallery", "photos", "images", "events", "rallies", "campaign"],
  },
  {
    title: "Media & Press",
    description: "Press releases, news updates, and official statements",
    category: "Page",
    href: "/media",
    keywords: ["media", "press", "news", "updates", "statements", "pr"],
  },
  {
    title: "Connect & Grievances",
    description: "Share your grievance or connect with Vijender Pal Singh on WhatsApp",
    category: "Page",
    href: "/connect",
    keywords: ["connect", "contact", "grievance", "whatsapp", "help", "support"],
  },
  {
    title: "Kisan Train to Bangladesh",
    description:
      "Secured Kisan Train for Ganganagar Kinnow farmers to Bangladesh — opening export corridors",
    category: "Achievement",
    href: "/sri-karanpur",
    keywords: [
      "kisan train",
      "bangladesh",
      "kinnow",
      "farmers",
      "export",
      "ganganagar",
      "agriculture",
      "railway",
    ],
  },
  {
    title: "19 FF Rail Track Underbridge",
    description:
      "Built 19 FF Rail Track Underbridge for village safety — eliminating dangerous rail crossings",
    category: "Achievement",
    href: "/sri-karanpur",
    keywords: [
      "underbridge",
      "rail track",
      "19 ff",
      "safety",
      "infrastructure",
      "railway crossing",
    ],
  },
  {
    title: "State Co-Incharge — BJP Minority Morcha",
    description:
      "Appointed State Co-Incharge of BJP Minority Morcha, Rajasthan — strengthening community outreach",
    category: "Achievement",
    href: "/journey",
    keywords: [
      "minority morcha",
      "state co-incharge",
      "bjp",
      "rajasthan",
      "appointment",
      "community",
    ],
  },
  {
    title: "ZRUCC Member — North Western Railways",
    description:
      "Appointed ZRUCC Member for NWR Railways — representing Sri Karanpur's railway interests",
    category: "Achievement",
    href: "/journey",
    keywords: [
      "zrucc",
      "railway",
      "north western railways",
      "nwr",
      "consultative committee",
      "appointment",
    ],
  },
  {
    title: "War Room Manager — Arjun Ram Meghwal",
    description:
      "Managed War Room for Union Minister Arjun Ram Meghwal's Bikaner victory campaign",
    category: "Achievement",
    href: "/journey",
    keywords: [
      "war room",
      "arjun ram meghwal",
      "bikaner",
      "campaign",
      "victory",
      "union minister",
    ],
  },
]

export function filterSearch(query: string, data: SearchItem[] = searchData): SearchItem[] {
  const q = query.toLowerCase().trim()
  if (!q) return data.slice(0, 6)

  const scored = data.map((item) => {
    let score = 0
    const titleL = item.title.toLowerCase()
    const descL = item.description.toLowerCase()
    const kwL = item.keywords.join(" ").toLowerCase()

    if (titleL.includes(q)) score += 3
    if (kwL.includes(q)) score += 2
    if (descL.includes(q)) score += 1
    if (titleL.startsWith(q)) score += 2

    return { item, score }
  })

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((s) => s.item)
}

export function highlightMatch(text: string, query: string): string {
  if (!query.trim()) return text
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const regex = new RegExp(`(${escaped})`, "gi")
  return text.replace(regex, "<mark>$1</mark>")
}
