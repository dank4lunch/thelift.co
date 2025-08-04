import Hero from '@/components/Hero'
import About from '@/components/About'
import ServicesOverview from '@/components/ServicesOverview'
import Testimonials from '@/components/Testimonials'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ServicesOverview />
      <Testimonials />
      <Footer />
    </main>
  )
}
