"use client"

import { useState } from "react"
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import { Mail, Phone, MessageSquare, Send } from "lucide-react"

const metadata: Metadata = {
  title: "Contact Us - ShopMindAI",
  description: "Contact ShopMindAI for support or inquiries about your AI shopping assistant",
  openGraph: {
    title: "Contact Us - ShopMindAI", 
    description: "Contact ShopMindAI for support or inquiries about your AI shopping assistant",
  },
}

export default function Contact() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitStatus("success")
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
    
    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#e6f0ff] to-[#d8e8ff] dark:from-[#1a1a2e] dark:to-[#16213e] transition-all duration-300">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We're here to help! Reach out to our team with any questions about ShopMindAI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#4d8eff] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Email Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Get help with your AI shopping assistant
              </p>
              <a 
                href="mailto:support@shopmindai.com" 
                className="text-[#4d8eff] hover:underline font-medium"
              >
                support@shopmindai.com
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#4d8eff] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Phone Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Speak directly with our team
              </p>
              <a 
                href="tel:+18001234567" 
                className="text-[#4d8eff] hover:underline font-medium block mb-2"
              >
                +1 (800) 123-4567
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Mon-Fri, 9 AM - 5 PM EST
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#4d8eff] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Live Chat</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Instant help when you need it
              </p>
              <button className="text-[#4d8eff] hover:underline font-medium">
                Start Chat
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Available 24/7
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="bg-[#f0f8ff] dark:bg-[#0a1128] px-8 py-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
                Send Us a Message
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                We'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {submitStatus === "success" && (
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-6">
                  <p className="text-green-800 dark:text-green-300 text-center">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4d8eff] focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4d8eff] focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4d8eff] focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors duration-200"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4d8eff] focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors duration-200 resize-vertical"
                  placeholder="Tell us more about your question or feedback..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#4d8eff] text-white font-medium rounded-lg hover:bg-[#3a6cd9] focus:outline-none focus:ring-2 focus:ring-[#4d8eff] focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}