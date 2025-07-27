'use client'

import { useState } from 'react'
import Booking from './Booking'

export default function Services() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  const services = [
    {
      title: "Personal Training & Fitness",
      description: "Transform your body with certified personal training and wellness coaching tailored to your goals.",
      features: ["Certified Personal Training", "Wellness Coaching", "Fitness Assessments", "Nutrition Guidance", "Progress Tracking", "24/7 Support"],
      icon: "💪",
      price: "R300",
      duration: "per session",
      popular: true,
      gradient: "from-primary-500 to-blue-500"
    },
    {
      title: "Brand Development",
      description: "Elevate your brand with strategic development, creative direction, and authentic storytelling.",
      features: ["Brand Strategy", "Visual Identity", "Creative Direction", "Market Positioning", "Content Strategy", "Brand Guidelines"],
      icon: "🎨",
      price: "R2500",
      duration: "per project",
      popular: false,
      gradient: "from-accent-500 to-orange-500"
    },
    {
      title: "Business Strategy",
      description: "Grow your business with proven strategies, project management, and operational excellence.",
      features: ["Project Management", "Business Development", "Strategic Planning", "Process Optimization", "ROI Analysis", "Growth Hacking"],
      icon: "📈",
      price: "R3500",
      duration: "per consultation",
      popular: false,
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  const handleBooking = (serviceIndex: number) => {
    setSelectedPlan(serviceIndex)
    // This will be expanded with the booking modal
    const service = services[serviceIndex]
    alert(`Booking ${service.title} - ${service.price} ${service.duration}. Full booking system coming next!`)
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-primary-400 text-lg font-medium tracking-wider uppercase">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8">
            What We Specialize In
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Our multidisciplinary edge allows us to uniquely uplift every layer of your life and business.
            Choose your transformation path.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative dark-card p-8 transition-all duration-500 hover:scale-105 neon-glow group ${
                service.popular ? 'ring-2 ring-accent-500/50' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-accent-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-semibold font-heading mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.title}
                </h3>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-3xl font-bold text-primary-400">{service.price}</span>
                  <span className="text-neutral-400">{service.duration}</span>
                </div>
              </div>

              <p className="text-neutral-300 mb-6 leading-relaxed text-center">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-300">
                    <div className="w-5 h-5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBooking(index)}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 bg-gradient-to-r ${service.gradient} hover:shadow-2xl hover:scale-105 transform`}
              >
                {index === 0 ? 'Book Session' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="text-center mb-16">
          <div className="dark-card p-12 neon-glow">
            <h3 className="text-3xl font-bold text-primary-400 mb-6">Special Offers & Packages</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔥</div>
                <h4 className="text-xl font-semibold text-accent-400 mb-2">Fitness Package</h4>
                <p className="text-neutral-300 mb-4">Book 5 sessions, get 1 FREE</p>
                <div className="text-2xl font-bold text-primary-400">R1500 <span className="text-base text-neutral-400">total</span></div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💎</div>
                <h4 className="text-xl font-semibold text-accent-400 mb-2">Premium Bundle</h4>
                <p className="text-neutral-300 mb-4">Fitness + Brand Development</p>
                <div className="text-2xl font-bold text-primary-400">R2000 <span className="text-base text-neutral-400">discounted</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="btn-primary text-xl px-12 py-5 neon-glow group relative overflow-hidden">
            <span className="relative z-10">Start Your Transformation Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
