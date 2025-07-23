import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - The Lift Co',
  description: 'Learn about The Lift Co\'s mission, values, and approach to holistic transformation.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-gradient mb-6">
              About The Lift Co
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
              We blend strategy with soul to create authentic transformation
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 mb-6">
                Our Mission
              </h2>
              <div className="section-divider mb-8"></div>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                We speak the language of culture, discipline, and transformation — and we live it. 
                Our multidisciplinary approach ensures that every aspect of your growth is carefully 
                crafted and authentically delivered.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Whether you're looking to transform your body, elevate your business, or amplify 
                your brand, we provide the strategic foundation and creative execution to make it happen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Authentic Growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Strategic Foundation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Creative Execution</span>
                </div>
              </div>
            </div>
            
            <div className="relative fade-in-up">
              <div className="glass-effect rounded-4xl p-8 floating-element">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Values</h3>
                <div className="space-y-6">
                  <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                    <h4 className="text-lg font-semibold text-primary-900 mb-2">Authenticity</h4>
                    <p className="text-neutral-600">We believe in genuine transformation that aligns with your true self and values.</p>
                  </div>
                  <div className="bg-accent-50 p-6 rounded-2xl border border-accent-100">
                    <h4 className="text-lg font-semibold text-accent-900 mb-2">Excellence</h4>
                    <p className="text-neutral-600">Every project receives our complete dedication and highest quality standards.</p>
                  </div>
                  <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                    <h4 className="text-lg font-semibold text-primary-900 mb-2">Innovation</h4>
                    <p className="text-neutral-600">We continuously evolve our methods to stay ahead of industry trends.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 mb-6">
              Who We Serve
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our clients are ambitious individuals and brands who value originality, community, and measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Young Professionals",
                description: "Career-focused individuals seeking personal and professional growth",
                age: "21-35",
                icon: "👔"
              },
              {
                title: "Creatives",
                description: "Artists, designers, and content creators building their brand",
                age: "21-45",
                icon: "🎨"
              },
              {
                title: "Entrepreneurs",
                description: "Business owners and startup founders scaling their ventures",
                age: "25-55",
                icon: "🚀"
              },
              {
                title: "Established Brands",
                description: "Companies looking to refresh and amplify their market presence",
                age: "All Stages",
                icon: "🏢"
              }
            ].map((segment, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl card-hover fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-4 text-center">{segment.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">{segment.title}</h3>
                <p className="text-neutral-600 text-center mb-4 text-sm leading-relaxed">{segment.description}</p>
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium text-center">
                  {segment.age}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom text-center fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the movement of individuals and brands experiencing authentic, strategic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary-900 font-semibold py-4 px-8 rounded-xl hover:bg-neutral-100 transform hover:scale-105 transition-all duration-300">
              Start Your Journey
            </a>
            <a href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
