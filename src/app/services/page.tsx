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
      <Footer />
    </main>
  )
}
