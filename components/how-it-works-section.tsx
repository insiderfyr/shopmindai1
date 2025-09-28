"use client"

import { useEffect, useRef, memo } from "react"
import { MessageCircle, Search, ShoppingCart } from "lucide-react"

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
      icon: MessageCircle,
      title: "1. Ask",
      description: "Tell us what you're looking for",
    },
    {
      icon: Search,
      title: "2. Match",
      description: "We search across top retailers",
    },
    {
      icon: ShoppingCart,
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
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white"
        >
          How It Works
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-20 max-w-2xl mx-auto">
          Three simple steps to smarter shopping.
        </p>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <article
                key={step.title}
                className="step-item relative w-full max-w-sm opacity-0 translate-y-10 transform transition-all duration-500 ease-out bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:-translate-y-2"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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