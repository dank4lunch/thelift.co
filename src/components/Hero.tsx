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
        <div className="max-w-5xl mx-auto text-center perspective-container px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex justify-center mb-6 sm:mb-8 depth-hover">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-primary-500/50 bg-elite-cream/10 backdrop-blur-sm shadow-2xl luxury-glow">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F08e7771950634f09bf5906b11a6d0d83?format=webp&width=800"
                  alt="Tshiamo Sookane - Personal Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading premium-text mb-4 sm:mb-6 animate-slide-up glow-text muscle-text transform-3d">
              Crush Your Fitness Goals with a Personal Trainer in Sandton
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl text-primary-300 mb-6 sm:mb-8 animate-fade-in">
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text depth-hover">Get a free 15-minute consultation. Training packages available now.</p>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up font-medium px-4 sm:px-0">
            Elite personal training with Tshiamo Sookane in Sandton CBD. Transform your body with proven results and expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 animate-scale-in px-4 sm:px-0">
            <a
              href="https://wa.me/27635432439?text=Hi! I'd like to book a free 15-minute consultation with Tshiamo. Please let me know your availability."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 elite-glow group relative overflow-hidden"
            >
              <span className="relative z-10 muscle-text">Book Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="#packages"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 luxury-glow group relative overflow-hidden"
            >
              <span className="relative z-10 muscle-text">View Packages</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
