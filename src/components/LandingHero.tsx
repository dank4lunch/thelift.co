
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
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-neutral-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Container */}
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text Section */}
          <div className={`flex-1 max-w-2xl transition-all duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 text-orange-500">
              Fitness Goals with a Personal Trainer across Gauteng
            </h1>

            <p className="text-xl text-neutral-300 leading-relaxed mb-6">
              Book a <span className="font-bold text-white">free 15-minute consultation</span> and get a tailored plan that fits your schedule.
            </p>

            <p className="text-lg text-neutral-400 mb-8">
              In-person or mobile sessions across Gauteng — Sandton, Johannesburg, Germiston & surrounds
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="/contact"
                className="bg-orange-500 text-black font-bold py-4 px-8 rounded-full text-center text-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                Book Free Consultation
              </a>

              <a
                href="/about"
                className="bg-neutral-800 text-white font-bold py-4 px-8 rounded-full text-center text-lg border border-neutral-600 hover:bg-neutral-700 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
              <a href="/services" className="hover:text-orange-400 transition-colors">View Services</a>
              <a href="/home#packages" className="hover:text-orange-400 transition-colors">Training Packages</a>
              <a href="/marketing" className="hover:text-orange-400 transition-colors">Business Services</a>
            </div>
          </div>

          {/* Profile Section */}
          <div className={`flex-shrink-0 transition-all duration-1000 delay-300 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              {/* Profile Picture */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl">
                <img
                  src="/images/IMG_0253_1754429519057.jpeg"
                  alt="Tshiamo Sookane - Personal Trainer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Info */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Tshiamo Sookane
                </h3>
                <p className="text-orange-400 font-semibold text-lg">
                  Founder & Head Trainer
                </p>
                <p className="text-neutral-400">
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
