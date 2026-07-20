import { HeroCanvas } from "@/components/HeroCanvas"
import { LiveSocialFeed } from "@/components/LiveSocialFeed"
import { NewsTicker } from "@/components/NewsTicker"
import Image from "next/image"

export const revalidate = 3600

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[var(--page-bg)]">
        <HeroCanvas />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* 1. Left: Portrait */}
          <div className="relative w-full lg:w-[30%] max-w-md mx-auto shrink-0">
            <Image
              src="/hero-portrait.png"
              alt="Vijender Pal Singh"
              width={600}
              height={800}
              className="w-full h-auto object-contain rounded-[3rem] drop-shadow-[0_20px_20px_rgba(15,82,58,0.3)] hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
          
          {/* 2. Middle: Text content */}
          <div className="flex-1 lg:w-[40%] space-y-6 text-center lg:text-left z-20">
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-green leading-[1.1] drop-shadow-sm">
              वादे नहीं <br />
              <span className="text-saffron">ईरादे</span>
            </h1>
            <p className="text-lg md:text-xl text-fg/80 max-w-xl mx-auto lg:mx-0 font-body">
              Vijender Pal Singh has been working for the people of Sri Karanpur since 1993. A dedicated BJP Karyakarta, driving infrastructure, social justice, and community welfare. Sabka Sath, Sabka Vikas.
            </p>
          </div>

          {/* 3. Right: Scrolling Newspaper Cuttings */}
          <div className="w-full lg:w-[30%] shrink-0">
            <NewsTicker />
          </div>

        </div>
      </section>

      <LiveSocialFeed />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-green">Glimpses of Grassroots Work</h2>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/rally-crowd.jpg" 
                alt="Rally crowd" 
                width={800} height={1000} 
                className="w-full h-auto object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw0NDQ8NDw0NDw0NDQ0NDQ0NDQ0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ0PFSsdFR0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBBgMBIgACEQEDEQH..."
              />
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/kisan-train.jpg" 
                alt="Kisan Train" 
                width={800} height={600} 
                className="w-full h-auto object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw0NDQ8NDw0NDw0NDQ0NDQ0NDQ0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ0PFSsdFR0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBBgMBIgACEQEDEQH..."
              />
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/underbridge.jpg" 
                alt="Underbridge" 
                width={800} height={800} 
                className="w-full h-auto object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw0NDQ8NDw0NDw0NDQ0NDQ0NDQ0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ0PFSsdFR0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBBgMBIgACEQEDEQH..."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
