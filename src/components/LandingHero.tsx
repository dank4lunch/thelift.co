
'use client'

import { useState, useEffect } from 'react'

interface FloatingElement {
  id: number
  left: number
  top: number
  delay: number
  duration: number
  size: number
}

export default function LandingHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
      size: 1 + Math.random() * 3,
    }))
    setFloatingElements(elements)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center trainer-hero relative overflow-hidden perspective-container">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 transform-3d">
        {/* Dynamic floating elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-primary-400/40 to-accent-400/40 floating-orb blur-sm"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              width: `${element.size}rem`,
              height: `${element.size}rem`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          />
        ))}

        {/* Large interactive orbs */}
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl energy-pulse"
          style={{
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
            left: '5%',
            top: '5%',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-accent-400/15 to-primary-400/15 rounded-full blur-3xl energy-pulse"
          style={{
            transform: `translate3d(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px, 0px) rotateX(${mousePosition.y * -0.008}deg) rotateY(${mousePosition.x * -0.008}deg)`,
            right: '10%',
            bottom: '5%',
            animationDelay: '2s',
          }}
        />

        {/* Geometric shapes */}
        <div className="absolute top-20 right-32 w-20 h-20 border-2 border-primary-500/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-32 left-40 w-16 h-16 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full animate-bounce" />
        <div className="absolute top-1/3 right-20 w-12 h-12 border border-primary-500/40 rotate-12 animate-pulse" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Hero Profile */}
          <div className="mb-12 depth-hover">
            <div className="flex justify-center mb-8">
              <div className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-3xl overflow-hidden border-4 border-primary-400/70 bg-gradient-to-br from-primary-500/30 to-accent-500/30 backdrop-blur-sm shadow-2xl luxury-glow transform hover:scale-110 transition-all duration-700 tilt-3d"></div>
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F08e7771950634f09bf5906b11a6d0d83?format=webp&width=800"
                  alt="Tshiamo Sookane - Your Personal Fitness Coach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-heading premium-text mb-8 animate-slide-up glow-text muscle-text transform-3d leading-tight">
              TRANSFORM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 animate-gradient">
                YOUR LIFE
              </span>
            </h1>

            {/* Tagline */}
            <div className="text-2xl sm:text-3xl md:text-4xl text-primary-300 mb-8 animate-fade-in">
              <p className="font-bold leading-relaxed mb-2">
                With Tshiamo Sookane
              </p>
              <p className="text-xl sm:text-2xl text-accent-400 font-semibold">
                10 Years of Proven Fitness Excellence
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-neutral-300 mb-16 max-w-4xl mx-auto leading-relaxed animate-slide-up font-medium">
            Ready to transform your body and mind? Let's build the strongest, healthiest version of yourself together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 animate-scale-in">
            <a
              href="/home"
              className="btn-primary text-xl px-12 py-5 elite-glow group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-neutral-950 transform hover:scale-110 transition-all duration-500 depth-hover"
              aria-label="Explore our fitness services"
            >
              <span className="relative z-10 muscle-text font-bold">START YOUR JOURNEY</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </a>
            <a
              href="https://forms.gle/8mz7dZXLcr47QSNG8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xl px-12 py-5 luxury-glow group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-neutral-950 transform hover:scale-110 transition-all duration-500 depth-hover"
              aria-label="Book your free consultation"
            >
              <span className="relative z-10 muscle-text font-bold">FREE CONSULTATION</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </a>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div className="text-center group cursor-default depth-hover">
              <div className="text-5xl sm:text-6xl font-bold text-primary-400 mb-4 group-hover:scale-125 transition-transform duration-500">10</div>
              <div className="text-neutral-300 font-bold text-lg uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center group cursor-default depth-hover">
              <div className="text-5xl sm:text-6xl font-bold text-accent-400 mb-4 group-hover:scale-125 transition-transform duration-500">100%</div>
              <div className="text-neutral-300 font-bold text-lg uppercase tracking-wide">Personalized Training</div>
            </div>
            <div className="text-center group cursor-default depth-hover">
              <div className="text-5xl sm:text-6xl font-bold text-primary-400 mb-4 group-hover:scale-125 transition-transform duration-500">∞</div>
              <div className="text-neutral-300 font-bold text-lg uppercase tracking-wide">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
