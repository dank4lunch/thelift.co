
import { Metadata } from 'next'
import LandingHero from '@/components/LandingHero'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'
import SkipNav from '@/components/SkipNav'

export const metadata: Metadata = {
  title: 'The Lift Co - Built to Boost Your Potential 💪',
  description: 'Join the movement! Elite personal training, strategic business solutions & creative brand development. Built to Boost. Strategic Moves. Creative Lifts. Transform your body, business & brand with Tshiamo Sookane.',
  keywords: 'elite personal training, fitness transformation, business strategy, brand development, creative solutions, Tshiamo Sookane, The Lift Co, Gauteng fitness coach',
  openGraph: {
    title: 'The Lift Co - Built to Boost Your Potential 💪',
    description: 'Elite fitness training meets strategic business solutions. Transform your body, elevate your brand, boost your business. The movement starts here.',
    type: 'website',
    url: 'https://theliftco.com',
    siteName: 'The Lift Co',
    images: [
      {
        url: '/images/IMG_0253_1754429519057.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tshiamo Sookane - Elite Personal Trainer & Creative Entrepreneur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Lift Co - Built to Boost Your Potential 💪',
    description: 'Elite fitness training meets strategic business solutions. The movement starts here. 🚀',
    images: ['/images/IMG_0253_1754429519057.jpeg'],
    creator: '@thelift.co',
  },
}

export default function RootPage() {
  return (
    <ClientErrorBoundary>
      <SkipNav />
      <Navigation />
      <main>
        <LandingHero />
      </main>
      <Footer />
    </ClientErrorBoundary>
  )
}
