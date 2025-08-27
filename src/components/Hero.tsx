
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
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full floating-orb"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: `radial-gradient(circle, rgba(227, 181, 71, ${0.6 + Math.random() * 0.4}) 0%, transparent 70%)`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}

        {/* Enhanced gradient orbs with better blending */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(227, 181, 71, 0.3) 0%, rgba(168, 145, 72, 0.2) 40%, transparent 70%)',
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0px)`,
            left: '5%',
            top: '5%',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(168, 145, 72, 0.25) 0%, rgba(227, 181, 71, 0.15) 50%, transparent 80%)',
            transform: `translate3d(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px, 0px)`,
            right: '10%',
            bottom: '5%',
            animationDelay: '1.5s',
          }}
        />
        
        {/* Add aurora effect overlay */}
        <div className="absolute inset-0 aurora-bg opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-safe">
          {/* Profile Image - Larger and more prominent */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60">
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-accent-500 to-primary-600 p-1 animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="w-full h-full rounded-full bg-neutral-950" />
                </div>
                
                {/* Profile image container */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20 backdrop-blur-sm shadow-2xl luxury-glow transform hover:scale-105 transition-all duration-700 modern-card">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F08e7771950634f09bf5906b11a6d0d83?format=webp&width=800"
                    alt="Tshiamo Sookane - Personal Trainer"
                    className="w-full h-full object-cover filter contrast-110 brightness-105"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-heading mb-8 animate-slide-up muscle-text transform-3d leading-tight break-words" role="banner">
              <span className="block text-neutral-100 drop-shadow-lg">YOUR FITNESS</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-500 via-primary-500 to-accent-400 animate-gradient break-words relative">
                TRANSFORMATION
                {/* Add shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-0 hover:opacity-100 transition-opacity duration-300" style={{ 
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s infinite',
                  WebkitBackgroundClip: 'text'
                }} />
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
          <div className="mb-12 max-w-2xl mx-auto animate-slide-up">
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-medium mb-4">
              Look, I'm not here to sugarcoat it - transformation is hard work. But here's what I promise: 
              you won't do it alone.
            </p>
            <p className="text-base sm:text-lg text-primary-300 leading-relaxed font-semibold">
              I'm Tshiamo, your creative entrepreneur turned elite trainer. 10 years of turning "I can't" into "watch me."
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-scale-in">
            <a
              href="https://forms.gle/8mz7dZXLcr47QSNG8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-12 py-5 elite-glow group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-neutral-950 transform transition-all duration-500 hover:shadow-2xl"
              aria-label="Book free consultation via Google Form"
            >
              <span className="relative z-10 muscle-text font-bold tracking-wide">GET FREE CONSULTATION</span>
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-300/50 to-accent-300/50 opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse" aria-hidden="true"></div>
            </a>
            <a
              href="#packages"
              className="relative text-lg px-12 py-5 rounded-2xl font-bold border-2 border-primary-400/50 text-primary-400 hover:text-neutral-950 group overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-neutral-950 modern-card"
              aria-label="View training packages"
            >
              {/* Sliding background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" aria-hidden="true"></div>
              <span className="relative z-10 muscle-text font-bold tracking-wide">EXPLORE PROGRAMS</span>
            </a>
          </div>

          {/* Enhanced stats section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="modern-card text-center group cursor-default border border-primary-400/30 hover:border-primary-400/60 transition-all duration-500">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-accent-500 mb-3 group-hover:scale-110 transition-transform duration-500">10</div>
              <div className="text-neutral-200 font-bold text-sm uppercase tracking-wider">Years Experience</div>
              <div className="text-xs text-primary-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Elite Training</div>
            </div>
            <div className="modern-card text-center group cursor-default border border-accent-400/30 hover:border-accent-400/60 transition-all duration-500">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-accent-400 to-primary-500 mb-3 group-hover:scale-110 transition-transform duration-500">100%</div>
              <div className="text-neutral-200 font-bold text-sm uppercase tracking-wider">Personalized</div>
              <div className="text-xs text-accent-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Custom Plans</div>
            </div>
            <div className="modern-card text-center group cursor-default border border-primary-400/30 hover:border-primary-400/60 transition-all duration-500">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-accent-500 mb-3 group-hover:scale-110 transition-transform duration-500">FREE</div>
              <div className="text-neutral-200 font-bold text-sm uppercase tracking-wider">Initial Consultation</div>
              <div className="text-xs text-primary-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">No Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
