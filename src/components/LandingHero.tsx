'use client'

import { useState, useEffect } from 'react'

export default function LandingHero() {
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 300)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-500 to-primary-400 muscle-text leading-tight">
            THE LIFT CO
          </h1>

          <div className="space-y-4 mb-8 sm:mb-12">
            <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text">Creative Lifts. 💡</p>
            <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text text-accent-400">Life Transformation. ✨</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
            <a
              href="/programs"
              className="btn-primary px-8 py-4 text-lg muscle-text elite-glow hover:scale-105 transition-all duration-300"
            >
              ELITE PROGRAMS
            </a>
            <a
              href="/contact"
              className="btn-outline px-8 py-4 text-lg muscle-text hover:scale-105 transition-all duration-300"
            >
              FREE CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}