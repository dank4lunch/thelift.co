
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

interface MouseTrail {
  id: number
  x: number
  y: number
  timestamp: number
}

export default function LandingHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([])
  const [mouseTrail, setMouseTrail] = useState<MouseTrail[]>([])
  const [scrollY, setScrollY] = useState(0)
  const [textVisible, setTextVisible] = useState(false)
  const [energyPulse, setEnergyPulse] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Create mouse trail effect
      setMouseTrail(prev => [
        ...prev.slice(-5),
        { id: Date.now(), x: e.clientX, y: e.clientY, timestamp: Date.now() }
      ])
    }

    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    // Trigger text animation
    setTimeout(() => setTextVisible(true), 500)
    
    // Energy pulse effect
    const pulseInterval = setInterval(() => {
      setEnergyPulse(true)
      setTimeout(() => setEnergyPulse(false), 1000)
    }, 3000)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      clearInterval(pulseInterval)
    }
  }, [])

  useEffect(() => {
    const elements = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 8 + Math.random() * 6,
      size: 0.5 + Math.random() * 2.5,
      opacity: 0.2 + Math.random() * 0.6,
    }))
    setFloatingElements(elements)
  }, [])

  // Clean up mouse trail
  useEffect(() => {
    const cleanup = setInterval(() => {
      setMouseTrail(prev => prev.filter(trail => Date.now() - trail.timestamp < 1000))
    }, 100)
    return () => clearInterval(cleanup)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center trainer-hero relative overflow-hidden perspective-container">
      {/* Mouse Trail Effect */}
      {mouseTrail.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed w-2 h-2 bg-primary-400/40 rounded-full pointer-events-none z-50"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            opacity: (1 - index / 6) * 0.6,
            transform: `scale(${1 - index / 6})`,
            transition: 'all 0.3s ease-out'
          }}
        />
      ))}

      {/* Ultra-Dynamic 3D Background */}
      <div className="absolute inset-0 transform-3d">
        {/* Animated floating particles */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-primary-400/60 to-accent-400/60 floating-orb blur-sm animate-pulse"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              width: `${element.size}rem`,
              height: `${element.size}rem`,
              opacity: element.opacity,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
              transform: `translateY(${scrollY * 0.1}px) rotateZ(${element.delay * 45}deg)`,
            }}
          />
        ))}

        {/* Main interactive energy orbs */}
        <div 
          className={`absolute w-[1000px] h-[1000px] bg-gradient-to-r from-primary-500/25 to-accent-500/25 rounded-full blur-3xl energy-pulse ${energyPulse ? 'animate-bounce' : ''}`}
          style={{
            transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, 0px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
            left: '0%',
            top: '0%',
            transition: energyPulse ? 'transform 0.8s ease-out' : 'transform 0.1s ease-out',
          }}
        />
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl energy-pulse"
          style={{
            transform: `translate3d(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px, 0px) rotateX(${mousePosition.y * -0.015}deg) rotateY(${mousePosition.x * -0.015}deg)`,
            right: '0%',
            bottom: '0%',
            animationDelay: '2s',
          }}
        />

        {/* Geometric elements with personality */}
        <div className="absolute top-20 right-32 w-24 h-24 border-2 border-primary-500/40 rounded-lg rotate-45 animate-spin hover:animate-bounce cursor-pointer" style={{ animationDuration: '15s' }} />
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-r from-accent-500/30 to-primary-500/30 rounded-full animate-bounce hover:animate-pulse cursor-pointer" />
        <div className="absolute top-1/3 right-20 w-16 h-16 border border-primary-500/50 rotate-12 animate-pulse hover:animate-spin cursor-pointer" />
        <div className="absolute bottom-1/4 left-20 w-12 h-12 bg-accent-400/20 rounded-full animate-ping" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Hero Profile with enhanced animations */}
          <div className={`mb-16 transition-all duration-1500 ${textVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'}`}>
            <div className="flex justify-center mb-10">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-primary-400/80 bg-gradient-to-br from-primary-500/40 to-accent-500/40 backdrop-blur-sm shadow-2xl luxury-glow transform hover:scale-110 hover:rotate-2 transition-all duration-700 tilt-3d cursor-pointer group-hover:shadow-primary-400/50">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F08e7771950634f09bf5906b11a6d0d83?format=webp&width=800"
                    alt="Tshiamo Sookane - Your Personal Fitness Coach"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-primary-400/60 animate-pulse"></div>
                </div>
                {/* Floating status indicator */}
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                  💪 Ready to Transform Lives!
                </div>
              </div>
            </div>

            {/* Main Headline with typewriter effect */}
            <div className={`transition-all duration-1000 delay-500 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black font-heading premium-text mb-10 glow-text muscle-text transform-3d leading-tight">
                <span className="inline-block animate-bounce" style={{ animationDelay: '0ms' }}>T</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '100ms' }}>R</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '200ms' }}>A</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '300ms' }}>N</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '400ms' }}>S</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '500ms' }}>F</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '600ms' }}>O</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '700ms' }}>R</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '800ms' }}>M</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 animate-gradient mt-4">
                  YOUR LIFE
                </span>
              </h1>
            </div>

            {/* Human personality tagline */}
            <div className={`text-2xl sm:text-3xl md:text-4xl text-primary-300 mb-10 transition-all duration-1000 delay-700 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="font-bold leading-relaxed mb-4 flex items-center justify-center gap-4">
                <span className="animate-wave">👋</span>
                <span>Hey, I'm Tshiamo!</span>
                <span className="animate-wave" style={{ animationDelay: '0.5s' }}>💪</span>
              </p>
              <p className="text-xl sm:text-2xl text-accent-400 font-semibold animate-pulse">
                Your Personal Transformation Partner for 10 Years ✨
              </p>
              <p className="text-lg sm:text-xl text-neutral-300 mt-4 font-medium max-w-3xl mx-auto">
                🔥 I don't just count reps, I count victories. Ready to write your success story together?
              </p>
            </div>
          </div>

          {/* Animated call-to-action description */}
          <div className={`transition-all duration-1000 delay-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-2xl sm:text-3xl text-neutral-300 mb-20 max-w-5xl mx-auto leading-relaxed font-medium">
              <span className="text-primary-400">Real talk:</span> Fitness isn't just about looking good (though you absolutely will 😉). 
              It's about feeling unstoppable, confident, and alive. 
              <span className="text-accent-400"> Let's build the strongest version of YOU!</span>
            </p>
          </div>

          {/* Interactive CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-8 justify-center mb-24 transition-all duration-1000 delay-1200 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="/home"
              className="btn-primary text-2xl px-16 py-6 elite-glow group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-neutral-950 transform hover:scale-110 hover:rotate-1 transition-all duration-500 depth-hover animate-pulse"
              onMouseEnter={() => setEnergyPulse(true)}
              aria-label="Start your fitness transformation journey"
            >
              <span className="relative z-10 muscle-text font-bold flex items-center gap-3">
                🚀 START MY TRANSFORMATION
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
            </a>
            <a
              href="https://forms.gle/8mz7dZXLcr47QSNG8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-2xl px-16 py-6 luxury-glow group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-neutral-950 transform hover:scale-110 hover:-rotate-1 transition-all duration-500 depth-hover"
              aria-label="Book your free consultation with Tshiamo"
            >
              <span className="relative z-10 muscle-text font-bold flex items-center gap-3">
                💬 CHAT WITH ME (FREE!)
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
            </a>
          </div>

          {/* Enhanced achievement stats with personality */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-16 max-w-4xl mx-auto transition-all duration-1000 delay-1400 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center group cursor-pointer depth-hover transform hover:scale-110 transition-all duration-500">
              <div className="text-6xl sm:text-7xl font-bold text-primary-400 mb-6 group-hover:animate-bounce">
                10
                <span className="text-2xl">+</span>
              </div>
              <div className="text-neutral-300 font-bold text-xl uppercase tracking-wide mb-2">Years of Magic</div>
              <div className="text-primary-300 text-sm">💫 Every rep counts!</div>
            </div>
            <div className="text-center group cursor-pointer depth-hover transform hover:scale-110 transition-all duration-500">
              <div className="text-6xl sm:text-7xl font-bold text-accent-400 mb-6 group-hover:animate-pulse">
                100
                <span className="text-2xl">%</span>
              </div>
              <div className="text-neutral-300 font-bold text-xl uppercase tracking-wide mb-2">Personalized</div>
              <div className="text-accent-300 text-sm">🎯 Your unique journey</div>
            </div>
            <div className="text-center group cursor-pointer depth-hover transform hover:scale-110 transition-all duration-500">
              <div className="text-6xl sm:text-7xl font-bold text-primary-400 mb-6 group-hover:animate-spin">
                ∞
              </div>
              <div className="text-neutral-300 font-bold text-xl uppercase tracking-wide mb-2">Possibilities</div>
              <div className="text-primary-300 text-sm">🌟 Sky's the limit!</div>
            </div>
          </div>

          {/* Scroll indicator with personality */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
            <div className="flex flex-col items-center space-y-3 text-primary-400 group-hover:text-accent-400 transition-colors">
              <div className="text-lg font-bold uppercase tracking-wider animate-pulse">Let's Go! 👇</div>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
