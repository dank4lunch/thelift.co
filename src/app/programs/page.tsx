
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'

export const metadata: Metadata = {
  title: 'Elite Programs - Transform Your Life & Business | The Lift Co 💪',
  description: 'Elite Personal Training, Brand Dominance & Business Powerhouse programs. Transform your fitness, elevate your brand, and dominate your market with our premium programs.',
  keywords: 'elite personal training, brand dominance, business powerhouse, fitness programs, brand development, business coaching',
}

export default function ProgramsPage() {
  const programs = [
    {
      title: "Elite Personal Training",
      subtitle: "Transform Your Body & Mind",
      description: "Premium 1-on-1 fitness coaching designed for high achievers who demand excellence. Build strength, confidence, and the elite physique you deserve.",
      features: [
        "Personalized training programs",
        "Nutrition optimization",
        "Progress tracking & analytics", 
        "24/7 coach support",
        "Exclusive member benefits"
      ],
      price: "From R2,500/month",
      image: "/images/IMG_0253_1754429519057.jpeg",
      gradient: "from-primary-600 to-primary-400",
      link: "https://forms.gle/8mz7dZXLcr47QSNG8"
    },
    {
      title: "Brand Dominance",
      subtitle: "Elevate Your Brand Identity",
      description: "Strategic brand development and creative direction that positions you as the leader in your industry. Build a brand that commands respect and drives results.",
      features: [
        "Brand strategy & positioning",
        "Visual identity design",
        "Digital presence optimization",
        "Content strategy & creation",
        "Market positioning"
      ],
      price: "From R5,000/month",
      image: "/images/IMG_0251_1754425972318.png",
      gradient: "from-accent-600 to-accent-400",
      link: "https://forms.gle/8mz7dZXLcr47QSNG8"
    },
    {
      title: "Business Powerhouse",
      subtitle: "Scale Your Empire",
      description: "Comprehensive business coaching and strategic consulting for entrepreneurs ready to dominate their market and build lasting success.",
      features: [
        "Business strategy development",
        "Operations optimization",
        "Revenue growth systems",
        "Leadership coaching",
        "Market expansion planning"
      ],
      price: "From R10,000/month",
      image: "/images/IMG_0252_1754425972318.png",
      gradient: "from-primary-400 to-accent-500",
      link: "https://forms.gle/8mz7dZXLcr47QSNG8"
    }
  ]

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

          <div className="text-center max-w-6xl mx-auto relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-500 to-primary-400 muscle-text leading-tight">
              ELITE PROGRAMS
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-neutral-300 mb-8 sm:mb-12 font-bold uppercase tracking-wider">
              Transform Your Life & Dominate Your Market
            </p>
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose your path to greatness. Whether you're ready to transform your body, elevate your brand, or scale your business — we have the elite program to get you there.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 p-8">
                    {/* Program Content */}
                    <div className="mb-6">
                      <span className="bg-primary-500 text-neutral-950 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4 inline-block">
                        Elite
                      </span>
                    </div>

                    <h3 className="text-2xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 muscle-text uppercase tracking-wide">
                      {program.title}
                    </h3>
                    <p className="text-primary-400 font-bold mb-4 uppercase tracking-wider text-sm">
                      {program.subtitle}
                    </p>
                    <p className="text-neutral-300 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-bold text-neutral-200 mb-4 uppercase tracking-wide">What's Included:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-neutral-400">
                            <span className="text-primary-400 mr-3">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-primary-400 muscle-text">
                        {program.price}
                      </span>
                      <a
                        href={program.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary px-6 py-3 muscle-text group-hover:scale-110 transition-transform duration-300"
                      >
                        START NOW
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-950 to-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 muscle-text uppercase">
              Not Sure Which Program?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
              Book a free consultation and let's discuss which elite program will accelerate your success.
            </p>
            <a
              href="https://forms.gle/8mz7dZXLcr47QSNG8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-12 py-4 elite-glow muscle-text hover:scale-105 transition-all duration-300"
            >
              BOOK FREE CONSULTATION
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
