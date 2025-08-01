'use client'

import { useState } from 'react'

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const principles = [
    {
      icon: "⚡️",
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
      icon: "💪🏽",
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 sm:mb-8 animate-fade-in muscle-text">
              WHY WE DOMINATE
            </h2>
            <div className="section-divider mb-8 sm:mb-12" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
              We blend strategy with soul. The Lift Co is not just a service — it's a movement.
              We deliver results through precision, dedication, and an uncompromising commitment to excellence that transforms bodies, businesses, and brands.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="strength-card p-4 sm:p-6 lg:p-8 fitness-glow">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mr-4 sm:mr-6 border border-primary-500/30">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-primary-400 muscle-text">
                    OUR MISSION
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-neutral-300 mb-4 sm:mb-6 leading-relaxed font-medium">
                  Transform bodies through elite training methodologies and strategic business development.
                  We combine scientific precision with relentless dedication to forge champions in fitness, business, and life.
                </p>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-medium">
                  Whether you're building strength, transforming your physique, or elevating your business—
                  we deliver the strategic foundation and disciplined execution to achieve complete dominance across all areas of your life.
                </p>
              </div>

              <div className="strength-card p-4 sm:p-6 lg:p-8 fitness-glow">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center mr-4 sm:mr-6 border border-accent-500/30">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-accent-400 muscle-text">MULTIDISCIPLINARY EDGE</h4>
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-medium">
                  Our unique approach combines elite personal training with strategic business coaching and brand development.
                  This multidisciplinary edge allows us to uniquely uplift every layer of your life and business, creating
                  transformations that go beyond the gym and into every aspect of success.
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="strength-card p-8 fitness-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-fitness-power rounded-xl flex items-center justify-center mr-6 border border-accent-500/30">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-accent-400 muscle-text">TARGET CLIENTS</h4>
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-medium">
                  Students, athletes to senior active individuals (10-65 years old) who demand excellence.
                  Professionals, entrepreneurs, and driven people who understand that elite results require elite training.
                </p>
              </div>

              <div className="strength-card p-8 fitness-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-fitness-power to-primary-600 rounded-xl flex items-center justify-center mr-6 border border-fitness-power/30">
                    <span className="text-2xl">⚡️</span>
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

          {/* Trainer Personality */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-center text-primary-400 mb-12 muscle-text">TRAINER BREAKDOWN: TSHIAMO SOOKANE</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="strength-card p-8 fitness-glow">
                <h4 className="text-2xl font-bold text-accent-400 mb-6 muscle-text">💡 CORE IDENTITY</h4>
                <p className="text-neutral-300 leading-relaxed font-medium mb-6">
                  Tshiamo doesn't just train—he transforms. His energy is magnetic: self-assured but never arrogant,
                  future-focused but grounded in action. He's the guy who shows up at 5 AM with the same intensity
                  as 8 PM, because excellence doesn't clock out. Strategy meets sweat, and results follow.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-primary-500 rounded-full mr-3"></span>
                    <span className="text-neutral-300"><strong className="text-primary-400">Confidence:</strong> Doesn't play small. Trains like a champion.</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-accent-500 rounded-full mr-3"></span>
                    <span className="text-neutral-300"><strong className="text-accent-400">Visionary:</strong> Always focused on "next level," "breakthrough results."</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-primary-500 rounded-full mr-3"></span>
                    <span className="text-neutral-300"><strong className="text-primary-400">Empathetic Leader:</strong> Cares about every client's journey, not just reps.</span>
                  </div>
                </div>
              </div>

              <div className="strength-card p-8 fitness-glow">
                <h4 className="text-2xl font-bold text-accent-400 mb-6 muscle-text">🔥 TRAINING PHILOSOPHY</h4>
                <div className="space-y-4 text-neutral-300">
                  <blockquote className="text-lg italic border-l-4 border-primary-500 pl-4 text-primary-300">
                    "Every rep tells a story. Every set builds character. I don't just count your workouts—
                    I architect your comeback story. Whether you're 15 or 65, there's a champion inside waiting
                    to break free. My job? Introduce you two."
                  </blockquote>
                  <p className="font-medium">
                    "The gym is my canvas, your potential is my masterpiece. I work where grit meets grace,
                    where sweat becomes strength, and where ordinary people discover they're actually extraordinary."
                  </p>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-primary-900/30 to-accent-900/30 rounded-lg border border-primary-500/30">
                  <h5 className="text-lg font-bold text-primary-400 mb-3 muscle-text">🎯 COACHING STYLE</h5>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <span className="text-neutral-300"><strong>Tone:</strong> Clear, warm, intentional</span>
                    <span className="text-neutral-300"><strong>Approach:</strong> Science-based, soul-driven</span>
                    <span className="text-neutral-300"><strong>Focus:</strong> Results with purpose</span>
                    <span className="text-neutral-300"><strong>Energy:</strong> Empowering, confident</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary-400 mb-8 sm:mb-12 muscle-text px-4 sm:px-0">PROVEN RESULTS</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0 mb-16">
              <div className="text-center strength-card p-6 depth-hover">
                <div className="text-3xl sm:text-4xl font-bold premium-text mb-2">500+</div>
                <div className="text-neutral-400 font-medium">Successful Transformations</div>
              </div>
              <div className="text-center strength-card p-6 depth-hover">
                <div className="text-3xl sm:text-4xl font-bold premium-text mb-2">10+</div>
                <div className="text-neutral-400 font-medium">Years of Excellence</div>
              </div>
              <div className="text-center strength-card p-6 depth-hover">
                <div className="text-3xl sm:text-4xl font-bold premium-text mb-2">98%</div>
                <div className="text-neutral-400 font-medium">Client Success Rate</div>
              </div>
              <div className="text-center strength-card p-6 depth-hover">
                <div className="text-3xl sm:text-4xl font-bold premium-text mb-2">Elite</div>
                <div className="text-neutral-400 font-medium">Training Standards</div>
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
                  <div className="text-4xl mb-6 text-center">{principle.icon}</div>
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

          {/* Client Success Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary-400 mb-8 sm:mb-12 muscle-text px-4 sm:px-0">CLIENT TRANSFORMATIONS</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0 mb-12">
              <div className="strength-card overflow-hidden depth-hover">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefc7a121aea64604b51eafdf7eebedf8%2Fa7e57207bf8848f1a55d4478c00a0b3e?format=webp&width=800"
                  alt="Group training session with clients"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="strength-card overflow-hidden depth-hover">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefc7a121aea64604b51eafdf7eebedf8%2F551cb9748ab54515bf20ad51dae3e598?format=webp&width=800"
                  alt="Successful training group"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="strength-card overflow-hidden depth-hover sm:col-span-2 lg:col-span-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefc7a121aea64604b51eafdf7eebedf8%2F782f7eb13e7c4795ad06bb380a895435"
                  alt="Elite training community"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
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
                  <a href="/services" className="btn-primary text-lg px-10 py-4 muscle-text">
                    VIEW PROGRAMS
                  </a>
                  <a href="/#contact" className="btn-secondary text-lg px-10 py-4 muscle-text">
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
