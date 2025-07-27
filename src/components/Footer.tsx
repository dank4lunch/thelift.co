'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Founder', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    { name: 'Personal Training', href: '#services' },
    { name: 'Brand Development', href: '#services' },
    { name: 'Business Strategy', href: '#services' },
    { name: 'Consultation', href: '#contact' },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/thelift.co',
      icon: '📱',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: '💼',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Email',
      href: 'mailto:tshiamokl@gmail.com',
      icon: '✉️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/27635432439',
      icon: '💬',
      color: 'from-green-400 to-green-600'
    }
  ]

  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-t border-neutral-800">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">🚀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-primary-400">The Lift Co</h3>
                  <p className="text-sm text-neutral-400">Built to Boost</p>
                </div>
              </div>
              
              <p className="text-neutral-300 mb-6 max-w-md leading-relaxed">
                We blend strategy with soul. Our multidisciplinary approach ensures authentic growth 
                in your body, business, and brand. Join the movement and experience transformation 
                that actually works.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center hover:scale-110 transform transition-all duration-300 group`}
                    aria-label={social.name}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-accent-400 mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-neutral-300 hover:text-accent-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-neutral-800">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-primary-400 mb-4">Stay in the Loop</h4>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Get exclusive tips, behind-the-scenes content, and be the first to know about new programs and offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Join Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © {currentYear} The Lift Co. All rights reserved. Built with 🔥 for transformation.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#contact" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                Support
              </a>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <a
            href="#contact"
            className="w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 neon-glow group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">💬</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
