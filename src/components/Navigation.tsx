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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open')
    }
  }, [isMobileMenuOpen])

  // Different nav items based on current page
  const homeNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Nutrition', href: '/nutrition' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Contact', href: '/contact' },
  ]

  const marketingNavItems = [
    { name: 'Overview', href: '#marketing-home' },
    { name: 'Brand Services', href: '#brand-services' },
    { name: 'Business Strategy', href: '#business-services' },
    { name: 'Portfolio', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ]

  const navItems = pathname === '/marketing' ? marketingNavItems : homeNavItems

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor navigation on current page
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Navigate to different page
      window.location.href = href
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'nav-blur shadow-2xl border-b border-primary-500/20'
            : 'bg-transparent'
        }`}
      >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo with 3D effect */}
          <div className="flex items-center space-x-4">
            <div
              onClick={() => window.location.href = '/'}
              className="w-14 h-14 rounded-xl overflow-hidden transform hover:scale-110 transition-transform duration-300 border-2 border-primary-500/50 bg-elite-cream/10 backdrop-blur-sm luxury-glow depth-hover cursor-pointer"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F08e7771950634f09bf5906b11a6d0d83?format=webp&width=800"
                alt="The Lift Co Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold font-heading premium-text muscle-text cursor-pointer" onClick={() => window.location.href = '/'}>
                THE LIFT CO
              </h1>
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
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-neutral-300 hover:text-primary-400 font-bold transition-all duration-300 hover:scale-110 relative group uppercase tracking-wide depth-hover"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button with 3D effect */}
          <div className="hidden md:block">
            <button 
              onClick={() => handleNavigation('#contact')}
              className="btn-primary px-8 py-3 text-sm relative overflow-hidden group elite-glow"
            >
              <span className="relative z-10 muscle-text">
                {pathname === '/marketing' ? 'GET QUOTE' : 'BOOK NOW'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center border border-primary-500/30 relative z-50"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-neutral-950 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
              <span className={`bg-neutral-950 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-neutral-950 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-20 left-0 right-0 bg-neutral-900/98 backdrop-blur-lg border-b border-neutral-800/50 transition-all duration-300 z-40 shadow-2xl ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="container-custom py-6">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left px-6 py-4 text-neutral-300 hover:text-primary-400 hover:bg-neutral-800/50 active:bg-neutral-700/50 transition-all duration-200 font-bold uppercase tracking-wide rounded-lg min-h-[48px] flex items-center"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-neutral-700 mt-4">
                <button
                  onClick={() => {
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfdujG_QCb1auGWGglp6o37N8TBJaed7Dn0EJ785iM4oq9Mzg/viewform?usp=send_form', '_blank')
                    setIsMobileMenuOpen(false)
                  }}
                  className="btn-primary w-full text-center py-4 muscle-text text-base min-h-[48px]"
                >
                  BOOK FREE CONSULTATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
