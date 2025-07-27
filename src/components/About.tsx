'use client'

import { useState } from 'react'

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const principles = [
    {
      icon: "⚡",
      title: "Maximum Results",
      description: "Every session is designed for peak performance. No time wasted, every rep counts toward your transformation.",
      color: "from-primary-500 to-accent-500"
    },
    {
      icon: "🎯",
      title: "Precision Training",
      description: "Science-based programming tailored to your goals. Strategic planning meets relentless execution.",
      color: "from-accent-500 to-fitness-power"
    },
    {
      icon: "💪",
      title: "Elite Standards",
      description: "Professional excellence in every aspect. From technique to nutrition—we deliver world-class results.",
      color: "from-fitness-power to-primary-600"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-6 py-3 rounded-full bg-primary-500/10">
                ELITE TRAINING PHILOSOPHY
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8 animate-fade-in muscle-text">
              WHY WE DOMINATE
            </h2>
            <div className="section-divider mb-12" />
            <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-medium">
              This isn't your average gym experience. We deliver results through precision, dedication, 
              and an uncompromising commitment to excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="strength-card p-8 fitness-glow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mr-6 border border-primary-500/30">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary-400 muscle-text">
                    OUR MISSION
                  </h3>
                </div>
                <p className="text-lg text-neutral-300 mb-6 leading-relaxed font-medium">
                  Transform bodies through elite training methodologies. We combine scientific precision 
                  with relentless dedication to forge champions in fitness and life.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed font-medium">
                  Whether you're building strength, transforming your physique, or elevating your business—
                  we deliver the strategic foundation and disciplined execution to achieve dominance.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="strength-card p-8 fitness-glow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-fitness-power rounded-xl flex items-center justify-center mr-6 border border-accent-500/30">
                    <span className="text-3xl">👥</span>
                  </div>
                  <h4 className="text-2xl font-bold text-accent-400 muscle-text">TARGET CLIENTS</h4>
                </div>
                <p className="text-neutral-300 leading-relaxed font-medium">
                  Serious individuals aged 21–55 who demand excellence. Professionals, entrepreneurs, 
                  and driven people who understand that elite results require elite training.
                </p>
              </div>

              <div className="strength-card p-8 fitness-glow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-fitness-power to-primary-600 rounded-xl flex items-center justify-center mr-6 border border-fitness-power/30">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h4 className="text-2xl font-bold text-fitness-energy muscle-text">OUR METHOD</h4>
                </div>
                <p className="text-neutral-300 leading-relaxed font-medium">
                  Strategic programming meets uncompromising execution. Every session is precision-engineered 
                  for maximum results, backed by proven methodologies and relentless accountability.
                </p>
              </div>
            </div>
          </div>

          {/* Core Principles */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center text-primary-400 mb-12 muscle-text">CORE PRINCIPLES</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className={`strength-card p-8 cursor-pointer transition-all duration-500 ${
                    hoveredCard === index ? 'scale-105 fitness-glow' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="text-6xl mb-6 text-center">{principle.icon}</div>
                  <h4 className={`text-xl font-bold mb-4 text-center text-amber-600 muscle-text`}>
                    {principle.title}
                  </h4>
                  <p className="text-neutral-300 text-center leading-relaxed font-medium">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Results Promise */}
          <div className="text-center">
            <div className="strength-card p-12 fitness-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10" />
              <div className="relative z-10">
                <h4 className="text-4xl font-bold mb-6 text-gradient muscle-text">RESULTS GUARANTEED</h4>
                <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto font-medium">
                  No shortcuts. No excuses. Just proven methods that deliver transformation. 
                  Ready to experience what elite training can do for you?
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="#services" className="btn-primary text-lg px-10 py-4 muscle-text">
                    VIEW PROGRAMS
                  </a>
                  <a href="#contact" className="btn-secondary text-lg px-10 py-4 muscle-text">
                    BOOK CONSULTATION
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
