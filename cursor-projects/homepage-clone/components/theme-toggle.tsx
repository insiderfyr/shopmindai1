"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Force light mode as default, ignore system preference
    const storedTheme = localStorage.getItem("theme")
    
    // Only use dark mode if explicitly set by user
    if (storedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      // Default to light mode
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
      if (!storedTheme) {
        localStorage.setItem("theme", "light")
      }
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)

    // Apply dark mode class to body with a simple transition
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // Prevent hydration mismatch
  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
