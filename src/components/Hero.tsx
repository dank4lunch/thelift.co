
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentText, setCurrentText] = useState(0)

  const rotatingTexts = [
    "TRANSFORM YOUR BODY",
    "ELEVATE YOUR BUSINESS", 
    "DOMINATE YOUR MARKET",
    "ACHIEVE ELITE STATUS"
  ]

  useEffect(() => {
    setIsLoaded(true)
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!isLoaded) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
          <p className="text-neutral-400 mt-4">Loading...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-600/5 rounded-full blur-2xl animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-block mb-8 animate-fade-in">
            <span className="px-6 py-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-primary-400 font-bold text-sm tracking-wider uppercase">
              Elite Fitness & Business Solutions
            </span>
          </div>

          {/* Dynamic Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-500 to-primary-400 mb-6 leading-tight animate-slide-up">
            <span className="block mb-2">THE LIFT CO</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl transition-all duration-1000 ease-in-out transform">
              {rotatingTexts[currentText]}
            </span>
          </h1>

          {/* Enhanced Subheading */}
          <div className="mb-8 space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-2xl md:text-3xl text-neutral-200 font-bold">
              Where Strength Meets Strategy
            </p>
            <p className="text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              Elite personal training, strategic business development, and creative marketing solutions. 
              Based in Albermarle, Germiston, serving all of Gauteng with premium services that deliver results.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in" style={{ animationDelay: '1s' }}>
            <Link
              href="/services"
              className="group relative bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 font-bold py-5 px-10 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl text-lg overflow-hidden"
            >
              <span className="relative z-10">START YOUR TRANSFORMATION</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/contact"
              className="group border-2 border-primary-500 text-primary-400 font-bold py-5 px-10 rounded-2xl hover:bg-primary-500 hover:text-neutral-950 transition-all duration-300 text-lg relative overflow-hidden"
            >
              <span className="relative z-10">FREE CONSULTATION</span>
              <div className="absolute inset-0 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-slide-up" style={{ animationDelay: '1.5s' }}>
            <div className="group bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 p-8 rounded-2xl border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-primary-400 font-bold text-xl mb-4">ELITE PERSONAL TRAINING</h3>
              <p className="text-neutral-300 leading-relaxed">One-on-one coaching, specialized programs, and results-driven training that transforms bodies and lives.</p>
              <div className="mt-4 text-sm text-accent-400 font-semibold">From R500 per session</div>
            </div>
            
            <div className="group bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 p-8 rounded-2xl border border-accent-500/30 hover:border-accent-500/60 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-accent-400 font-bold text-xl mb-4">CREATIVE MARKETING</h3>
              <p className="text-neutral-300 leading-relaxed">Strategic brand development, digital presence, and marketing solutions that drive growth and engagement.</p>
              <div className="mt-4 text-sm text-primary-400 font-semibold">Custom Solutions</div>
            </div>
            
            <div className="group bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 p-8 rounded-2xl border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-primary-400 font-bold text-xl mb-4">BUSINESS STRATEGY</h3>
              <p className="text-neutral-300 leading-relaxed">Event coordination, business development, and strategic planning that scales operations and maximizes potential.</p>
              <div className="mt-4 text-sm text-accent-400 font-semibold">Elite Packages</div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '2s' }}>
            <p className="text-neutral-400 text-sm uppercase tracking-wider mb-6">Trusted by Elite Clients</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-neutral-500">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">100+ Transformations</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏆</span>
                <span className="font-semibold">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📍</span>
                <span className="font-semibold">Gauteng Based</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
