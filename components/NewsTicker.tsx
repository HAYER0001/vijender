"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const CLIPPINGS = [
  "/images/kisan-train-clipping.jpg",
  "/images/zrucc-document.jpg",
  "/images/zrucc-certificate.jpg",
  "/images/bjp-banner.jpg",
  "/images/meghwal-campaign-1.jpg",
]

export function NewsTicker() {
  return (
    <div className="relative w-full h-[500px] lg:h-[700px] overflow-hidden rounded-3xl group">
      <style>{`
        @keyframes verticalScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .scrolling-wrapper {
          animation: verticalScroll 25s linear infinite;
        }
        .group:hover .scrolling-wrapper {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Top and Bottom faded edges for seamless scroll illusion */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
      
      <div className="flex flex-col gap-8 pt-8 scrolling-wrapper">
        {/* Double array to create infinite scroll */}
        {[...CLIPPINGS, ...CLIPPINGS].map((src, idx) => (
          <a
            key={idx}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className={`block relative w-full max-w-[280px] mx-auto rounded-lg overflow-hidden shadow-2xl border-[6px] border-white transition-all duration-500 hover:z-20 hover:scale-110 cursor-pointer ${
              idx % 2 === 0 ? "rotate-2 hover:rotate-0" : "-rotate-3 hover:rotate-0"
            }`}
          >
            <div className="absolute inset-0 bg-saffron/10 mix-blend-multiply opacity-50 transition-opacity hover:opacity-0" />
            <Image
              src={src}
              alt="Newspaper Clipping"
              width={400}
              height={500}
              className="w-full h-auto object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              unoptimized
            />
          </a>
        ))}
      </div>
    </div>
  )
}
