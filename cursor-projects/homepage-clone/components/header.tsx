import Image from "next/image"
import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"

export default function Header() {
  return (
    <header className="w-full py-3 px-4 md:py-4 md:px-16 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 bg-[#e6f0ff] dark:bg-[#1a1a2e] bg-transition">
      <div className="flex items-center">
        <div className="w-12 h-12 relative mr-2 md:w-14 md:h-14 md:mr-3">
          <Image src="/logo.svg" alt="ShopMind Logo" fill className="object-contain" />
        </div>
        <h1 className="text-base font-bold tracking-tight text-transition md:text-lg">
          <span className="text-black dark:text-white font-sans">ShopMind</span>
          <span className="text-black dark:text-white font-sans">AI</span>
        </h1>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <nav className="hidden md:flex items-center space-x-8">
          {["How It Works", "Features", "Stores"].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-gray-800 dark:text-gray-200 hover:text-[#4d8eff] dark:hover:text-[#6d9eff] transition-colors duration-300 uppercase tracking-wide font-medium text-transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2 md:space-x-3">
          <ThemeToggle />

          <Link
            href="/auth"
            className="bg-[#4d8eff] text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-[#3a6cd9] transition-colors duration-300 uppercase tracking-wide md:px-5 md:py-2 md:text-sm"
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  )
}
