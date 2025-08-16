"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HowItWorksSection from "@/components/how-it-works-section"
import FeaturesSection from "@/components/features-section"
import PremiumStoresSection from "@/components/premium-stores-section"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-blue-50 dark:bg-gray-900">
        <div className="animate-pulse">
          <div className="h-16 bg-gray-200 dark:bg-gray-800" />
          <div className="h-96 bg-gray-100 dark:bg-gray-900" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-blue-50 dark:bg-[#182533] transition-all duration-300">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <Header />

      {/* Main content */}
      <main id="main-content" className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section 
          className="flex-grow flex flex-col items-center justify-center px-4 pt-8 pb-10 md:pt-10 md:pb-12 text-center"
          aria-labelledby="hero-heading"
        >
          {/* Main Hero Content */}
          <div className="max-w-4xl mx-auto">
            <h1 
              id="hero-heading"
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight leading-tight"
            >
              <span className="text-black dark:text-white font-sans">ShopMind</span>
              <span className="text-[#4d8eff] font-sans">AI</span>
            </h1>

            <p className="text-lg md:text-2xl font-semibold mb-2 md:mb-3 text-gray-800 dark:text-gray-200 leading-relaxed">
              Your Personalized AI Shopping Assistant
            </p>

            <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 mb-5 md:mb-6 max-w-2xl mx-auto leading-relaxed">
              Skip the endless scrolling. Shop smarter with AI.
            </p>

            <Link
              href="https://shopmindai.com/app"
              className="bg-[#4d8eff] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#3a6cd9] inline-block uppercase tracking-wide md:px-8 md:py-3 focus:outline-none"
              aria-label="Start shopping with ShopMindAI"
            >
              Start Shopping
            </Link>
          </div>

          {/* Query Examples */}
          <section 
            className="w-full max-w-5xl mx-auto mt-8 md:mt-12 px-4"
            aria-labelledby="query-examples-heading"
          >
            <h2 id="query-examples-heading" className="sr-only">
              Example shopping queries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                "I need comfortable running sneakers under $100",
                "Find me skincare products for sensitive, dry skin", 
                "What's the best laptop for graphic design?"
              ].map((query, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md flex items-start transition-all duration-300 h-full border border-gray-100 dark:border-gray-700"
                  role="article"
                  aria-label={`Example query: ${query}`}
                >
                  <div className="w-7 h-7 bg-[#4d8eff] rounded-full flex items-center justify-center flex-shrink-0 mr-2 md:w-8 md:h-8 md:mr-3">
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path d="M8 10.5H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 14H13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-800 dark:text-gray-200 self-center md:text-sm">
                    {query}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>

        <HowItWorksSection />
        <FeaturesSection />
        <PremiumStoresSection />
      </main>

      <Footer />
    </div>
  )
}