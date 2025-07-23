export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-blue-50 pt-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-primary-900 mb-6">
            Built to Boost
          </h1>
          <div className="text-2xl md:text-3xl font-medium text-primary-700 mb-8 space-y-2">
            <p>Strategic Moves.</p>
            <p>Creative Lifts.</p>
          </div>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We blend strategy with soul. The Lift Co is not just a service — it's a movement. 
            Our multidisciplinary edge allows us to uniquely uplift every layer of your life and business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary text-lg px-8 py-4">
              Get Started
            </a>
            <a href="#about" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
