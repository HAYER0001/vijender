import { HeroCanvas } from "@/components/HeroCanvas"
import { LiveUpdates } from "@/components/LiveUpdates"
import Image from "next/image"

export const revalidate = 3600

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[var(--page-bg)]">
        <HeroCanvas />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="/hero-portrait.png"
              alt="Vijender Pal Singh"
              width={600}
              height={800}
              className="w-full h-auto object-contain rounded-[3rem] shadow-2xl"
              priority
            />
          </div>
          <div className="flex-1 space-y-6">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-green leading-tight">
              वादे नहीं <br />
              <span className="text-saffron">ईरादे</span>
            </h1>
            <p className="text-lg md:text-xl text-fg/80 max-w-xl font-body">
              Vijender Pal Singh has been working for the people of Sri Karanpur since 1993. A dedicated BJP Karyakarta, driving infrastructure, social justice, and community welfare. Sabka Sath, Sabka Vikas.
            </p>
          </div>
        </div>
      </section>

      <LiveUpdates />

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
