import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-background">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary-500/15 rounded-full blur-3xl energy-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-accent-500/15 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary-600/8 rounded-full blur-2xl floating-element" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-content text-center w-full max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          {/* Animated Badge */}
          <div className="inline-block mb-6 sm:mb-8 mt-8 sm:mt-12 animate-fade-in">
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-primary-400 font-bold text-xs sm:text-sm tracking-wider uppercase">
              Elite Fitness & Business Solutions
            </span>
          </div>

          {/* Dynamic Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-500 to-primary-400 leading-tight animate-slide-up">
            <span className="block mb-2 sm:mb-4">THE LIFT CO</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl transition-all duration-1000 ease-in-out transform break-words">
              {rotatingTexts[currentText]}
            </span>
          </h1>

          {/* Enhanced Subheading */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in px-4" style={{ animationDelay: '0.5s' }}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-200 font-bold break-words">
              Where Strength Meets Strategy
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed break-words">
              Elite personal training, strategic business development, and creative marketing solutions.
              Based in Albermarle, Germiston, serving all of Gauteng with premium services that deliver results.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 animate-scale-in px-4" style={{ animationDelay: '1s' }}>
            <a
              href="https://forms.gle/8mz7dZXLcr47QSNG8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto px-8 sm:px-12 py-4 text-sm sm:text-base md:text-lg relative overflow-hidden group elite-glow focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-neutral-950 text-center"
              aria-label="Book personal training session"
            >
              <span className="relative z-10 muscle-text whitespace-nowrap">START YOUR TRANSFORMATION</span>
            </a>

            <Link
              href="/services"
              className="btn-secondary w-full sm:w-auto px-8 sm:px-12 py-4 text-sm sm:text-base md:text-lg relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-neutral-950 text-center"
              aria-label="View our services"
            >
              <span className="relative z-10 muscle-text whitespace-nowrap">EXPLORE SERVICES</span>
            </Link>
          </div>

          {/* Services Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 animate-fade-in px-4" style={{ animationDelay: '2s' }}>
            <div className="group bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 p-6 sm:p-8 rounded-2xl border border-accent-500/30 hover:border-accent-500/60 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:animate-pulse">
                <span className="text-xl sm:text-2xl">💪</span>
              </div>
              <h3 className="text-primary-400 font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-center">ELITE TRAINING</h3>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base text-center">Transform your body with personalized training programs designed by certified professionals who understand your goals.</p>
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-accent-400 font-semibold text-center">Premium Sessions</div>
            </div>

            <div className="group bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 p-6 sm:p-8 rounded-2xl border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:animate-pulse">
                <span className="text-xl sm:text-2xl">🎨</span>
              </div>
              <h3 className="text-accent-400 font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-center">CREATIVE MARKETING</h3>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base text-center">Strategic brand development, digital presence, and marketing solutions that drive growth and engagement.</p>
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-primary-400 font-semibold text-center">Custom Solutions</div>
            </div>

            <div className="group bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 p-6 sm:p-8 rounded-2xl border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:animate-pulse">
                <span className="text-xl sm:text-2xl">📈</span>
              </div>
              <h3 className="text-primary-400 font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-center">BUSINESS STRATEGY</h3>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base text-center">Event coordination, business development, and strategic planning that scales operations and maximizes potential.</p>
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-accent-400 font-semibold text-center">Elite Packages</div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '2.5s' }}>
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-content">
        <div className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}