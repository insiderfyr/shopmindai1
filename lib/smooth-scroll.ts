"use client"

import { useCallback } from 'react'

export const useSmoothScroll = () => {
  const smoothScrollTo = useCallback((elementId: string, clickedElement?: HTMLElement) => {
    const element = document.getElementById(elementId)
    if (!element) return

    // Add visual feedback to clicked nav item
    if (clickedElement) {
      clickedElement.classList.add('scroll-active')
      setTimeout(() => {
        clickedElement.classList.remove('scroll-active')
      }, 600)
    }

    // Calculate offset for fixed header
    const headerHeight = 80 // Approximate header height
    const elementPosition = element.offsetTop
    const offsetPosition = elementPosition - headerHeight

    // Genius smooth scroll with custom easing
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })

    // Enhanced smooth scroll for browsers that support it
    if ('scrollBehavior' in document.documentElement.style) {
      // Add temporary smooth scroll class for extra smoothness
      document.documentElement.style.scrollBehavior = 'smooth'
      
      // Remove after scroll completes
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'auto'
      }, 1000)
    }

    // Add visual feedback - highlight target section briefly
    setTimeout(() => {
      element.classList.add('scroll-highlight')
      setTimeout(() => {
        element.classList.remove('scroll-highlight')
      }, 2000)
    }, 500)

  }, [])

  return { smoothScrollTo }
}

export default useSmoothScroll