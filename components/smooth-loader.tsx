"use client"

import { useEffect } from 'react'

export default function SmoothLoader() {
  useEffect(() => {
    // Remove loading class after hydration
    const handleLoad = () => {
      document.body.classList.remove('loading')
      
      // Smooth fade in effect
      document.body.style.opacity = '1'
      
      // Force layout to prevent flash
      document.body.offsetHeight
    }

    // Check if already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      
      // Fallback timeout
      const timeout = setTimeout(handleLoad, 100)
      
      return () => {
        window.removeEventListener('load', handleLoad)
        clearTimeout(timeout)
      }
    }
  }, [])

  return null
}