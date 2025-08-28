'use client'

import { useState, useEffect } from 'react'

export default function LandingHero() {
  const [textVisible, setTextVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setTimeout(() => setTextVisible(true), 300)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-neutral-950 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isClient && (
          <>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-500/5 rounded-full blur-2xl" />
          </>
        )}
      </div>

      {/* Main Container */}
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* Text Section */}
          <div className={`flex-1 max-w-2xl transition-all duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-orange-500">
              Fitness Goals with a Personal Trainer across Gauteng
            </h1>

            <div className="space-y-4 mb-8">
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
                Book a <span className="font-bold text-white">free 15-minute consultation</span> and get a tailored plan that fits your schedule.
                In-person or mobile sessions across Gauteng.
              </p>

              <p className="text-base sm:text-lg text-neutral-400">
                Serving all of Gauteng — Sandton, Johannesburg, Germiston & surrounds
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-orange-500 text-black font-bold py-4 px-8 rounded-full text-center hover:bg-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Book Free Consultation
              </a>

              <a
                href="/about"
                className="bg-neutral-800 text-white font-bold py-4 px-8 rounded-full text-center border border-neutral-600 hover:bg-neutral-700 transform hover:scale-105 transition-all duration-300"
              >
                Personal Details
              </a>
            </div>
          </div>

          {/* Profile Section */}
          <div className={`flex-shrink-0 transition-all duration-1000 delay-300 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              {/* Profile Picture */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl">
                <img
                  src="/images/IMG_0253_1754429519057.jpeg"
                  alt="Tshiamo Sookane - Personal Trainer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Info */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Tshiamo Sookane
                </h3>
                <p className="text-orange-400 font-semibold text-lg">
                  Founder & Head Trainer
                </p>
                <p className="text-neutral-400 text-sm">
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