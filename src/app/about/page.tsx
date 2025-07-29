import About from '@/components/About'
import Founder from '@/components/Founder'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - The Lift Co',
  description: 'Learn about The Lift Co\'s mission, values, and approach to elite training transformation.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <About />
      <Founder />
      <Footer />
    </main>
  )
}
