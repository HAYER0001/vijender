import { NextResponse } from 'next/server'
import { SocialPost } from '@/lib/fetchSocial'

export const revalidate = 3600 // Cache for 1 hour

export async function GET() {
  // TODO: Connect to real Social Media APIs (Instagram Graph API, Twitter API V2)
  // Example for Instagram:
  // const instagramRes = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`)
  // const igData = await instagramRes.json()
  
  // For now, we will return the mock data, but this is exactly where you will drop 
  // the API keys from your developer accounts to make it fully auto-updating!

  const MOCK_POSTS: SocialPost[] = [
    {
      id: "vps-001",
      platform: "twitter",
      authorName: "Vijender Pal Singh",
      authorHandle: "@vijenderpals3cc",
      avatarInitials: "VP",
      content:
        "Proud to have secured the Kisan Train for our hardworking Kinnow farmers from Ganganagar to Bangladesh. This will open new export markets and ensure better prices for our farmers. Sabka Sath, Sabka Vikas! 🚂🇮🇳",
      imageUrl: "/media/images/Lok Sammat 16-09-2021.jpg",
      timestamp: new Date(Date.now() - 86400000).toISOString(),
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
      imageUrl: "/media/images/India News 05-06-2026.jpg",
      timestamp: new Date(Date.now() - 345600000).toISOString(),
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
      imageUrl: "/media/images/Rajasthan Patrika 01-03-2020.jpg",
      timestamp: new Date(Date.now() - 604800000).toISOString(),
      timestampLabel: "1 week ago",
      likes: 3102,
      shares: 645,
      url: "https://www.facebook.com/vijenderpals3cc",
    },
  ]

  return NextResponse.json(MOCK_POSTS)
}
