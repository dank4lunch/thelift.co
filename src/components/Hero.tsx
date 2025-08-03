'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Calendar, Star, MapPin, Award } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent("Hi Tshiamo! I'd like to book a free 15-minute consultation for personal training.")
    window.open(`https://wa.me/27635432439?text=${message}`, '_blank')
  }

  const handleEmailBooking = () => {
    window.location.href = 'mailto:tshiamokl@gmail.com?subject=Free Consultation Booking&body=Hi Tshiamo, I would like to book a free 15-minute consultation for personal training.'
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 pt-16 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(227,181,71,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(227,181,71,0.05)_50%,transparent_51%)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-400">HFPA Certified Trainer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-6 leading-[1.1]">
              <span className="text-white">Crush Your</span>{' '}
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent block sm:inline">
                Fitness Goals
              </span>
              <span className="text-white block">with a Personal Trainer in</span>{' '}
              <span className="text-primary-500 font-black">Sandton</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-300 mb-8 leading-relaxed font-light">
              Get a <span className="text-primary-400 font-semibold">free 15-minute consultation</span>.
              <br />
              Training packages available now.
            </p>

            {/* Location Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <MapPin className="w-5 h-5 text-primary-400" />
              <span className="text-neutral-400 font-medium">Based in Sandton CBD, Gauteng</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={handleWhatsAppBooking}
                className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 flex items-center justify-center gap-3 min-w-[280px]"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Book Free Consultation
              </button>
              
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfdujG_QCb1auGWGglp6o37N8TBJaed7Dn0EJ785iM4oq9Mzg/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 min-w-[200px]"
              >
                <span>👤</span>
                Personal Details
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 font-medium">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available Now</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>100+ Clients Transformed</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary-500/10 to-accent-500/10 backdrop-blur-sm border border-primary-500/20">
              
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                {/* Placeholder - Replace with actual image */}
                <div className="text-center text-neutral-400 p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-primary-500/20 rounded-full flex items-center justify-center border-4 border-primary-500/30">
                    <span className="text-5xl">💪</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-400 mb-2">Tshiamo Sookane</h3>
                  <p className="text-lg text-neutral-300 mb-1">Personal Trainer</p>
                  <p className="text-sm text-neutral-500 mb-4">Sandton CBD</p>
                  <div className="text-xs text-neutral-600 bg-neutral-800/50 rounded-lg p-3 border border-neutral-700">
                    <p className="font-medium text-primary-400 mb-1">📸 Image Placeholder</p>
                    <p>Replace with high-quality</p>
                    <p>professional photo of Tshiamo</p>
                    <p className="mt-2 text-primary-500">Recommended: 400x500px</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Glow Effects */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -left-4 sm:-left-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-float">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-400">5+</p>
                <p className="text-xs text-neutral-300 whitespace-nowrap">Years Experience</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-400">100+</p>
                <p className="text-xs text-neutral-300 whitespace-nowrap">Happy Clients</p>
              </div>
            </div>

            <div className="absolute top-1/2 -left-6 sm:-left-10 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <p className="text-lg font-bold text-primary-400">FREE</p>
                <p className="text-xs text-neutral-300">Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
