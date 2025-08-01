'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

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

  // Different nav items based on current page
  const homeNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Training', href: '/services' },
    { name: 'Trainer', href: '/about#founder' },
    { name: 'Contact', href: '#contact' },
  ]

  const marketingNavItems = [
    { name: 'Overview', href: '/marketing' },
    { name: 'Brand Services', href: '/marketing#brand-services' },
    { name: 'Business Strategy', href: '/marketing#business-services' },
    { name: 'Portfolio', href: '/about#founder' },
    { name: 'Contact', href: '/#contact' },
  ]

  const navItems = pathname === '/marketing' ? marketingNavItems : homeNavItems

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor navigation on current page
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Handle page navigation
      window.location.href = href
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      id="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'nav-blur shadow-2xl border-b border-primary-500/20'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo with 3D effect */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.location.href = '/'}
              className="w-14 h-14 rounded-xl overflow-hidden transform hover:scale-110 transition-transform duration-300 border-2 border-primary-500/50 bg-elite-cream/10 backdrop-blur-sm luxury-glow depth-hover focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
              aria-label="The Lift Co - Go to homepage"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F08e7771950634f09bf5906b11a6d0d83?format=webp&width=800"
                alt="The Lift Co Logo"
                className="w-full h-full object-contain"
              />
            </button>
            <div className="hidden sm:block">
              <button
                className="text-2xl font-bold font-heading premium-text muscle-text focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded"
                onClick={() => window.location.href = '/'}
                aria-label="The Lift Co - Go to homepage"
              >
                THE LIFT CO
              </button>
              <p className="text-xs text-accent-400 font-bold uppercase tracking-wider">
                {pathname === '/marketing' ? 'Brand & Business' : 'Elite Training'}
              </p>
            </div>
          </div>

          {/* Page Toggle Buttons */}
          <div className="hidden lg:flex items-center space-x-2 mr-8">
            <button
              onClick={() => window.location.href = '/'}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${
                pathname !== '/marketing'
                  ? 'bg-primary-500 text-neutral-950 border border-primary-400/50'
                  : 'text-neutral-400 hover:text-primary-400'
              }`}
            >
              FITNESS
            </button>
            <button
              onClick={() => window.location.href = '/marketing'}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${
                pathname === '/marketing'
                  ? 'bg-primary-500 text-neutral-950 border border-primary-400/50'
                  : 'text-neutral-400 hover:text-primary-400'
              }`}
            >
              MARKETING
            </button>
          </div>

          {/* Desktop Navigation with 3D hover effects */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-neutral-300 hover:text-primary-400 font-bold transition-all duration-300 hover:scale-110 relative group uppercase tracking-wide depth-hover focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded px-2 py-1"
                role="menuitem"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
              </button>
            ))}
          </div>

          {/* CTA Button with 3D effect */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavigation('#contact')}
              className="btn-primary px-8 py-3 text-sm relative overflow-hidden group elite-glow focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-neutral-950"
              aria-label={pathname === '/marketing' ? 'Get a quote' : 'Book training now'}
            >
              <span className="relative z-10 muscle-text">
                {pathname === '/marketing' ? 'GET QUOTE' : 'BOOK NOW'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
            </button>
          </div>

          {/* Mobile Menu Button with 3D effect */}
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

        {/* Mobile Menu with 3D transition */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed top-full left-0 right-0 z-40 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          role="menu"
          aria-labelledby="mobile-menu-button"
        >
          <div className="py-6 space-y-4 luxury-card mx-4 depth-hover shadow-2xl">
            {/* Mobile Page Toggle */}
            <div className="px-6 flex space-x-2 mb-4">
              <button
                onClick={() => {
                  window.location.href = '/'
                  setIsMobileMenuOpen(false)
                }}
                className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${
                  pathname !== '/marketing'
                    ? 'bg-primary-500 text-neutral-950'
                    : 'text-neutral-400 border border-neutral-600'
                }`}
              >
                FITNESS
              </button>
              <button
                onClick={() => {
                  window.location.href = '/marketing'
                  setIsMobileMenuOpen(false)
                }}
                className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${
                  pathname === '/marketing'
                    ? 'bg-primary-500 text-neutral-950'
                    : 'text-neutral-400 border border-neutral-600'
                }`}
              >
                MARKETING
              </button>
            </div>

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  handleNavigation(item.href)
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-primary-400 hover:bg-neutral-800/50 transition-all duration-300 font-bold uppercase tracking-wide"
              >
                {item.name}
              </button>
            ))}
            <div className="px-6 pt-4">
              <button
                onClick={() => {
                  handleNavigation('#contact')
                  setIsMobileMenuOpen(false)
                }}
                className="btn-primary w-full text-center py-3 muscle-text"
              >
                {pathname === '/marketing' ? 'GET QUOTE' : 'BOOK NOW'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
