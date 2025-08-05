
'use client'

import { useState, useEffect } from 'react'

interface Particle {
  id: number
  left: number
  top: number
  delay: number
  duration: number
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const generatedParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 3,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center trainer-hero pt-20 perspective-container relative">
      {/* Simplified background with better visual hierarchy */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-primary-400/60 rounded-full floating-orb"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}

        {/* Main gradient orbs */}
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-primary-500/15 to-accent-500/15 rounded-full blur-3xl"
          style={{
            transform: `translate3d(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px, 0px)`,
            left: '10%',
            top: '10%',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-accent-400/12 to-primary-400/12 rounded-full blur-3xl"
          style={{
            transform: `translate3d(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px, 0px)`,
            right: '15%',
            bottom: '10%',
            animationDelay: '1.5s',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-safe">
          {/* Profile Image - Larger and more prominent */}
          <div className="mb-8">
            <div className="flex justify-center mb-8">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-3 border-primary-400/60 bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm shadow-2xl luxury-glow transform hover:scale-105 transition-all duration-500">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F08e7771950634f09bf5906b11a6d0d83?format=webp&width=800"
                  alt="Tshiamo Sookane - Personal Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Main Heading - Cleaner typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-heading premium-text mb-6 animate-slide-up glow-text muscle-text transform-3d leading-tight break-words" role="banner">
              YOUR FITNESS
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 animate-gradient break-words">
                TRANSFORMATION
              </span>
            </h1>

            {/* Simplified tagline */}
            <div className="text-xl sm:text-2xl md:text-3xl text-primary-300 mb-8 animate-fade-in">
              <p className="font-medium leading-relaxed">
                Personal Training Across Gauteng
              </p>
              <p className="text-lg sm:text-xl text-accent-400 mt-2 font-semibold">
                Free consultation • Real results • 10 years experience
              </p>
            </div>
          </div>

          {/* Simplified description */}
          <p className="text-lg sm:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up font-medium">
            Let's work together to build the strongest, healthiest version of yourself. I'm here to guide you every step of the way.
          </p>

          {/* CTA Buttons - Improved spacing and design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-scale-in">
            <a
              href="https://forms.gle/8mz7dZXLcr47QSNG8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4 elite-glow group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-neutral-950 transform hover:scale-105 transition-all duration-300"
              aria-label="Book free consultation via Google Form"
            >
              <span className="relative z-10 muscle-text font-bold">GET FREE CONSULTATION</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" aria-hidden="true"></div>
            </a>
            <a
              href="#packages"
              className="btn-secondary text-lg px-10 py-4 luxury-glow group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-neutral-950 transform hover:scale-105 transition-all duration-300"
              aria-label="View training packages"
            >
              <span className="relative z-10 muscle-text font-bold">EXPLORE PROGRAMS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" aria-hidden="true"></div>
            </a>
          </div>

          {/* Quick stats - Updated with 10 years */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group cursor-default depth-hover">
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">10</div>
              <div className="text-neutral-300 font-medium text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center group cursor-default depth-hover">
              <div className="text-3xl sm:text-4xl font-bold text-accent-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-neutral-300 font-medium text-sm uppercase tracking-wide">Personalized</div>
            </div>
            <div className="text-center group cursor-default depth-hover">
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">FREE</div>
              <div className="text-neutral-300 font-medium text-sm uppercase tracking-wide">Initial Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
