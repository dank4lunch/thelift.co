import Hero from '@/components/Hero'
import AboutOverview from '@/components/AboutOverview'
import ServicesOverview from '@/components/ServicesOverview'
import Testimonials from '@/components/Testimonials'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutOverview />
      <ServicesOverview />
      <Testimonials />
      <Footer />
    </main>
  )
}
