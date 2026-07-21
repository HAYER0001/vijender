import { getVideosFromDirectory } from "@/lib/mediaManager"

export function MediaSection() {
  const videos = getVideosFromDirectory("media/video")

  return (
    <section className="py-24 bg-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-saffron">In The Media</h2>
          <p className="mt-4 text-white/70">Latest news coverage and video updates.</p>
        </div>
        
        {videos.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-8">
            {videos.map((src, idx) => (
              <div key={idx} className="relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black">
                <video 
                  src={src} 
                  controls 
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-white/50 border-2 border-dashed border-white/20 rounded-3xl">
            <p>Upload .mp4 files to the /public/media/video folder to display them here.</p>
          </div>
        )}
      </div>
    </section>
  )
}
