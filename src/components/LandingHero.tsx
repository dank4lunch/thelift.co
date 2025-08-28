'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LandingHero() {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const heroTexts = [
    "Built to Boost Your Potential 💪",
    "Strategic Moves for Success 🚀", 
    "Creative Lifts for Growth ✨"
  ]

  useEffect(() => {
    setIsVisible(true)
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 4000)

    return () => clearInterval(textInterval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-transparent to-neutral-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,191,36,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight"
              style={{
                textShadow: "0 0 30px rgba(239, 68, 68, 0.5), 0 0 60px rgba(239, 68, 68, 0.3)",
                transform: "perspective(1000px) rotateX(5deg)"
              }}
            >
              THE{" "}
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 animate-pulse"
              >
                LIFT
              </span>{" "}
              CO
            </h1>
          </div>

          {/* Animated Tagline */}
          <div className="mb-12 h-20 flex items-center justify-center">
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400 tracking-wide animate-pulse"
              style={{
                textShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
              }}
            >
              {heroTexts[currentText]}
            </p>
          </div>

          {/* Description */}
          <p 
            className="text-xl md:text-2xl text-neutral-300 mb-16 max-w-4xl mx-auto leading-relaxed"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            Elite personal training meets strategic business solutions. 
            <br className="hidden md:block" />
            Transform your body, elevate your brand, boost your business.
          </p>

          {/* Service Selection */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-neutral-400 mb-8 font-semibold">
              Choose Your Path to Excellence
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Fitness Path */}
              <div className="group">
                <Link 
                  href="/fitness"
                  className="block p-8 bg-gradient-to-br from-red-900/50 to-red-800/50 border-2 border-red-500/30 rounded-2xl hover:border-red-400 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-2xl"
                >
                  <div className="text-6xl mb-4 group-hover:animate-pulse">💪</div>
                  <h3 className="text-2xl font-black text-red-400 mb-4">
                    FITNESS TRANSFORMATION
                  </h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    Elite personal training, nutrition coaching, and body transformation programs. 
                    Build the strength and physique of a champion.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-red-400 font-bold text-lg">
                      Start Your Journey →
                    </span>
                    <div className="text-sm text-neutral-400">
                      Personal Training • Nutrition • Results
                    </div>
                  </div>
                </Link>
              </div>

              {/* Marketing Path */}
              <div className="group">
                <Link 
                  href="/brand"
                  className="block p-8 bg-gradient-to-br from-yellow-900/50 to-yellow-800/50 border-2 border-yellow-500/30 rounded-2xl hover:border-yellow-400 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-2xl"
                >
                  <div className="text-6xl mb-4 group-hover:animate-pulse">🚀</div>
                  <h3 className="text-2xl font-black text-yellow-400 mb-4">
                    BRAND & BUSINESS
                  </h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    Strategic brand development, creative marketing, and business growth solutions. 
                    Elevate your business to elite status.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 font-bold text-lg">
                      Scale Your Empire →
                    </span>
                    <div className="text-sm text-neutral-400">
                      Branding • Marketing • Strategy
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div>
              <a
                href="https://forms.gle/8mz7dZXLcr47QSNG8"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-full overflow-hidden shadow-2xl transform-gpu hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  📞 Free Consultation
                </span>
              </a>
            </div>

            <div>
              <Link 
                href="/services"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-primary-400 rounded-full hover:bg-primary-400 hover:text-neutral-900 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  📋 View All Services
                </span>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}