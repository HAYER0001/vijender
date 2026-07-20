import fs from "fs"
import path from "path"
import { MasonryGallery } from "@/components/MasonryGallery"

export const metadata = {
  title: "Public Gallery",
  description: "A glimpse into the grassroots moments and events.",
}

// Recursively fetch all images from the public directory
function getAllImages(dirPath: string, arrayOfFiles: string[] = []) {
  try {
    const files = fs.readdirSync(dirPath)
    files.forEach((file) => {
      const fullPath = path.join(dirPath, file)
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = getAllImages(fullPath, arrayOfFiles)
      } else {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
          // Exclude logos and ui assets
          if (!file.includes("hero-portrait") && !file.includes("bjp-logo") && !file.includes("bjp-icon") && !file.includes("offline")) {
            // Convert absolute path to public URL path
            const relativePath = fullPath.split("public")[1]
            if (relativePath) arrayOfFiles.push(relativePath.replace(/\\/g, "/"))
          }
        }
      }
    })
  } catch (error) {
    console.error("Failed to read directory:", error)
  }
  return arrayOfFiles
}

function getGalleryImages() {
  const publicDir = path.join(process.cwd(), "public")
  return getAllImages(publicDir)
}

export default function GalleryPage() {
  const images = getGalleryImages()

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
