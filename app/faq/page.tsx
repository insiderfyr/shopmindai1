"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "FAQ", href: "/faq" },
  ]

  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqData = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is ShopMindAI?",
          answer: "ShopMindAI is your personalized AI shopping assistant that helps you find the perfect products faster by understanding your preferences and searching across multiple retailers to save you time and effort."
        },
        {
          question: "How do I start using ShopMindAI?",
          answer: "Simply click 'Start Shopping' on our homepage and begin by describing what you're looking for. Our AI will ask clarifying questions to understand your needs and preferences, then provide personalized recommendations."
        },
        {
          question: "Is ShopMindAI free to use?",
          answer: "Yes! ShopMindAI is completely free to use. We earn commission from partner retailers when you make purchases through our recommendations, but this never affects the price you pay."
        }
      ]
    },
    {
      category: "How It Works",
      questions: [
        {
          question: "How does ShopMindAI understand my preferences?",
          answer: "Our AI analyzes your search queries, filters you apply, products you view, and feedback you provide to build a personalized shopping profile. The more you use ShopMindAI, the better it becomes at understanding your style and preferences."
        },
        {
          question: "Which stores does ShopMindAI search?",
          answer: "We search across hundreds of major retailers including Amazon, Nordstrom, Shopify stores, and many more. Our partner network is constantly expanding to give you the widest selection of products and best prices."
        },
        {
          question: "How accurate are the product recommendations?",
          answer: "Our AI has been trained on millions of products and shopping patterns, achieving over 90% accuracy in matching users with products they love. We continuously improve our algorithms based on user feedback and shopping behavior."
        }
      ]
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          question: "How is my personal data protected?",
          answer: "We use enterprise-grade encryption to protect all personal data. Your shopping preferences and search history are stored securely and never shared with third parties without your explicit consent. See our Privacy Policy for full details."
        },
        {
          question: "Can I delete my data?",
          answer: "Absolutely! You can request deletion of all your personal data at any time by contacting our support team. We'll completely remove your account and associated data within 30 days."
        },
        {
          question: "Do you track my purchases?",
          answer: "We only track purchases made through ShopMindAI to improve recommendations and earn our commission. We never access information about purchases made directly with retailers outside of our platform."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "Why aren't I getting good recommendations?",
          answer: "Try being more specific in your search queries, use the filter options, and provide feedback on recommendations. The AI learns from your interactions, so the more detail you provide, the better it can serve you."
        },
        {
          question: "The website is loading slowly. What should I do?",
          answer: "Try refreshing the page, clearing your browser cache, or using a different browser. If problems persist, please contact our support team with details about your device and browser."
        },
        {
          question: "Can I use ShopMindAI on mobile devices?",
          answer: "Yes! Our website is fully optimized for mobile devices. Simply visit shopmindai.com on your smartphone or tablet browser for the full experience."
        }
      ]
    },
    {
      category: "Account & Billing",
      questions: [
        {
          question: "Do I need to create an account?",
          answer: "You can browse and get recommendations without an account, but creating one allows us to save your preferences, shopping history, and provide more personalized recommendations over time."
        },
        {
          question: "How do you make money if the service is free?",
          answer: "We earn affiliate commissions from partner retailers when you make purchases through our recommendations. This doesn't affect the price you pay - retailers pay us a small fee for referring customers."
        },
        {
          question: "Can I return products purchased through ShopMindAI?",
          answer: "Returns are handled directly by the retailer where you made the purchase. Each retailer has their own return policy, which we'll show you before you complete any purchase."
        }
      ]
    }
  ]

  let itemIndex = 0

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#e6f0ff] to-[#d8e8ff] dark:from-[#1a1a2e] dark:to-[#16213e] transition-all duration-300">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about ShopMindAI. Can't find what you're looking for? Contact our support team!
            </p>
          </div>

          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="bg-[#f0f8ff] dark:bg-[#0a1128] px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h2>
                </div>
                
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {category.questions.map((faq, questionIndex) => {
                    const currentIndex = itemIndex++
                    const isOpen = openItems.includes(currentIndex)
                    
                    return (
                      <div key={questionIndex}>
                        <button
                          className="w-full px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700"
                          onClick={() => toggleItem(currentIndex)}
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white pr-4">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-[#4d8eff] flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4 animate-fade-in">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Section */}
          <div className="mt-12 text-center bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Still need help?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our support team is here to help you with any questions not covered above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#4d8eff] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3a6cd9] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@shopmindai.com"
                className="border border-[#4d8eff] text-[#4d8eff] px-6 py-3 rounded-full font-medium hover:bg-[#4d8eff] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}