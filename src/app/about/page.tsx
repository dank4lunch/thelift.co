import About from '@/components/About'
import Founder from '@/components/Founder'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Tshiamo Sookane | Elite Personal Trainer Sandton CBD - The Lift Co',
  description: 'Meet Tshiamo Sookane, elite personal trainer in Sandton CBD with 10+ years experience, 500+ transformations, and 98% success rate. Certified in strength training, nutrition coaching, and sports psychology.',
  keywords: 'Tshiamo Sookane personal trainer, elite trainer Sandton, certified personal trainer Johannesburg, fitness coach credentials, personal trainer experience, body transformation expert, strength conditioning specialist',
  openGraph: {
    title: 'About Tshiamo Sookane | Elite Personal Trainer Sandton CBD',
    description: 'Meet Tshiamo Sookane, elite personal trainer with 10+ years experience and 500+ successful transformations in Sandton CBD.',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://theliftco.co.za/about',
  },
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
