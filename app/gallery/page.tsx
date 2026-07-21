import { getImagesFromDirectory } from "@/lib/mediaManager"
import { MasonryGallery } from "@/components/MasonryGallery"

export const metadata = {
  title: "Public Gallery",
  description: "A glimpse into the grassroots moments and events.",
}

export default function GalleryPage() {
  const images = getImagesFromDirectory("gallery")

  return (
    <div className="bg-[var(--page-bg)] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-display font-semibold text-saffron text-sm tracking-widest uppercase">
            Visual Journey
          </span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-green">
            Public Gallery
          </h1>
          <p className="mt-4 text-fg/70 max-w-2xl mx-auto text-lg">
            Capturing grassroots moments, community engagement, and development milestones across Sri Karanpur.
          </p>
        </div>

        {images.length > 0 ? (
          <MasonryGallery images={images} />
        ) : (
          <div className="text-center py-20 text-fg/50">
            No images found in the gallery.
          </div>
        )}
      </div>
    </div>
  )
}
