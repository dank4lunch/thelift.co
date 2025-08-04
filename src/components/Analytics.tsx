'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Google Analytics tracking
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

export function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!GA_TRACKING_ID || process.env.NODE_ENV === 'development') return

    // Load Google Analytics
    const script1 = document.createElement('script')
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    script1.async = true
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `
    document.head.appendChild(script2)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])

  // Track page views
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname])

  return null
}

// Event tracking functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackConsultationRequest = () => {
  trackEvent('consultation_request', 'engagement', 'free_consultation')
}

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', 'services', serviceName)
}

export const trackPaymentIntent = (packageName: string, amount: number) => {
  trackEvent('payment_intent', 'ecommerce', packageName, amount)
}

export const trackScheduleBooking = (date: string, time: string) => {
  trackEvent('schedule_booking', 'booking', `${date}_${time}`)
}

// Performance monitoring
export function PerformanceMonitor() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return

    // Core Web Vitals tracking
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(metric => trackEvent('CLS', 'performance', 'score', metric.value))
      getFID(metric => trackEvent('FID', 'performance', 'score', metric.value))
      getFCP(metric => trackEvent('FCP', 'performance', 'score', metric.value))
      getLCP(metric => trackEvent('LCP', 'performance', 'score', metric.value))
      getTTFB(metric => trackEvent('TTFB', 'performance', 'score', metric.value))
    })

    // Custom performance tracking
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          
          trackEvent('page_load_time', 'performance', 'load_complete', perfData.loadEventEnd - perfData.loadEventStart)
          trackEvent('dom_content_loaded', 'performance', 'dom_ready', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)
        }, 0)
      })
    }
  }, [])

  return null
}

// Conversion tracking
export const trackConversion = (conversionType: 'consultation' | 'payment' | 'booking', value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      send_to: `${GA_TRACKING_ID}/${conversionType}`,
      value: value,
      currency: 'ZAR'
    })
  }
}
