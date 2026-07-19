"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

interface MasonryGalleryProps {
  images: string[]
}

export function MasonryGallery({ images }: MasonryGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Split images into 3 columns for Masonry layout
  const columns = [[], [], []] as string[][]
  images.forEach((img, i) => columns[i % 3].push(img))

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map((column, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6">
            {column.map((img, imgIdx) => {
              // Stagger calculation based on total index
              const globalIdx = colIdx + imgIdx * 3
              return (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{
                    duration: 0.5,
                    delay: (globalIdx % 10) * 0.1,
                  }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl bg-black/5 shadow-sm hover:shadow-xl transition-all duration-500"
                  onClick={() => setSelectedImage(img)}
                >
                  {/* Since we don't know the exact aspect ratio of each photo beforehand, 
                      we use a standard aspect ratio container that auto-adjusts, or simply render the image with object-cover. 
                      Since Next.js requires width/height for standard <Image>, and we don't have it, 
                      we can use a relatively tall container and object-cover, or use intrinsic sizing if possible. 
                      But a masonry usually has varying heights. 
                      Next.js Image with layout="responsive" requires width/height.
                      For an unknown aspect ratio masonry, using an <img> tag or unoptimized is sometimes easier, 
                      but we'll use <Image width={800} height={800} className="w-full h-auto object-cover" /> 
                      which allows varying heights if not strictly constrained. */}
                  
                  <div className="relative w-full h-auto">
                    <Image
                      src={`/images/gallery/${img}`}
                      alt="Gallery Photo"
                      width={800}
                      height={800}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-green/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-2">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/gallery/${selectedImage}`}
                alt="Selected Photo"
                width={1600}
                height={1200}
                className="w-full h-auto max-h-[85vh] object-contain bg-black/50"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
