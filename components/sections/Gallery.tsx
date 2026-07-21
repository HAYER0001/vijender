import { getImagesFromDirectory } from "@/lib/mediaManager"
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group shadow-md border-4 border-white">
              <div className="absolute inset-0 bg-saffron/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <Image 
                src={src} 
                alt={`Gallery Image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
