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
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', service: '', message: '' })
    setIsSubmitting(false)
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
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "Johannesburg, South Africa",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+27 635432439",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "tshiamokl@gmail.com",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.74-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z"/>
        </svg>
      ),
      title: "Instagram",
      value: "@thelift.co",
      gradient: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black font-heading text-white mb-6 transform hover:scale-105 transition-transform duration-500"
              style={{ textShadow: '0 0 30px rgba(255,255,255,0.5)' }}>
            Talk To <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your journey? Let's discuss how we can help transform your goals into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enhanced Contact Form */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 transform hover:scale-105 transition-all duration-500"
                 style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>
              <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning={true}>
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning={true}
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-xl transition-all duration-300 group-hover:bg-white/15"
                    placeholder="Your name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning={true}
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-xl transition-all duration-300 group-hover:bg-white/15"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning={true}
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-xl transition-all duration-300 group-hover:bg-white/15"
                  >
                    <option value="" className="bg-gray-900 text-white">Select a service</option>
                    <option value="personal-training" className="bg-gray-900 text-white">Personal Training & Fitness</option>
                    <option value="brand-development" className="bg-gray-900 text-white">Brand Development</option>
                    <option value="business-strategy" className="bg-gray-900 text-white">Business Strategy</option>
                    <option value="consultation" className="bg-gray-900 text-white">General Consultation</option>
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    suppressHydrationWarning={true}
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-xl transition-all duration-300 group-hover:bg-white/15 resize-none"
                    placeholder="Tell us about your goals and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold py-4 px-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ boxShadow: '0 15px 35px rgba(168,85,247,0.4)' }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 transform hover:scale-105 transition-all duration-500"
                 style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>
              <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Get in touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                    <div className={`bg-gradient-to-r ${info.gradient} p-4 rounded-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                         style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coming Soon Section */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h4 className="text-lg font-bold text-white">Coming Soon</h4>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our full website and Linktree are launching soon. Stay connected for updates!
              </p>
              <div className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text font-bold">
                Website: Coming soon...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
