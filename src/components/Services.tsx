export default function Services() {
  const services = [
    {
      title: "Personal Training & Fitness",
      description: "Transform your body with certified personal training and wellness coaching tailored to your goals.",
      features: ["Certified Personal Training", "Wellness Coaching", "Fitness Assessments", "Nutrition Guidance"],
      icon: "💪"
    },
    {
      title: "Brand Development",
      description: "Elevate your brand with strategic development, creative direction, and authentic storytelling.",
      features: ["Brand Strategy", "Visual Identity", "Creative Direction", "Market Positioning"],
      icon: "🎨"
    },
    {
      title: "Business Strategy",
      description: "Grow your business with proven strategies, project management, and operational excellence.",
      features: ["Project Management", "Business Development", "Strategic Planning", "Process Optimization"],
      icon: "📈"
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 mb-6">
            What We Specialize In
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our multidisciplinary edge allows us to uniquely uplift every layer of your life and business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold font-heading text-primary-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-accent-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary text-lg px-8 py-4">
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  )
}
