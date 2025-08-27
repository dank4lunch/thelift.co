'use client'

import { useState, useEffect } from 'react'

interface Particle {
  id: number
  left: number
  top: number
  delay: number
  duration: number
  size: number
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generatedParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 4 + Math.random() * 8,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Background effects */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full floating-orb opacity-40"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(227, 181, 71, 0.6) 0%, transparent 70%)`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-left space-y-6">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-3 bg-primary-500/10 border border-primary-500/30 rounded-full px-6 py-3 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-primary-400 font-bold text-sm uppercase tracking-wider">Elite Personal Training</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading leading-none animate-slide-up"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="block text-neutral-100 drop-shadow-lg">TRANSFORM</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-500 to-primary-400 animate-gradient">
                  YOUR LIFE
                </span>
              </h1>

              <p
                className="text-xl sm:text-2xl text-primary-300 font-medium animate-slide-up"
                style={{ animationDelay: '0.6s' }}
              >
                with Tshiamo Sookane
              </p>
            </div>

            {/* Description */}
            <div
              className="space-y-4 max-w-xl animate-slide-up"
              style={{ animationDelay: '0.8s' }}
            >
              <p className="text-lg text-neutral-300 leading-relaxed font-medium">
                10 years of elite training expertise. Personal coaching across Gauteng.
                <span className="text-accent-400 font-bold"> Real results, no excuses.</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-scale-in"
              style={{ animationDelay: '1s' }}
            >
              <a
                href="https://forms.gle/8mz7dZXLcr47QSNG8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 group relative overflow-hidden"
              >
                <span className="relative z-10 font-bold">START FREE CONSULTATION</span>
              </a>
              <a
                href="/services"
                className="text-lg px-8 py-4 rounded-2xl font-bold border-2 border-primary-400/50 text-primary-400 hover:bg-primary-400 hover:text-neutral-950 transition-all duration-300 text-center"
              >
                VIEW PROGRAMS
              </a>
            </div>

            {/* Quick Stats */}
            <div
              className="grid grid-cols-3 gap-4 pt-6 animate-fade-in"
              style={{ animationDelay: '1.2s' }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-primary-400 mb-1">10+</div>
                <div className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-accent-400 mb-1">100%</div>
                <div className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Personalized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-primary-400 mb-1">FREE</div>
                <div className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Consultation</div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative w-80 h-80 lg:w-96 lg:h-96 animate-scale-in"
              style={{ animationDelay: '1.4s' }}
            >
              {/* Profile image */}
              <div className="relative rounded-full overflow-hidden bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20 backdrop-blur-sm shadow-2xl luxury-glow border-4 border-primary-500/30">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F08e7771950634f09bf5906b11a6d0d83?format=webp&width=800"
                  alt="Tshiamo Sookane - Elite Personal Trainer"
                  className="w-full h-full object-cover filter contrast-110 brightness-105 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce"
                style={{ animationDelay: '1.6s' }}
              >
                💪 ELITE TRAINING
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-accent-500 to-primary-500 text-neutral-950 px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce"
                style={{ animationDelay: '1.8s' }}
              >
                🔥 REAL RESULTS
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ animationDelay: '2s' }}
        >
          <div className="flex flex-col items-center text-primary-400">
            <span className="text-sm font-medium mb-2 uppercase tracking-wider">Explore Services</span>
            <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}