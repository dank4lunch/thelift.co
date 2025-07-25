'use client'

import { useEffect, useState, useRef } from 'react'

interface ParallaxWrapperProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export default function ParallaxWrapper({ children, speed = 0.5, className = '' }: ParallaxWrapperProps) {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting)
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '50px'
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const parallaxStyle = isVisible ? {
    transform: `translateY(${scrollY * speed}px)`,
    transition: 'transform 0.1s ease-out'
  } : {}

  return (
    <div ref={ref} className={className} style={parallaxStyle}>
      {children}
    </div>
  )
}
