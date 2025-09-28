"use client"

import { useEffect, useRef, memo } from "react"
import { Sparkles, Zap, Globe, Shield, Clock, Tag } from "lucide-react"

const FeaturesSection = memo(function FeaturesSection() {
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

    const features = sectionRef.current?.querySelectorAll(".feature-card")
    features?.forEach((feature) => {
      observer.observe(feature)
    })

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Matches",
      description: "Find exactly what you need with intelligent product matching technology.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get personalized recommendations in seconds, not hours of scrolling.",
    },
    {
      icon: Globe,
      title: "Cross-Store Search", 
      description: "Compare products across multiple retailers with a single query.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Shop confidently with our secure, privacy-focused platform.",
    },
    {
      icon: Clock,
      title: "Time Saving",
      description: "Cut shopping time by 70% with our streamlined search experience.",
    },
    {
      icon: Tag,
      title: "Best Deals",
      description: "Automatically find the best prices and active discounts across the web.",
    },
  ]

  return (
    <section 
      id="features" 
      ref={sectionRef} 
      className="py-20 px-6 md:px-16 transition-all duration-300"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          id="features-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white"
        >
          Why ShopMindAI?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Our AI-powered shopping assistant makes finding the perfect products effortless.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <article
                key={feature.title}
                className="feature-card opacity-0 translate-y-10 transition-all duration-700 ease-out bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 border border-gray-100 dark:border-gray-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default FeaturesSection