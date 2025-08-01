'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#services' },
    { name: 'Trainer', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ]

  const programs = [
    { name: 'Elite Personal Training', href: '#services' },
    { name: 'Brand Dominance', href: '#services' },
    { name: 'Business Powerhouse', href: '#services' },
    { name: 'Consultation', href: '#contact' },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/thelift.co',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'from-primary-500 to-accent-500'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/27635432439',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      color: 'from-accent-500 to-fitness-power'
    },
    {
      name: 'Email',
      href: 'mailto:tshiamokl@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      color: 'from-fitness-power to-primary-600'
    },
    {
      name: 'Phone',
      href: 'tel:+27635432439',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      color: 'from-primary-600 to-accent-500'
    }
  ]

  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-t border-neutral-800">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-primary-500/30 bg-white/10 backdrop-blur-sm">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F08e7771950634f09bf5906b11a6d0d83?format=webp&width=800"
                  alt="The Lift Co Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-primary-400 muscle-text">THE LIFT CO</h3>
                <p className="text-xs sm:text-sm text-accent-400 font-bold uppercase tracking-wider">Elite Training Excellence</p>
              </div>
            </div>
              
              <p className="text-neutral-300 mb-6 max-w-md leading-relaxed font-medium">
                Elite personal training that delivers serious results. No shortcuts, no excuses—
                just proven methods that transform bodies and build champions. 
                Your strongest self is waiting.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center hover:scale-110 transform transition-all duration-300 group border border-primary-500/30`}
                    aria-label={social.name}
                  >
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-primary-400 mb-6 muscle-text uppercase tracking-wide">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-bold text-accent-400 mb-6 muscle-text uppercase tracking-wide">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <a
                      href={program.href}
                      className="text-neutral-300 hover:text-accent-400 transition-colors duration-300 hover:translate-x-1 transform inline-block font-medium"
                    >
                      {program.name}
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
            <h4 className="text-3xl font-bold text-primary-400 mb-4 muscle-text">JOIN THE ELITE</h4>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto font-medium">
              Get exclusive training tips, nutrition guides, and be first to know about new programs. 
              Elite content for serious people only.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-4 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent font-medium"
              />
              <button className="btn-primary px-8 py-4 whitespace-nowrap muscle-text">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm font-medium">
              © {currentYear} The Lift Co. All rights reserved. Built for elite transformation.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 font-medium">
                Terms of Service
              </a>
              <a href="/#contact" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 font-medium">
                Support
              </a>
            </div>
          </div>
        </div>

        {/* Training Hours */}
        <div className="py-6 border-t border-neutral-800/50">
          <div className="text-center">
            <h5 className="text-lg font-bold text-accent-400 mb-4 muscle-text">TRAINING HOURS</h5>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-neutral-300">
              <span className="font-medium">Mon-Fri: <span className="text-primary-400 font-bold">06:00-20:00</span></span>
              <span className="font-medium">Saturday: <span className="text-primary-400 font-bold">08:00-16:00</span></span>
              <span className="font-medium">Sunday: <span className="text-accent-400 font-bold">By Appointment</span></span>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <a
            href="/#contact"
            className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 fitness-glow group border border-primary-500/30"
          >
            <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>


      </div>
    </footer>
  )
}
