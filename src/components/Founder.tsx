'use client'

import { useState } from 'react'

export default function Founder() {
  const [activeTab, setActiveTab] = useState<'brands' | 'fitness'>('brands')

  const brands = [
    "Herbally VSC", "Busa Creative Agency", "The J Spot", "House of Hemp", 
    "Canna Kush", "GIBS", "BasslineLive", "Mwanza Risk Solutions", "Senqu Municipality"
  ]

  const fitnessPartners = [
    "Virgin Active", "BodyFlow", "Switch Playgrounds", "STRONG", "F45", "BODY 20", 
    "CResults Digital Fitness Boxing", "True Combat Boxing"
  ]

  const achievements = [
    { number: "500+", label: "Lives Transformed", icon: "🚀" },
    { number: "50+", label: "Brands Elevated", icon: "🎨" },
    { number: "10+", label: "Years Experience", icon: "⭐" },
    { number: "98%", label: "Client Satisfaction", icon: "💯" }
  ]

  return (
    <section id="founder" className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-accent-400 text-lg font-medium tracking-wider uppercase">The Visionary</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8">
            Meet The Founder
          </h2>
          <div className="section-divider mb-8" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Founder Info */}
            <div className="space-y-8">
              <div className="dark-card p-10 neon-glow">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-6">
                    <span className="text-3xl">👑</span>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold font-heading text-primary-400 mb-2">
                      Tshiamo Sookane
                    </h3>
                    <p className="text-xl text-accent-400 font-medium">
                      Creative Strategist & Certified Personal Trainer
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    Tshiamo is a versatile creative strategist and certified personal trainer with a 
                    strong background in project management, brand development, and fitness coaching.
                    He's the mastermind behind The Lift Co's revolutionary approach.
                  </p>

                  <p className="text-lg text-neutral-300 leading-relaxed">
                    The Lift Co is his expression of holistic upliftment — a manifestation of years 
                    of experience in transforming both businesses and lives through strategic thinking 
                    and authentic execution. He doesn't just talk the talk, he walks the walk.
                  </p>

                  <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 p-6 rounded-lg border border-primary-500/30">
                    <h4 className="text-xl font-semibold text-primary-400 mb-3">Philosophy</h4>
                    <p className="text-neutral-300 italic">
                      "True transformation happens when strategy meets soul. We don't just build bodies or brands—we build legends."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience & Partners */}
            <div className="space-y-8">
              {/* Tab Navigation */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={() => setActiveTab('brands')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'brands'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                      : 'bg-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  Brand Experience
                </button>
                <button
                  onClick={() => setActiveTab('fitness')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'fitness'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                      : 'bg-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  Fitness Partners
                </button>
              </div>

              {/* Content */}
              <div className="dark-card p-8 neon-glow min-h-[400px]">
                {activeTab === 'brands' ? (
                  <div>
                    <h4 className="text-2xl font-semibold text-primary-400 mb-6 flex items-center">
                      <span className="text-3xl mr-3">🎨</span>
                      Brand Portfolio
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {brands.map((brand, index) => (
                        <div 
                          key={index} 
                          className="bg-gradient-to-r from-neutral-800 to-neutral-700 px-4 py-3 rounded-lg text-sm text-neutral-200 text-center hover:from-primary-800 hover:to-accent-800 transition-all duration-300 cursor-pointer transform hover:scale-105"
                        >
                          {brand}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-2xl font-semibold text-accent-400 mb-6 flex items-center">
                      <span className="text-3xl mr-3">💪</span>
                      Fitness Network
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {fitnessPartners.map((partner, index) => (
                        <div 
                          key={index} 
                          className={`px-4 py-3 rounded-lg text-sm text-neutral-200 text-center transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                            partner === 'Virgin Active' || partner === 'BodyFlow'
                              ? 'bg-gradient-to-r from-accent-600 to-primary-600 ring-2 ring-accent-500/50'
                              : 'bg-gradient-to-r from-neutral-800 to-neutral-700 hover:from-accent-800 hover:to-primary-800'
                          }`}
                        >
                          {partner}
                          {(partner === 'Virgin Active' || partner === 'BodyFlow') && (
                            <div className="text-xs text-accent-200 mt-1">New Partner</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center text-primary-400 mb-12">Proven Results</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="dark-card p-8 text-center neon-glow group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary-400 mb-2 group-hover:text-accent-400 transition-colors duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-neutral-400 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="dark-card p-12 neon-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20" />
              <div className="relative z-10">
                <h4 className="text-4xl font-bold mb-6 text-gradient">Ready to Transform?</h4>
                <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                  Join the movement. Experience the unique blend of strategy, creativity, and authentic growth.
                  Let's build something legendary together.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="#contact" className="btn-primary text-lg px-10 py-5">
                    Let's Connect
                  </a>
                  <a href="#services" className="btn-secondary text-lg px-10 py-5">
                    View Services
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
