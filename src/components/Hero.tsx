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
    <section id="home" className="min-h-screen flex items-center trainer-hero pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Strength particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-primary-500/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Power orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-primary-600/20 to-accent-500/20 rounded-full blur-3xl energy-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            left: '5%',
            top: '15%',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-accent-500/20 to-primary-400/20 rounded-full blur-3xl energy-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`,
            right: '5%',
            bottom: '15%',
            animationDelay: '1.5s',
          }}
        />

        {/* Geometric strength pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block mb-6">
              <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-4 py-2 rounded-full bg-primary-500/10">
                Elite Personal Training
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 mb-6 animate-slide-up glow-text muscle-text">
              BUILT TO DOMINATE
            </h1>
            
            <div className="text-2xl md:text-4xl font-bold text-primary-300 mb-8 space-y-3 animate-fade-in">
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text">STRENGTH. DISCIPLINE.</p>
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text">RESULTS. GUARANTEED.</p>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-medium">
            Transform your body with elite personal training. No excuses, no shortcuts—just proven methods 
            that deliver serious results. Ready to unleash your potential?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-scale-in">
            <a 
              href="#contact" 
              className="btn-primary text-xl px-12 py-6 fitness-glow group relative overflow-hidden"
            >
              <span className="relative z-10 muscle-text">START TRANSFORMATION</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#services" 
              className="btn-secondary text-xl px-12 py-6 power-glow group relative overflow-hidden"
            >
              <span className="relative z-10 muscle-text">VIEW PROGRAMS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Power Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center group strength-card p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2 group-hover:text-accent-400 transition-colors duration-300 muscle-text">500+</div>
              <div className="text-neutral-300 text-sm font-medium uppercase tracking-wide">Bodies Transformed</div>
            </div>
            <div className="text-center group strength-card p-6">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2 group-hover:text-primary-400 transition-colors duration-300 muscle-text">10+</div>
              <div className="text-neutral-300 text-sm font-medium uppercase tracking-wide">Years Mastery</div>
            </div>
            <div className="text-center group strength-card p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2 group-hover:text-accent-400 transition-colors duration-300 muscle-text">R300</div>
              <div className="text-neutral-300 text-sm font-medium uppercase tracking-wide">Per Session</div>
            </div>
            <div className="text-center group strength-card p-6">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2 group-hover:text-primary-400 transition-colors duration-300 muscle-text">100%</div>
              <div className="text-neutral-300 text-sm font-medium uppercase tracking-wide">Commitment</div>
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="strength-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-400 mb-4 muscle-text">
              NO ORDINARY TRAINING. NO ORDINARY RESULTS.
            </h3>
            <p className="text-neutral-300 text-lg mb-6">
              Elite coaching that pushes limits and delivers transformation. Your strongest self is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="text-accent-400 font-bold text-lg">📞 +27 635432439</span>
              <span className="text-primary-400 font-bold text-lg">📧 tshiamokl@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
