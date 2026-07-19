"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ParallaxGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((el, index) => {
        if (!el) return
        gsap.to(el, {
          yPercent: index % 2 === 0 ? -20 : -30,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="py-20 space-y-32 max-w-6xl mx-auto px-4">
      {/* Item 1 */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden rounded-3xl group">
        <div 
          ref={(el) => { if(el) imageRefs.current[0] = el }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <Image 
            src="/kisan-train.jpg"
            alt="Kisan Train for Ganganagar Kinnow farmers"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw0NDQ8NDw0NDw0NDQ0NDQ0NDQ0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ0PFSsdFR0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBBgMBIgACEQEDEQH..."
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700" />
        </div>
        <div className="relative z-10 max-w-xl ml-8 md:ml-16 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Kisan Train</h2>
          <p className="text-white/90 text-lg">
            Secured a dedicated Kisan Train for Ganganagar Kinnow farmers to export to Bangladesh. Connecting local agriculture to international markets.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-end overflow-hidden rounded-3xl group">
        <div 
          ref={(el) => { if(el) imageRefs.current[1] = el }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <Image 
            src="/underbridge.jpg"
            alt="19 FF Rail Track Underbridge"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw0NDQ8NDw0NDw0NDQ0NDQ0NDQ0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ0PFSsdFR0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBBgMBIgACEQEDEQH..."
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700" />
        </div>
        <div className="relative z-10 max-w-xl mr-8 md:mr-16 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-right">
          <h2 className="font-display text-4xl font-bold text-white mb-4">19 FF Underbridge</h2>
          <p className="text-white/90 text-lg">
            Built the 19 FF Rail Track Underbridge for village safety, transforming connectivity and safeguarding lives in our local communities.
          </p>
        </div>
      </div>
    </div>
  )
}
