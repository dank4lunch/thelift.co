
'use client'

import { useState, useEffect } from 'react'

interface FloatingElement {
  id: number
  left: number
  top: number
  delay: number
  duration: number
  size: number
  opacity: number
}

export default function LandingHero() {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([])
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 4,
      size: 0.3 + Math.random() * 1.2,
      opacity: 0.3 + Math.random() * 0.4,
    }))
    setFloatingElements(elements)
    
    // Trigger text animation
    setTimeout(() => setTextVisible(true), 300)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-primary-400/60 to-accent-400/60 floating-orb blur-sm"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              width: `${element.size}rem`,
              height: `${element.size}rem`,
              opacity: element.opacity,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 max-w-2xl mx-auto text-center text-safe">
        {/* Logo */}
        <div className={`mb-8 sm:mb-12 transition-all duration-1000 ${textVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-primary-400/20 to-accent-400/20 backdrop-blur-sm border-2 border-primary-400/50 rounded-2xl shadow-2xl luxury-glow overflow-hidden">
            <img 
              src="/images/IMG_0253_1754429519057.jpeg"
              alt="The Lift Co Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Headline */}
        <div className={`mb-8 sm:mb-12 transition-all duration-1000 delay-300 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 mb-6 sm:mb-8 leading-tight tracking-wide break-words">
            BUILT TO BOOST
          </h1>
          
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            <p className="text-xl sm:text-2xl md:text-3xl text-neutral-200 font-semibold">
              Strategic Moves.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-neutral-200 font-semibold">
              Creative Lifts.
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-lg mx-auto">
            I'm not your average trainer. I'm a creative entrepreneur who's obsessed 
            with human transformation - and I've spent 10 years perfecting the art of getting results.
            <br className="hidden sm:block" />
            <span className="text-primary-300 font-semibold">Ready to stop making excuses and start making progress?</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col gap-4 sm:gap-6 mb-16 sm:mb-20 transition-all duration-1000 delay-600 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="/home"
            className="w-full max-w-sm mx-auto bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 elite-glow muscle-text tracking-wide"
          >
            START TRAINING
          </a>
          
          <a
            href="/marketing"
            className="w-full max-w-sm mx-auto bg-gradient-to-r from-accent-600 to-primary-600 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 luxury-glow muscle-text tracking-wide"
          >
            BUSINESS SERVICES
          </a>
        </div>

        {/* Explore indicator */}
        <div className={`transition-all duration-1000 delay-900 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-primary-400 font-bold text-sm sm:text-base uppercase tracking-wider mb-3">
            EXPLORE
          </div>
          <div className="animate-bounce">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll to next section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => {
            const nextSection = document.querySelector('#training-showcase')
            nextSection?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="p-3 rounded-full bg-primary-500/20 border border-primary-500/30 hover:bg-primary-500/30 transition-all duration-300 group"
          aria-label="Scroll to next section"
        >
          <svg className="w-5 h-5 text-primary-400 group-hover:text-primary-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
