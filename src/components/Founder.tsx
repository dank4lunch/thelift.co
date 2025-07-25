'use client'

import { useState } from 'react'

export default function Founder() {
  const [activeTab, setActiveTab] = useState(0)
  
  const brands = [
    "Herbally VSC", "Busa Creative Agency", "The J Spot", "House of Hemp", 
    "Canna Kush", "GIBS", "BasslineLive", "Mwanza Risk Solutions", "Senqu Municipality"
  ]

  const fitnessPartners = [
    "Switch Playgrounds", "STRONG", "F45", "BODY 20", 
    "CResults Digital Fitness Boxing", "True Combat Boxing",
    "Virgin Active", "Bodyflo"
  ]

  const achievements = [
    {
      icon: "🏆",
      title: "Certified Personal Trainer",
      description: "ACSM & NASM certified with 5+ years of experience transforming lives"
    },
    {
      icon: "🎯",
      title: "Brand Strategist",
      description: "Helped 50+ brands find their voice and amplify their message"
    },
    {
      icon: "📈",
      title: "Business Growth Expert",
      description: "Scaled startups to 7-figure revenues through strategic planning"
    },
    {
      icon: "🎨",
      title: "Creative Director",
      description: "Award-winning campaigns that blend culture with commerce"
    }
  ]

  const philosophies = [
    {
      title: "Discipline Creates Freedom",
      description: "True freedom comes from the discipline to do what others won't. Every rep, every strategic decision, every creative choice builds the foundation for your ultimate liberation.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Culture is Currency",
      description: "In today's world, authenticity and cultural relevance are the ultimate currencies. We don't just follow trends—we create movements that matter.",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Strategy with Soul",
      description: "Business isn't just about numbers and metrics. It's about human connection, genuine impact, and building something that resonates on a deeper level.",
      gradient: "from-cyan-500 to-blue-600"
    }
  ]

  const personalStory = [
    {
      title: "The Beginning",
      content: "Growing up in Johannesburg, I witnessed firsthand how the right strategy and authentic execution could transform not just businesses, but entire communities. This sparked my passion for holistic transformation."
    },
    {
      title: "The Journey",
      content: "From personal training sessions in local gyms to boardroom strategy sessions with major brands, every experience taught me that true growth happens when you address the whole person—mind, body, and business."
    },
    {
      title: "The Vision",
      content: "The Lift Co is my manifestation of this belief. We're not just another service provider—we're your partners in complete transformation, bringing together fitness, business acumen, and creative strategy under one roof."
    }
  ]

  return (
    <section id="founder" className="section-padding relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-600/20 to-cyan-600/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black font-heading text-white mb-6 transform hover:scale-105 transition-transform duration-500"
              style={{ textShadow: '0 0 30px rgba(255,255,255,0.5)' }}>
            Meet The <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Founder</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The visionary behind the movement. Where strategy meets soul, and discipline creates freedom.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Founder Profile */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Photo and Quick Stats */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500"
                   style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>
                
                {/* Founder Image Placeholder with 3D effect */}
                <div className="relative mb-8">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 rounded-3xl flex items-center justify-center text-6xl font-bold text-white transform hover:rotate-y-12 transition-transform duration-700 preserve-3d"
                       style={{ boxShadow: '0 20px 40px rgba(168,85,247,0.4)' }}>
                    TS
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur-xl opacity-30 scale-110"></div>
                </div>

                <div className="text-center">
                  <h3 className="text-3xl font-bold font-heading text-white mb-2">
                    Tshiamo Sookane
                  </h3>
                  <p className="text-xl text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-semibold mb-6">
                    Creative Strategist & Certified Personal Trainer
                  </p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/5 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-white">5+</div>
                      <div className="text-sm text-gray-300">Years Experience</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-sm text-gray-300">Brands Elevated</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-white">100+</div>
                      <div className="text-sm text-gray-300">Lives Transformed</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-white">3</div>
                      <div className="text-sm text-gray-300">Core Disciplines</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio and Philosophy */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500">
                <h4 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  The Man Behind The Movement
                </h4>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Tshiamo isn't just a trainer or strategist—he's a transformation catalyst. With a rare blend of 
                  creative vision and analytical precision, he bridges the gap between where you are and where 
                  you want to be.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  His approach is simple yet revolutionary: true success comes from aligning your physical, 
                  mental, and business goals into one cohesive strategy. When these elements work in harmony, 
                  extraordinary things happen.
                </p>
              </div>

              {/* Core Philosophies */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white mb-4">Core Philosophies</h4>
                {philosophies.map((philosophy, index) => (
                  <div key={index} className="group bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <h5 className={`font-bold text-lg mb-2 bg-gradient-to-r ${philosophy.gradient} bg-clip-text text-transparent`}>
                      {philosophy.title}
                    </h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {philosophy.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Story Tabs */}
          <div className="mb-20">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                The Story Behind The Vision
              </h3>
              
              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="bg-white/5 rounded-2xl p-2 flex space-x-2">
                  {personalStory.map((story, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeTab === index
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {story.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="text-center">
                <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  {personalStory[activeTab].content}
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements & Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-500 text-center">
                  <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h4 className="font-bold text-white mb-3">{achievement.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Sections */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Brand Experience */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Brand Experience
              </h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                From startups to established enterprises, these brands trusted Tshiamo to elevate their presence and amplify their impact.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {brands.map((brand, index) => (
                  <div key={index} className="bg-white/5 px-4 py-3 rounded-xl text-sm text-gray-300 text-center hover:bg-white/10 transition-colors duration-300 hover:text-white">
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            {/* Fitness Partners */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Fitness Partners
              </h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Premium fitness facilities and training partners that share our commitment to excellence and transformation.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {fitnessPartners.map((partner, index) => (
                  <div key={index} className="bg-white/5 px-4 py-3 rounded-xl text-sm text-gray-300 text-center hover:bg-white/10 transition-colors duration-300 hover:text-white">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <h4 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Life?</h4>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the movement. Experience the unique blend of strategy, creativity, and authentic growth 
              that has transformed hundreds of lives and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact" 
                 className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold text-lg px-10 py-4 rounded-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-x-12"
                 style={{ boxShadow: '0 15px 35px rgba(168,85,247,0.4)' }}>
                <span className="relative z-10 flex items-center justify-center">
                  Let's Connect
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a href="/about" 
                 className="group relative bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-lg px-10 py-4 rounded-2xl transform transition-all duration-500 hover:scale-110 hover:bg-white/20">
                <span className="relative z-10">Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
