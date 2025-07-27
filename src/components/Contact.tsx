'use client'

import { useState } from 'react'
import { emailService } from '../utils/emailService'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email notification using email service
      const emailResult = await emailService.sendContactFormNotification(formData)
      
      if (emailResult.success) {
        alert(`💪 MESSAGE SENT!

Your inquiry has been received. Expect a response within 24 hours.

✅ Notification sent to tshiamokl@gmail.com`)
      } else {
        alert(`💪 MESSAGE RECEIVED!

Your inquiry has been logged. We'll get back to you within 24 hours.

Note: Email notification is pending (will be sent shortly)`)
      }

      // Reset form
      setFormData({ name: '', email: '', service: '', message: '' })
    } catch (error) {
      alert('❌ Failed to send message. Contact us directly at tshiamokl@gmail.com or +27 635432439')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      info: "Johannesburg, South Africa",
      gradient: "from-primary-500 to-accent-500"
    },
    {
      icon: "📞",
      title: "Phone",
      info: "+27 635432439",
      gradient: "from-accent-500 to-fitness-power"
    },
    {
      icon: "✉️",
      title: "Email",
      info: "tshiamokl@gmail.com",
      gradient: "from-fitness-power to-primary-600"
    },
    {
      icon: "📱",
      title: "Instagram",
      info: "@thelift.co",
      gradient: "from-primary-600 to-accent-500"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-6 py-3 rounded-full bg-primary-500/10">
              READY TO START?
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8 muscle-text">
            LET'S TALK RESULTS
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Ready to transform your body and life? Let's discuss your goals and create a plan 
            that delivers serious results. No time wasters—serious inquiries only.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="strength-card p-8 fitness-glow">
            <h3 className="text-3xl font-bold mb-8 text-primary-400 muscle-text">GET STARTED NOW</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-neutral-300 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 font-medium"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-neutral-300 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 font-medium"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold mb-2 text-neutral-300 uppercase tracking-wide">
                  Program Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-lg bg-neutral-800 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 font-medium"
                >
                  <option value="" className="text-neutral-400">Select a program</option>
                  <option value="personal-training" className="text-white">Elite Personal Training</option>
                  <option value="brand-development" className="text-white">Brand Dominance</option>
                  <option value="business-strategy" className="text-white">Business Powerhouse</option>
                  <option value="consultation" className="text-white">General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-neutral-300 uppercase tracking-wide">
                  Your Goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-4 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 font-medium"
                  placeholder="Tell us about your goals and what you want to achieve..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none muscle-text text-lg border border-primary-500/30"
              >
                {isSubmitting ? '🚀 SENDING...' : '💪 SEND MESSAGE'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="strength-card p-8 fitness-glow">
              <h3 className="text-3xl font-bold mb-8 text-accent-400 muscle-text">CONTACT INFO</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                    <div className={`bg-gradient-to-r ${item.gradient} p-4 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-primary-500/30`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-neutral-200 group-hover:text-primary-400 transition-colors duration-300 muscle-text uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 font-medium">
                        {item.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="strength-card p-8 fitness-glow">
              <h4 className="text-2xl font-bold mb-4 text-primary-400 muscle-text">TRAINING HOURS</h4>
              <div className="space-y-3 text-neutral-300">
                <div className="flex justify-between font-medium">
                  <span>Monday - Friday:</span>
                  <span className="text-accent-400 font-bold">06:00 - 20:00</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Saturday:</span>
                  <span className="text-accent-400 font-bold">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Sunday:</span>
                  <span className="text-neutral-500">By Appointment</span>
                </div>
              </div>
            </div>

            <div className="strength-card p-8 fitness-glow bg-gradient-to-r from-primary-900/50 to-accent-900/50 border border-primary-500/50">
              <h4 className="text-2xl font-bold mb-4 text-accent-400 muscle-text">💪 FIRST SESSION</h4>
              <p className="text-neutral-300 mb-6 font-medium">
                Book your first elite training session now. Includes FREE consultation
                and personalized program design.
              </p>
              <div className="space-y-4">
                <a
                  href="https://wa.me/27635432439?text=Hi! I'm interested in booking a training session with The Lift Co. Can you help me get started?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center py-4 block muscle-text text-lg bg-green-600 hover:bg-green-700 from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 border border-green-500/30"
                >
                  💬 WHATSAPP DIRECT
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center mt-16">
        </div>
      </div>
    </section>
  )
}
