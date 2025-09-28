"use client";

import Image from "next/image"
import Link from "next/link"
import { memo } from "react"
import ThemeToggle from "@/components/theme-toggle"
import { useSmoothScroll } from "@/lib/smooth-scroll"

const Header = memo(function Header() {
  const { smoothScrollTo } = useSmoothScroll()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    smoothScrollTo(targetId, e.currentTarget)
  }

  return (
    <header className="w-full py-3 px-4 md:py-4 md:px-16 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 bg-blue-50 dark:bg-[#182533] transition-all duration-300 will-change-transform">
      <div className="flex items-center">
        <div className="w-12 h-12 relative mr-2 md:w-14 md:h-14 md:mr-3 transition-all duration-500 ease-out">
          <img 
            src="/logo.svg" 
            alt="ShopMind Logo" 
            className="object-contain w-full h-full transition-all duration-700 ease-in-out transform hover:scale-110 hover:rotate-3 dark:brightness-110 dark:contrast-110"
          />
        </div>
        <h1 className="text-base font-bold tracking-tight md:text-lg transition-all duration-500 ease-out">
          <span className="text-black dark:text-white font-sans transition-colors duration-500">
            ShopMind
          </span>
          <span className="text-[#4d8eff] font-sans transition-all duration-500 hover:text-[#6d9eff] hover:drop-shadow-lg">
            AI
          </span>
        </h1>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
          {[
            { name: "How It Works", href: "#how-it-works" },
            { name: "Features", href: "#features" },
            { name: "Stores", href: "#stores" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm text-gray-800 dark:text-gray-200 hover:text-[#4d8eff] dark:hover:text-[#6d9eff] transition-colors duration-300 uppercase tracking-wide font-medium focus:outline-none rounded-sm cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-2 md:space-x-3">
          <ThemeToggle />

          <Link
            href="/auth"
            className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors duration-300 uppercase tracking-wide md:px-5 md:py-2 md:text-sm focus:outline-none"
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