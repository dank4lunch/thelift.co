import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
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
      <Founder />
      <Contact />
      <Footer />
    </main>
  )
}
