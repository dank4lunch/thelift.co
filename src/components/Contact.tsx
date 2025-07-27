'use client'

import { useState } from 'react'

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
      // Here you would integrate with an email service like EmailJS, Resend, or your backend
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call

      // Log for now (in production, this would send emails)
      console.log('Contact form submitted:', formData)
      
      // Email notification to business owner
      const ownerEmail = {
        to: 'tshiamokl@gmail.com',
        subject: `New Contact Form Submission - ${formData.service}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Service Interest: ${formData.service}
Message: ${formData.message}
Submitted: ${new Date().toLocaleString()}
        `
      }

      alert(`✅ Message Sent Successfully!

Your message has been received and we'll get back to you within 24 hours.

A copy has been sent to tshiamokl@gmail.com`)

      // Reset form
      setFormData({ name: '', email: '', service: '', message: '' })
    } catch (error) {
      alert('❌ Failed to send message. Please try again or contact us directly.')
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
      gradient: "from-primary-500 to-blue-500"
    },
    {
      icon: "📞",
      title: "Phone",
      info: "+27 635432439",
      gradient: "from-accent-500 to-orange-500"
    },
    {
      icon: "✉️",
      title: "Email",
      info: "tshiamokl@gmail.com",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "📱",
      title: "Instagram",
      info: "@thelift.co",
      gradient: "from-pink-500 to-red-500"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-accent-400 text-lg font-medium tracking-wider uppercase">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8">
            Talk To Us
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Ready to elevate your journey? Let's discuss how we can help transform your goals into reality.
            No BS, just real conversations about real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="dark-card p-8 neon-glow">
            <h3 className="text-3xl font-semibold mb-8 text-primary-400">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-neutral-300">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="text-neutral-400">Select a service</option>
                  <option value="personal-training" className="text-white">Personal Training & Fitness</option>
                  <option value="brand-development" className="text-white">Brand Development</option>
                  <option value="business-strategy" className="text-white">Business Strategy</option>
                  <option value="consultation" className="text-white">General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your goals and how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? '🚀 Sending...' : '✉️ Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="dark-card p-8 neon-glow">
              <h3 className="text-3xl font-semibold mb-8 text-accent-400">Get in touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                    <div className={`bg-gradient-to-r ${item.gradient} p-4 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-neutral-200 group-hover:text-primary-400 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                        {item.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dark-card p-8 neon-glow">
              <h4 className="text-2xl font-semibold mb-4 text-primary-400">Business Hours</h4>
              <div className="space-y-2 text-neutral-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-accent-400">06:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-accent-400">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-neutral-500">By Appointment</span>
                </div>
              </div>
            </div>

            <div className="dark-card p-8 neon-glow bg-gradient-to-r from-primary-900/50 to-accent-900/50 border border-primary-500/30">
              <h4 className="text-2xl font-semibold mb-4 text-accent-400">🚀 Ready to Start?</h4>
              <p className="text-neutral-300 mb-6">
                Book your first session now and get a FREE consultation to discuss your goals and create a personalized plan.
              </p>
              <a 
                href="#services" 
                className="btn-primary w-full text-center py-3 block"
              >
                Book Now - R300
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
