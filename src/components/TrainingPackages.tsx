'use client'

import { useState } from 'react'
import PaymentForm from './PaymentForm'
import { PackageName } from '@/utils/payfast-simple'

export default function TrainingPackages() {
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<PackageName | null>(null)

  const packages = [
    {
      name: "PT Intro Pack" as PackageName,
      price: "R624",
      description: "Perfect for first-time clients to experience professional personal training",
      features: [
        "1 Comprehensive Consultation",
        "2 x 45-minute Training Sessions",
        "Personalized Workout Plan",
        "Goal Setting & Assessment",
        "Exercise Form Correction"
      ],
      highlight: false,
      popular: false
    },
    {
      name: "PT Six Pack" as PackageName,
      price: "R1270",
      description: "Ideal for building momentum and establishing a solid fitness foundation",
      features: [
        "1 Comprehensive Consultation", 
        "5 x 45-minute Training Sessions",
        "Custom Nutrition Guidelines",
        "Progress Tracking",
        "Ongoing Support & Motivation",
        "Exercise Program Modifications"
      ],
      highlight: true,
      popular: true
    },
    {
      name: "Monthly One-on-One Pack" as PackageName,
      price: "R2160",
      description: "Complete monthly training solution for serious fitness transformation",
      features: [
        "8 x 60-minute Training Sessions",
        "Comprehensive Fitness Assessment",
        "Personalized Meal Planning",
        "Weekly Progress Reviews",
        "24/7 WhatsApp Support",
        "Home Workout Alternatives",
        "Supplement Recommendations"
      ],
      highlight: false,
      popular: false
    }
  ]

  const handleBuyNow = (packageName: PackageName) => {
    setSelectedPackage(packageName)
    setShowPaymentForm(true)
  }

  const handleWhatsAppInquiry = (packageName: PackageName) => {
    const message = `Hi! I'm interested in purchasing the ${packageName}. Please provide me with payment details and next steps.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/27635432439?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="packages" className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-6 py-3 rounded-full bg-primary-500/10">
              Training Investment
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 muscle-text">
            Training Packages
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Choose the perfect training package that fits your goals and schedule. 
            All packages include personalized attention and proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className={`relative transform hover:scale-105 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-950 ${
                pkg.highlight
                  ? 'strength-card p-8 bg-gradient-to-br from-primary-500/30 to-accent-500/30 border-2 border-primary-500 shadow-2xl'
                  : 'strength-card p-6 hover:border-primary-500/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-labelledby={`package-${index}-title`}
              role="region"
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8">
                <h3 id={`package-${index}-title`} className="text-2xl font-bold text-primary-400 mb-2 muscle-text">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-4">
                  {pkg.price}
                </div>
                <p className="text-neutral-300 font-medium">
                  {pkg.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8" role="list" aria-label={`${pkg.name} features`}>
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3" role="listitem">
                    <div className="w-5 h-5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" aria-hidden="true">
                      <svg className="w-3 h-3 text-neutral-950" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-neutral-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleBuyNow(pkg.name)}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-950 muscle-text ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 shadow-lg hover:shadow-xl border border-primary-400/50'
                      : 'bg-gradient-to-r from-neutral-700 to-neutral-600 text-white hover:from-primary-500 hover:to-accent-500 hover:text-neutral-950 border border-neutral-600 hover:border-primary-500'
                  }`}
                  aria-describedby={`package-${index}-title`}
                >
                  Buy Now - {pkg.price}
                </button>

                <button
                  onClick={() => handleWhatsAppInquiry(pkg.name)}
                  className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-950 flex items-center justify-center space-x-2"
                  aria-label={`Chat about ${pkg.name} on WhatsApp`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Ask Questions</span>
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="strength-card p-8 max-w-4xl mx-auto bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/50">
            <h3 className="text-2xl font-bold text-accent-400 mb-4 muscle-text">
              Not Sure Which Package is Right for You?
            </h3>
            <p className="text-neutral-300 mb-6 font-medium text-lg">
              Book a free 15-minute consultation to discuss your goals and find the perfect training package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/8mz7dZXLcr47QSNG8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-lg elite-glow"
              >
                <span className="muscle-text">Book Free Consultation</span>
              </a>
              <a
                href="https://wa.me/27635432439?text=Hi! I need help choosing the right training package for my goals. Can we discuss my options?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 text-lg luxury-glow bg-green-600 hover:bg-green-700 from-green-600 to-green-700 hover:from-green-500 hover:to-green-600"
              >
                <span className="muscle-text">WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Form Modal */}
      {showPaymentForm && selectedPackage && (
        <PaymentForm
          packageName={selectedPackage}
          onClose={() => {
            setShowPaymentForm(false)
            setSelectedPackage(null)
          }}
        />
      )}
    </section>
  )
}
