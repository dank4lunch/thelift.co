'use client'

export default function Footer() {
  const services = [
    { name: "Personal Training", icon: "💪", description: "Transform your body" },
    { name: "Brand Development", icon: "🎨", description: "Elevate your presence" },
    { name: "Business Strategy", icon: "📈", description: "Scale your vision" },
    { name: "Creative Direction", icon: "✨", description: "Amplify your story" }
  ]

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Founder", href: "/#founder" },
    { name: "Contact", href: "/#contact" }
  ]

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/thelift.co",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/27635432439",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.894 3.488"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-600/20 to-cyan-600/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Fa11fc95e48c6423b88726372c48e8f21%2F7f1cb837b11f4c358d061a03cfc8826f?format=webp&width=800"
                alt="The Lift Co"
                className="h-16 w-auto object-contain brightness-0 invert mb-6"
                style={{
                  filter: 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(255,255,255,0.5))'
                }}
              />
            </div>
            
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-4">
              Built to Boost
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Where strategy meets soul. We blend creative vision with strategic execution to uniquely 
              uplift every layer of your life and business. Join the movement of authentic transformation.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center bg-white/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-xs text-gray-400">Years</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-400">Brands</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-xs text-gray-400">Lives</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-xl p-3 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 border border-white/20"
                  style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="group">
                  <a href="#services" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                    <span className="text-xl transform group-hover:scale-125 transition-transform duration-300">
                      {service.icon}
                    </span>
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-400">
                        {service.description}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-white">Location</div>
                  <div className="text-sm">Johannesburg, South Africa</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div className="text-sm">+27 635432439</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div className="text-sm">tshiamokl@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="mt-8">
              <a href="#contact" 
                 className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-xl transform transition-all duration-300 hover:scale-105 block text-center"
                 style={{ boxShadow: '0 10px 25px rgba(168,85,247,0.3)' }}>
                <span className="flex items-center justify-center">
                  Start Your Journey
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 mb-12 text-center">
          <h4 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Stay Connected
          </h4>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Be the first to know about new programs, exclusive content, and transformation tips. 
            Join our community of movers and shakers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-xl"
              suppressHydrationWarning={true}
            />
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} The Lift Co. All rights reserved.</p>
              <p className="text-sm mt-1 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Strategic Moves. Creative Lifts. Built to Boost.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
