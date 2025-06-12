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
    <header className="w-full py-3 px-4 md:py-4 md:px-16 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 bg-[#e6f0ff] dark:bg-[#1a1a2e] transition-all duration-300 will-change-transform">
      <div className="flex items-center">
        <div className="w-10 h-10 relative mr-2 md:w-12 md:h-12 md:mr-3 pt-7 transition-all duration-500 ease-out">
          <Image 
            src="/logo.svg" 
            alt="ShopMind Logo" 
            fill 
            className="object-contain transition-all duration-700 ease-in-out transform hover:scale-110 hover:rotate-3 dark:brightness-110 dark:contrast-110"
            priority
            sizes="(max-width: 768px) 40px, 48px"
            quality={90}
            placeholder="empty"
            loading="eager"
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
            className="bg-[#4d8eff] text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-[#3a6cd9] transition-colors duration-300 uppercase tracking-wide md:px-5 md:py-2 md:text-sm focus:outline-none"
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