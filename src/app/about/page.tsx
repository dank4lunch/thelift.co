import About from '@/components/About'
import Founder from '@/components/Founder'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Tshiamo Sookane | Elite Personal Trainer Gauteng - The Lift Co',
  description: 'Meet Tshiamo Sookane, elite personal trainer serving all Gauteng areas with 10+ years experience, 500+ transformations, and 98% success rate. Available in Johannesburg, Pretoria, Sandton, Centurion, Midrand.',
  keywords: 'Tshiamo Sookane personal trainer Gauteng, elite trainer Johannesburg, certified personal trainer Pretoria, fitness coach Sandton, personal trainer experience Centurion, body transformation expert Midrand, strength conditioning specialist Randburg, fitness coach credentials Roodepoort',
  openGraph: {
    title: 'About Tshiamo Sookane | Elite Personal Trainer Gauteng',
    description: 'Meet Tshiamo Sookane, elite personal trainer with 10+ years experience and 500+ successful transformations across Gauteng.',
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
