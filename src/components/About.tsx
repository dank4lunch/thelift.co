'use client'

import { useState } from 'react'

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We don't follow trends, we create them. Every solution is crafted with cutting-edge thinking.",
      color: "from-primary-500 to-blue-500"
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Excellence isn't negotiable. We deliver only the highest standard of service and results.",
      color: "from-accent-500 to-orange-500"
    },
    {
      icon: "🔥",
      title: "Authentic Vibe",
      description: "No fake energy here. We bring real passion, real results, and real transformation.",
      color: "from-red-500 to-pink-500"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-accent-400 text-lg font-medium tracking-wider uppercase">The Vision</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8 animate-fade-in">
              Why Choose Us
            </h2>
            <div className="section-divider mb-12" />
            <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              We're not your average agency. We're the rebels who turned passion into precision, 
              creativity into results, and vision into reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="dark-card p-8 neon-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-semibold font-heading text-primary-400">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                  We speak the language of culture, discipline, and transformation — and we live it. 
                  Our multidisciplinary approach ensures that every aspect of your growth is carefully 
                  crafted and authentically delivered.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Whether you're looking to transform your body, elevate your business, or amplify 
                  your brand, we provide the strategic foundation and creative execution to make it happen.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="dark-card p-8 neon-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h4 className="text-2xl font-semibold text-accent-400">Target Market</h4>
                </div>
                <p className="text-neutral-300 leading-relaxed">
                  Young professionals, creatives, entrepreneurs, and brands aged 21–55 seeking 
                  authentic growth in their body, business, or brand. Our clients value originality, 
                  community, and results that speak for themselves.
                </p>
              </div>

              <div className="dark-card p-8 neon-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-2xl font-semibold text-blue-400">Our Approach</h4>
                </div>
                <p className="text-neutral-300 leading-relaxed">
                  We blend strategy with soul, creating a holistic approach that addresses every 
                  layer of your personal and professional development. It's not just about the 
                  destination — it's about the transformation journey and the energy we bring.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center text-primary-400 mb-12">Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`dark-card p-8 cursor-pointer transition-all duration-500 ${
                    hoveredCard === index ? 'scale-105 neon-glow' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="text-5xl mb-6 text-center">{value.icon}</div>
                  <h4 className={`text-xl font-semibold mb-4 text-center bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                    {value.title}
                  </h4>
                  <p className="text-neutral-300 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="dark-card p-12 neon-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10" />
              <div className="relative z-10">
                <h4 className="text-3xl font-bold mb-6 text-gradient">Ready to Level Up?</h4>
                <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                  Stop dreaming, start doing. Experience the unique blend of strategy, creativity, 
                  and authentic growth that only The Lift Co can deliver.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#services" className="btn-primary text-lg px-8 py-4">
                    View Our Plans
                  </a>
                  <a href="#contact" className="btn-outline text-lg px-8 py-4">
                    Start Transformation
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
