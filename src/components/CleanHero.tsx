'use client'

import { useState } from 'react'
import { MessageCircle, Phone, Mail, Instagram, Calendar, Star, MapPin, Award } from 'lucide-react'

export default function CleanHero() {
  const [isVisible, setIsVisible] = useState(true)

  const handleBookSession = () => {
    const message = encodeURIComponent("Hi Tshiamo! I'd like to book a training session. Please let me know your availability.")
    window.open(`https://wa.me/27635432439?text=${message}`, '_blank')
  }

  const handleConsultation = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfdujG_QCb1auGWGglp6o37N8TBJaed7Dn0EJ785iM4oq9Mzg/viewform?usp=send_form', '_blank')
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(227,181,71,0.1)_50%,transparent_51%)] bg-[length:60px_60px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
            
            {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-8">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-medium text-primary-400">HFPA Certified Trainer</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block text-white font-heading">Built to</span>
                  <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent font-heading">
                    Boost
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-300 leading-relaxed font-light max-w-2xl">
                  Transform your body with elite personal training in 
                  <span className="text-primary-400 font-semibold"> Sandton CBD</span>
                </p>
              </div>

              {/* Subtext */}
              <div className="space-y-4">
                <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                  Get a <span className="text-primary-400 font-semibold">free 15-minute consultation</span> and discover how science-based training can unlock your potential.
                </p>
                
                {/* Location & Contact */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary-400" />
                    <span>Sandton CBD, Gauteng</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-neutral-600 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary-400" />
                    <span>063 543 2439</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleBookSession}
                  className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 flex items-center justify-center gap-3 min-w-[250px]"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Session
                </button>
                
                <button
                  onClick={handleConsultation}
                  className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]"
                >
                  Free Consultation
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm font-medium text-neutral-300">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>100+ Clients Transformed</span>
                </div>
              </div>

              {/* Contact Icons */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://wa.me/27635432439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://instagram.com/theliftco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full flex items-center justify-center transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:tshiamokl@gmail.com"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary-500/10 to-accent-500/10 backdrop-blur-sm border border-primary-500/20">
                
                {/* Trainer Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F638bb35e274840ce81c9d7bdb01f9214%2Ffadd090fbad343b0a01ea52fc1729fed?format=webp&width=800"
                    alt="Tshiamo Sookane - Personal Trainer"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Trainer Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-1">Tshiamo Sookane</h3>
                    <p className="text-primary-400 font-medium mb-2">Elite Performance Coach</p>
                    <p className="text-neutral-300 text-sm">
                      HIIT • Boxing • Strength Training • Sports Conditioning
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"></div>
              </div>

              {/* Floating Stats - Desktop Only */}
              <div className="hidden lg:block">
                <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-400">5+</p>
                    <p className="text-xs text-neutral-300 whitespace-nowrap">Years Experience</p>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-400">100+</p>
                    <p className="text-xs text-neutral-300 whitespace-nowrap">Happy Clients</p>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-12 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-400">FREE</p>
                    <p className="text-xs text-neutral-300">Consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats - Mobile */}
          <div className="lg:hidden mt-12 grid grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
              <p className="text-xl font-bold text-primary-400">5+</p>
              <p className="text-xs text-neutral-400">Years</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
              <p className="text-xl font-bold text-primary-400">100+</p>
              <p className="text-xs text-neutral-400">Clients</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
              <p className="text-xl font-bold text-green-400">FREE</p>
              <p className="text-xs text-neutral-400">Consult</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
