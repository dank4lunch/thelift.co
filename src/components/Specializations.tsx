'use client'

export default function Specializations() {
  const specializations = [
    {
      name: "Bootcamp",
      description: "High-intensity group training sessions designed to push your limits and build mental toughness.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
        </svg>
      ),
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Boxing",
      description: "Combat training that builds strength, coordination, and confidence while providing an intense cardio workout.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7ZM9 8H15V18H9V8Z"/>
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "HIIT",
      description: "High-Intensity Interval Training for maximum calorie burn and improved cardiovascular fitness in minimal time.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 5.5C16.61 5.5 17.5 4.61 17.5 3.5S16.61 1.5 15.5 1.5 13.5 2.39 13.5 3.5 14.39 5.5 15.5 5.5M12.5 8.5L14.38 10.38C14.72 10.72 15 11.38 15 12V22H13V16H11L8.5 14.5L9.5 11.5L12.5 8.5M8 12.5L6 14L7 17H9.5L8.5 13.5L8 12.5M5.91 21H2.91C2.66 21 2.4 20.84 2.28 20.6L1 18L2.39 17.39L3.33 19H5.91V21M22.91 21H19.91V19H22.31L23.25 17.39L24.64 18L23.36 20.6C23.24 20.84 22.98 21 22.73 21H22.91Z"/>
        </svg>
      ),
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Exercise Science",
      description: "Evidence-based training methods backed by scientific research for optimal results and injury prevention.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
        </svg>
      ),
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Personal Training",
      description: "One-on-one customized training sessions tailored to your specific goals, fitness level, and lifestyle.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,8.39C13.57,9.4 15.42,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C12.79,4 13.55,4.12 14.26,4.33C14.09,5.05 14,5.8 14,6.58C14,8.58 14.6,10.43 15.61,12H8.39C9.4,10.43 10,8.58 10,6.58C10,5.8 9.91,5.05 9.74,4.33C10.45,4.12 11.21,4 12,4V2Z"/>
        </svg>
      ),
      color: "from-primary-500 to-accent-500"
    }
  ]

  return (
    <section id="specializations" className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-6 py-3 rounded-full bg-primary-500/10">
              Training Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 muscle-text">
            My Specializations
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover the range of training methods I use to help clients achieve their fitness goals. 
            Each specialization is designed to challenge you and deliver real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specializations.map((spec, index) => (
            <div
              key={spec.name}
              className="strength-card p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${spec.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg`}>
                {spec.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary-400 mb-4 muscle-text group-hover:text-primary-300 transition-colors duration-300">
                {spec.name}
              </h3>
              <p className="text-neutral-300 leading-relaxed font-medium group-hover:text-neutral-200 transition-colors duration-300">
                {spec.description}
              </p>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${spec.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="strength-card p-8 max-w-2xl mx-auto bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/50">
            <h3 className="text-2xl font-bold text-primary-400 mb-4 muscle-text">
              Ready to Experience These Training Methods?
            </h3>
            <p className="text-neutral-300 mb-6 font-medium">
              Book your free consultation and discover which specialization works best for your goals.
            </p>
            <a
              href="https://forms.gle/8mz7dZXLcr47QSNG8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-lg elite-glow transform hover:scale-105 transition-all duration-300"
            >
              <span className="muscle-text">BOOK FREE CONSULTATION</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
