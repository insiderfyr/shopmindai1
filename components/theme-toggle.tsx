"use client"

import { useState, useEffect, useCallback } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    try {
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
    } catch (error) {
      // Fallback if localStorage is not available
      console.warn("Theme persistence unavailable:", error)
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = useCallback(() => {
    if (darkMode === null) return // Prevent action before hydration
    
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)

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
      <div className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300" style={{ width: '28px', height: '28px' }}>
        <div className="w-4 h-4 opacity-0" />
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 focus:outline-none"
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