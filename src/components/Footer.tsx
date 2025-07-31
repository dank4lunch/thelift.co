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
      icon: '📱',
      color: 'from-primary-500 to-accent-500'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/27635432439',
      icon: '📱',
      color: 'from-accent-500 to-fitness-power'
    },
    {
      name: 'Email',
      href: 'mailto:tshiamokl@gmail.com',
      icon: '✉️',
      color: 'from-fitness-power to-primary-600'
    },
    {
      name: 'Phone',
      href: 'tel:+27635432439',
      icon: '📞',
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
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
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
              © {currentYear} The Lift Co. All rights reserved. Built for elite transformation. 💪
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
            href="#contact"
            className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 fitness-glow group border border-primary-500/30"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📱</span>
          </a>
        </div>


      </div>
    </footer>
  )
}
