"use client"

import { useEffect, useRef, memo } from "react"
import { MessageSquare, Search, ShoppingBag } from "lucide-react"

const HowItWorksSection = memo(function HowItWorksSection() {
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

    const steps = sectionRef.current?.querySelectorAll(".step-item")
    steps?.forEach((step) => {
      observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      icon: MessageSquare,
      title: "1. Ask",
      description: "Tell us what you're looking for",
    },
    {
      icon: Search,
      title: "2. Match",
      description: "We search across top retailers",
    },
    {
      icon: ShoppingBag,
      title: "3. Buy",
      description: "You pick and shop smarter",
    },
  ]

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef} 
      className="py-20 px-6 md:px-16"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          id="how-it-works-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          How ShopMindAI Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <article
                key={step.title}
                className="step-item opacity-0 translate-y-10 transition-all duration-700 ease-out bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm hover:shadow-md hover:scale-105 transform transition-transform duration-300 border border-gray-100 dark:border-gray-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-[#4d8eff]" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default HowItWorksSection