'use client'

import { useState, useEffect } from 'react'

interface DeviceInfo {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  hasTouch: boolean
  supportsHover: boolean
  prefersReducedMotion: boolean
}

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    hasTouch: false,
    supportsHover: true,
    prefersReducedMotion: false
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      const isTablet = /ipad|android(?!.*mobile)/i.test(userAgent) || (window.innerWidth >= 768 && window.innerWidth <= 1024)
      const isDesktop = !isMobile && !isTablet
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const supportsHover = window.matchMedia('(hover: hover)').matches
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        hasTouch,
        supportsHover,
        prefersReducedMotion
      })
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return deviceInfo
}

export function useResponsiveAnimation() {
  const device = useDeviceDetection()
  
  const getAnimationConfig = (intensity: 'low' | 'medium' | 'high' = 'medium') => {
    if (device.prefersReducedMotion) {
      return {
        duration: 0,
        scale: 1,
        rotate: 0,
        parallax: 0,
        particles: false
      }
    }

    if (device.isMobile) {
      return {
        duration: intensity === 'high' ? 300 : 200,
        scale: intensity === 'high' ? 1.02 : 1.01,
        rotate: 0,
        parallax: 0.1,
        particles: false
      }
    }

    if (device.isTablet) {
      return {
        duration: intensity === 'high' ? 500 : 300,
        scale: intensity === 'high' ? 1.05 : 1.03,
        rotate: intensity === 'high' ? 5 : 2,
        parallax: 0.3,
        particles: intensity === 'high'
      }
    }

    // Desktop
    return {
      duration: intensity === 'high' ? 700 : 500,
      scale: intensity === 'high' ? 1.1 : 1.05,
      rotate: intensity === 'high' ? 12 : 6,
      parallax: 0.5,
      particles: true
    }
  }

  return { device, getAnimationConfig }
}
