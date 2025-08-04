'use client'

import { Target, Award, Users, Zap, Heart, Trophy } from 'lucide-react'

export default function CleanAbout() {
  const expertise = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "HIIT Training",
      description: "High-intensity interval training for maximum calorie burn and fitness gains"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Boxing Fitness",
      description: "Boxing-based workouts combining cardio, strength, and technique"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strength Training",
      description: "Progressive overload programming for muscle building and power"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Sports Conditioning",
      description: "Athletic performance enhancement and injury prevention"
    }
  ]

  const achievements = [
    { number: "5+", label: "Years Experience", color: "text-primary-400" },
    { number: "100+", label: "Clients Trained", color: "text-green-400" },
    { number: "95%", label: "Success Rate", color: "text-blue-400" },
    { number: "5.0", label: "Client Rating", color: "text-yellow-400" }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(227,181,71,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">About Tshiamo</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              <span className="text-white">Your </span>
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Transformation
              </span>
              <span className="text-white"> Architect</span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
            
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              HFPA Certified trainer with 5+ years of experience transforming lives through science-based fitness programming and personalized coaching.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left Column - Story & Philosophy */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary-400 mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  My Mission
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  I don't just build bodies – I build legends. My approach combines scientific precision with personalized attention to create transformative fitness experiences that last a lifetime.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Whether you're starting your fitness journey or looking to break through plateaus, I provide the strategic foundation and disciplined execution needed to achieve excellence.
                </p>
              </div>

              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary-400 mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  Training Philosophy
                </h3>
                <blockquote className="text-lg italic text-primary-300 mb-4 border-l-4 border-primary-500 pl-4">
                  "Every rep tells a story. Every set builds character. I architect your comeback story and introduce you to the champion within."
                </blockquote>
                <p className="text-neutral-300 leading-relaxed">
                  My methodology focuses on progressive overload, functional movement patterns, and sustainable lifestyle integration. Results come from consistency, proper programming, and unwavering commitment to your success.
                </p>
              </div>
            </div>

            {/* Right Column - Expertise & Credentials */}
            <div className="space-y-8">
              
              {/* Credentials */}
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary-400 mb-6">Credentials & Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-300">HFPA Certified Personal Trainer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-300">Exercise Science Specialization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-300">Sports Conditioning Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-300">Nutrition Planning Qualified</span>
                  </div>
                </div>
              </div>

              {/* Specializations */}
              <div className="grid sm:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 hover:border-primary-500/30 transition-colors group"
                  >
                    <div className="text-primary-400 mb-3 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-neutral-200 mb-2">{item.title}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 text-center hover:border-primary-500/30 transition-colors"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${achievement.color}`}>
                  {achievement.number}
                </div>
                <div className="text-neutral-400 text-sm font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>

          {/* Client Promise */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-primary-400 mb-6">My Promise to You</h3>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                No shortcuts. No excuses. Just proven methods that deliver transformation. 
                I'll be with you every step of the way, ensuring you have the tools, knowledge, and support needed to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/services" 
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center gap-3"
                >
                  <Target className="w-5 h-5" />
                  View Training Programs
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-3"
                >
                  <Users className="w-5 h-5" />
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
