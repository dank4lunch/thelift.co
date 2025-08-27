'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-500 to-primary-400 mb-6 leading-tight">
            TRANSFORM YOUR LIFE
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Expert personal training, creative marketing, and business development services in Gauteng
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/services"
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              EXPLORE SERVICES
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary-500 text-primary-400 font-bold py-4 px-8 rounded-xl hover:bg-primary-500 hover:text-neutral-950 transition-all duration-300"
            >
              GET STARTED
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-neutral-800/50 p-6 rounded-xl border border-primary-500/20">
              <h3 className="text-primary-400 font-bold text-lg mb-2">PERSONAL TRAINING</h3>
              <p className="text-neutral-300">One-on-one fitness coaching and specialized training programs</p>
            </div>
            <div className="bg-neutral-800/50 p-6 rounded-xl border border-accent-500/20">
              <h3 className="text-accent-400 font-bold text-lg mb-2">CREATIVE MARKETING</h3>
              <p className="text-neutral-300">Digital marketing and brand development services</p>
            </div>
            <div className="bg-neutral-800/50 p-6 rounded-xl border border-primary-500/20">
              <h3 className="text-primary-400 font-bold text-lg mb-2">BUSINESS STRATEGY</h3>
              <p className="text-neutral-300">Event coordination and business development solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}