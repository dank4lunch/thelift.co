'use client'

export default function TrainerAbout() {
  return (
    <section id="about-trainer" className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-6 py-3 rounded-full bg-primary-500/10">
              Your Trainer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 muscle-text">
            Meet Tshiamo Sookane
          </h2>
          <div className="section-divider mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* Trainer Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:max-w-full">
                <div className="strength-card p-6 bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/50">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F08e7771950634f09bf5906b11a6d0d83?format=webp&width=800"
                    alt="Tshiamo Sookane - Personal Trainer in Sandton"
                    className="w-full h-96 object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Qualification Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 px-6 py-4 rounded-xl shadow-xl elite-glow">
                <div className="text-center">
                  <div className="text-sm font-bold uppercase tracking-wider">Certified</div>
                  <div className="text-xs font-medium">HFPA Exercise Science</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trainer Info */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400 mb-4 muscle-text">
                Higher Certificate in Exercise Science (HFPA)
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed font-medium mb-6">
                Based in Sandton CBD, Gauteng, I specialize in transforming lives through science-backed fitness programs. 
                With my Higher Certificate in Exercise Science from HFPA, I bring both knowledge and passion to every training session.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://wa.me/27635432439"
                target="_blank"
                rel="noopener noreferrer"
                className="strength-card p-4 text-center hover:scale-105 transition-all duration-300 bg-green-600/20 border-green-500/50"
              >
                <div className="w-8 h-8 mx-auto mb-2 text-green-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div className="text-sm font-bold text-green-400">WhatsApp</div>
                <div className="text-xs text-neutral-400 mt-1">Instant Response</div>
              </a>

              <a
                href="mailto:Tshiamokl@gmail.com"
                className="strength-card p-4 text-center hover:scale-105 transition-all duration-300 bg-blue-600/20 border-blue-500/50"
              >
                <div className="w-8 h-8 mx-auto mb-2 text-blue-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="text-sm font-bold text-blue-400">Email</div>
                <div className="text-xs text-neutral-400 mt-1">Professional</div>
              </a>

              <a
                href="https://instagram.com/thelift.co"
                target="_blank"
                rel="noopener noreferrer"
                className="strength-card p-4 text-center hover:scale-105 transition-all duration-300 bg-pink-600/20 border-pink-500/50"
              >
                <div className="w-8 h-8 mx-auto mb-2 text-pink-400">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-sm font-bold text-pink-400">Instagram</div>
                <div className="text-xs text-neutral-400 mt-1">@thelift.co</div>
              </a>
            </div>

            {/* Location */}
            <div className="strength-card p-6 bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-neutral-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-accent-400 muscle-text">Training Location</h4>
                  <p className="text-neutral-300 font-medium">Sandton CBD, Gauteng</p>
                  <p className="text-sm text-neutral-400">South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
