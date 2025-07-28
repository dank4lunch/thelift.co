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
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 4,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center trainer-hero pt-16 perspective-container">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 transform-3d">
        {/* Elite floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-3 h-3 bg-primary-500/40 rounded-full floating-orb"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
        
        {/* Luxury orbs with 3D movement */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-primary-600/20 to-accent-500/20 rounded-full blur-3xl floating-orb"
          style={{
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
            left: '5%',
            top: '15%',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-accent-500/20 to-primary-400/20 rounded-full blur-3xl floating-orb"
          style={{
            transform: `translate3d(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px, 0px) rotateX(${mousePosition.y * -0.005}deg) rotateY(${mousePosition.x * -0.005}deg)`,
            right: '5%',
            bottom: '15%',
            animationDelay: '2s',
          }}
        />

        {/* 3D geometric grid */}
        <div className="absolute inset-0 opacity-10 tilt-3d">
          <div className="h-full w-full transform-3d" style={{
            backgroundImage: `
              linear-gradient(rgba(227,181,71,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(227,181,71,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(45deg) translateZ(-50px)',
          }} />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center perspective-container">
          <div className="mb-8">
            <div className="flex justify-center mb-8 depth-hover">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary-500/50 bg-elite-cream/10 backdrop-blur-sm shadow-2xl luxury-glow">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F08e7771950634f09bf5906b11a6d0d83?format=webp&width=800"
                  alt="The Lift Co Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold font-heading premium-text mb-6 animate-slide-up glow-text muscle-text transform-3d">
              BUILT TO BOOST
            </h1>
            
            <div className="text-2xl md:text-4xl font-bold text-primary-300 mb-8 space-y-3 animate-fade-in">
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text depth-hover">Strategic Moves.</p>
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text depth-hover">Creative Lifts.</p>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-medium">
            We blend strategy with soul. The Lift Co is not just a service — it's a movement. 
            Transform your body, business, and brand with our multidisciplinary approach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-scale-in">
            <a 
              href="#services" 
              className="btn-primary text-xl px-12 py-6 elite-glow group relative overflow-hidden"
            >
              <span className="relative z-10 muscle-text">PERSONAL TRAINING</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a 
              href="/marketing" 
              className="btn-secondary text-xl px-12 py-6 luxury-glow group relative overflow-hidden"
            >
              <span className="relative z-10 muscle-text">BRAND & BUSINESS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold premium-text mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-neutral-400 text-sm">Transformations</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold premium-text mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-neutral-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold premium-text mb-2 group-hover:scale-110 transition-transform duration-300">Premium</div>
              <div className="text-neutral-400 text-sm">Elite Training</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-3d">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-primary-400 text-sm font-bold uppercase tracking-wider">EXPLORE</div>
          <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
