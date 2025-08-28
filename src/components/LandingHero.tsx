
'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  size: number
  opacity: number
  color: string
  rotationX: number
  rotationY: number
  rotationSpeed: number
}

interface FloatingElement {
  id: number
  x: number
  y: number
  z: number
  rotationX: number
  rotationY: number
  rotationZ: number
  scale: number
  type: 'cube' | 'sphere' | 'pyramid'
}

export default function LandingHero() {
  const [textVisible, setTextVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([])
  const [isClient, setIsClient] = useState(false)
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)

  // Initialize particles and floating elements
  useEffect(() => {
    setIsClient(true)
    setTimeout(() => setTextVisible(true), 300)

    // Create particles
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      vz: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      color: Math.random() > 0.5 ? '#E3B547' : '#A89148',
      rotationX: Math.random() * 360,
      rotationY: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
    }))

    // Create floating 3D elements
    const newFloatingElements: FloatingElement[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      z: Math.random() * 50,
      rotationX: Math.random() * 360,
      rotationY: Math.random() * 360,
      rotationZ: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5,
      type: ['cube', 'sphere', 'pyramid'][Math.floor(Math.random() * 3)] as 'cube' | 'sphere' | 'pyramid',
    }))

    setParticles(newParticles)
    setFloatingElements(newFloatingElements)
  }, [])

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animate particles
  const animateParticles = useCallback((timestamp: number) => {
    if (timestamp - lastTimeRef.current > 16) { // ~60fps
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.vx + 100) % 100,
        y: (particle.y + particle.vy + 100) % 100,
        z: (particle.z + particle.vz + 100) % 100,
        rotationX: particle.rotationX + particle.rotationSpeed,
        rotationY: particle.rotationY + particle.rotationSpeed * 0.5,
        opacity: 0.3 + Math.sin(timestamp * 0.001 + particle.id) * 0.3,
      })))

      setFloatingElements(prev => prev.map(element => ({
        ...element,
        rotationX: element.rotationX + 0.5,
        rotationY: element.rotationY + 0.8,
        rotationZ: element.rotationZ + 0.3,
        y: element.y + Math.sin(timestamp * 0.001 + element.id) * 0.02,
      })))

      lastTimeRef.current = timestamp
    }

    animationRef.current = requestAnimationFrame(animateParticles)
  }, [])

  useEffect(() => {
    if (isClient) {
      animationRef.current = requestAnimationFrame(animateParticles)
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }
  }, [isClient, animateParticles])

  const getFloatingElementStyles = (element: FloatingElement) => {
    const parallaxX = mousePosition.x * (10 + element.z * 0.1)
    const parallaxY = mousePosition.y * (10 + element.z * 0.1)
    
    return {
      left: `${element.x}%`,
      top: `${element.y}%`,
      transform: `
        translate3d(${parallaxX}px, ${parallaxY}px, ${element.z}px)
        rotateX(${element.rotationX}deg)
        rotateY(${element.rotationY}deg)
        rotateZ(${element.rotationZ}deg)
        scale(${element.scale})
      `,
      transformStyle: 'preserve-3d' as const,
    }
  }

  const renderFloatingElement = (element: FloatingElement) => {
    const baseClasses = "absolute transition-all duration-75 ease-out"
    
    switch (element.type) {
      case 'cube':
        return (
          <div
            key={element.id}
            className={`${baseClasses} w-8 h-8`}
            style={getFloatingElementStyles(element)}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30 backdrop-blur-sm rounded-lg shadow-2xl" />
          </div>
        )
      case 'sphere':
        return (
          <div
            key={element.id}
            className={`${baseClasses} w-6 h-6`}
            style={getFloatingElementStyles(element)}
          >
            <div className="w-full h-full bg-gradient-radial from-primary-500/30 to-transparent rounded-full shadow-2xl" />
          </div>
        )
      case 'pyramid':
        return (
          <div
            key={element.id}
            className={`${baseClasses} w-0 h-0`}
            style={getFloatingElementStyles(element)}
          >
            <div 
              className="border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-accent-500/20"
              style={{ filter: 'drop-shadow(0 0 10px rgba(227, 181, 71, 0.3))' }}
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden perspective-1000">
      {/* Enhanced 3D Background Effects */}
      <div className="absolute inset-0 overflow-hidden transform-3d">
        {/* Animated particle system */}
        {isClient && particles.map((particle) => {
          const parallaxX = mousePosition.x * (5 + particle.z * 0.05)
          const parallaxY = mousePosition.y * (5 + particle.z * 0.05)
          
          return (
            <div
              key={particle.id}
              className="absolute rounded-full transition-all duration-75 ease-out"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                opacity: particle.opacity,
                transform: `
                  translate3d(${parallaxX}px, ${parallaxY}px, ${particle.z}px)
                  rotateX(${particle.rotationX}deg)
                  rotateY(${particle.rotationY}deg)
                `,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
                filter: 'blur(0.5px)',
                transformStyle: 'preserve-3d',
              }}
            />
          )
        })}

        {/* Floating 3D geometric elements */}
        {isClient && floatingElements.map(renderFloatingElement)}

        {/* Large background orbs with enhanced 3D movement */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-primary-500/15 to-accent-500/15 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: '10%',
            top: '20%',
            transform: `
              translate3d(${mousePosition.x * 25}px, ${mousePosition.y * 25}px, 0px)
              rotateX(${mousePosition.y * 15}deg)
              rotateY(${mousePosition.x * 15}deg)
              scale(${1 + mousePosition.x * 0.1})
            `,
            transformStyle: 'preserve-3d',
            animation: 'float3d 8s ease-in-out infinite',
          }}
        />
        
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-accent-500/15 to-primary-400/15 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            right: '10%',
            bottom: '20%',
            transform: `
              translate3d(${mousePosition.x * -20}px, ${mousePosition.y * -20}px, 0px)
              rotateX(${mousePosition.y * -10}deg)
              rotateY(${mousePosition.x * -10}deg)
              scale(${1 - mousePosition.x * 0.05})
            `,
            transformStyle: 'preserve-3d',
            animation: 'float3d 10s ease-in-out infinite reverse',
            animationDelay: '2s',
          }}
        />

        {/* Animated geometric shapes with depth */}
        <div 
          className="absolute top-32 right-20 w-16 h-16 border-2 border-primary-500/30 backdrop-blur-sm rounded-lg transition-all duration-200 ease-out"
          style={{
            transform: `
              translate3d(${mousePosition.x * 8}px, ${mousePosition.y * 8}px, 20px)
              rotateX(${45 + mousePosition.y * 20}deg)
              rotateY(${45 + mousePosition.x * 20}deg)
              rotateZ(${mousePosition.x * 10}deg)
            `,
            transformStyle: 'preserve-3d',
            animation: 'tilt3d 6s ease-in-out infinite',
            boxShadow: '0 0 20px rgba(227, 181, 71, 0.2)',
          }}
        />
        
        <div 
          className="absolute bottom-40 left-32 w-12 h-12 bg-gradient-to-br from-accent-500/30 to-primary-500/30 rounded-full backdrop-blur-sm transition-all duration-200 ease-out"
          style={{
            transform: `
              translate3d(${mousePosition.x * -6}px, ${mousePosition.y * -6}px, 15px)
              rotateX(${mousePosition.y * 25}deg)
              rotateY(${mousePosition.x * 25}deg)
              scale(${1 + Math.sin(Date.now() * 0.002) * 0.2})
            `,
            transformStyle: 'preserve-3d',
            animation: 'bounce3d 4s ease-in-out infinite',
            boxShadow: '0 0 25px rgba(168, 145, 72, 0.4)',
          }}
        />

        {/* Additional depth layers */}
        <div 
          className="absolute top-1/2 left-20 w-8 h-8 border border-primary-500/40 backdrop-blur-sm transition-all duration-150 ease-out"
          style={{
            transform: `
              translate3d(${mousePosition.x * 12}px, ${mousePosition.y * 12}px, 30px)
              rotateX(${mousePosition.y * 30}deg)
              rotateY(${mousePosition.x * 30}deg)
            `,
            transformStyle: 'preserve-3d',
            animation: 'flip3d 8s ease-in-out infinite',
            animationDelay: '4s',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background: 'linear-gradient(45deg, rgba(227, 181, 71, 0.2), rgba(168, 145, 72, 0.2))',
          }}
        />
      </div>

      <div className="text-center max-w-6xl mx-auto relative z-10 transform-3d">
        <div 
          className={`transition-all duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            transform: `
              translateZ(50px)
              rotateX(${mousePosition.y * 2}deg)
              rotateY(${mousePosition.x * 2}deg)
            `,
            transformStyle: 'preserve-3d',
          }}
        >
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-500 to-primary-400 muscle-text leading-tight depth-hover"
            style={{
              transformStyle: 'preserve-3d',
              textShadow: '0 0 30px rgba(227, 181, 71, 0.5), 0 0 60px rgba(168, 145, 72, 0.3)',
            }}
          >
            THE LIFT CO
          </h1>

          <div className="space-y-4 mb-8 sm:mb-12 transform-3d">
            <p 
              className="transform hover:scale-105 transition-all duration-300 cursor-default muscle-text depth-hover"
              style={{
                transform: `translateZ(30px) rotateX(${mousePosition.y * 1}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              Creative Lifts. 💡
            </p>
            <p 
              className="transform hover:scale-105 transition-all duration-300 cursor-default muscle-text text-accent-400 depth-hover"
              style={{
                transform: `translateZ(40px) rotateX(${mousePosition.y * 1.5}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              Life Transformation. ✨
            </p>
          </div>

          {/* Enhanced Action Buttons with 3D effects */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 transform-3d"
            style={{
              transform: `translateZ(20px)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <a
              href="/programs"
              className="btn-primary px-8 py-4 text-lg muscle-text elite-glow hover:scale-105 transition-all duration-300 depth-hover"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 8px 32px rgba(227, 181, 71, 0.3), 0 0 40px rgba(227, 181, 71, 0.2)',
              }}
            >
              ELITE PROGRAMS
            </a>
            <a
              href="/contact"
              className="btn-outline px-8 py-4 text-lg muscle-text hover:scale-105 transition-all duration-300 depth-hover"
              style={{
                transformStyle: 'preserve-3d',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(227, 181, 71, 0.3)',
              }}
            >
              FREE CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
