import Image from "next/image"
import Link from "next/link"
import { memo } from "react"

// Memoize header to prevent unnecessary re-renders
const Header = memo(function Header() {
  return (
    <header className="w-full py-3 px-4 md:py-4 md:px-16 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 bg-[#e6f0ff] dark:bg-[#1a1a2e] bg-transition">
      <div className="flex items-center">
        <div className="w-12 h-12 relative mr-2 md:w-14 md:h-14 md:mr-3">
          <Image 
            src="/logo.svg" 
            alt="ShopMind Logo" 
            fill 
            className="object-contain"
            priority // Critical above-the-fold image
            sizes="(max-width: 768px) 48px, 56px"
          />
        </div>
        <h1 className="text-base font-bold tracking-tight text-transition md:text-lg">
          <span className="text-black dark:text-white font-sans">ShopMind</span>
          <span className="text-black dark:text-white font-sans">AI</span>
        </h1>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
          {[
            { name: "How It Works", href: "#how-it-works" },
            { name: "Features", href: "#features" }, 
            { name: "Stores", href: "#stores" }
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm text-gray-800 dark:text-gray-200 hover:text-[#4d8eff] dark:hover:text-[#6d9eff] transition-colors duration-300 uppercase tracking-wide font-medium text-transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Lazy load theme toggle */}
          <div className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300">
            <div className="w-4 h-4" /> {/* Placeholder for theme toggle */}
          </div>

          <Link
            href="/auth"
            className="bg-[#4d8eff] text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-[#3a6cd9] transition-colors duration-300 uppercase tracking-wide md:px-5 md:py-2 md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Log in to your account"
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  )
})

export default Header