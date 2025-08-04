'use client'

import { Clock, Users, Target, Star } from 'lucide-react'

export default function ServicesOverview() {
  const serviceHighlights = [
    {
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your specific goals and fitness level',
      duration: '45-60 min sessions',
      type: 'Individual'
    },
    {
      title: 'HIIT Training',
      description: 'High-intensity workouts for maximum calorie burn and fitness gains',
      duration: '30-45 min sessions',
      type: 'Individual/Group'
    },
    {
      title: 'Boxing Fitness',
      description: 'Boxing-based workouts combining cardio, strength, and technique',
      duration: '45 min sessions',
      type: 'Individual/Group'
    }
  ]

  const quickStats = [
    { number: '100+', label: 'Clients Trained' },
    { number: '5+', label: 'Years Experience' },
    { number: '95%', label: 'Success Rate' },
    { number: '5.0', label: 'Client Rating' }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="elite-badge">ELITE TRAINING SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
            TRANSFORM YOUR BODY
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Professional personal training services in Sandton CBD. Specialized programs designed to deliver real results.
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {serviceHighlights.map((service, index) => (
            <div key={index} className="luxury-card p-6 text-center">
              <h3 className="text-xl font-bold text-primary-400 mb-4 muscle-text">
                {service.title}
              </h3>
              <p className="text-neutral-300 mb-4">
                {service.description}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2 text-accent-400">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </div>
                <div className="flex items-center justify-center gap-2 text-accent-400">
                  <Users className="w-4 h-4" />
                  {service.type}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold premium-text mb-2 muscle-text">
                {stat.number}
              </div>
              <div className="text-neutral-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="luxury-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-400 mb-4 muscle-text">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-neutral-300 mb-6">
              Book your free consultation or explore our complete service offerings and training packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfdujG_QCb1auGWGglp6o37N8TBJaed7Dn0EJ785iM4oq9Mzg/viewform?usp=send_form', '_blank')}
                className="btn-primary text-lg px-8 py-3 muscle-text"
              >
                FREE CONSULTATION
              </button>
              <a
                href="/services"
                className="btn-secondary text-lg px-8 py-3 muscle-text"
              >
                VIEW ALL SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
