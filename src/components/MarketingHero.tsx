'use client'

import { useState, useEffect } from 'react'

interface Particle {
  id: number
  left: number
  top: number
  animationDelay: number
  animationDuration: number
}

export default function MarketingHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 8,
      animationDuration: 6 + Math.random() * 4,
    }))
    setParticles(generatedParticles)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="marketing-home" className="min-h-screen flex items-center trainer-hero pt-16 perspective-container">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 transform-3d">
        {/* Creative floating particles - only render on client to avoid hydration mismatch */}
        {isClient && particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-primary-500/30 rounded-full floating-orb"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
            }}
          />
        ))}
        
        {/* Brand orbs with 3D movement */}
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-primary-600/15 to-accent-500/15 rounded-full blur-3xl floating-orb"
          style={{
            transform: `translate3d(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px, 0px) rotateX(${mousePosition.y * 0.008}deg) rotateY(${mousePosition.x * 0.008}deg)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className="absolute w-60 h-60 bg-gradient-to-r from-accent-500/15 to-primary-400/15 rounded-full blur-3xl floating-orb"
          style={{
            transform: `translate3d(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px, 0px) rotateX(${mousePosition.y * -0.004}deg) rotateY(${mousePosition.x * -0.004}deg)`,
            right: '15%',
            bottom: '25%',
            animationDelay: '3s',
          }}
        />

        {/* Creative geometric shapes */}
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-primary-500/20 transform rotate-45 animate-rotate-slow floating-element" />
        <div className="absolute bottom-40 left-32 w-12 h-12 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full bounce-3d" />
        <div className="absolute top-1/2 left-20 w-8 h-8 border border-primary-500/30 animate-flip-3d" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto text-center perspective-container">
          <div className="mb-8">
            <div className="flex justify-center mb-8 depth-hover">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary-500/50 bg-elite-cream/10 backdrop-blur-sm shadow-2xl luxury-glow">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F08e7771950634f09bf5906b11a6d0d83?format=webp&width=800"
                  alt="The Lift Co Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="inline-block mb-6 depth-hover">
              <span className="elite-badge">
                Strategic Brand & Business Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading premium-text mb-6 animate-slide-up glow-text muscle-text transform-3d">
              ELEVATE YOUR EMPIRE
            </h1>
            
            <div className="text-xl md:text-3xl font-bold text-primary-300 mb-8 space-y-2 animate-fade-in">
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text depth-hover">Strategic Moves.</p>
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text depth-hover">Creative Lifts.</p>
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text depth-hover text-accent-400">Brand Dominance.</p>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-medium">
            Transform your brand and business with strategic development, creative direction, and proven growth methodologies. 
            We don't just build brands—we create market leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-scale-in">
            <a 
              href="#brand-services" 
              className="btn-primary text-lg px-10 py-5 elite-glow group relative overflow-hidden"
            >
              <span className="relative z-10 muscle-text">BRAND DEVELOPMENT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#business-services" 
              className="btn-secondary text-lg px-10 py-5 luxury-glow group relative overflow-hidden"
            >
              <span className="relative z-10 muscle-text">BUSINESS STRATEGY</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#contact" 
              className="btn-outline text-lg px-10 py-5 depth-hover"
            >
              <span className="muscle-text">CONSULTATION</span>
            </a>
          </div>

          {/* Business Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center group luxury-card p-4 depth-hover">
              <div className="text-3xl md:text-4xl font-bold premium-text mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-neutral-400 text-sm font-medium">Brands Elevated</div>
            </div>
            <div className="text-center group luxury-card p-4 depth-hover">
              <div className="text-3xl md:text-4xl font-bold premium-text mb-2 group-hover:scale-110 transition-transform duration-300">250%</div>
              <div className="text-neutral-400 text-sm font-medium">Average Growth</div>
            </div>
            <div className="text-center group luxury-card p-4 depth-hover">
              <div className="text-3xl md:text-4xl font-bold premium-text mb-2 group-hover:scale-110 transition-transform duration-300">Premium</div>
              <div className="text-neutral-400 text-sm font-medium">Bespoke Solutions</div>
            </div>
            <div className="text-center group luxury-card p-4 depth-hover">
              <div className="text-3xl md:text-4xl font-bold premium-text mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-neutral-400 text-sm font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-3d">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-primary-400 text-sm font-bold uppercase tracking-wider">DISCOVER</div>
          <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
