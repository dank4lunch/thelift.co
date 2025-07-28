import Hero from '@/components/Hero'
import About from '@/components/About'
import InstagramShowcase from '@/components/InstagramShowcase'
import Services from '@/components/Services'
import BusinessOverview from '@/components/BusinessOverview'
import Founder from '@/components/Founder'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <BusinessOverview />
      <Founder />
      <Contact />
      <Footer />
    </main>
  )
}
