'use client'

import { useState } from 'react'

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      title: "Personal Training & Fitness",
      description: "Transform your body with certified personal training and wellness coaching tailored to your goals.",
      features: ["Certified Personal Training", "Wellness Coaching", "Fitness Assessments", "Nutrition Guidance"],
      icon: "💪",
      gradient: "from-red-500 via-pink-500 to-rose-500",
      bgGradient: "from-red-50 to-pink-50",
      shadowColor: "shadow-red-500/25"
    },
    {
      title: "Brand Development",
      description: "Elevate your brand with strategic development, creative direction, and authentic storytelling.",
      features: ["Brand Strategy", "Visual Identity", "Creative Direction", "Market Positioning"],
      icon: "🎨",
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      bgGradient: "from-purple-50 to-indigo-50",
      shadowColor: "shadow-purple-500/25"
    },
    {
      title: "Business Strategy",
      description: "Grow your business with proven strategies, project management, and operational excellence.",
      features: ["Project Management", "Business Development", "Strategic Planning", "Process Optimization"],
      icon: "📈",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-50 to-teal-50",
      shadowColor: "shadow-emerald-500/25"
    }
  ]

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-black font-heading bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-6 transform hover:scale-105 transition-transform duration-500">
              What We Specialize In
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-8 rounded-full shadow-lg"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our multidisciplinary edge allows us to uniquely uplift every layer of your life and business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 perspective-1000">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 transform transition-all duration-700 hover:scale-110 preserve-3d ${service.shadowColor}`}
              style={{
                boxShadow: hoveredCard === index 
                  ? '0 25px 50px rgba(0,0,0,0.15), 0 0 50px rgba(168,85,247,0.3)' 
                  : '0 10px 30px rgba(0,0,0,0.1)',
                transform: hoveredCard === index 
                  ? 'perspective(1000px) rotateX(-10deg) rotateY(5deg) scale(1.05)' 
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
              <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
              
              {/* Card content */}
              <div className="relative z-10">
                {/* 3D Icon container */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-3xl transform group-hover:rotate-y-180 transition-transform duration-700 preserve-3d`}
                       style={{
                         boxShadow: hoveredCard === index 
                           ? '0 15px 30px rgba(0,0,0,0.2), inset 0 0 20px rgba(255,255,255,0.2)' 
                           : '0 8px 20px rgba(0,0,0,0.1)'
                       }}>
                    <span className="transform group-hover:scale-125 transition-transform duration-500">
                      {service.icon}
                    </span>
                  </div>
                  {/* Floating glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                </div>

                <h3 className={`text-2xl font-bold font-heading bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4 transform group-hover:scale-105 transition-transform duration-500`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Feature list with 3D effects */}
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-300">
                      <div className={`w-6 h-6 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mr-4 transform group-hover:rotate-360 transition-transform duration-700`}
                           style={{ animationDelay: `${idx * 0.1}s` }}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* 3D CTA Button */}
                <div className="mt-8">
                  <button className={`w-full bg-gradient-to-r ${service.gradient} text-white font-bold py-4 px-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group-hover:rotate-x-12`}
                          style={{
                            boxShadow: hoveredCard === index 
                              ? '0 15px 30px rgba(0,0,0,0.2)' 
                              : '0 5px 15px rgba(0,0,0,0.1)'
                          }}>
                    <span className="relative z-10">Start Journey</span>
                  </button>
                </div>
              </div>

              {/* Floating particles around card */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full animate-float opacity-60`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <a href="#contact" 
               className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold text-xl px-12 py-6 rounded-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-x-12 inline-block"
               style={{
                 boxShadow: '0 15px 35px rgba(168,85,247,0.4)'
               }}>
              <span className="relative z-10 flex items-center">
                Start Your Transformation
                <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl blur-xl opacity-30 scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
