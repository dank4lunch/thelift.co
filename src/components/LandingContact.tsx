
'use client'

import { useState } from 'react'

export default function LandingContact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    program: '',
    goals: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = `Training Inquiry from ${formData.fullName}`
    const body = `
Name: ${formData.fullName}
Email: ${formData.email}
Program Interest: ${formData.program}
Goals: ${formData.goals}
    `.trim()
    
    const mailtoLink = `mailto:tshiamokl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500/8 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto px-4 text-safe">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="elite-badge">
                READY TO START?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 muscle-text">
              LET'S TALK RESULTS
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Ready to transform your body and life? Let's discuss your goals and create a plan 
              that delivers serious results. No time wasters—serious inquiries only.
            </p>
          </div>

          <div className="luxury-card p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-primary-400 mb-6 muscle-text">
              GET STARTED NOW
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-bold text-neutral-300 mb-2 uppercase tracking-wider">
                  FULL NAME
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-neutral-800/50 border border-neutral-600 rounded-lg px-4 py-3 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-neutral-300 mb-2 uppercase tracking-wider">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-neutral-800/50 border border-neutral-600 rounded-lg px-4 py-3 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-bold text-neutral-300 mb-2 uppercase tracking-wider">
                  PROGRAM INTEREST
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-neutral-800/50 border border-neutral-600 rounded-lg px-4 py-3 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a program</option>
                  <option value="Free Consultation">Free Consultation</option>
                  <option value="PT Six Pack">PT Six Pack</option>
                  <option value="One-on-One Monthly">One-on-One Monthly</option>
                  <option value="Custom Package">Custom Package</option>
                </select>
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-bold text-neutral-300 mb-2 uppercase tracking-wider">
                  YOUR GOALS
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  placeholder="Tell me about your fitness goals and what you want to achieve..."
                  rows={4}
                  required
                  className="w-full bg-neutral-800/50 border border-neutral-600 rounded-lg px-4 py-3 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 elite-glow muscle-text tracking-wide"
              >
                SEND MESSAGE
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-neutral-700/50 text-center">
              <p className="text-neutral-400 text-sm mb-4">
                Or reach out directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+27635432439"
                  className="text-primary-400 hover:text-primary-300 font-bold transition-colors duration-300"
                >
                  📞 063 543 2439
                </a>
                <a
                  href="mailto:tshiamokl@gmail.com"
                  className="text-primary-400 hover:text-primary-300 font-bold transition-colors duration-300"
                >
                  ✉️ tshiamokl@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
