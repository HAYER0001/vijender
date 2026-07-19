"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { Camera } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const CLIPS = [
  "polygon(1% 5%, 4% 1%, 13% 0%, 23% 2%, 33% 0%, 44% 1%, 54% 0%, 65% 2%, 75% 0%, 86% 1%, 95% 0%, 99% 4%, 100% 13%, 99% 23%, 100% 34%, 99% 44%, 100% 55%, 99% 65%, 100% 76%, 99% 86%, 97% 95%, 90% 99%, 80% 100%, 69% 98%, 58% 100%, 47% 99%, 36% 100%, 25% 98%, 14% 100%, 5% 99%, 1% 95%, 0% 85%, 1% 74%, 0% 63%, 1% 52%, 0% 41%, 1% 30%, 0% 19%)",
  "polygon(7% 1%, 20% 0%, 33% 2%, 46% 0%, 59% 1%, 72% 0%, 85% 2%, 96% 0%, 100% 7%, 99% 19%, 100% 32%, 99% 45%, 100% 58%, 99% 71%, 100% 84%, 96% 96%, 88% 100%, 75% 98%, 62% 100%, 49% 99%, 36% 100%, 23% 98%, 10% 100%, 2% 95%, 0% 83%, 1% 70%, 0% 57%, 1% 44%, 0% 31%, 1% 18%)",
  "polygon(2% 8%, 8% 2%, 19% 0%, 30% 1%, 42% 0%, 53% 2%, 64% 0%, 76% 1%, 87% 0%, 96% 3%, 100% 9%, 99% 20%, 100% 31%, 99% 42%, 100% 53%, 99% 64%, 100% 75%, 98% 87%, 92% 97%, 81% 100%, 69% 99%, 57% 100%, 45% 98%, 33% 100%, 21% 99%, 10% 100%, 2% 94%, 0% 83%, 1% 71%, 0% 59%, 1% 47%, 0% 35%, 1% 23%, 0% 11%)",
  "polygon(5% 2%, 15% 0%, 27% 1%, 39% 0%, 51% 2%, 63% 0%, 75% 1%, 87% 0%, 97% 4%, 100% 14%, 99% 26%, 100% 38%, 99% 50%, 100% 62%, 99% 74%, 96% 88%, 86% 98%, 74% 100%, 62% 99%, 50% 100%, 38% 98%, 26% 100%, 14% 99%, 3% 95%, 0% 84%, 1% 72%, 0% 60%, 1% 48%, 0% 36%, 1% 24%, 0% 12%)",
]

const items = [
  {
    src: "/images/development-scene-1.jpg",
    alt: "Road construction and infrastructure development in Sri Karanpur",
    label: "Infrastructure Development",
    className: "sm:col-span-2",
    aspect: "aspect-[16/9] sm:aspect-auto",
    clipIndex: 0,
    parallaxFactor: -0.12,
  },
  {
    src: "/images/morcha-portrait.jpg",
    alt: "Vijender Pal Singh at BJP Minority Morcha Rajasthan event",
    label: "Minority Outreach",
    className: "sm:row-span-2",
    aspect: "aspect-[4/5] sm:aspect-auto",
    clipIndex: 1,
    parallaxFactor: -0.25,
  },
  {
    src: "/images/kisan-train-scene.jpg",
    alt: "Kisan Train — exporting Kinnow farmers produce to Bangladesh",
    label: "Farmer Empowerment",
    className: "",
    aspect: "aspect-[4/3]",
    clipIndex: 2,
    parallaxFactor: -0.08,
  },
  {
    src: "/images/development-scene-2.jpg",
    alt: "Community development and public welfare projects",
    label: "Community First",
    className: "",
    aspect: "aspect-[4/3]",
    clipIndex: 3,
    parallaxFactor: -0.18,
  },
  {
    src: "/images/zrucc-document.jpg",
    alt: "ZRUCC Member appointment certificate for North Western Railways",
    label: "Railway Advocacy",
    className: "",
    aspect: "aspect-[4/3]",
    clipIndex: 0,
    parallaxFactor: -0.1,
  },
  {
    src: "/images/development-scene-3.jpg",
    alt: "Community gathering with supporters across Sri Karanpur",
    label: "Grassroots Connect",
    className: "sm:col-span-2",
    aspect: "aspect-[16/9] sm:aspect-auto",
    clipIndex: 1,
    parallaxFactor: -0.15,
  },
  {
    src: "/images/underbridge-2.jpg",
    alt: "19 FF Rail Track Underbridge for village safety",
    label: "Rail Safety",
    className: "",
    aspect: "aspect-[4/3]",
    clipIndex: 2,
    parallaxFactor: -0.12,
  },
  {
    src: "/images/youtube-thumb-1.jpg",
    alt: "Media appearance and public outreach program",
    label: "Media & Outreach",
    className: "",
    aspect: "aspect-[4/3]",
    clipIndex: 3,
    parallaxFactor: -0.22,
  },
]

export function ImageGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const ctx = gsap.context(() => {
      const cards = gridRef.current!.querySelectorAll<HTMLElement>(".gallery-card")
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      cards.forEach((card, i) => {
        const img = card.querySelector<HTMLElement>(".gallery-img")
        if (!img) return
        gsap.to(img, {
          y: items[i % items.length].parallaxFactor * 300,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-28 sm:py-36 bg-cream/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-display font-semibold text-saffron text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <Camera className="w-4 h-4" />
            Visual Chronicle
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-green">
            On the Ground with Vijender Pal Singh
          </h2>
          <p className="mt-4 text-fg/70 text-base sm:text-lg">
            A visual journey through three decades of grassroots service in Sri
            Karanpur.
          </p>
        </motion.div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px]"
        >
          {items.map((item, i) => (
            <figure
              key={i}
              className={`gallery-card group relative overflow-hidden rounded-2xl sm:rounded-3xl ${item.className} ${item.aspect}`}
              aria-label={item.alt}
              style={{ background: "rgba(15,82,58,0.03)" }}
            >
              <div
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: CLIPS[item.clipIndex] }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="gallery-img object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-green/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <svg
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <filter id={`brush-${i}`}>
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="1.6"
                      numOctaves="4"
                      result="noise"
                    />
                    <feColorMatrix
                      type="saturate"
                      values="0"
                      in="noise"
                      result="gray"
                    />
                    <feComponentTransfer in="gray" result="dark">
                      <feFuncA type="linear" slope="0.1" />
                    </feComponentTransfer>
                  </filter>
                  <rect
                    width="100%"
                    height="100%"
                    filter={`url(#brush-${i})`}
                  />
                </svg>
              </div>

              <div
                className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-6"
                style={{ clipPath: CLIPS[item.clipIndex] }}
              >
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-green shadow-sm">
                    {item.label}
                  </span>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
