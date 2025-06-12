import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Privacy Policy - ShopMindAI",
  description: "ShopMindAI Privacy Policy - How we protect your data while providing AI shopping assistance",
  openGraph: {
    title: "Privacy Policy - ShopMindAI",
    description: "ShopMindAI Privacy Policy - How we protect your data while providing AI shopping assistance",
  },
}

export default function PrivacyPolicy() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#e6f0ff] to-[#d8e8ff] dark:from-[#1a1a2e] dark:to-[#16213e] transition-all duration-300">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="bg-[#f0f8ff] dark:bg-[#0a1128] px-8 py-6 border-b border-gray-100 dark:border-gray-700">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
              Last updated: January 2025
            </p>
          </div>
          
          <div className="px-8 py-6 text-gray-900 dark:text-gray-100">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#4d8eff] dark:text-[#6d9eff]">
                1. Introduction
              </h2>
              <p className="mb-4 leading-relaxed">
                ShopMindAI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI shopping assistant services.
                Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#4d8eff] dark:text-[#6d9eff]">
                2. Information We Collect
              </h2>
              <p className="mb-4 leading-relaxed">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <h3 className="text-xl font-medium mb-3 text-[#4d8eff] dark:text-[#6d9eff]">Personal Data</h3>
                <p className="mb-3 leading-relaxed">
                  Personally identifiable information, such as your name, email address, and demographic information that you voluntarily give to us
                  when you register with the site or when you choose to participate in various activities related to the site.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <h3 className="text-xl font-medium mb-3 text-[#4d8eff] dark:text-[#6d9eff]">Shopping Preferences</h3>
                <p className="mb-3 leading-relaxed">
                  Information about your shopping preferences, search queries, product interests, and feedback you provide to improve our AI recommendations.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <h3 className="text-xl font-medium mb-3 text-[#4d8eff] dark:text-[#6d9eff]">Derivative Data</h3>
                <p className="mb-3 leading-relaxed">
                  Information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, access times, and the pages you have viewed.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#4d8eff] dark:text-[#6d9eff]">
                3. How We Use Your Information
              </h2>
              <p className="mb-4 leading-relaxed">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized shopping experience. Specifically, we may use information collected about you to:
              </p>
              <ul className="list-disc list-inside mb-4 ml-4 leading-relaxed space-y-2">
                <li>Create and manage your account</li>
                <li>Provide personalized product recommendations using our AI technology</li>
                <li>Process and fulfill shopping requests</li>
                <li>Send you updates about products and services that may interest you</li>
                <li>Improve our AI algorithms and recommendation accuracy</li>
                <li>Monitor and analyze usage patterns to enhance user experience</li>
                <li>Prevent fraudulent transactions and monitor against theft</li>
                <li>Assist with customer service and technical support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#4d8eff] dark:text-[#6d9eff]">
                4. Your Rights
              </h2>
              <p className="mb-4 leading-relaxed">
                You have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside mb-4 ml-4 leading-relaxed space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate or incomplete data</li>
                <li>The right to delete your personal data</li>
                <li>The right to restrict processing of your data</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#4d8eff] dark:text-[#6d9eff]">
                5. Contact Information
              </h2>
              <p className="leading-relaxed">
                If you have questions or comments about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@shopmindai.com" className="text-[#4d8eff] hover:underline">
                  privacy@shopmindai.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}