import Hero from '@/components/Hero'
import InstagramShowcase from '@/components/InstagramShowcase'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <InstagramShowcase />
      <Contact />
      <Footer />
    </main>
  )
}
