
'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number
    left: number
    top: number
    animationDelay: number
    animationDuration: number
  }>>([])

  useEffect(() => {
    setIsClient(true)
    
    // Generate particles only on client side
    const generatedParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 6,
      animationDuration: 4 + Math.random() * 4,
    }))
    setParticles(generatedParticles)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    // Trigger visibility animation
    setTimeout(() => setIsVisible(true), 200)
    
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles - only render on client to avoid hydration mismatch */}
        {isClient && particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-primary-500/30 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
            }}
          />
        ))}
        
        {/* Interactive orbs */}
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-primary-600/15 to-accent-500/15 rounded-full blur-3xl transition-transform duration-300"
          style={{
            transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0px)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-accent-500/15 to-primary-400/15 rounded-full blur-3xl transition-transform duration-300"
          style={{
            transform: `translate3d(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px, 0px)`,
            right: '15%',
            bottom: '25%',
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(227,181,71,0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(227,181,71,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Logo Section - Much Smaller */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-primary-400/20 to-accent-400/20 backdrop-blur-sm border-2 border-primary-400/50 rounded-xl shadow-2xl overflow-hidden mx-auto mb-8 hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/IMG_0253_1754429519057.jpeg"
                alt="The Lift Co Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Main Heading */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 mb-8 leading-tight tracking-wide">
              BUILT TO BOOST
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-primary-300 font-bold hover:scale-105 transition-transform duration-300 cursor-default">
                Strategic Moves.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-accent-300 font-bold hover:scale-105 transition-transform duration-300 cursor-default">
                Creative Lifts.
              </p>
            </div>
          </div>
          
          {/* Description */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              We blend strategy with soul. The Lift Co is not just a service — it's a movement. 
              Transform your body, business, and brand with our multidisciplinary approach.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a 
                href="#services" 
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10">PERSONAL TRAINING</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="/marketing" 
                className="bg-gradient-to-r from-accent-600 to-primary-600 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10">BRAND & BUSINESS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-neutral-400 text-xs sm:text-sm font-medium">Transformations</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <div className="text-neutral-400 text-xs sm:text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  R300
                </div>
                <div className="text-neutral-400 text-xs sm:text-sm font-medium">Per Session</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="text-primary-400 text-xs font-bold uppercase tracking-wider">EXPLORE</div>
          <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
