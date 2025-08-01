'use client'

export default function TrainingPackages() {
  const packages = [
    {
      name: "PT Intro Pack",
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
      name: "PT Six Pack",
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
      name: "Monthly One-on-One Pack",
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

  const handleBuyNow = (packageName: string) => {
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
            <div
              key={pkg.name}
              className={`relative transform hover:scale-105 transition-all duration-300 ${
                pkg.highlight 
                  ? 'strength-card p-8 bg-gradient-to-br from-primary-500/30 to-accent-500/30 border-2 border-primary-500 shadow-2xl' 
                  : 'strength-card p-6 hover:border-primary-500/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
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
                <h3 className="text-2xl font-bold text-primary-400 mb-2 muscle-text">
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
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-neutral-950" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-neutral-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleBuyNow(pkg.name)}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 muscle-text ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 shadow-lg hover:shadow-xl border border-primary-400/50'
                    : 'bg-gradient-to-r from-neutral-700 to-neutral-600 text-white hover:from-primary-500 hover:to-accent-500 hover:text-neutral-950 border border-neutral-600 hover:border-primary-500'
                }`}
              >
                Buy Now
              </button>

              {/* Contact Alternative */}
              <div className="text-center mt-4">
                <p className="text-sm text-neutral-400">
                  Questions? 
                  <a 
                    href={`https://wa.me/27635432439?text=Hi! I have questions about the ${pkg.name}. Can you help?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 ml-1 font-medium"
                  >
                    Contact me
                  </a>
                </p>
              </div>
            </div>
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
    </section>
  )
}
