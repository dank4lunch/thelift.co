
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
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Container */}
      <div className="container max-w-6xl mx-auto relative z-10 py-8 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 text-center lg:text-left">

          {/* Text Section */}
          <div className={`flex-1 max-w-2xl transition-all duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 sm:mb-8 animate-fade-in muscle-text leading-tight">
              BUILT TO BOOST 🚀
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary-300 mb-6 sm:mb-8 space-y-2 sm:space-y-3 animate-fade-in">
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text">Strategic Moves. 🎯</p>
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text">Creative Lifts. 💡</p>
              <p className="transform hover:scale-105 transition-transform duration-300 cursor-default muscle-text text-accent-400">Life Transformation. ✨</p>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-medium px-4 sm:px-0">
              Welcome to <span className="text-primary-400 font-bold">The Lift Co</span> — where we don't just train bodies, we build empires. 
              Transform your fitness, elevate your brand, and boost your business with a coach who believes in lifting you up in every way possible. 
              <span className="text-accent-400 font-semibold">This is your movement. This is your moment.</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
              <a
                href="https://forms.gle/8mz7dZXLcr47QSNG8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center min-h-[52px] flex items-center justify-center"
              >
                Book Free Consultation
              </a>

              <a
                href="/fitness"
                className="bg-neutral-800 text-white font-bold py-4 px-8 rounded-full text-center text-lg border border-neutral-600 hover:bg-neutral-700 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Service Links */}
            <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
              <a href="/fitness" className="hover:text-primary-400 transition-colors">💪 Elite Training</a>
              <a href="/brand" className="hover:text-primary-400 transition-colors">🎯 Brand Development</a>
              <a href="/about" className="hover:text-primary-400 transition-colors">✨ Meet Tshiamo</a>
            </div>
          </div>

          {/* Profile Section */}
          <div className={`flex-shrink-0 order-first lg:order-last mb-8 lg:mb-0 transition-all duration-1000 delay-300 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              {/* Profile Picture */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl luxury-glow">
                <img
                  src="/images/IMG_0253_1754429519057.jpeg"
                  alt="Tshiamo Sookane - Personal Trainer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Info */}
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Tshiamo Sookane
                </h3>
                <p className="text-primary-400 font-semibold text-base sm:text-lg">
                  Elite Trainer & Life Transformer ⚡
                </p>
                <p className="text-neutral-400 text-sm sm:text-base">
                  The visionary dreamer lifting Gauteng up, one client at a time 🌟
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
