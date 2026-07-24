"use client"

import Image from "next/image"

interface NewsTickerProps {
  scroll1: string[]
  scroll2: string[]
}

export function NewsTicker({ scroll1, scroll2 }: NewsTickerProps) {
  const s1 = scroll1.length > 0 ? scroll1 : ["/media/images/Dainik%20Bhaskar%2001-03-2020.jpg", "/media/images/Lok%20Sammat%2016-09-2021.jpg"]
  const s2 = scroll2.length > 0 ? scroll2 : ["/media/images/Rajasthan%20Patrika%2008-08-20.jpg", "/media/images/Seema%20Kiran%2017-10-2022.jpg"]

  return (
    <div className="relative w-full h-[500px] lg:h-[700px] overflow-hidden rounded-3xl group flex gap-4">
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .scroll-up {
          animation: scrollUp 25s linear infinite;
        }
        .scroll-down {
          animation: scrollDown 25s linear infinite;
        }
        .group:hover .scroll-up,
        .group:hover .scroll-down {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Top and Bottom faded edges for seamless scroll illusion */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
      
      {/* Column 1 - Scrolling UP */}
      <div className="flex-1 flex flex-col gap-6 pt-8 scroll-up">
        {[...s1, ...s1].map((src, idx) => (
          <a
            key={`s1-${idx}`}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full rounded-lg overflow-hidden shadow-2xl border-[4px] border-white transition-all duration-500 hover:z-20 hover:scale-105 cursor-pointer rotate-2 hover:rotate-0"
          >
            <div className="absolute inset-0 bg-saffron/10 mix-blend-multiply opacity-50 transition-opacity hover:opacity-0" />
            <Image
              src={src}
              alt="News Clipping 1"
              width={300}
              height={400}
              className="w-full h-auto object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              unoptimized
            />
          </a>
        ))}
      </div>

      {/* Column 2 - Scrolling DOWN */}
      <div className="flex-1 flex flex-col gap-6 pt-8 scroll-down">
        {[...s2, ...s2].map((src, idx) => (
          <a
            key={`s2-${idx}`}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full rounded-lg overflow-hidden shadow-2xl border-[4px] border-white transition-all duration-500 hover:z-20 hover:scale-105 cursor-pointer -rotate-2 hover:rotate-0"
          >
            <div className="absolute inset-0 bg-green/10 mix-blend-multiply opacity-50 transition-opacity hover:opacity-0" />
            <Image
              src={src}
              alt="News Clipping 2"
              width={300}
              height={400}
              className="w-full h-auto object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              unoptimized
            />
          </a>
        ))}
      </div>
    </div>
  )
}
