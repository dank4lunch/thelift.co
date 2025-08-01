'use client'

import { useState } from 'react'
import Booking from './Booking'

export default function Services() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<any>(null)

  const specializations = [
    { name: "Bootcamp", icon: "🏃🏽‍♂️" },
    { name: "Boxing", icon: "🥊🏽" },
    { name: "Exercise Science", icon: "🧬" },
    { name: "HIIT", icon: "⚡️" },
    { name: "Personal Training", icon: "💪🏽" },
    { name: "Sports Coaching", icon: "🏆" },
    { name: "Conditioning", icon: "🔥" },
    { name: "Corporate Wellness", icon: "🏢" },
    { name: "Event Training", icon: "🎯" }
  ]

  const trainingPackages = [
    {
      title: "Free Consultation",
      description: "The best way to kick off your Personal Training journey. Get to know your trainer and discuss your goals.",
      duration: "15 min",
      features: [
        "Training goals assessment",
        "Health concerns discussion", 
        "Training preferences review",
        "Available packages overview"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2Fe034fe9d3c0245ecbece44ae5fe79c12?format=webp&width=800",
      price: "Complimentary",
      duration_text: "Discovery Session",
      popular: false,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "PT Intro Pack",
      description: "Perfect starting point for new clients. Includes consultation plus training sessions to get you going.",
      features: [
        "1 × in-depth consultation",
        "2 × 45 min training sessions",
        "Personalized workout plan",
        "Nutrition guidance basics"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F3709fa01aabe413285bfd44dae01298c?format=webp&width=800",
      price: "Starter Package",
      duration_text: "Foundation Level",
      popular: true,
      gradient: "from-primary-500 to-accent-500"
    },
    {
      title: "PT Six Pack",
      description: "Extended package for serious commitment. Multiple sessions with ongoing support and progress tracking.",
      features: [
        "1 × in-depth consultation", 
        "5 × 45 min training sessions",
        "Progress assessments",
        "Nutrition plan development",
        "24/7 support access"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F8f93a6c749ca48c18e700f02a6f500ec?format=webp&width=800",
      price: "Elite Package",
      duration_text: "Premium Level",
      popular: false,
      gradient: "from-accent-500 to-primary-600",
      badge: "Best Value"
    }
  ]

  const monthlyOptions = [
    {
      title: "One-on-One Monthly",
      description: "Custom frequency and duration based on your goals. Work directly with your trainer to design the perfect program.",
      sessions: "8 sessions over 1 month",
      duration: "60 min per session",
      price: "Executive Monthly",
      perSession: "VIP Experience",
      image: "https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F2122d2ab28f143c8817c70bb170ae240?format=webp&width=800"
    }
  ]

  const handleBooking = (serviceIndex: number) => {
    setSelectedPlan(serviceIndex)
    setSelectedService(trainingPackages[serviceIndex])
    setIsBookingOpen(true)
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden perspective-container">
      {/* 3D Background elements */}
      <div className="absolute inset-0 transform-3d">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl floating-orb" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl floating-orb" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 depth-hover">
            <span className="elite-badge">
              ELITE TRAINING PROGRAMS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading premium-text mb-6 sm:mb-8 muscle-text animate-fade-in">
            TRANSFORM YOUR BODY
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
            Where transformation meets obsession. Tshiamo Sookane doesn't just train bodies—he engineers
            breakthroughs. Based in Sandton CBD, delivering results that rewrite your story.
          </p>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-primary-400 mb-6 sm:mb-8 muscle-text">Specialized In</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4 sm:px-0">
            {specializations.map((spec, index) => (
              <div key={index} className="luxury-card px-3 sm:px-6 py-3 sm:py-4 depth-hover flex items-center space-x-2 sm:space-x-3">
                <span className="text-lg">{spec.icon}</span>
                <span className="text-neutral-300 font-medium text-sm sm:text-base">{spec.name}</span>
                <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-neutral-950" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Packages */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-primary-400 mb-8 sm:mb-12 muscle-text">Choose Your Package</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {trainingPackages.map((package_, index) => (
              <div 
                key={index} 
                className={`relative luxury-card overflow-hidden transition-all duration-500 depth-hover group ${
                  package_.popular ? 'ring-2 ring-primary-500/60 shadow-2xl luxury-glow' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {package_.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 depth-hover z-10">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 px-6 py-2 rounded-full text-sm font-bold muscle-text shadow-lg border border-primary-400/50">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {package_.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {package_.badge}
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="h-40 sm:h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={index === 0 ? "https://cdn.builder.io/api/v1/image/assets%2Fefc7a121aea64604b51eafdf7eebedf8%2Fdd9ccd33cc374fbbad804c478500cef4" : index === 1 ? "https://images.pexels.com/photos/6740330/pexels-photo-6740330.jpeg" : "https://cdn.builder.io/api/v1/image/assets%2Fefc7a121aea64604b51eafdf7eebedf8%2F78f4dacae3c348fa974923ed0e15de8b"}
                    alt={package_.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="text-center mb-6">
                    <h4 className="text-xl sm:text-2xl font-bold font-heading mb-2 sm:mb-3 premium-text muscle-text">
                      {package_.title}
                    </h4>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-2xl sm:text-3xl font-bold premium-text muscle-text">{package_.price}</span>
                      <span className="text-neutral-400 font-medium text-sm sm:text-base">{package_.duration_text}</span>
                    </div>
                  </div>

                  <p className="text-neutral-300 mb-4 sm:mb-6 leading-relaxed text-center text-sm sm:text-base">
                    {package_.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {package_.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-neutral-300 text-xs sm:text-sm">
                        <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                          <svg className="w-1.5 h-1.5 text-neutral-950" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => index > 0 ? handleBooking(index) : window.location.href = '/#contact'}
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-neutral-950 transition-all duration-300 bg-gradient-to-r ${package_.gradient} hover:shadow-2xl hover:scale-105 transform border border-primary-500/30 muscle-text text-sm sm:text-lg depth-hover`}
                  >
                    {index === 0 ? 'BOOK DISCOVERY SESSION' : 'RESERVE SPOT'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Options */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-primary-400 mb-8 sm:mb-12 muscle-text px-4 sm:px-0">Custom Monthly Plans</h3>
          <div className="max-w-2xl mx-auto px-4 sm:px-0">
            {monthlyOptions.map((option, index) => (
              <div key={index} className="luxury-card overflow-hidden depth-hover">
                <div className="sm:flex">
                  <div className="sm:w-1/2 h-48 sm:h-64 md:h-auto">
                    <img
                      src="https://images.pexels.com/photos/16513597/pexels-photo-16513597.jpeg"
                      alt={option.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="sm:w-1/2 p-4 sm:p-6 lg:p-8">
                    <h4 className="text-xl sm:text-2xl font-bold premium-text muscle-text mb-3 sm:mb-4">{option.title}</h4>
                    <p className="text-neutral-300 mb-4 sm:mb-6 text-sm sm:text-base">{option.description}</p>
                    
                    <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Sessions:</span>
                        <span className="text-primary-400 font-medium">{option.sessions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Duration:</span>
                        <span className="text-primary-400 font-medium">{option.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Per Session:</span>
                        <span className="text-accent-400 font-medium">{option.perSession}</span>
                      </div>
                    </div>

                    <div className="text-center mb-6">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold premium-text muscle-text">{option.price}</div>
                      <div className="text-neutral-400 text-xs sm:text-sm">membership tier</div>
                    </div>

                    <button className="w-full py-3 px-4 sm:px-6 rounded-lg font-bold text-neutral-950 bg-gradient-to-r from-accent-500 to-primary-500 hover:shadow-xl hover:scale-105 transform transition-all duration-300 muscle-text text-sm sm:text-base">
                      CUSTOMIZE PLAN
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trainer Info */}
        <div className="text-center">
          <div className="luxury-card p-6 sm:p-8 lg:p-12 relative overflow-hidden luxury-glow depth-hover max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 premium-text muscle-text">Your Transformation Architect</h3>
              <p className="text-base sm:text-lg text-neutral-300 mb-3 sm:mb-4 font-medium">
                <strong>Tshiamo Sookane</strong> - Elite Performance Engineer & Mindset Catalyst
              </p>
              <p className="text-neutral-400 mb-4 sm:mb-6 text-sm sm:text-base">
                <span className="inline-block text-sm mr-1">📍</span> Sandton CBD, Gauteng | <span className="inline-block text-sm mr-1">📞</span> 0635432439 | <span className="inline-block text-sm mr-1">✉️</span> Tshiamokl@gmail.com
              </p>
              <p className="text-xs sm:text-sm text-primary-300 italic mb-6 sm:mb-8">
                "I don't build bodies. I build legends. Let's make you unstoppable." —TS
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="/#contact" className="btn-primary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 muscle-text">
                  BOOK CONSULTATION
                </a>
                <a href="https://wa.me/27635432439" className="btn-secondary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 muscle-text">
                  <span className="inline-block text-sm mr-2">📱</span> WHATSAPP DIRECT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Booking
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        service={selectedService}
      />
    </section>
  )
}
