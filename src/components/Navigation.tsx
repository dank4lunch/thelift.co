'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Founder', href: '#founder' },
    { name: 'Contact', href: '#contact' },
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
          {/* Brand Text */}
          <div className="flex-shrink-0">
            <Link href="/" className="group relative">
              <span className="text-2xl md:text-3xl font-black font-heading bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent transform transition-all duration-500 group-hover:scale-110">
                The Lift Co
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </Link>
          </div>
          
          {/* Desktop Navigation with glass effects */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="group relative px-6 py-3 text-white font-medium transition-all duration-500 hover:scale-105"
                >
                  <span className="relative z-10 text-shadow-lg">{item.name}</span>

                  {/* Glass morphism background */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>

                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-cyan-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                  {/* Inner glow */}
                  <div className="absolute inset-[1px] bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              ))}
              
              {/* CTA Button with 3D effect */}
              <div className="ml-6">
                <button
                   onClick={() => handleNavClick('#contact')}
                   className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold px-8 py-3 rounded-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-x-12"
                   style={{
                     boxShadow: '0 10px 25px rgba(168,85,247,0.4)'
                   }}>
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
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
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="group relative block w-full text-left px-6 py-4 text-white font-medium rounded-2xl transition-all duration-500 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Hover background */}
                    <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4">
                  <button
                     onClick={() => handleNavClick('#contact')}
                     className="block w-full text-center bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold px-6 py-4 rounded-2xl transform transition-all duration-500 hover:scale-105">
                    Get Started
                  </button>
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
