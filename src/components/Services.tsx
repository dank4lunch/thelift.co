'use client'

import { useState } from 'react'
import Booking from './Booking'

export default function Services() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<any>(null)

  const specializations = [
    { name: "Bootcamp", icon: "🏃‍♂️" },
    { name: "Boxing", icon: "🥊" },
    { name: "Exercise Science", icon: "🧬" },
    { name: "HIIT", icon: "⚡" },
    { name: "Personal Training", icon: "💪" }
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
      price: "FREE",
      duration_text: "15 minutes",
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
      price: "R624",
      duration_text: "per package",
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
      price: "R1,270",
      duration_text: "per package",
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
      price: "R2,160",
      perSession: "R270 per session",
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
          <h2 className="text-5xl md:text-7xl font-bold font-heading premium-text mb-8 muscle-text animate-fade-in">
            TRANSFORM YOUR BODY
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Professional personal training with Tshiamo Sookane. Located in Sandton CBD, Gauteng. 
            Certified trainer with proven results.
          </p>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary-400 mb-8 muscle-text">Specialized In</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specializations.map((spec, index) => (
              <div key={index} className="luxury-card px-6 py-4 depth-hover flex items-center space-x-3">
                <span className="text-2xl">{spec.icon}</span>
                <span className="text-neutral-300 font-medium">{spec.name}</span>
                <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-neutral-950" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Packages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary-400 mb-12 muscle-text">Choose Your Package</h3>
          <div className="grid lg:grid-cols-3 gap-8">
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
                <div className="h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={index === 0 ? "https://images.pexels.com/photos/6975559/pexels-photo-6975559.jpeg" : index === 1 ? "https://images.pexels.com/photos/6740330/pexels-photo-6740330.jpeg" : "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg"}
                    alt={package_.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold font-heading mb-3 premium-text muscle-text">
                      {package_.title}
                    </h4>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-3xl font-bold premium-text muscle-text">{package_.price}</span>
                      <span className="text-neutral-400 font-medium">{package_.duration_text}</span>
                    </div>
                  </div>

                  <p className="text-neutral-300 mb-6 leading-relaxed text-center">
                    {package_.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {package_.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-neutral-300 text-sm">
                        <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-2 h-2 text-neutral-950" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => index > 0 ? handleBooking(index) : window.location.href = '#contact'}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-neutral-950 transition-all duration-300 bg-gradient-to-r ${package_.gradient} hover:shadow-2xl hover:scale-105 transform border border-primary-500/30 muscle-text text-lg depth-hover`}
                  >
                    {index === 0 ? 'BOOK FREE CONSULTATION' : 'BUY NOW'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Options */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary-400 mb-12 muscle-text">Custom Monthly Plans</h3>
          <div className="max-w-2xl mx-auto">
            {monthlyOptions.map((option, index) => (
              <div key={index} className="luxury-card overflow-hidden depth-hover">
                <div className="md:flex">
                  <div className="md:w-1/2 h-64 md:h-auto">
                    <img
                      src="https://images.pexels.com/photos/16513597/pexels-photo-16513597.jpeg"
                      alt={option.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h4 className="text-2xl font-bold premium-text muscle-text mb-4">{option.title}</h4>
                    <p className="text-neutral-300 mb-6">{option.description}</p>
                    
                    <div className="space-y-2 mb-6">
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
                      <div className="text-4xl font-bold premium-text muscle-text">{option.price}</div>
                      <div className="text-neutral-400 text-sm">total package</div>
                    </div>

                    <button className="w-full py-3 px-6 rounded-lg font-bold text-neutral-950 bg-gradient-to-r from-accent-500 to-primary-500 hover:shadow-xl hover:scale-105 transform transition-all duration-300 muscle-text">
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
          <div className="luxury-card p-12 relative overflow-hidden luxury-glow depth-hover max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 premium-text muscle-text">Ready to Transform?</h3>
              <p className="text-lg text-neutral-300 mb-4 font-medium">
                <strong>Tshiamo Sookane</strong> - Certified Personal Trainer
              </p>
              <p className="text-neutral-400 mb-8">
                📍 Sandton CBD, Gauteng | 📞 0635432439 | ✉️ Tshiamokl@gmail.com
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn-primary text-lg px-10 py-4 muscle-text">
                  BOOK CONSULTATION
                </a>
                <a href="https://wa.me/27635432439" className="btn-secondary text-lg px-10 py-4 muscle-text">
                  📱 WHATSAPP DIRECT
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
