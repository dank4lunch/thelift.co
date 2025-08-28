
'use client'

import { useState, useEffect } from 'react'

export default function LandingHero() {
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 300)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-950 via-elite-obsidian to-neutral-900 relative overflow-hidden">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 gradient-text">
              Fitness Goals with a Personal Trainer across Gauteng
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-6">
              Book a <span className="font-bold text-primary-400">free 15-minute consultation</span> and get a tailored plan that fits your schedule.
            </p>

            <p className="text-base sm:text-lg text-neutral-400 mb-8">
              In-person or mobile sessions across Gauteng — Sandton, Johannesburg, Germiston & surrounds
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
              <a
                href="/contact"
                className="btn-primary text-center min-h-[52px] flex items-center justify-center"
              >
                Book Free Consultation
              </a>

              <a
                href="/home"
                className="bg-neutral-800 text-white font-bold py-4 px-6 sm:px-8 rounded-full text-center text-base sm:text-lg border border-neutral-600 hover:bg-neutral-700 transition-all duration-300 min-h-[52px] flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>

            {/* Service Links */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-neutral-400 justify-center sm:justify-start">
              <a href="/services" className="hover:text-primary-400 transition-colors">Training Programs</a>
              <a href="/about" className="hover:text-primary-400 transition-colors">About Tshiamo</a>
              <a href="/marketing" className="hover:text-primary-400 transition-colors">Business Services</a>
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
                  Founder & Head Trainer
                </p>
                <p className="text-neutral-400 text-sm sm:text-base">
                  The dreamer behind The Lift Co
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
