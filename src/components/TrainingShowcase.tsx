
'use client'

export default function TrainingShowcase() {
  const showcaseItems = [
    {
      title: "Elite Training Session",
      description: "View on Instagram",
      icon: "📸"
    },
    {
      title: "Strength & Conditioning", 
      description: "Real training, real results",
      icon: "💪"
    },
    {
      title: "Professional Results",
      description: "Transformation in action",
      icon: "🏆"
    },
    {
      title: "Your Success Story",
      description: "Let's write it together",
      icon: "⭐"
    }
  ]

  return (
    <section id="training-showcase" className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="elite-badge">
              TRAINING IN ACTION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8 muscle-text">
            ELITE RESULTS
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium">
            See the transformation in action. Real training, real results, real commitment to excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="luxury-card p-6 sm:p-8 text-center depth-hover transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => window.open("https://instagram.com/thelift.co", "_blank")}
            >
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary-400 mb-3 muscle-text">
                {item.title}
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base group-hover:text-primary-300 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-400 mb-4 muscle-text">
              Ready to Start Your Journey?
            </h3>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Let's discuss your goals and create a plan that delivers serious results. 
              No time wasters—serious inquiries only.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md mx-auto">
            <a
              href="https://forms.gle/8mz7dZXLcr47QSNG8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base sm:text-lg px-8 py-4 muscle-text"
            >
              GET STARTED NOW
            </a>
            <a
              href="/home#packages"
              className="btn-secondary text-base sm:text-lg px-8 py-4 muscle-text"
            >
              VIEW PACKAGES
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
