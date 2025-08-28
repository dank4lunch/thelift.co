'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      id="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-xl shadow-2xl border-b border-primary-500/30'
          : 'bg-transparent'
      }`}
      style={{
        background: isScrolled ? 'linear-gradient(135deg, rgba(23, 23, 23, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)' : 'transparent'
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Brand Name */}
          <div className="flex items-center min-w-0 flex-1 sm:flex-none">
            <Link
              href="/"
              className="text-lg sm:text-xl md:text-2xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-500 to-primary-400 muscle-text focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-xl px-2 sm:px-3 py-2 hover:scale-105 transition-all duration-300 whitespace-nowrap"
              aria-label="The Lift Co - Go to homepage"
              style={{ 
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 4s ease infinite'
              }}
            >
              THE LIFT CO
            </Link>
            <div className="ml-1 sm:ml-2 hidden sm:block">
              <p className="text-xs text-accent-400 font-bold uppercase tracking-wider whitespace-nowrap">
                Elite Training
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {/* Removed original nav items and replaced with new ones */}
            <Link
              href="/fitness"
              className={`font-bold transition-all duration-300 hover:scale-110 relative group uppercase tracking-wide depth-hover focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded px-2 py-1 ${
                pathname === '/fitness' 
                  ? 'text-primary-400' 
                  : 'text-neutral-300 hover:text-primary-400'
              }`}
              role="menuitem"
              aria-label="Navigate to Fitness"
            >
              Fitness
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                pathname === '/fitness' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} aria-hidden="true"></span>
            </Link>
            <Link
              href="/brand"
              className={`font-bold transition-all duration-300 hover:scale-110 relative group uppercase tracking-wide depth-hover focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded px-2 py-1 ${
                pathname === '/brand' 
                  ? 'text-primary-400' 
                  : 'text-neutral-300 hover:text-primary-400'
              }`}
              role="menuitem"
              aria-label="Navigate to Brand"
            >
              Brand
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                pathname === '/brand' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} aria-hidden="true"></span>
            </Link>
            <Link
              href="/about"
              className={`font-bold transition-all duration-300 hover:scale-110 relative group uppercase tracking-wide depth-hover focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded px-2 py-1 ${
                pathname === '/about' 
                  ? 'text-primary-400' 
                  : 'text-neutral-300 hover:text-primary-400'
              }`}
              role="menuitem"
              aria-label="Navigate to About"
            >
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} aria-hidden="true"></span>
            </Link>
            <Link
              href="/contact"
              className={`font-bold transition-all duration-300 hover:scale-110 relative group uppercase tracking-wide depth-hover focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded px-2 py-1 ${
                pathname === '/contact' 
                  ? 'text-primary-400' 
                  : 'text-neutral-300 hover:text-primary-400'
              }`}
              role="menuitem"
              aria-label="Navigate to Contact"
            >
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} aria-hidden="true"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://forms.gle/8mz7dZXLcr47QSNG8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 lg:px-8 py-3 text-sm relative overflow-hidden group elite-glow focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-neutral-950 whitespace-nowrap"
              aria-label="Book training now"
            >
              <span className="relative z-10 muscle-text">BOOK NOW</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center border border-primary-500/30 depth-hover focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-neutral-950"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-neutral-950 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-neutral-950 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-neutral-950 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-x-0 top-[88px] z-40 transition-all duration-300 transform ${
            isMobileMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4'
          }`}
          role="menu"
          aria-labelledby="mobile-menu-button"
        >
          <div className="bg-neutral-900/95 backdrop-blur-lg border border-primary-500/20 rounded-lg mx-4 my-2 shadow-2xl overflow-hidden">
            <div className="py-2">
              {/* Updated mobile navigation links */}
              <Link
                href="/fitness"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-6 py-4 transition-all duration-300 font-bold uppercase tracking-wide border-b border-neutral-800/30 last:border-b-0 ${
                  pathname === '/fitness'
                    ? 'text-primary-400 bg-neutral-800/50'
                    : 'text-neutral-300 hover:text-primary-400 hover:bg-neutral-800/50'
                }`}
                style={{ animationDelay: `0.0s` }}
              >
                💪 Fitness Training
              </Link>
              <Link
                href="/brand"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-6 py-4 transition-all duration-300 font-bold uppercase tracking-wide border-b border-neutral-800/30 last:border-b-0 ${
                  pathname === '/brand'
                    ? 'text-primary-400 bg-neutral-800/50'
                    : 'text-neutral-300 hover:text-primary-400 hover:bg-neutral-800/50'
                }`}
                style={{ animationDelay: `0.1s` }}
              >
                🎯 Brand Development
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-6 py-4 transition-all duration-300 font-bold uppercase tracking-wide border-b border-neutral-800/30 last:border-b-0 ${
                  pathname === '/about'
                    ? 'text-primary-400 bg-neutral-800/50'
                    : 'text-neutral-300 hover:text-primary-400 hover:bg-neutral-800/50'
                }`}
                style={{ animationDelay: `0.2s` }}
              >
                ✨ About Tshiamo
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-6 py-4 transition-all duration-300 font-bold uppercase tracking-wide border-b border-neutral-800/30 last:border-b-0 ${
                  pathname === '/contact'
                    ? 'text-primary-400 bg-neutral-800/50'
                    : 'text-neutral-300 hover:text-primary-400 hover:bg-neutral-800/50'
                }`}
                style={{ animationDelay: `0.3s` }}
              >
                📞 Get In Touch
              </Link>
            </div>

            <div className="p-4 border-t border-neutral-700/50">
              <a
                href="https://forms.gle/8mz7dZXLcr47QSNG8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-neutral-950 font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 muscle-text block text-center"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}