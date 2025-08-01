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
        alert(`MESSAGE SENT!

Your inquiry has been received. Expect a response within 24 hours.

Notification sent to tshiamokl@gmail.com`)
      } else {
        alert(`MESSAGE RECEIVED!

Your inquiry has been logged. We'll get back to you within 24 hours.

Note: Email notification is pending (will be sent shortly)`)
      }

      // Reset form
      setFormData({ name: '', email: '', service: '', message: '' })
    } catch (error) {
      alert('Failed to send message. Contact us directly at tshiamokl@gmail.com or +27 635432439')
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
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: "Location",
      info: "Sandton CBD, Gauteng",
      gradient: "from-primary-500 to-accent-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      title: "Phone",
      info: "+27 635432439",
      gradient: "from-accent-500 to-primary-500",
      link: "tel:+27635432439"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: "Email",
      info: "tshiamokl@gmail.com",
      gradient: "from-blue-500 to-blue-600",
      link: "mailto:tshiamokl@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      title: "Instagram",
      info: "@thelift.co",
      gradient: "from-pink-500 to-purple-500",
      link: "https://instagram.com/thelift.co"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 sm:mb-8 muscle-text">
            LET'S TALK RESULTS
          </h2>
          <div className="section-divider mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
            Ready to transform your body and life? Let's discuss your goals and create a plan 
            that delivers serious results. No time wasters—serious inquiries only.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto px-4 sm:px-0">
          {/* Contact Form */}
          <div className="strength-card p-4 sm:p-6 lg:p-8 fitness-glow">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-primary-400 muscle-text">GET STARTED NOW</h3>
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
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="strength-card p-8 fitness-glow">
              <h3 className="text-3xl font-bold mb-8 text-accent-400 muscle-text">CONTACT INFO</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Component = item.link ? 'a' : 'div'
                  const linkProps = item.link ? {
                    href: item.link,
                    target: item.link.startsWith('http') ? '_blank' : undefined,
                    rel: item.link.startsWith('http') ? 'noopener noreferrer' : undefined
                  } : {}

                  return (
                    <Component
                      key={index}
                      className="flex items-start space-x-4 group cursor-pointer"
                      {...linkProps}
                    >
                      <div className={`bg-gradient-to-r ${item.gradient} p-4 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-primary-500/30 text-white`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-neutral-200 group-hover:text-primary-400 transition-colors duration-300 muscle-text uppercase tracking-wide">
                          {item.title}
                        </h4>
                        <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 font-medium">
                          {item.info}
                        </p>
                      </div>
                    </Component>
                  )
                })}
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
              <h4 className="text-2xl font-bold mb-4 text-accent-400 muscle-text">ELITE SESSION</h4>
              <p className="text-neutral-300 mb-6 font-medium">
                Book your premium elite training session now. Includes complimentary consultation
                and personalized program design.
              </p>
              <div className="space-y-4">
                <a
                  href="https://wa.me/27635432439?text=Hi! I'm interested in booking a training session with The Lift Co. Can you help me get started?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center py-4 block muscle-text text-lg bg-green-600 hover:bg-green-700 from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 border border-green-500/30 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WHATSAPP DIRECT</span>
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
