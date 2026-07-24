import { SchemaMarkup } from "@/components/SchemaMarkup"
import { MediaSection } from "@/components/sections/MediaSection"
import { MasonryGallery } from "@/components/MasonryGallery"
import { getImagesFromDirectory } from "@/lib/mediaManager"
import Image from "next/image"

export const metadata = {
  title: "Media & Press",
  description: "Press releases, achievements, and news about Vijender Pal Singh.",
}

export default function MediaPage() {
  const mediaPhotos = getImagesFromDirectory("media/images")

  return (
    <div className="bg-[var(--page-bg)] min-h-screen pt-32 pb-20">
      <SchemaMarkup type="Person" />
      <SchemaMarkup type="GovernmentOrganization" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="font-display text-5xl font-bold text-green mb-6">
            Media & Press
          </h1>
          <p className="text-lg text-fg/80">
            Updates and press statements highlighting grassroots work and initiatives in Sri Karanpur.
          </p>
        </header>

        <main className="space-y-16">
          <section className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-black/5">
            <h2 className="font-display text-3xl font-bold text-green mb-6 border-b border-green/10 pb-4">
              Key Infrastructure Achievements
            </h2>
            <article className="mb-8">
              <h3 className="font-display text-2xl font-semibold text-saffron mb-3">
                19 FF Rail Track Underbridge
              </h3>
              <ul className="list-disc list-inside space-y-2 text-fg/80 ml-2">
                <li>Successfully secured approval and construction of the underbridge.</li>
                <li>Eliminated daily risks for villagers crossing the tracks.</li>
                <li>Transformed local connectivity and saved lives.</li>
              </ul>
            </article>

            <article>
              <h3 className="font-display text-2xl font-semibold text-saffron mb-3">
                Kisan Train for Kinnow Farmers
              </h3>
              <ul className="list-disc list-inside space-y-2 text-fg/80 ml-2">
                <li>Facilitated dedicated Kisan Train logistics for Ganganagar farmers.</li>
                <li>Enabled direct export to Bangladesh, bypassing intermediaries.</li>
                <li>Significantly increased profit margins and market reach for local agriculture.</li>
              </ul>
            </article>
          </section>

          <section className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-black/5">
            <h2 className="font-display text-3xl font-bold text-green mb-6 border-b border-green/10 pb-4">
              Political & Committee Appointments
            </h2>
            <article className="mb-8">
              <h3 className="font-display text-2xl font-semibold text-saffron mb-3">
                ZRUCC Member, NWR Railways
              </h3>
              <ul className="list-disc list-inside space-y-2 text-fg/80 ml-2">
                <li>Appointed to Zonal Railway Users' Consultative Committee.</li>
                <li>Advocating for enhanced passenger amenities across North Western Railways.</li>
                <li>Representing the interests of regional travelers and freight operators.</li>
              </ul>
            </article>

            <article className="mb-8">
              <h3 className="font-display text-2xl font-semibold text-saffron mb-3">
                State Co-Incharge, BJP Minority Morcha
              </h3>
              <ul className="list-disc list-inside space-y-2 text-fg/80 ml-2">
                <li>Working closely with minority communities across Rajasthan.</li>
                <li>Ensuring inclusive development under the Sabka Sath, Sabka Vikas vision.</li>
              </ul>
            </article>

            <article>
              <h3 className="font-display text-2xl font-semibold text-saffron mb-3">
                Bikaner War Room Manager
              </h3>
              <ul className="list-disc list-inside space-y-2 text-fg/80 ml-2">
                <li>Managed the campaign war room for Union Minister Arjun Ram Meghwal.</li>
                <li>Executed data-driven voter outreach and real-time polling day strategies.</li>
                <li>Contributed to a sweeping victory through grassroots mobilization.</li>
              </ul>
            </article>
          </section>
          
          <MediaSection />

          {mediaPhotos.length > 0 && (
            <section className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-black/5 mt-16">
              <h2 className="font-display text-3xl font-bold text-green mb-6 border-b border-green/10 pb-4">
                Press Photos
              </h2>
              <MasonryGallery images={mediaPhotos} />
            </section>
          )}

        </main>
      </div>
    </div>
  )
}
