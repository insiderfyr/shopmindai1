"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function StoresSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100")
            entry.target.classList.remove("opacity-0")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const storeLogos = [
    { src: "/logos/amazon.svg", alt: "Amazon" },
    { src: "/logos/walmart.svg", alt: "Walmart" },
    { src: "/logos/target.svg", alt: "Target" },
    { src: "/logos/bestbuy.svg", alt: "Best Buy" },
    { src: "/logos/apple.svg", alt: "Apple" },
    { src: "/logos/nike.svg", alt: "Nike" },
    { src: "/logos/adidas.svg", alt: "Adidas" },
    { src: "/logos/zara.svg", alt: "Zara" },
    { src: "/logos/handm.svg", alt: "H&M" },
    { src: "/logos/sephora.svg", alt: "Sephora" },
    { src: "/logos/ulta.svg", alt: "Ulta Beauty" },
    { src: "/logos/ebay.svg", alt: "eBay" },
    { src: "/logos/aliexpress.svg", alt: "AliExpress" },
    { src: "/logos/etsy.svg", alt: "Etsy" },
    { src: "/logos/lululemon.svg", alt: "Lululemon" },
    { src: "/logos/samsung.svg", alt: "Samsung" },
  ]

  return (
    <section id="stores" ref={sectionRef} className="py-20 px-6 md:px-16 opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white text-transition">
          Available at Top Stores
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {storeLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <div className="relative h-12 w-full flex items-center justify-center group">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label={`${logo.alt} logo`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
