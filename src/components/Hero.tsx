'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-neutral-950 via-primary-950 to-neutral-900 pt-16">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-primary-600/20 to-accent-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-accent-500/20 to-primary-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            right: '10%',
            bottom: '20%',
            animationDelay: '2s',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 mb-4 animate-slide-up glow-text">
              Built to Boost
            </h1>
            <div className="text-2xl md:text-4xl font-medium text-primary-300 mb-8 space-y-2 animate-fade-in">
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default">Strategic Moves.</p>
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default">Creative Lifts.</p>
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default text-accent-400">Dark Vibes.</p>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            We blend strategy with soul. The Lift Co is not just a service — it's a movement. 
            Our multidisciplinary edge allows us to uniquely uplift every layer of your life and business 
            with cutting-edge innovation and authentic execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-scale-in">
            <a 
              href="#contact" 
              className="btn-primary text-lg px-10 py-5 neon-glow group relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#services" 
              className="btn-secondary text-lg px-10 py-5 neon-glow group relative overflow-hidden"
            >
              <span className="relative z-10">View Plans</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-neutral-400 text-sm">Transformations</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-neutral-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">R300</div>
              <div className="text-neutral-400 text-sm">Per Session</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-primary-400 text-sm font-medium">Explore</div>
          <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* 3D Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(45deg) translateZ(-100px)',
        }} />
      </div>
    </section>
  )
}
