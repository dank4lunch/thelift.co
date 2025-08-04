import Services from '@/components/Services'
import FitnessPlans from '@/components/FitnessPlans'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Personal Training Services & Packages | The Lift Co Sandton',
  description: 'Explore our personal training packages, HIIT sessions, boxing, and sports conditioning services. Free consultation available with certified trainer Tshiamo Sookane.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Services />
      <FitnessPlans />

      {/* Quick Navigation */}
      <section className="py-12 bg-neutral-950">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-400 mb-6 muscle-text">
              Ready to Get Started?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule" className="btn-primary px-8 py-3 muscle-text">
                BOOK A SESSION
              </a>
              <a href="/payment" className="btn-secondary px-8 py-3 muscle-text">
                VIEW PRICING
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
