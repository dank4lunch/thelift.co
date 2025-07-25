'use client'

import { useState, useEffect } from 'react'

interface Plan {
  id: string
  name: string
  price: number
  originalPrice?: number
  duration: string
  description: string
  features: string[]
  icon: string
  gradient: string
  shadowColor: string
  popular?: boolean
  sessions?: number
  stripePriceId: string
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly')

  const plans: Plan[] = [
    {
      id: 'starter',
      name: 'Starter Lift',
      price: billingCycle === 'monthly' ? 1200 : 3200,
      originalPrice: billingCycle === 'monthly' ? 1500 : 4200,
      duration: billingCycle === 'monthly' ? 'month' : 'quarter',
      description: 'Perfect for beginners ready to start their transformation journey',
      sessions: billingCycle === 'monthly' ? 4 : 12,
      features: [
        '4 Personal Training Sessions (Monthly) / 12 Sessions (Quarterly)',
        'Nutrition Plan & Guidance',
        'Fitness Assessment',
        'Progress Tracking',
        'WhatsApp Support',
        'Gym Access Coordination'
      ],
      icon: '🏃‍♂️',
      gradient: 'from-blue-500 to-purple-600',
      shadowColor: 'shadow-blue-500/25',
      stripePriceId: billingCycle === 'monthly' ? 'price_starter_monthly' : 'price_starter_quarterly'
    },
    {
      id: 'elite',
      name: 'Elite Transformation',
      price: billingCycle === 'monthly' ? 2400 : 6500,
      originalPrice: billingCycle === 'monthly' ? 3000 : 8400,
      duration: billingCycle === 'monthly' ? 'month' : 'quarter',
      description: 'Comprehensive transformation with business strategy included',
      sessions: billingCycle === 'monthly' ? 8 : 24,
      features: [
        '8 Personal Training Sessions (Monthly) / 24 Sessions (Quarterly)',
        'Complete Nutrition Program',
        'Business Strategy Consultation (2 sessions)',
        'Personal Brand Development',
        'Lifestyle Optimization',
        '24/7 WhatsApp Support',
        'Premium Gym Partner Access',
        'Monthly Progress Reviews'
      ],
      icon: '💪',
      gradient: 'from-purple-500 to-pink-600',
      shadowColor: 'shadow-purple-500/25',
      popular: true,
      stripePriceId: billingCycle === 'monthly' ? 'price_elite_monthly' : 'price_elite_quarterly'
    },
    {
      id: 'champion',
      name: 'Champion Package',
      price: billingCycle === 'monthly' ? 4500 : 12000,
      originalPrice: billingCycle === 'monthly' ? 5500 : 15000,
      duration: billingCycle === 'monthly' ? 'month' : 'quarter',
      description: 'Complete life transformation - fitness, business, and brand development',
      sessions: billingCycle === 'monthly' ? 12 : 36,
      features: [
        '12 Personal Training Sessions (Monthly) / 36 Sessions (Quarterly)',
        'Complete Brand Development Package',
        'Business Strategy & Growth Plan',
        'Personal Transformation Coaching',
        'Content Creation Support',
        'VIP WhatsApp & Call Support',
        'Exclusive Partner Network Access',
        'Quarterly Transformation Review',
        'Social Media Strategy',
        'Event & Networking Opportunities'
      ],
      icon: '🏆',
      gradient: 'from-yellow-500 to-red-600',
      shadowColor: 'shadow-yellow-500/25',
      stripePriceId: billingCycle === 'monthly' ? 'price_champion_monthly' : 'price_champion_quarterly'
    }
  ]

  const addOns = [
    {
      id: 'extra-session',
      name: 'Extra Training Session',
      price: 300,
      description: 'Additional personal training session',
      icon: '➕'
    },
    {
      id: 'nutrition-plan',
      name: 'Custom Nutrition Plan',
      price: 500,
      description: 'Personalized meal planning and nutrition guidance',
      icon: '🥗'
    },
    {
      id: 'brand-consultation',
      name: 'Brand Strategy Session',
      price: 800,
      description: 'One-on-one brand development consultation',
      icon: '🎯'
    }
  ]

  const handlePurchase = async (plan: Plan) => {
    setIsLoading(true)
    setSelectedPlan(plan)

    try {
      // Create Stripe checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: plan.stripePriceId,
          quantity: 1,
          successUrl: `${window.location.origin}/payment/success`,
          cancelUrl: `${window.location.origin}/payment/cancelled`,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const { url } = await response.json()

      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url
      } else {
        throw new Error('No checkout URL received')
      }

    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment failed. Please try again or contact support.')
      setIsLoading(false)
    }
  }

  const handleQuickPay = (plan: Plan) => {
    setSelectedPlan(plan)
    setShowModal(true)
  }

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-600/20 to-cyan-600/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black font-heading text-white mb-6 transform hover:scale-105 transition-transform duration-500"
              style={{ textShadow: '0 0 30px rgba(255,255,255,0.5)' }}>
            Transform Your <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Life</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose your transformation package. Invest in yourself with our comprehensive fitness, business, and brand development programs.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20">
            <div className="flex space-x-2">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('quarterly')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                  billingCycle === 'quarterly'
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Quarterly
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 25%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                plan.popular ? 'lg:scale-105' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-6 py-2 rounded-full text-sm shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 h-full flex flex-col relative overflow-hidden ${plan.shadowColor}`}
                   style={{
                     boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
                   }}>
                
                {/* Gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Card content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-500`}>
                      {plan.icon}
                    </div>
                    <h3 className={`text-2xl font-bold text-white mb-2 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      {plan.originalPrice && (
                        <span className="text-gray-500 line-through text-lg">R{plan.originalPrice}</span>
                      )}
                      <span className="text-4xl font-bold text-white">R{plan.price}</span>
                    </div>
                    <p className="text-gray-400">per {plan.duration}</p>
                    {plan.sessions && (
                      <p className="text-sm text-gray-400 mt-1">{plan.sessions} sessions included</p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <div className={`w-5 h-5 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => handlePurchase(plan)}
                      disabled={isLoading}
                      className={`w-full bg-gradient-to-r ${plan.gradient} text-white font-bold py-4 px-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {isLoading && selectedPlan?.id === plan.id ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Start Transformation'
                      )}
                    </button>
                    
                    <button
                      onClick={() => handleQuickPay(plan)}
                      className="w-full bg-white/10 border border-white/30 text-white font-medium py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      Quick Pay with Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Enhance Your Journey
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={addon.id} className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-3">{addon.icon}</div>
                <h4 className="font-bold text-white mb-2">{addon.name}</h4>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-white mb-4">R{addon.price}</div>
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium py-2 px-6 rounded-xl hover:scale-105 transition-transform duration-300">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full mr-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">30-Day Money Back Guarantee</h4>
              <p className="text-gray-300">Not satisfied? Get a full refund within 30 days, no questions asked.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-md w-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Quick Payment</h3>
              <p className="text-gray-300">Secure payment for {selectedPlan.name}</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex justify-between text-white">
                  <span>{selectedPlan.name}</span>
                  <span>R{selectedPlan.price}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-white/10 border border-white/30 text-white font-medium py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowModal(false)
                  handlePurchase(selectedPlan)
                }}
                className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
