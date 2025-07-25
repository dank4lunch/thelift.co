'use client'

import { useState } from 'react'

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      title: "Strategic Foundation",
      description: "We speak the language of culture, discipline, and transformation — and we live it.",
      icon: "🎯",
      gradient: "from-blue-500 to-purple-600",
      glow: "shadow-blue-500/25"
    },
    {
      title: "Creative Execution", 
      description: "Our multidisciplinary approach ensures authentic delivery across all touchpoints.",
      icon: "✨",
      gradient: "from-purple-500 to-pink-600",
      glow: "shadow-purple-500/25"
    },
    {
      title: "Holistic Growth",
      description: "We address every layer of your personal and professional development journey.",
      icon: "🚀",
      gradient: "from-pink-500 to-red-600",
      glow: "shadow-pink-500/25"
    }
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced section header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-black font-heading text-white mb-6 transform hover:scale-105 transition-transform duration-500"
                  style={{ textShadow: '0 0 30px rgba(255,255,255,0.5)' }}>
                Why Choose <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-8 rounded-full shadow-lg"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We blend strategy with soul to create authentic transformation across every dimension of your life
            </p>
          </div>

          {/* 3D Feature cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 transform transition-all duration-700 hover:scale-110 ${feature.glow}`}
                style={{
                  boxShadow: hoveredCard === index 
                    ? '0 25px 50px rgba(0,0,0,0.3), 0 0 50px rgba(168,85,247,0.4)' 
                    : '0 10px 30px rgba(0,0,0,0.2)',
                  transform: hoveredCard === index 
                    ? 'perspective(1000px) rotateX(-10deg) rotateY(5deg) scale(1.05)' 
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* 3D Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl transform group-hover:rotate-y-180 transition-transform duration-700 preserve-3d`}>
                      {feature.icon}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  </div>

                  <h3 className={`text-xl font-bold text-white mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover particles */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${feature.gradient} rounded-full animate-float opacity-60`}
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

          {/* Mission and approach section with enhanced design */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 transform hover:scale-105 transition-all duration-500">
                <h3 className="text-3xl font-bold font-heading text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We speak the language of culture, discipline, and transformation — and we live it. 
                  Our multidisciplinary approach ensures that every aspect of your growth is carefully 
                  crafted and authentically delivered.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you're looking to transform your body, elevate your business, or amplify 
                  your brand, we provide the strategic foundation and creative execution to make it happen.
                </p>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Target Market Card */}
              <div className="group bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl p-8 rounded-3xl border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 transform group-hover:rotate-12 transition-transform duration-500">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">Target Market</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Young professionals, creatives, entrepreneurs, and brands aged 21–55 seeking 
                  authentic growth in their body, business, or brand. Our clients value originality, 
                  community, and results.
                </p>
              </div>

              {/* Our Approach Card */}
              <div className="group bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl p-8 rounded-3xl border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 transform group-hover:rotate-12 transition-transform duration-500">
                    <span className="text-xl">💡</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">Our Approach</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  We blend strategy with soul, creating a holistic approach that addresses every 
                  layer of your personal and professional development. It's not just about the 
                  destination — it's about the transformation journey.
                </p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="relative inline-block">
              <a href="#contact" 
                 className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold text-xl px-12 py-6 rounded-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-x-12 inline-block"
                 style={{ boxShadow: '0 15px 35px rgba(168,85,247,0.4)' }}>
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur-xl opacity-30 scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
