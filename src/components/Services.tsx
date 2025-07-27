'use client'

import { useState } from 'react'
import Booking from './Booking'

export default function Services() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<any>(null)

  const services = [
    {
      title: "Elite Personal Training",
      description: "Serious strength training with certified expertise. Transform your physique with proven methods that deliver results.",
      features: ["Certified Elite Training", "Custom Workout Plans", "Strength & Conditioning", "Body Transformation", "Progress Tracking", "Nutritional Guidance"],
      icon: "💪",
      price: "R300",
      duration: "per session",
      popular: true,
      gradient: "from-primary-500 to-accent-500",
      intensity: "HIGH INTENSITY"
    },
    {
      title: "Brand Dominance",
      description: "Build a brand that commands respect. Strategic development and creative direction that sets you apart from the competition.",
      features: ["Brand Strategy", "Visual Identity", "Market Dominance", "Creative Direction", "Brand Positioning", "Competitive Edge"],
      icon: "🎯",
      price: "R2500",
      duration: "per project",
      popular: false,
      gradient: "from-accent-500 to-primary-600",
      intensity: "STRATEGIC"
    },
    {
      title: "Business Powerhouse",
      description: "Dominate your market with elite business strategies. Proven systems for explosive growth and operational excellence.",
      features: ["Growth Strategy", "Market Analysis", "Operational Excellence", "Performance Optimization", "ROI Maximization", "Leadership Development"],
      icon: "⚡",
      price: "R3500",
      duration: "per consultation",
      popular: false,
      gradient: "from-primary-600 to-accent-600",
      intensity: "ELITE"
    }
  ]

  const handleBooking = (serviceIndex: number) => {
    setSelectedPlan(serviceIndex)
    setSelectedService(services[serviceIndex])
    setIsBookingOpen(true)
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden perspective-container">
      {/* 3D Background elements */}
      <div className="absolute inset-0 transform-3d">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl floating-orb" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl floating-orb" style={{ animationDelay: '2s' }} />
        
        {/* 3D geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5 tilt-3d">
          <div className="h-full w-full transform-3d" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(227,181,71,0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(168,145,72,0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(227,181,71,0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(168,145,72,0.1) 75%)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
          }} />
        </div>

        {/* Floating 3D shapes */}
        <div className="absolute top-1/4 left-10 w-16 h-16 border-2 border-primary-500/20 rotate-45 animate-rotate-slow floating-element" />
        <div className="absolute bottom-1/3 right-20 w-12 h-12 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full bounce-3d" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 depth-hover">
            <span className="elite-badge">
              ELITE PROGRAMS
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading premium-text mb-8 muscle-text animate-fade-in">
            CHOOSE YOUR PATH
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Elite training programs designed for serious results. No compromises, no excuses—just pure transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative luxury-card p-8 transition-all duration-500 depth-hover group ${
                service.popular ? 'ring-2 ring-primary-500/60 shadow-2xl luxury-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 depth-hover">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 px-6 py-2 rounded-full text-sm font-bold muscle-text shadow-lg border border-primary-400/50">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl mb-4 depth-hover">
                  <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300 animate-bounce-3d">
                    {service.icon}
                  </span>
                </div>
                
                <div className="mb-4">
                  <span className="text-xs font-bold text-accent-400 uppercase tracking-wider bg-accent-500/10 px-3 py-1 rounded-full border border-accent-500/30">
                    {service.intensity}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold font-heading mb-3 premium-text muscle-text`}>
                  {service.title}
                </h3>
                
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-4xl font-bold premium-text muscle-text">{service.price}</span>
                  <span className="text-neutral-400 font-medium">{service.duration}</span>
                </div>
              </div>

              <p className="text-neutral-300 mb-6 leading-relaxed text-center font-medium">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-300">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 depth-hover">
                      <svg className="w-4 h-4 text-neutral-950" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBooking(index)}
                className={`w-full py-4 px-6 rounded-xl font-bold text-neutral-950 transition-all duration-300 bg-gradient-to-r ${service.gradient} hover:shadow-2xl hover:scale-105 transform border border-primary-500/30 muscle-text text-lg depth-hover`}
              >
                {index === 0 ? '💪 BOOK SESSION' : '🚀 GET STARTED'}
              </button>
            </div>
          ))}
        </div>

        {/* Elite Packages with 3D effects */}
        <div className="text-center mb-16">
          <div className="luxury-card p-12 elite-glow depth-hover">
            <h3 className="text-4xl font-bold premium-text mb-8 muscle-text">ELITE PACKAGES</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-xl border border-primary-500/30 depth-hover">
                <div className="text-5xl mb-4 animate-bounce-3d">🔥</div>
                <h4 className="text-2xl font-bold text-accent-400 mb-3 muscle-text">STRENGTH PACKAGE</h4>
                <p className="text-neutral-300 mb-4 font-medium">5 Sessions + 1 FREE Consultation</p>
                <div className="text-3xl font-bold premium-text muscle-text">R1500 <span className="text-base text-neutral-400 font-normal">total savings</span></div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-accent-600/20 to-primary-600/20 rounded-xl border border-accent-500/30 depth-hover">
                <div className="text-5xl mb-4 animate-bounce-3d" style={{ animationDelay: '0.5s' }}>💎</div>
                <h4 className="text-2xl font-bold premium-text mb-3 muscle-text">ELITE BUNDLE</h4>
                <p className="text-neutral-300 mb-4 font-medium">Training + Brand Development</p>
                <div className="text-3xl font-bold premium-text muscle-text">R2000 <span className="text-base text-neutral-400 font-normal">value package</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA with 3D effect */}
        <div className="text-center">
          <div className="luxury-card p-12 relative overflow-hidden luxury-glow depth-hover">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10" />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 premium-text muscle-text">READY TO DOMINATE?</h3>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto font-medium">
                Stop making excuses. Start making progress. Book your transformation session today.
              </p>
              <a href="#contact" className="btn-primary text-xl px-12 py-6 elite-glow group relative overflow-hidden">
                <span className="relative z-10 muscle-text">START NOW - R300</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
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
