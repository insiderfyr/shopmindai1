"use client"

import { useState, useEffect, useCallback } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    try {
      // Secure localStorage access with error handling
      const storedTheme = localStorage.getItem("theme")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

      const shouldUseDark = storedTheme === "dark" || (!storedTheme && prefersDark)
      setDarkMode(shouldUseDark)
      
      // Apply theme with proper class management
      if (shouldUseDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } catch (error) {
      // Fallback if localStorage is not available (private browsing, etc.)
      console.warn("Theme persistence unavailable:", error)
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDark)
      if (prefersDark) {
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  const toggleTheme = useCallback(() => {
    if (darkMode === null) return // Prevent action before hydration
    
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)

    // Apply theme with error handling
    try {
      if (newDarkMode) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    } catch (error) {
      console.warn("Unable to persist theme preference:", error)
      // Still apply visual theme even if we can't persist it
      if (newDarkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [darkMode])

  // Prevent hydration mismatch and layout shift
  if (!mounted || darkMode === null) {
    return (
      <div className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300">
        <div className="w-4 h-4" /> {/* Placeholder with same dimensions */}
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      type="button"
    >
      {darkMode ? (
        <Sun size={16} aria-hidden="true" />
      ) : (
        <Moon size={16} aria-hidden="true" />
      )}
    </button>
  )
}