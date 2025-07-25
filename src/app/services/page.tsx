import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  const services = [
    {
      title: "Personal Training & Fitness",
      description: "Transform your body with certified personal training and wellness coaching tailored to your goals.",
      features: [
        "One-on-one personal training sessions",
        "Group fitness classes",
        "Nutrition planning and guidance",
        "Fitness assessments and progress tracking",
        "Specialized training programs",
        "Wellness coaching and lifestyle optimization"
      ],
      icon: "💪",
      price: "From R300/session",
      duration: "45-60 minutes"
    },
    {
      title: "Brand Development",
      description: "Elevate your brand with strategic development, creative direction, and authentic storytelling.",
      features: [
        "Brand strategy and positioning",
        "Logo and visual identity design",
        "Brand messaging and voice",
        "Marketing material design",
        "Digital brand presence",
        "Brand guidelines and standards"
      ],
      icon: "🎨",
      price: "From R5,000/project",
      duration: "2-8 weeks"
    },
    {
      title: "Business Strategy",
      description: "Grow your business with proven strategies, project management, and operational excellence.",
      features: [
        "Business plan development",
        "Market research and analysis",
        "Project management consulting",
        "Process optimization",
        "Growth strategy planning",
        "Performance metrics and KPIs"
      ],
      icon: "📈",
      price: "From R2,500/consultation",
      duration: "1-12 weeks"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-primary-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We specialize in holistic transformation - uplifting every layer of your life and business 
              through strategic moves and creative lifts.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-6xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold font-heading text-primary-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-accent-600 font-semibold">{service.price}</span>
                    <span className="text-gray-500 text-sm">{service.duration}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-primary-900 mb-4">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <a 
                    href="#contact" 
                    className="btn-primary w-full block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the movement. Experience the unique blend of strategy, creativity, and authentic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="btn-secondary text-lg px-8 py-4">
                Book Consultation
              </a>
              <a href="/about" className="bg-white/20 hover:bg-white/30 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
