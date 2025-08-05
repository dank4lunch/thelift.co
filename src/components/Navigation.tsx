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
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Training', href: '/services' },
    { name: 'Trainer', href: '/about#founder' },
    { name: 'Contact', href: '/home#contact' },
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
          {/* Brand Name Only */}
          <div className="flex items-center">
            <button
              className="text-xl sm:text-2xl font-bold font-heading premium-text muscle-text focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded px-2 py-1"
              onClick={() => window.location.href = '/'}
              aria-label="The Lift Co - Go to homepage"
            >
              THE LIFT CO
            </button>
            <div className="ml-2">
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
          className={`md:hidden fixed inset-x-0 top-[88px] z-40 transition-all duration-300 transform ${
            isMobileMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4'
          }`}
          role="menu"
          aria-labelledby="mobile-menu-button"
        >
          <div className="bg-neutral-900/95 backdrop-blur-lg border border-primary-500/20 rounded-lg mx-4 my-2 shadow-2xl overflow-hidden">
            {/* Mobile Page Toggle */}
            <div className="p-4 border-b border-neutral-700/50">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    window.location.href = '/'
                    setIsMobileMenuOpen(false)
                  }}
                  className={`py-3 px-4 rounded-lg font-bold text-sm transition-all duration-300 ${
                    pathname !== '/marketing'
                      ? 'bg-primary-500 text-neutral-950'
                      : 'text-neutral-400 border border-neutral-600 hover:border-primary-500/50'
                  }`}
                >
                  FITNESS
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/marketing'
                    setIsMobileMenuOpen(false)
                  }}
                  className={`py-3 px-4 rounded-lg font-bold text-sm transition-all duration-300 ${
                    pathname === '/marketing'
                      ? 'bg-primary-500 text-neutral-950'
                      : 'text-neutral-400 border border-neutral-600 hover:border-primary-500/50'
                  }`}
                >
                  MARKETING
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="py-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavigation(item.href)
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-6 py-4 text-neutral-300 hover:text-primary-400 hover:bg-neutral-800/50 transition-all duration-300 font-bold uppercase tracking-wide border-b border-neutral-800/30 last:border-b-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="p-4 border-t border-neutral-700/50">
              <button
                onClick={() => {
                  handleNavigation('#contact')
                  setIsMobileMenuOpen(false)
                }}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-neutral-950 font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 muscle-text"
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
