import type { Metadata } from "next"
import { Khand, Mukta } from "next/font/google"
import { SkeletonLoader } from "@/components/SkeletonLoader"
import { CustomCursor } from "@/components/CustomCursor"
import { GlobalNav } from "@/components/GlobalNav"
import { GlobalFooter } from "@/components/GlobalFooter"
import { StickyContact } from "@/components/sections/StickyContact"
import { SchemaMarkup } from "@/components/SchemaMarkup"
import { AnimatePresenceWrapper } from "@/components/AnimatePresenceWrapper"
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister"
import { ThemeProvider } from "@/components/ThemeProvider"
import { SmoothScroll } from "@/components/sections/SmoothScroll"
import "./globals.css"

const khand = Khand({
  variable: "--font-khand",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
})

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const baseUrl = "https://vijenderpalsingh.in"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Vijender Pal Singh | BJP Karyakarta — Sri Karanpur",
    template: "%s | Vijender Pal Singh — Sri Karanpur",
  },
  description:
    "Working for the people of Sri Karanpur since 1993. BJP karyakarta, social justice advocate, and community servant. Sabka Sath, Sabka Vikas.",
  keywords: [
    "Vijender Pal Singh",
    "BJP Sri Karanpur",
    "BJP Karyakarta",
    "Sri Karanpur",
    "Rajasthan politics",
    "Kisan Train",
    "BJP Minority Morcha",
    "ZRUCC",
    "Arjun Ram Meghwal",
  ],
  authors: [{ name: "Vijender Pal Singh" }],
  creator: "Vijender Pal Singh",
  publisher: "Vijender Pal Singh",
  robots: { index: true, follow: true },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Vijender Pal Singh — BJP Karyakarta, Sri Karanpur",
    description:
      "BJP karyakarta since 1993. Sabka Sath, Sabka Vikas in Sri Karanpur. Delivering infrastructure, farmer welfare, and community service.",
    url: baseUrl,
    siteName: "Vijender Pal Singh",
    locale: "hi_IN",
    alternateLocale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-portrait.jpg",
        width: 800,
        height: 1200,
        alt: "Vijender Pal Singh — BJP Karyakarta, Sri Karanpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijender Pal Singh — BJP Karyakarta, Sri Karanpur",
    description:
      "BJP karyakarta since 1993. Sabka Sath, Sabka Vikas in Sri Karanpur.",
    images: ["/hero-portrait.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="hi"
      className={`${khand.variable} ${mukta.variable}`}
    >
      <head>
        <link rel="canonical" href={baseUrl} />
        <link rel="apple-touch-icon" href="/images/bjp-icon.png" />
        <link rel="apple-touch-startup-image" href="/images/bjp-logo.png" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Sri Karanpur" />
        <meta name="theme-color" content="#FF9933" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vijender Pal Singh" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-screen antialiased font-body">
        <ThemeProvider>
        <SkeletonLoader />
        <CustomCursor />
        <ServiceWorkerRegister />
        <GlobalNav />
        <SchemaMarkup type="Person" />
        <SmoothScroll>
          <AnimatePresenceWrapper>
            <main className="pt-16 lg:pt-20">{children}</main>
          </AnimatePresenceWrapper>
          <GlobalFooter />
        </SmoothScroll>
        <StickyContact />
        </ThemeProvider>
      </body>
    </html>
  )
}

