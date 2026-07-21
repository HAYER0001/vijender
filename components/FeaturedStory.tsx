import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function FeaturedStory() {
  return (
    <div className="card-editorial flex flex-col md:flex-row items-center gap-8 bg-green text-white border-white dark:border-saffron mt-12 mx-auto max-w-5xl">
      <div className="w-full md:w-1/3 shrink-0 relative aspect-square bg-saffron rounded-xl overflow-hidden border-4 border-white flex items-end justify-center pt-8">
        <Image
          src="/hero-portrait.png"
          alt="Featured Campaign"
          width={300}
          height={300}
          className="object-cover object-bottom"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <span className="font-display font-semibold text-saffron tracking-widest uppercase text-sm mb-2 block">
          Latest Campaign
        </span>
        <h3 className="font-display text-4xl font-bold mb-4">
          Empowering the Farmers of Sri Karanpur
        </h3>
        <p className="text-white/80 font-eagle text-lg leading-relaxed mb-6">
          A new initiative to provide direct export access and modern agricultural infrastructure to every farming family in the region.
        </p>
        <button className="btn-pill bg-white text-green border-white hover:bg-cream">
          Read Full Story <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
