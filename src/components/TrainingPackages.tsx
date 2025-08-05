'use client'

import { useState } from 'react'
import PaymentForm from './PaymentForm'
import { PackageName } from '@/utils/payfast-simple'

export default function TrainingPackages() {
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<PackageName | null>(null)

  const packages = [
    {
      name: "Free Consultation" as PackageName,
      price: "FREE",
      duration: "15 min",
      description: "The best way to kick off your Personal Training journey. Get to know me better so I have a clear idea of your goals.",
      features: [
        "Discuss your training goals",
        "Health concerns assessment",
        "Training preferences review",
        "Available packages overview",
        "Personalized recommendations"
      ],
      popular: false,
      cta: "Book Consultation"
    },
    {
      name: 'PT Six Pack' as PackageName,
      duration: '6 sessions',
      price: 'R1,270',
      priceNote: 'per package',
      description: 'Perfect starter package to begin your fitness transformation journey.',
      features: [
        '1 x in-depth consultation',
        '5 x 45 min training sessions',
        'Personalized workout plan',
        'Progress tracking'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'One-on-One Monthly' as PackageName,
      duration: '8 sessions',
      price: 'R2,160',
      priceNote: 'R270 per session',
      description: 'Whether you want a full-time trainer or you need a few months of training to help you reach your short-term goals.',
      features: [
        '8 sessions over 1 month',
        '60 min per session',
        'Custom package options',
        'Flexible scheduling',
        'Goal-specific training'
      ],
      popular: false,
      cta: 'Buy Monthly'
    }
  ]

  const faqs = [
    {
      question: 'What can I expect from my consultation?',
      answer: 'During your consultation, we\'ll discuss your goals, health concerns, training preferences, and find the perfect package for your needs.'
    },
    {
      question: 'What if I can\'t make my appointment?',
      answer: 'Please give at least 24 hours notice to reschedule. We understand life happens and will work with you to find a new time.'
    },
    {
      question: 'What if I\'m not happy with my Personal Trainer?',
      answer: 'Your satisfaction is our priority. We\'ll work with you to address any concerns and ensure you get the best training experience.'
    }
  ]

  const handlePackageSelect = (packageName: PackageName) => {
    if (packageName === "Free Consultation") {
      window.open("https://forms.gle/8mz7dZXLcr47QSNG8", "_blank")
    } else {
      setSelectedPackage(packageName)
      setShowPaymentForm(true)
    }
  }

  if (showPaymentForm && selectedPackage) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <button
            onClick={() => setShowPaymentForm(false)}
            className="mb-6 text-primary-400 hover:text-primary-300 flex items-center gap-2 font-bold"
          >
            ← Back to Packages
          </button>
          <PaymentForm packageName={selectedPackage} />
        </div>
      </div>
    )
  }

  return (
    <section id="packages" className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-6 py-3 rounded-full bg-primary-500/10">
              TRAINING PACKAGES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 muscle-text">
            GET LIFTED WITH YOUR PERSONAL TRAINER
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
            Choose the perfect training package that fits your goals and lifestyle. Custom packages available for all fitness levels.
          </p>
        </div>

        {/* Training Packages */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`luxury-card p-8 relative depth-hover transition-all duration-500 ${
                pkg.popular
                  ? 'bg-gradient-to-br from-primary-500/20 to-accent-500/20 border-primary-500/50 scale-105'
                  : 'bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border-neutral-700/50'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                    Best Value
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary-400 mb-2 muscle-text">{pkg.name}</h3>
                <div className="text-4xl font-black text-accent-400 mb-2">{pkg.price}</div>
                {pkg.priceNote && (
                  <div className="text-sm text-neutral-400 mb-2">{pkg.priceNote}</div>
                )}
                <div className="text-neutral-300 font-medium">{pkg.duration}</div>
              </div>

              <p className="text-neutral-300 mb-6 leading-relaxed">{pkg.description}</p>

              <div className="space-y-3 mb-8">
                <h4 className="text-lg font-bold text-primary-400 muscle-text">What you're in for:</h4>
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handlePackageSelect(pkg.name)}
                className={`w-full text-center py-4 px-6 rounded-lg font-bold muscle-text transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 hover:scale-105 elite-glow'
                    : 'bg-neutral-800 text-primary-400 border border-primary-500/50 hover:bg-primary-500/10'
                }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Custom Packages Info */}
        <div className="text-center mb-16">
          <div className="luxury-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-400 mb-4 muscle-text">Custom Packages</h3>
            <p className="text-neutral-300 mb-6">
              Training session times are arranged directly with trainers, as their schedules vary from week to week.
              All custom packages are available as once-off or recurring.
            </p>
            <div className="text-accent-400 font-bold text-lg">
              One-on-One from R2,160
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-primary-400 mb-12 muscle-text">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="luxury-card p-6">
                <h4 className="text-lg font-bold text-accent-400 mb-3 muscle-text">{faq.question}</h4>
                <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Available Times */}
        <div className="text-center mt-16">
          <div className="luxury-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-400 mb-4 muscle-text">Training Schedule</h3>
            <p className="text-neutral-300 mb-6">
              Available Monday to Sunday, 5AM - 10PM
            </p>
            <p className="text-accent-400 font-bold">
              Sunday sessions by appointment only
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}