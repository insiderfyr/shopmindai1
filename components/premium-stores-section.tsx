"use client"

import { useEffect, useRef, memo } from "react"

const PremiumStoresSection = memo(function PremiumStoresSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-10")
            observer.unobserve(entry.target)
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    const carousels = sectionRef.current?.querySelectorAll(".carousel-container")
    carousels?.forEach((carousel) => {
      observer.observe(carousel)
    })

    return () => observer.disconnect()
  }, [])

  // Optimized brand data pentru scalabilitate
  const premiumBrands = [
    "NET-A-PORTER", "SSENSE", "Shopify", "Amazon", "Nordstrom", 
    "MR PORTER", "BigCommerce", "eBay", "Rakuten", "HubSpot"
  ]

  const techBrands = [
    "Semrush", "ClickFunnels", "LUX LAIR", "Vestiaire Collective", "Luisaviaroma",
    "Dior", "Koio", "Allbirds", "Tommy Bahama", "The RealReal"
  ]

  // Simple icon component pentru performance
  const SimpleIcon = memo(({ brand }: { brand: string }) => (
    <div className="w-5 h-5 mr-3 bg-current opacity-60 rounded" 
         style={{ 
           maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='6' y='6' width='12' height='12' rx='2'/%3E%3C/svg%3E")`,
           maskSize: 'contain',
           maskRepeat: 'no-repeat'
         }}
         aria-hidden="true" />
  ))

  return (
    <section 
      id="stores" 
      ref={sectionRef}
      className="w-full py-12 text-center bg-[#f0f8ff] dark:bg-[#182533] transition-all duration-300 text-gray-900 dark:text-white overflow-hidden"
      aria-labelledby="stores-heading"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 
          id="stores-heading"
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Stores
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
          Integrated with leading retailers worldwide
        </p>

        {/* Performance-optimized carousel */}
        <div className="space-y-8">
          
          {/* First Carousel - Moving Left */}
          <div className="carousel-container opacity-0 translate-y-10 transition-all duration-700 ease-out" style={{ transitionDelay: "200ms" }}>
            <div className="relative">
              <div className="flex space-x-8 animate-scroll-left">
                {[...premiumBrands, ...premiumBrands].map((brand, index) => (
                  <div
                    key={`premium-${index}`}
                    className="carousel-item flex-shrink-0 group cursor-pointer"
                  >
                    <div className="px-6 py-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        <SimpleIcon brand={brand} />
                        <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                          {brand}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Carousel - Moving Right */}
          <div className="carousel-container opacity-0 translate-y-10 transition-all duration-700 ease-out" style={{ transitionDelay: "400ms" }}>
            <div className="relative">
              <div className="flex space-x-8 animate-scroll-right">
                {[...techBrands, ...techBrands].map((brand, index) => (
                  <div
                    key={`tech-${index}`}
                    className="carousel-item flex-shrink-0 group cursor-pointer"
                  >
                    <div className="px-6 py-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        <SimpleIcon brand={brand} />
                        <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                          {brand}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default PremiumStoresSection