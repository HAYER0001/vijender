import { getImagesFromDirectory } from "@/lib/mediaManager"
import { MasonryGallery } from "@/components/MasonryGallery"
import Image from "next/image"

export function Gallery() {
  const images = getImagesFromDirectory("gallery")
  
  if (images.length === 0) return null

  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-green">Photo Gallery</h2>
          <p className="mt-4 text-fg/70">Moments from the grassroots.</p>
        </div>
        
        <div className="mt-8">
          <MasonryGallery images={images.slice(0, 6)} />
        </div>
      </div>
    </section>
  )
}
