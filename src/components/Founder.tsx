'use client'

import { useState } from 'react'

export default function Founder() {
  const [activeTab, setActiveTab] = useState<'credentials' | 'partners'>('credentials')

  const credentials = [
    "Certified Personal Trainer", "Strength & Conditioning Specialist", "Nutrition Coach", 
    "Elite Performance Training", "Functional Movement", "Sports Psychology",
    "Body Transformation Expert", "Leadership Development"
  ]

  const fitnessPartners = [
    "Virgin Active", "BodyFlow", "Switch Playgrounds", "STRONG", "F45", "BODY 20", 
    "CResults Digital Fitness Boxing", "True Combat Boxing"
  ]

  const achievements = [
    { number: "500+", label: "Bodies Transformed", icon: "💪" },
    { number: "98%", label: "Success Rate", icon: "🎯" },
    { number: "10+", label: "Years Mastery", icon: "⭐" },
    { number: "100%", label: "Commitment Level", icon: "🔥" }
  ]

  return (
    <section id="founder" className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-6 py-3 rounded-full bg-primary-500/10">
              ELITE TRAINER
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8 muscle-text">
            MEET YOUR COACH
          </h2>
          <div className="section-divider mb-8" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Trainer Profile */}
            <div className="space-y-8">
              <div className="strength-card p-10 fitness-glow">
                <div className="flex items-center mb-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden mr-6 border-2 border-primary-500/50 shadow-xl">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fefc7a121aea64604b51eafdf7eebedf8%2F24f572d4409b40419a8d3b8d260a33a8?format=webp&width=800"
                      alt="Tshiamo Sookane - Elite Personal Trainer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold font-heading text-primary-400 mb-2 muscle-text">
                      TSHIAMO SOOKANE
                    </h3>
                    <p className="text-xl text-accent-400 font-bold muscle-text">
                      ELITE PERSONAL TRAINER & STRATEGIC COACH
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-neutral-300 leading-relaxed font-medium">
                    Meet the mastermind behind The Lift Co. Tshiamo isn't your typical trainer—he's a
                    movement architect, a mindset shifter, and your personal performance catalyst. With 10+ years
                    of turning "impossible" into "inevitable," he's built a reputation for making champions.
                  </p>

                  <p className="text-lg text-neutral-300 leading-relaxed font-medium">
                    Born in Johannesburg, raised on ambition. Tshiamo combines old-school discipline with
                    cutting-edge science. He doesn't just count reps—he builds legacies. From corporate executives
                    to aspiring athletes, he's the secret weapon behind transformations that stick.
                  </p>

                  <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 p-6 rounded-lg border border-primary-500/30">
                    <h4 className="text-xl font-bold text-primary-400 mb-3 muscle-text">💭 MINDSET MANIFESTO</h4>
                    <p className="text-neutral-300 italic font-medium">
                      "I don't believe in shortcuts, but I do believe in smart paths. Your body is capable
                      of incredible things—my job is to unlock that potential and show you what elite really feels like.
                      We're not just changing how you look; we're upgrading how you think, move, and conquer."
                    </p>
                    <div className="mt-4 text-sm text-primary-300 font-bold">
                      — The Tshiamo Method
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials & Partners */}
            <div className="space-y-8">
              {/* Tab Navigation */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={() => setActiveTab('credentials')}
                  className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 muscle-text ${
                    activeTab === 'credentials'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white border border-primary-500/30'
                      : 'bg-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  CREDENTIALS
                </button>
                <button
                  onClick={() => setActiveTab('partners')}
                  className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 muscle-text ${
                    activeTab === 'partners'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white border border-primary-500/30'
                      : 'bg-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  PARTNERS
                </button>
              </div>

              {/* Content */}
              <div className="strength-card p-8 fitness-glow min-h-[400px]">
                {activeTab === 'credentials' ? (
                  <div>
                    <h4 className="text-2xl font-bold text-primary-400 mb-6 flex items-center muscle-text">
                      <span className="text-2xl mr-3">🏆</span>
                      ELITE CERTIFICATIONS
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {credentials.map((credential, index) => (
                        <div 
                          key={index} 
                          className="bg-gradient-to-r from-neutral-800 to-neutral-700 px-6 py-4 rounded-lg text-neutral-200 hover:from-primary-800 hover:to-accent-800 transition-all duration-300 cursor-pointer transform hover:scale-105 border border-neutral-600/50 font-medium"
                        >
                          <div className="flex items-center">
                            <span className="text-primary-400 mr-3 font-bold">✓</span>
                            {credential}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-2xl font-bold text-accent-400 mb-6 flex items-center muscle-text">
                      <span className="text-2xl mr-3">🤝</span>
                      ELITE NETWORK
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {fitnessPartners.map((partner, index) => (
                        <div 
                          key={index} 
                          className={`px-4 py-4 rounded-lg text-sm text-neutral-200 text-center transition-all duration-300 cursor-pointer transform hover:scale-105 font-bold ${
                            partner === 'Virgin Active' || partner === 'BodyFlow'
                              ? 'bg-gradient-to-r from-accent-600 to-primary-600 ring-2 ring-accent-500/50 border border-accent-500/30'
                              : 'bg-gradient-to-r from-neutral-800 to-neutral-700 hover:from-accent-800 hover:to-primary-800'
                          }`}
                        >
                          {partner}
                          {(partner === 'Virgin Active' || partner === 'BodyFlow') && (
                            <div className="text-xs text-accent-200 mt-1 font-normal">Elite Partner</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center text-primary-400 mb-12 muscle-text">PROVEN RESULTS</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="strength-card p-8 text-center fitness-glow group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-5xl font-bold text-primary-400 mb-2 group-hover:text-accent-400 transition-colors duration-300 muscle-text">
                    {achievement.number}
                  </div>
                  <div className="text-neutral-400 text-sm font-bold uppercase tracking-wide">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Training in Action Gallery */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-center text-primary-400 mb-12 muscle-text">TRAINING IN ACTION</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="strength-card overflow-hidden depth-hover">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefc7a121aea64604b51eafdf7eebedf8%2F53b97d318ef947d4813e973e62a9fe8e"
                  alt="Elite training intensity"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="strength-card overflow-hidden depth-hover">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefc7a121aea64604b51eafdf7eebedf8%2F3a2b427508bc4e4ba5606ba3cdd50837"
                  alt="Professional training technique"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="strength-card overflow-hidden depth-hover">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefc7a121aea64604b51eafdf7eebedf8%2F251539e798824670a6a282d155916ce8"
                  alt="Expert form and technique"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="strength-card overflow-hidden depth-hover">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefc7a121aea64604b51eafdf7eebedf8%2F32635675ac5a465f885e0a283bb6b1a1?format=webp&width=800"
                  alt="Training partnership and results"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="strength-card overflow-hidden depth-hover">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefc7a121aea64604b51eafdf7eebedf8%2Fd293f5d6775c427292b9fd9a6d241f94?format=webp&width=800"
                  alt="Elite training focus"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="strength-card overflow-hidden depth-hover">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefc7a121aea64604b51eafdf7eebedf8%2F539132640720446d9dcaf18d5bf7e972?format=webp&width=800"
                  alt="Professional training technique"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="strength-card p-12 fitness-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20" />
              <div className="relative z-10">
                <h4 className="text-4xl font-bold mb-6 text-gradient muscle-text">READY TO DOMINATE?</h4>
                <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto font-medium">
                  Stop settling for average. Join the elite. Experience transformation that delivers 
                  results that speak for themselves.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="/#contact" className="btn-primary text-lg px-12 py-5 muscle-text">
                    BOOK CONSULTATION
                  </a>
                  <a href="/services" className="btn-secondary text-lg px-12 py-5 muscle-text">
                    VIEW PROGRAMS
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
