
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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 2,
      size: 0.5 + Math.random() * 0.8,
      opacity: 0.1 + Math.random() * 0.2,
    }))
    setFloatingElements(elements)

    setTimeout(() => setTextVisible(true), 300)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Elements - Only render on client */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isClient && floatingElements.slice(0, 3).map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-primary-400/8 to-accent-400/8 blur-2xl"
            style={{
              left: `${Math.max(10, Math.min(90, element.left))}%`,
              top: `${Math.max(10, Math.min(90, element.top))}%`,
              width: `${Math.min(element.size * 200, 160)}px`,
              height: `${Math.min(element.size * 200, 160)}px`,
              opacity: Math.min(element.opacity, 0.15),
              animation: `gentleFloat ${element.duration + 2}s ease-in-out infinite`,
              animationDelay: `${element.delay * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        {/* Logo Section */}
        <div className={`mb-8 transition-all duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary-400/20 to-accent-400/20 backdrop-blur-sm border border-primary-400/30 rounded-xl shadow-2xl overflow-hidden mx-auto">
            <img
              src="/images/IMG_0253_1754429519057.jpeg"
              alt="The Lift Co Logo"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Main Heading */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 mb-8 leading-[1.1] tracking-tight">
            BUILT TO BOOST
          </h1>

          <div className="space-y-4 mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-neutral-200 font-bold leading-tight">
              Strategic Moves.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-neutral-200 font-bold leading-tight">
              Creative Lifts.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
              I'm not your average trainer. I'm a creative entrepreneur who's obsessed
              with human transformation - and I've spent 10 years perfecting the art of getting results.
            </p>
            <p className="text-primary-300 font-bold text-lg sm:text-xl">
              Ready to stop making excuses and start making progress?
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 transition-all duration-1000 delay-400 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="/home"
            className="bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 font-bold py-4 px-8 sm:px-10 rounded-xl text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 tracking-wide"
          >
            START TRAINING
          </a>

          <a
            href="/marketing"
            className="bg-gradient-to-r from-accent-600/80 to-primary-600/80 text-white font-bold py-4 px-8 sm:px-10 rounded-xl text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 tracking-wide border border-accent-500/30"
          >
            BUSINESS SERVICES
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className={`transition-all duration-1000 delay-600 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-primary-400 font-bold text-sm uppercase tracking-wider mb-4">
            EXPLORE MORE
          </div>
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(-8px) translateX(3px) scale(1.05);
          }
          50% {
            transform: translateY(-5px) translateX(-3px) scale(0.95);
          }
          75% {
            transform: translateY(-10px) translateX(2px) scale(1.02);
          }
        }
      `}</style>
    </section>
  )
}
