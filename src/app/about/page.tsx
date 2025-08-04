import About from '@/components/About'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Tshiamo Sookane - Elite Personal Trainer | The Lift Co',
  description: 'Learn about Tshiamo Sookane, HFPA certified personal trainer with 5+ years experience in Sandton CBD. Discover his training philosophy and approach to fitness transformation.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <About />
      <Footer />
    </main>
  )
}
