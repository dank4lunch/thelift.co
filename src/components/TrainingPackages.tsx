
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
      originalPrice: "",
      description: "Let's chat about your goals - no pressure, just real talk about where you want to be",
      features: [
        "15-minute honest conversation",
        "Goal setting that actually makes sense",
        "Training preference discussion",
        "Package recommendations based on YOUR needs",
        "Zero sales pressure - I promise"
      ],
      popular: false,
      cta: "Book Your Free Chat",
      personality: "Think of this as a coffee chat (minus the coffee). I want to understand what makes you tick and how I can help you get there."
    },
    {
      name: "PT Starter Pack" as PackageName,
      price: "R1,270",
      originalPrice: "",
      description: "Perfect for testing the waters - let's see if we vibe and get you some quick wins",
      features: [
        "1 comprehensive consultation (we'll dig deeper)",
        "5 x 45-minute training sessions",
        "Personalized workout plan you'll actually follow",
        "Form corrections that prevent injuries",
        "WhatsApp support when you need motivation"
      ],
      popular: true,
      cta: "Let's Get Started",
      personality: "This is my 'let me show you what I'm about' package. By the end, you'll know exactly why people stick with me."
    },
    {
      name: "Elite Monthly" as PackageName,
      price: "R2,160",
      originalPrice: "R2,400",
      description: "For the serious ones - when you're ready to commit to becoming the best version of yourself",
      features: [
        "8 sessions over 1 month (2x per week)",
        "60 minutes per session - no rushing",
        "Custom nutrition guidance",
        "Progress tracking that actually motivates",
        "24/7 WhatsApp support (yes, I answer)",
        "Monthly body composition analysis"
      ],
      popular: false,
      cta: "I'm Ready to Commit",
      personality: "This is where the magic happens. You'll start seeing changes that make you do double-takes in the mirror."
    }
  ]

  const handleBookPackage = (packageName: PackageName) => {
    if (packageName === "Free Consultation") {
      window.open("https://forms.gle/8mz7dZXLcr47QSNG8", "_blank")
    } else {
      setSelectedPackage(packageName)
      setShowPaymentForm(true)
    }
  }

  return (
    <section id="packages" className="section-padding bg-gradient-to-b from-neutral-900 through-neutral-950 to-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 px-4 text-safe">
          <div className="inline-block mb-6">
            <span className="elite-badge">
              GET LIFTED WITH YOUR PERSONAL TRAINER
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8 muscle-text break-words">
            TRAINING PACKAGES
          </h2>
          <div className="section-divider mb-8" />
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-medium">
              Listen, I'm not here to waste your time with cookie-cutter programs. 
              These packages are designed for real people with real goals.
            </p>
            <p className="text-base sm:text-lg text-primary-300 font-semibold">
              Monday to Sunday • 5AM - 10PM • Sundays by appointment
            </p>
            <p className="text-sm text-neutral-400">
              10 years of turning "I can't" into "watch me" • Based in Albermarle, Germiston
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`luxury-card p-8 depth-hover transition-all duration-500 group relative ${
                pkg.popular 
                  ? 'border-2 border-primary-500/50 bg-gradient-to-br from-primary-500/10 to-accent-500/10' 
                  : 'border border-neutral-700/50'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 px-6 py-2 rounded-full text-sm font-bold muscle-text">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary-400 mb-4 muscle-text">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-black text-neutral-100">{pkg.price}</span>
                  {pkg.originalPrice && (
                    <span className="text-lg text-neutral-500 line-through ml-2">{pkg.originalPrice}</span>
                  )}
                </div>
                <p className="text-neutral-300 leading-relaxed font-medium mb-4">
                  {pkg.description}
                </p>
                {pkg.personality && (
                  <blockquote className="text-sm text-primary-300 italic border-l-2 border-primary-500/50 pl-4 mb-6">
                    "{pkg.personality}"
                  </blockquote>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start">
                    <div className="w-5 h-5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-neutral-950" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-neutral-300 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleBookPackage(pkg.name)}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg muscle-text transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 shadow-lg hover:shadow-2xl elite-glow'
                    : 'bg-gradient-to-r from-neutral-700 to-neutral-600 text-neutral-100 hover:from-primary-600 hover:to-accent-600 hover:text-neutral-950'
                }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Personal touch section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="strength-card p-8 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30">
            <h3 className="text-2xl font-bold text-primary-400 mb-6 muscle-text">
              Here's the thing about me...
            </h3>
            <div className="space-y-4 text-neutral-300">
              <p className="text-lg leading-relaxed">
                I'm not your typical trainer who counts reps and walks away. I'm a creative entrepreneur 
                who happens to be obsessed with human transformation - both physical and mental.
              </p>
              <p className="text-base leading-relaxed">
                <strong className="text-accent-400">The Lift Co</strong> is my passion project - it's an amalgamation of holistic creative processes. 
                We're segmented into sport & fitness training and creative marketing services, because why limit ourselves?
              </p>
              <p className="text-base leading-relaxed">
                I do in-person training, online coaching, sports-specific conditioning, digital marketing, 
                event coordination... basically, if it involves lifting people up (literally or figuratively), I'm your guy.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/8mz7dZXLcr47QSNG8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 muscle-text"
              >
                Let's Have That Chat
              </a>
              <a
                href="mailto:tshiamokl@gmail.com"
                className="btn-secondary text-lg px-8 py-4 muscle-text"
              >
                Email Me Direct
              </a>
            </div>
          </div>
        </div>
      </div>

      {showPaymentForm && (
        <PaymentForm
          packageName={selectedPackage!}
          onClose={() => {
            setShowPaymentForm(false)
            setSelectedPackage(null)
          }}
        />
      )}
    </section>
  )
}
