'use client'

import { useState } from 'react'

export default function MarketingServices() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const brandServices = [
    {
      title: "Brand Strategy & Identity",
      description: "Complete brand development from strategy to visual identity. Create a brand that commands respect and drives results.",
      features: ["Brand Positioning", "Visual Identity Design", "Logo & Brand Guidelines", "Market Research", "Competitive Analysis", "Brand Messaging"],
      icon: "🎯",
      price: "Premium",
      duration: "Bespoke Package",
      timeline: "2-3 weeks"
    },
    {
      title: "Digital Brand Presence",
      description: "Establish dominant digital presence across all platforms. From websites to social media, we make your brand unmissable.",
      features: ["Website Development", "Social Media Strategy", "Content Creation", "SEO Optimization", "Digital Marketing", "Online Reputation"],
      icon: "🚀",
      price: "Elite",
      duration: "Comprehensive Suite",
      timeline: "3-4 weeks"
    },
    {
      title: "Creative Direction",
      description: "Elevate your creative output with strategic direction that converts. Every piece of content works toward your goals.",
      features: ["Campaign Development", "Creative Strategy", "Content Planning", "Photography Direction", "Video Concepts", "Marketing Materials"],
      icon: "🎨",
      price: "Executive",
      duration: "Creative Package",
      timeline: "1-2 weeks"
    }
  ]

  const businessServices = [
    {
      title: "Business Strategy & Growth",
      description: "Scale your business with proven strategies. From startup to enterprise, we deliver growth that sticks.",
      features: ["Growth Strategy", "Market Analysis", "Business Planning", "Revenue Optimization", "Process Improvement", "Team Development"],
      icon: "📈",
      price: "Strategic",
      duration: "Growth Partnership",
      timeline: "Ongoing"
    },
    {
      title: "Operations & Systems",
      description: "Streamline operations for maximum efficiency. Build systems that scale and processes that perform.",
      features: ["Process Optimization", "System Integration", "Workflow Automation", "Performance Metrics", "Quality Control", "Resource Planning"],
      icon: "⚙️",
      price: "Platinum",
      duration: "Systems Overhaul",
      timeline: "4-6 weeks"
    },
    {
      title: "Leadership & Development",
      description: "Build leaders who inspire and teams that deliver. Transform your human capital into competitive advantage.",
      features: ["Leadership Coaching", "Team Building", "Performance Management", "Skill Development", "Culture Building", "Strategic Planning"],
      icon: "🏆",
      price: "Executive",
      duration: "Leadership Program",
      timeline: "6-8 weeks"
    }
  ]

  return (
    <div className="bg-gradient-to-b from-neutral-950 to-neutral-900">
      {/* Brand Development Section */}
      <section id="brand-services" className="section-padding relative overflow-hidden perspective-container">
        <div className="absolute inset-0 transform-3d">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl floating-orb" />
          <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-accent-500/8 rounded-full blur-3xl floating-orb" style={{ animationDelay: '3s' }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 depth-hover">
              <span className="elite-badge">
                Brand Development
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
              BUILD YOUR BRAND EMPIRE
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Transform your brand from ordinary to extraordinary. Strategic development that creates market leaders.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {brandServices.map((service, index) => (
              <div 
                key={index} 
                className="luxury-card p-8 depth-hover transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl mb-4 depth-hover">
                    <span className="text-5xl animate-bounce-3d">
                      {service.icon}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading mb-3 premium-text muscle-text">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-2xl font-bold premium-text muscle-text">{service.price}</span>
                    <span className="text-neutral-400 text-sm">{service.duration}</span>
                  </div>
                  
                  <div className="text-accent-400 text-sm font-medium">
                    Timeline: {service.timeline}
                  </div>
                </div>

                <p className="text-neutral-300 mb-6 leading-relaxed text-center">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
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

                <button className="w-full py-3 px-6 rounded-lg font-bold text-neutral-950 bg-gradient-to-r from-primary-500 to-accent-500 hover:shadow-xl hover:scale-105 transform transition-all duration-300 border border-primary-500/30 muscle-text">
                  GET STARTED
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Strategy Section */}
      <section id="business-services" className="section-padding relative overflow-hidden perspective-container bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="absolute inset-0 transform-3d">
          <div className="absolute top-0 right-1/4 w-70 h-70 bg-accent-500/8 rounded-full blur-3xl floating-orb" />
          <div className="absolute bottom-0 left-1/4 w-90 h-90 bg-primary-500/8 rounded-full blur-3xl floating-orb" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 depth-hover">
              <span className="elite-badge">
                Business Strategy
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
              DOMINATE YOUR MARKET
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Strategic business solutions that drive growth, optimize operations, and build market dominance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {businessServices.map((service, index) => (
              <div 
                key={index} 
                className="luxury-card p-8 depth-hover transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-xl mb-4 depth-hover">
                    <span className="text-5xl animate-bounce-3d" style={{ animationDelay: `${index * 0.3}s` }}>
                      {service.icon}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading mb-3 premium-text muscle-text">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-2xl font-bold premium-text muscle-text">{service.price}</span>
                    <span className="text-neutral-400 text-sm">{service.duration}</span>
                  </div>
                  
                  <div className="text-accent-400 text-sm font-medium">
                    Timeline: {service.timeline}
                  </div>
                </div>

                <p className="text-neutral-300 mb-6 leading-relaxed text-center">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-neutral-300 text-sm">
                      <div className="w-4 h-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-2 h-2 text-neutral-950" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 rounded-lg font-bold text-neutral-950 bg-gradient-to-r from-accent-500 to-primary-500 hover:shadow-xl hover:scale-105 transform transition-all duration-300 border border-accent-500/30 muscle-text">
                  GET STARTED
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="luxury-card p-12 relative overflow-hidden luxury-glow depth-hover max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 premium-text muscle-text">READY TO ELEVATE YOUR BUSINESS?</h3>
                <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto font-medium">
                  Transform your brand and business with strategic solutions that deliver real results. 
                  Let's build something extraordinary together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/#contact" className="btn-primary text-lg px-10 py-4 muscle-text">
                    START PROJECT
                  </a>
                  <a href="/#contact" className="btn-outline text-lg px-10 py-4 muscle-text">
                    FREE CONSULTATION
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
