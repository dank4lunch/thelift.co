'use client'

export default function FreeConsultation() {
  const consultationIncludes = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Goals Discussion",
      description: "We'll talk about your fitness aspirations, timeline, and what success looks like for you."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Health Assessment",
      description: "Review any health concerns, injuries, or medical considerations that might affect your training."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H18V0h-2v2H8V0H6v2H4.5C3.12 2 2 3.12 2 4.5v15C2 20.88 3.12 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-15C22 3.12 20.88 2 19.5 2z"/>
        </svg>
      ),
      title: "Lifestyle & Preferences",
      description: "Understand your schedule, training preferences, and lifestyle factors that influence your fitness journey."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Package Recommendations",
      description: "Get personalized recommendations on which training package would work best for your specific needs."
    }
  ]

  return (
    <section id="consultation" className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-6 py-3 rounded-full bg-primary-500/10">
              Free of Charge
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 muscle-text">
            Free 15-Minute Consultation
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Start your fitness journey with confidence. Our complimentary consultation helps us understand 
            your goals and creates the perfect training plan for your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* What's Included */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-400 mb-6 muscle-text">
                What's Included in Your Consultation:
              </h3>
              <div className="space-y-6">
                {consultationIncludes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-neutral-950 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary-300 mb-2 muscle-text group-hover:text-primary-200 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-neutral-300 font-medium leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div className="strength-card p-8 bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/50">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-neutral-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-400 mb-2 muscle-text">
                  100% Free, No Commitment
                </h3>
                <p className="text-neutral-300 font-medium">
                  This consultation is completely free with no strings attached. 
                  It's my way of ensuring we're the right fit for each other.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://forms.gle/8mz7dZXLcr47QSNG8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center py-4 block text-lg elite-glow transform hover:scale-105 transition-all duration-300"
                >
                  <span className="muscle-text">BOOK FREE CONSULTATION</span>
                </a>
                
                <div className="text-center">
                  <p className="text-sm text-neutral-400 mb-2">Or contact me directly:</p>
                  <a
                    href="https://wa.me/27635432439?text=Hi! I'd like to book my free 15-minute consultation. When are you available?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center py-3 block luxury-glow bg-green-600 hover:bg-green-700 from-green-600 to-green-700 hover:from-green-500 hover:to-green-600"
                  >
                    <span className="muscle-text">WhatsApp Direct</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="strength-card p-6 bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/50">
              <h4 className="text-lg font-bold text-accent-400 mb-4 muscle-text">
                Why Book Your Free Consultation?
              </h4>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="font-medium">Get expert advice tailored to your goals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="font-medium">Learn about the most effective training methods</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="font-medium">Understand what package suits your lifestyle</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="font-medium">No pressure, just valuable insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
