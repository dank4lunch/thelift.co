'use client'

import { useState, useEffect } from 'react'
import { useResponsiveAnimation } from '@/hooks/useDeviceDetection'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([])
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { device, getAnimationConfig } = useResponsiveAnimation()
  const animConfig = getAnimationConfig('high')

  useEffect(() => {
    setMounted(true)

    // Generate particles only on client side and if device supports it
    if (animConfig.particles) {
      const particleCount = device.isMobile ? 5 : device.isTablet ? 10 : 15
      const particleArray = Array.from({ length: particleCount }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${3 + Math.random() * 4}s`
      }))
      setParticles(particleArray)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Dynamic 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20"></div>
        
        {/* Animated geometric shapes with parallax */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-xl animate-float"
            style={{
              transform: mounted ? `translate(${mousePosition.x * 0.02 + scrollY * 0.1}px, ${mousePosition.y * 0.02 + scrollY * 0.05}px) perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)` : 'translate(0px, 0px)'
            }}
          ></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-lg blur-lg animate-float"
            style={{
              transform: mounted ? `translate(${mousePosition.x * -0.03 + scrollY * -0.08}px, ${mousePosition.y * -0.03 + scrollY * 0.03}px) perspective(1000px) rotateX(${mousePosition.y * -0.1}deg) rotateY(${mousePosition.x * -0.1}deg)` : 'translate(0px, 0px)',
              animationDelay: '1s'
            }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur-lg animate-float"
            style={{
              transform: mounted ? `translate(${mousePosition.x * 0.025 + scrollY * 0.06}px, ${mousePosition.y * 0.025 + scrollY * -0.04}px) perspective(1000px) rotateX(${mousePosition.y * 0.15}deg) rotateY(${mousePosition.x * 0.15}deg)` : 'translate(0px, 0px)',
              animationDelay: '2s'
            }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-lg blur-lg animate-float"
            style={{
              transform: mounted ? `translate(${mousePosition.x * -0.02 + scrollY * -0.05}px, ${mousePosition.y * -0.02 + scrollY * 0.02}px) perspective(1000px) rotateX(${mousePosition.y * -0.15}deg) rotateY(${mousePosition.x * -0.15}deg)` : 'translate(0px, 0px)',
              animationDelay: '3s'
            }}
          ></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced 3D Logo */}
          <div className="mb-8 md:mb-12 perspective-1000 transform-gpu">
            <div className="relative inline-block transform transition-all duration-1000 hover:scale-105 md:hover:scale-110"
                 style={{
                   transform: mounted ? `perspective(1000px) rotateX(${mousePosition.y * 0.005}deg) rotateY(${mousePosition.x * 0.005}deg)` : 'perspective(1000px)',
                   filter: 'drop-shadow(0 15px 30px rgba(168,85,247,0.4))'
                 }}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa11fc95e48c6423b88726372c48e8f21%2F7f1cb837b11f4c358d061a03cfc8826f?format=webp&width=800"
                alt="The Lift Co - Built to Boost"
                className="h-20 sm:h-24 md:h-32 lg:h-36 w-auto object-contain brightness-0 invert mx-auto transform transition-all duration-700 max-w-none"
                style={{
                  filter: 'brightness(0) invert(1) drop-shadow(0 0 25px rgba(255,255,255,0.9)) drop-shadow(0 0 50px rgba(168,85,247,0.7)) contrast(1.2)'
                }}
                loading="eager"
              />

              {/* Multi-layered glow effects - reduced on mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 rounded-2xl blur-2xl scale-110 animate-pulse opacity-70 md:opacity-100"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/15 via-pink-400/15 to-cyan-400/15 rounded-2xl blur-3xl scale-125 animate-pulse hidden md:block" style={{ animationDelay: '1s' }}></div>

              {/* 3D depth shadow - simplified on mobile */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl blur-lg transform translate-y-1 translate-x-1 md:translate-y-2 md:translate-x-2 scale-95"></div>
            </div>
          </div>

          {/* 3D Hero Text */}
          <div className="perspective-1000 transform-gpu">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-white mb-6 transform hover:scale-105 transition-all duration-700 hover:rotate-x-12"
                style={{
                  textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(138,43,226,0.3), 0 0 60px rgba(138,43,226,0.2)',
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`
                }}>
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-glow">Strategic Moves. Creative Lifts.</span>
            </h1>
          </div>
          
          <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text mb-8 space-y-3">
            <p className="transform hover:scale-105 transition-transform duration-500 hover:rotate-x-6" 
               style={{transform: `perspective(800px) rotateX(${mousePosition.y * 0.01}deg)`}}>
              Strategic Moves.
            </p>
            <p className="transform hover:scale-105 transition-transform duration-500 hover:rotate-x-6" 
               style={{transform: `perspective(800px) rotateX(${mousePosition.y * -0.01}deg)`}}>
              Creative Lifts.
            </p>
          </div>
          
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20 transform hover:scale-105 transition-all duration-500"
             style={{
               boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
               transform: `perspective(1000px) rotateX(${mousePosition.y * 0.005}deg) rotateY(${mousePosition.x * 0.005}deg)`
             }}>
            We blend strategy with soul. The Lift Co is not just a service — it's a movement. 
            Our multidisciplinary edge allows us to uniquely uplift every layer of your life and business.
          </p>
          
          {/* 3D Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" 
               className="group relative bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold text-lg px-10 py-5 rounded-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-x-12 hover:shadow-2xl hover:shadow-purple-500/50"
               style={{
                 transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
                 boxShadow: '0 10px 30px rgba(168,85,247,0.4)'
               }}>
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="#about" 
               className="group relative bg-white/20 backdrop-blur-md text-white font-bold text-lg px-10 py-5 rounded-2xl border border-white/30 transform transition-all duration-300 hover:scale-110 hover:rotate-x-12 hover:bg-white/30"
               style={{
                 transform: `perspective(1000px) rotateX(${mousePosition.y * -0.01}deg) rotateY(${mousePosition.x * -0.01}deg)`,
                 boxShadow: '0 10px 30px rgba(255,255,255,0.1)'
               }}>
              <span className="relative z-10">Learn More</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced 3D scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-bounce"></div>
          </div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-lg animate-pulse"></div>
        </div>
      </div>

      {/* Floating 3D particles - client-side only */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
                transform: `translate(${mousePosition.x * (0.01 + i * 0.002)}px, ${mousePosition.y * (0.01 + i * 0.002)}px)`
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
