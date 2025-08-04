'use client'

import { useState } from 'react'
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Instagram, 
  Facebook,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function CleanContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', goals: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+27 63 543 2439",
      description: "Fastest response",
      action: () => window.open('https://wa.me/27635432439', '_blank'),
      color: "text-green-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+27 63 543 2439",
      description: "Direct calls",
      action: () => window.location.href = 'tel:+27635432439',
      color: "text-blue-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "tshiamokl@gmail.com",
      description: "Detailed inquiries",
      action: () => window.location.href = 'mailto:tshiamokl@gmail.com',
      color: "text-primary-400"
    }
  ]

  const businessInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Sandton CBD, Gauteng"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Hours",
      value: "Mon-Fri: 6AM-8PM, Sat-Sun: 8AM-6PM"
    }
  ]

  const socialLinks = [
    {
      platform: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://wa.me/27635432439",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      platform: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/theliftco",
      color: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
    },
    {
      platform: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://facebook.com/theliftco",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      platform: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:tshiamokl@gmail.com",
      color: "bg-gray-600 hover:bg-gray-700"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(227,181,71,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">Get In Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              <span className="text-white">Start Your </span>
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
            
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your life? Get in touch to discuss your goals and start your fitness journey with expert guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary-400 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="+27 xxx xxx xxxx"
                    />
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-neutral-300 mb-2">
                      Fitness Goals *
                    </label>
                    <select
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select your primary goal</option>
                      <option value="weight-loss">Weight Loss</option>
                      <option value="muscle-gain">Muscle Building</option>
                      <option value="strength">Strength Training</option>
                      <option value="endurance">Endurance/Cardio</option>
                      <option value="general-fitness">General Fitness</option>
                      <option value="sports-specific">Sports Performance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your fitness goals and any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-full font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting 
                        ? 'bg-neutral-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span>Thank you! I'll get back to you within 24 hours.</span>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                      <AlertCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try WhatsApp instead.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Methods */}
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary-400 mb-6">Contact Methods</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <button
                      key={index}
                      onClick={method.action}
                      className="w-full p-4 bg-neutral-800/50 rounded-lg border border-neutral-600 hover:border-primary-500/50 transition-all duration-300 group text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`${method.color} group-hover:scale-110 transition-transform`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-neutral-200 group-hover:text-primary-400 transition-colors">
                            {method.title}
                          </h4>
                          <p className="text-neutral-300 font-medium">{method.value}</p>
                          <p className="text-neutral-400 text-sm">{method.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Business Info */}
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary-400 mb-6">Business Information</h3>
                <div className="space-y-4">
                  {businessInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-primary-400 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-200 mb-1">{info.label}</h4>
                        <p className="text-neutral-300">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary-400 mb-6">Follow & Connect</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 font-medium`}
                    >
                      {social.icon}
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Action */}
              <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary-400 mb-4">Ready to Start?</h3>
                <p className="text-neutral-300 mb-6">
                  Skip the form and get instant access. Your transformation is just one message away.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => window.open('https://wa.me/27635432439?text=Hi%20Tshiamo!%20I%27d%20like%20to%20book%20a%20free%20consultation.', '_blank')}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Direct
                  </button>
                  <button
                    onClick={() => window.location.href = 'tel:+27635432439'}
                    className="w-full border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
