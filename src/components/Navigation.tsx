'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Founder', href: '/#founder' },
    { name: 'Contact', href: '/#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo with 3D effect */}
          <div className="flex-shrink-0">
            <Link href="/" className="group relative">
              <div className="relative transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-x-12"
                   style={{
                     filter: 'drop-shadow(0 10px 20px rgba(168,85,247,0.3))',
                     transform: 'perspective(1000px)'
                   }}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa11fc95e48c6423b88726372c48e8f21%2F7f1cb837b11f4c358d061a03cfc8826f?format=webp&width=800"
                  alt="The Lift Co - Built to Boost"
                  className="h-12 w-auto object-contain brightness-0 invert transform transition-all duration-500 group-hover:brightness-110"
                  style={{
                    filter: 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(255,255,255,0.5))'
                  }}
                />
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg scale-110"></div>

                {/* 3D shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-cyan-600/30 rounded-lg opacity-0 group-hover:opacity-60 transition-all duration-500 blur-md transform translate-y-1 translate-x-1"></div>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float" style={{ top: '10%', left: '20%', animationDelay: '0s' }}></div>
                  <div className="absolute w-1 h-1 bg-pink-400 rounded-full animate-float" style={{ top: '80%', right: '15%', animationDelay: '0.5s' }}></div>
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float" style={{ top: '50%', right: '30%', animationDelay: '1s' }}></div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation with glass effects */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative px-6 py-3 text-white font-medium transition-all duration-500 hover:scale-105"
                >
                  <span className="relative z-10 text-shadow-lg">{item.name}</span>
                  
                  {/* Glass morphism background */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                  
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-cyan-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  {/* Inner glow */}
                  <div className="absolute inset-[1px] bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              ))}
              
              {/* CTA Button with 3D effect */}
              <div className="ml-6">
                <a href="#contact" 
                   className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold px-8 py-3 rounded-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-x-12"
                   style={{
                     boxShadow: '0 10px 25px rgba(168,85,247,0.4)'
                   }}>
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button with glass effect */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative p-3 text-white hover:scale-110 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with enhanced glass morphism */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4">
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="px-6 pt-4 pb-6 space-y-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative block px-6 py-4 text-white font-medium rounded-2xl transition-all duration-500 hover:scale-105"
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4">
                  <a href="#contact" 
                     className="block text-center bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold px-6 py-4 rounded-2xl transform transition-all duration-500 hover:scale-105"
                     onClick={() => setIsOpen(false)}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Background glow effect */}
      {scrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-pink-900/10 to-cyan-900/10 blur-3xl"></div>
      )}
    </nav>
  )
}
