
'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Environment, PerspectiveCamera } from '@react-three/drei'
import Link from 'next/link'
import * as THREE from 'three'

// 3D Floating Dumbbells Component
function FloatingDumbbell({ position, rotation, scale = 1 }: { position: [number, number, number], rotation: [number, number, number], scale?: number }) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh position={position} rotation={rotation} scale={scale}>
        <cylinderGeometry args={[0.3, 0.3, 2, 8]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.2} />
        {/* Dumbbell ends */}
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, -1.2, 0]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
        </mesh>
      </mesh>
    </Float>
  )
}

// 3D Text Component
function Floating3DText() {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        position={[-2, 0, 0]}
        rotation={[0, 0.2, 0]}
      >
        LIFT
        <meshStandardMaterial color="#ef4444" metalness={0.3} roughness={0.4} />
      </Text3D>
    </Float>
  )
}

// Particle System Component
function ParticleSystem() {
  const particles = Array.from({ length: 50 }, (_, i) => (
    <Float key={i} speed={Math.random() * 2 + 1} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh position={[
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20
      ]}>
        <sphereGeometry args={[0.02, 4, 4]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.2} />
      </mesh>
    </Float>
  ))

  return <>{particles}</>
}

// 3D Scene Component
function Scene3D() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={0.5} />
      
      <Environment preset="night" />
      
      {/* Floating Dumbbells */}
      <FloatingDumbbell position={[-4, 2, -3]} rotation={[0.5, 0.3, 0]} scale={0.8} />
      <FloatingDumbbell position={[5, -1, -2]} rotation={[-0.3, 0.8, 0.2]} scale={0.6} />
      <FloatingDumbbell position={[2, 3, -4]} rotation={[0.2, -0.5, 0.1]} scale={0.7} />
      
      {/* 3D Text */}
      <Floating3DText />
      
      {/* Particle System */}
      <ParticleSystem />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={2 * Math.PI / 3}
      />
    </Canvas>
  )
}

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      rotateX: 90,
      transition: {
        duration: 0.5
      }
    }
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        delay: 1
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      y: 0
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-transparent to-neutral-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,191,36,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 flex items-center justify-center min-h-screen px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading with 3D Text Animation */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight"
              style={{
                textShadow: "0 0 30px rgba(239, 68, 68, 0.5), 0 0 60px rgba(239, 68, 68, 0.3)",
                transform: "perspective(1000px) rotateX(5deg)"
              }}
            >
              THE{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-600"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                LIFT
              </motion.span>{" "}
              CO
            </motion.h1>
          </motion.div>

          {/* Animated Tagline */}
          <motion.div 
            variants={itemVariants} 
            className="mb-12 h-20 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentText}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400 tracking-wide"
                style={{
                  textShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
                  transformOrigin: "center bottom"
                }}
              >
                {heroTexts[currentText]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-neutral-300 mb-16 max-w-4xl mx-auto leading-relaxed"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            Elite personal training meets strategic business solutions. 
            <br className="hidden md:block" />
            Transform your body, elevate your brand, boost your business.
          </motion.p>

          {/* Service Selection */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-neutral-400 mb-8 font-semibold">
              Choose Your Path to Excellence
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Fitness Path */}
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="group"
              >
                <Link 
                  href="/fitness"
                  className="block p-8 bg-gradient-to-br from-red-900/50 to-red-800/50 border-2 border-red-500/30 rounded-2xl hover:border-red-400 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="text-6xl mb-4 group-hover:animate-pulse">💪</div>
                  <h3 className="text-2xl font-black text-red-400 mb-4 muscle-text">
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
              </motion.div>

              {/* Marketing Path */}
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                transition={{ delay: 0.1 }}
                className="group"
              >
                <Link 
                  href="/brand"
                  className="block p-8 bg-gradient-to-br from-yellow-900/50 to-yellow-800/50 border-2 border-yellow-500/30 rounded-2xl hover:border-yellow-400 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="text-6xl mb-4 group-hover:animate-pulse">🚀</div>
                  <h3 className="text-2xl font-black text-yellow-400 mb-4 muscle-text">
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
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <a
                href="https://forms.gle/8mz7dZXLcr47QSNG8"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-full overflow-hidden shadow-2xl transform-gpu"
              >
                <span className="relative z-10 flex items-center gap-2">
                  📞 Free Consultation
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                />
              </a>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: 0.1 }}
            >
              <Link 
                href="/services"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-primary-400 rounded-full hover:bg-primary-400 hover:text-neutral-900 transition-all duration-300 shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  📋 View All Services
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{
                  scaleY: [1, 0.5, 1],
                  opacity: [1, 0.3, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
