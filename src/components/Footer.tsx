export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4">The Lift Co</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Built to Boost. Strategic Moves. Creative Lifts. We blend strategy with soul 
              to uniquely uplift every layer of your life and business.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/thelift.co" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-500 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.74-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-accent-500 transition-colors duration-200">Personal Training</a></li>
              <li><a href="#services" className="hover:text-accent-500 transition-colors duration-200">Brand Development</a></li>
              <li><a href="#services" className="hover:text-accent-500 transition-colors duration-200">Business Strategy</a></li>
              <li><a href="#services" className="hover:text-accent-500 transition-colors duration-200">Project Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Johannesburg, South Africa</li>
              <li>+27 635432439</li>
              <li>tshiamokl@gmail.com</li>
              <li>@thelift.co</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Lift Co. All rights reserved.</p>
          <p className="mt-2 text-sm">Built to Boost. Strategic Moves. Creative Lifts.</p>
        </div>
      </div>
    </footer>
  )
}
