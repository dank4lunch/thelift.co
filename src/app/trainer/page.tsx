
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'

export const metadata: Metadata = {
  title: 'Meet Tshiamo - Elite Trainer & Business Coach | The Lift Co 🏆',
  description: 'Meet Tshiamo Sookane, elite fitness trainer and business coach. From transforming bodies to building brands and scaling businesses in Johannesburg.',
  keywords: 'Tshiamo Sookane, elite trainer, business coach, fitness coach, Johannesburg, personal trainer, brand coach',
}

export default function TrainerPage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto relative z-10">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-500 to-primary-400 muscle-text leading-tight">
                MEET TSHIAMO
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-accent-400 mb-6 font-bold uppercase tracking-wider">
                Elite Trainer & Business Coach
              </p>
              <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
                The force behind The Lift Co. I don't just transform bodies — I build empires. 
                From elite fitness coaching to strategic brand development and business scaling, 
                I'm here to lift you to greatness in every area of your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://forms.gle/8mz7dZXLcr47QSNG8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-8 py-4 text-lg muscle-text elite-glow"
                >
                  WORK WITH ME
                </a>
                <a
                  href="/about"
                  className="btn-outline px-8 py-4 text-lg muscle-text"
                >
                  MY STORY
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-4 border-primary-500/30 hover:border-primary-500/60 transition-all duration-500 transform hover:scale-105">
                <img 
                  src="/images/IMG_0253_1754429519057.jpeg" 
                  alt="Tshiamo Sookane - Elite Trainer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 muscle-text uppercase">
                EXPERTISE AREAS
              </h2>
              <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto">
                Three pillars of excellence that drive extraordinary results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Elite Fitness */}
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-500 hover:scale-105">
                <div className="text-4xl mb-6">💪</div>
                <h3 className="text-2xl font-black mb-4 text-primary-400 muscle-text uppercase">
                  Elite Fitness
                </h3>
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  Transform your body with personalized training programs designed for high achievers. Build the strength, confidence, and physique of a champion.
                </p>
                <ul className="space-y-2 text-neutral-400">
                  <li className="flex items-center"><span className="text-primary-400 mr-2">•</span> Personalized Programs</li>
                  <li className="flex items-center"><span className="text-primary-400 mr-2">•</span> Nutrition Coaching</li>
                  <li className="flex items-center"><span className="text-primary-400 mr-2">•</span> Progress Tracking</li>
                </ul>
              </div>

              {/* Brand Development */}
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-accent-500/20 hover:border-accent-500/40 transition-all duration-500 hover:scale-105">
                <div className="text-4xl mb-6">🎯</div>
                <h3 className="text-2xl font-black mb-4 text-accent-400 muscle-text uppercase">
                  Brand Development
                </h3>
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  Elevate your brand identity and market presence. Strategic brand development that positions you as the leader in your industry.
                </p>
                <ul className="space-y-2 text-neutral-400">
                  <li className="flex items-center"><span className="text-accent-400 mr-2">•</span> Brand Strategy</li>
                  <li className="flex items-center"><span className="text-accent-400 mr-2">•</span> Visual Identity</li>
                  <li className="flex items-center"><span className="text-accent-400 mr-2">•</span> Market Positioning</li>
                </ul>
              </div>

              {/* Business Coaching */}
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-500 hover:scale-105">
                <div className="text-4xl mb-6">🚀</div>
                <h3 className="text-2xl font-black mb-4 text-primary-400 muscle-text uppercase">
                  Business Coaching
                </h3>
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  Scale your business and dominate your market. Strategic consulting and coaching for entrepreneurs ready to build lasting success.
                </p>
                <ul className="space-y-2 text-neutral-400">
                  <li className="flex items-center"><span className="text-primary-400 mr-2">•</span> Strategic Planning</li>
                  <li className="flex items-center"><span className="text-primary-400 mr-2">•</span> Operations Optimization</li>
                  <li className="flex items-center"><span className="text-primary-400 mr-2">•</span> Revenue Growth</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Results */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-950 to-neutral-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 muscle-text uppercase">
                  PROVEN RESULTS
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-neutral-800/50 rounded-lg p-6 border border-primary-500/20">
                    <div className="text-3xl font-black text-primary-400 mb-2">500+</div>
                    <div className="text-neutral-300 font-medium">Clients Transformed</div>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-6 border border-accent-500/20">
                    <div className="text-3xl font-black text-accent-400 mb-2">100+</div>
                    <div className="text-neutral-300 font-medium">Brands Elevated</div>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-6 border border-primary-500/20">
                    <div className="text-3xl font-black text-primary-400 mb-2">50+</div>
                    <div className="text-neutral-300 font-medium">Businesses Scaled</div>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-6 border border-accent-500/20">
                    <div className="text-3xl font-black text-accent-400 mb-2">10 Years</div>
                    <div className="text-neutral-300 font-medium">Elite Experience</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary-500/30">
                  <img 
                    src="/images/IMG_0242_1754424813561.jpeg" 
                    alt="Tshiamo training session"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 muscle-text uppercase">
              Ready To Level Up?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
              Whether you want to transform your body, elevate your brand, or scale your business — let's make it happen together.
            </p>
            <a
              href="https://forms.gle/8mz7dZXLcr47QSNG8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-12 py-4 elite-glow muscle-text hover:scale-105 transition-all duration-300"
            >
              BOOK YOUR CONSULTATION
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
