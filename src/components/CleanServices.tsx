'use client'

import { Clock, Users, Target, Zap, Apple, MessageCircle, CheckCircle, Star } from 'lucide-react'

export default function CleanServices() {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific goals and fitness level",
      duration: "45-60 min",
      type: "Individual",
      features: [
        "Personalized workout plans",
        "Form correction & technique",
        "Progress tracking",
        "Goal-specific programming"
      ],
      starting: "from R400/session"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "HIIT Training",
      description: "High-intensity workouts for maximum calorie burn and fitness gains",
      duration: "30-45 min",
      type: "Individual/Group",
      features: [
        "Fat burning focus",
        "Cardiovascular improvement",
        "Time-efficient workouts",
        "Scalable intensity"
      ],
      starting: "from R350/session"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Training",
      description: "Small group sessions combining motivation with personalized attention",
      duration: "45-60 min",
      type: "2-4 people",
      features: [
        "Cost-effective training",
        "Social motivation",
        "Team building",
        "Customized group programs"
      ],
      starting: "from R250/person"
    }
  ]

  const packages = [
    {
      name: "Starter Package",
      price: "R1,200",
      description: "Perfect for beginners",
      sessions: "3 sessions",
      features: [
        "1x consultation",
        "2x training sessions", 
        "Basic workout plan",
        "Nutrition guidance"
      ],
      popular: false
    },
    {
      name: "Transformation Package",
      price: "R2,800",
      description: "Complete fitness transformation",
      sessions: "6 sessions",
      features: [
        "1x consultation",
        "5x training sessions",
        "Custom workout plan",
        "Detailed nutrition plan",
        "Progress tracking",
        "24/7 support access"
      ],
      popular: true
    },
    {
      name: "Elite Monthly",
      price: "R4,500",
      description: "Premium monthly membership",
      sessions: "8 sessions",
      features: [
        "8x training sessions",
        "Unlimited consultations",
        "Advanced programming",
        "Supplement guidance",
        "Priority booking",
        "VIP support"
      ],
      popular: false
    }
  ]

  const nutritionPlan = {
    name: "Complete Nutrition Package",
    price: "R899",
    description: "Everything you need for nutrition success",
    features: [
      "Personalized meal prep plan",
      "Weekly grocery shopping list", 
      "Custom training plan integration",
      "Round the clock coaching support",
      "Macro tracking guidance",
      "Recipe variations for 4 weeks",
      "WhatsApp support group access",
      "Monthly progress review calls"
    ]
  }

  const handleBooking = (service: string) => {
    const message = encodeURIComponent(`Hi Tshiamo! I'm interested in ${service}. Please share more details and availability.`)
    window.open(`https://wa.me/27635432439?text=${message}`, '_blank')
  }

  const handleNutritionBooking = () => {
    const message = encodeURIComponent(`Hi Tshiamo! I'd like to purchase the Complete Nutrition Package for R899. Please send me the payment details.`)
    window.open(`https://wa.me/27635432439?text=${message}`, '_blank')
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-900 to-neutral-950 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(227,181,71,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">Services & Pricing</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              <span className="text-white">Elite Training </span>
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
            
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Professional training services designed to deliver real results. Choose the program that fits your goals and schedule.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8 hover:border-primary-500/30 transition-colors group"
              >
                <div className="text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                
                <p className="text-neutral-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-accent-400" />
                    <span className="text-neutral-300">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-accent-400" />
                    <span className="text-neutral-300">{service.type}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-neutral-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-primary-400 font-bold mb-6">{service.starting}</div>

                <button
                  onClick={() => handleBooking(service.title)}
                  className="w-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 text-primary-400 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:text-white px-6 py-3 rounded-xl font-bold transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Featured Nutrition Plan */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 backdrop-blur-sm border border-primary-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  FEATURED PACKAGE
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                      <Apple className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary-400">{nutritionPlan.name}</h3>
                      <p className="text-neutral-300">{nutritionPlan.description}</p>
                    </div>
                  </div>

                  <div className="text-5xl font-bold text-primary-400 mb-2">{nutritionPlan.price}</div>
                  <div className="text-neutral-400 mb-8">per month - everything included</div>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {nutritionPlan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleNutritionBooking}
                    className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl flex items-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Nutrition Plan - R899
                  </button>
                </div>

                <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50">
                  <h4 className="text-xl font-bold text-primary-400 mb-4">What's Included:</h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-neutral-200">Custom Meal Plans</div>
                        <div className="text-neutral-400">4 weeks of personalized meal prep plans with recipe variations</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-neutral-200">Shopping Lists</div>
                        <div className="text-neutral-400">Weekly grocery lists with estimated costs and money-saving tips</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-neutral-200">24/7 Support</div>
                        <div className="text-neutral-400">Round-the-clock coaching via WhatsApp support group</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-neutral-200">Training Integration</div>
                        <div className="text-neutral-400">Nutrition plan synchronized with your training program</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Training Packages */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-primary-400 mb-12">Training Packages</h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border rounded-2xl p-8 relative ${
                    pkg.popular 
                      ? 'border-primary-500/50 shadow-2xl' 
                      : 'border-neutral-700/50 hover:border-primary-500/30'
                  } transition-colors`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-primary-400 mb-2">{pkg.name}</h4>
                    <p className="text-neutral-400 mb-4">{pkg.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">{pkg.price}</div>
                    <div className="text-neutral-500 text-sm">{pkg.sessions}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleBooking(pkg.name)}
                    className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-xl'
                        : 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white'
                    }`}
                  >
                    Select Package
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary-400 mb-4">Ready to Transform Your Life?</h3>
              <p className="text-neutral-300 mb-6">
                Get started with a free consultation to discuss your goals and find the perfect training program for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleBooking('Free Consultation')}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Free Consultation
                </button>
                <a
                  href="/contact"
                  className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Contact Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
