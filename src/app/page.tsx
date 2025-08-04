import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import FitnessPlans from '@/components/FitnessPlans'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import Schedule from '@/components/Schedule'
import Payment from '@/components/Payment'
import FAQ from '@/components/FAQ'
import BusinessOverview from '@/components/BusinessOverview'
import Founder from '@/components/Founder'
import EnhancedContact from '@/components/EnhancedContact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <FitnessPlans />
      <Testimonials />
      <Gallery />
      <Schedule />
      <Payment />
      <FAQ />
      <BusinessOverview />
      <Founder />
      <EnhancedContact />
      <Footer />
    </main>
  )
}
