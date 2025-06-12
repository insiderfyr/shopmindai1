"use client"

import { useEffect } from 'react'

// Performance monitoring pentru scale
export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor doar în production pentru scale
    if (process.env.NODE_ENV !== 'production') return

    let performanceEntries: PerformanceEntry[] = []
    
    // Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      performanceEntries = [...performanceEntries, ...list.getEntries()]
      
      // Monitor critical metrics pentru scale
      list.getEntries().forEach((entry) => {
        // First Contentful Paint
        if (entry.name === 'first-contentful-paint') {
          if (entry.startTime > 1500) {
            console.warn('🚨 FCP > 1.5s:', entry.startTime)
          }
        }
        
        // Largest Contentful Paint 
        if (entry.entryType === 'largest-contentful-paint') {
          if (entry.startTime > 2500) {
            console.warn('🚨 LCP > 2.5s:', entry.startTime)
          }
        }
        
        // Cumulative Layout Shift
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
          if (entry.value > 0.1) {
            console.warn('🚨 CLS > 0.1:', entry.value)
          }
        }

        // Long tasks (pentru CPU intensive operations)
        if (entry.entryType === 'longtask') {
          console.warn('🚨 Long Task:', entry.duration)
        }
      })
    })

    // Observe all performance metrics
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'longtask'] })
    } catch (e) {
      console.warn('Performance Observer not supported')
    }

    // Memory usage monitoring (pentru memory leaks)
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
          console.warn('🚨 High Memory Usage:', memory.usedJSHeapSize / 1024 / 1024, 'MB')
        }
      }
    }

    // Check memory every 30 seconds
    const memoryInterval = setInterval(monitorMemory, 30000)

    // Animation frame monitoring pentru smooth performance
    let frameCount = 0
    let lastTime = performance.now()
    
    const monitorFPS = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        const fps = frameCount
        frameCount = 0
        lastTime = currentTime
        
        if (fps < 55) { // Target 60fps, warn below 55
          console.warn('🚨 Low FPS:', fps)
        }
        
        requestAnimationFrame(monitorFPS)
      } else {
        requestAnimationFrame(monitorFPS)
      }
    }

    requestAnimationFrame(monitorFPS)

    return () => {
      observer.disconnect()
      clearInterval(memoryInterval)
    }
  }, [])
}

// Device capability detection pentru adaptive performance
export const getDeviceCapabilities = () => {
  // CPU cores detection
  const cores = navigator.hardwareConcurrency || 4
  
  // Memory detection (if available)
  const memory = (navigator as any).deviceMemory || 4
  
  // Connection speed
  const connection = (navigator as any).connection
  const effectiveType = connection?.effectiveType || '4g'
  
  // Device tier classification
  const getDeviceTier = () => {
    if (cores >= 8 && memory >= 8) return 'high'
    if (cores >= 4 && memory >= 4) return 'medium'
    return 'low'
  }

  return {
    cores,
    memory,
    effectiveType,
    tier: getDeviceTier(),
    isLowEnd: cores < 4 || memory < 4 || effectiveType === 'slow-2g' || effectiveType === '2g'
  }
}

export default usePerformanceMonitor