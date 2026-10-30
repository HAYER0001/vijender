import Link from "next/link"
import { getImagesFromDirectory } from "@/lib/mediaManager"
import { RandomizedMosaicGallery } from "@/components/RandomizedMosaicGallery"
import { ArrowRight } from "lucide-react"

export function Gallery() {
  const images = getImagesFromDirectory("gallery")
  
  if (images.length === 0) return null

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-display font-semibold text-saffron text-sm tracking-widest uppercase">
            Visual Highlights
          </span>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-green dark:text-emerald-400">
            Grassroots Photo Wall
          </h2>
          <p className="mt-3 text-fg/70 max-w-xl mx-auto text-base sm:text-lg">
            Organic moments from public rallies, karyakarta meetings, and constituency initiatives across Sri Karanpur.
          </p>
        </div>
        
        <div className="mt-8">
          <RandomizedMosaicGallery images={images.slice(0, 8)} />
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-green text-white hover:bg-green-light font-semibold text-sm shadow-md transition-all hover:gap-3"
          >
            <span>Explore All {images.length} Photos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
