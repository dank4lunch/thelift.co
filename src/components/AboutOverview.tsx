'use client'

export default function AboutOverview() {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="elite-badge">MEET YOUR TRAINER</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
            TSHIAMO SOOKANE
          </h2>
          <div className="section-divider mb-8" />
          
          <div className="luxury-card p-8 mb-8">
            <p className="text-xl text-neutral-300 mb-6 leading-relaxed">
              HFPA Certified trainer with 5+ years of experience transforming lives through science-based fitness programming. 
              Specializing in HIIT, boxing, strength training, and sports conditioning for lasting results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h4 className="text-lg font-bold text-primary-400 mb-2 muscle-text">Expertise</h4>
                <p className="text-neutral-300 text-sm">HIIT, Boxing, Strength Training, Sports Conditioning</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-primary-400 mb-2 muscle-text">Location</h4>
                <p className="text-neutral-300 text-sm">Sandton CBD & Surrounding Areas</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-primary-400 mb-2 muscle-text">Philosophy</h4>
                <p className="text-neutral-300 text-sm">Science-based training with personalized approach</p>
              </div>
            </div>

            <blockquote className="text-lg italic text-primary-300 mb-6 border-l-4 border-primary-500 pl-4">
              "I don't just build bodies. I build legends. Let's make you unstoppable."
            </blockquote>

            <a
              href="/about"
              className="btn-secondary text-lg px-8 py-3 muscle-text"
            >
              LEARN MORE ABOUT TSHIAMO
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
