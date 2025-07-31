'use client'

import { useState } from 'react'

export default function BusinessOverview() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const businessServices = [
    {
      title: "Brand Development",
      description: "Strategic brand positioning that creates market leaders",
      icon: "🎯",
      features: ["Brand Strategy", "Visual Identity", "Market Research"],
      startingPrice: "Premium Tier"
    },
    {
      title: "Digital Presence",
      description: "Dominate digital platforms with strategic online presence",
      icon: "🚀",
      features: ["Website Development", "Social Strategy", "SEO Optimization"],
      startingPrice: "Elite Package"
    },
    {
      title: "Business Strategy",
      description: "Growth strategies that scale and systems that perform",
      icon: "📈",
      features: ["Growth Planning", "Operations", "Team Development"],
      startingPrice: "Executive Suite"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl floating-orb" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-accent-500/8 rounded-full blur-3xl floating-orb" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 depth-hover">
              <span className="elite-badge">
                Brand & Business Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
              ELEVATE YOUR EMPIRE
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Beyond fitness, we transform businesses and build brands that dominate their markets. 
              Strategic moves that create lasting impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {businessServices.map((service, index) => (
              <div
                key={index}
                className="luxury-card p-8 depth-hover transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl mb-4">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading mb-3 premium-text muscle-text">
                    {service.title}
                  </h3>
                  
                  <div className="text-lg font-bold premium-text mb-2">
                    Starting at {service.startingPrice}
                  </div>
                </div>

                <p className="text-neutral-300 mb-6 leading-relaxed text-center">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
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

                <div className="text-center">
                  <button className="text-primary-400 font-bold text-sm hover:text-accent-400 transition-colors depth-hover">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="luxury-card p-10 relative overflow-hidden luxury-glow depth-hover max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 premium-text muscle-text">
                  READY TO DOMINATE YOUR MARKET?
                </h3>
                <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                  Whether you're building muscle or building an empire, we deliver results that speak for themselves.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/marketing" 
                    className="btn-primary text-lg px-10 py-4 muscle-text"
                  >
                    VIEW BUSINESS SERVICES
                  </a>
                  <a
                    href="/#contact"
                    className="btn-outline text-lg px-10 py-4 muscle-text"
                  >
                    FREE CONSULTATION
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
