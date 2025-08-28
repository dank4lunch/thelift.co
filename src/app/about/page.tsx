
import Navigation from '@/components/Navigation'
import SkipNav from '@/components/SkipNav'
import About from '@/components/About'
import TrainerAbout from '@/components/TrainerAbout'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Tshiamo - The Visionary Behind The Lift Co',
  description: 'Discover the story of Tshiamo Sookane, elite personal trainer and creative entrepreneur. From fitness transformation to business innovation - meet the dreamer lifting Gauteng up! ✨💪',
  keywords: 'Tshiamo Sookane, personal trainer story, fitness entrepreneur, creative business, holistic training, elite coach background',
  openGraph: {
    title: 'Meet Tshiamo - The Visionary Behind The Lift Co ✨',
    description: 'The story of a dreamer who turned passion into purpose. Meet Tshiamo Sookane - elite trainer, creative entrepreneur, and life transformer.',
    type: 'profile',
    images: [
      {
        url: '/images/IMG_0253_1754429519057.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tshiamo Sookane - Founder of The Lift Co',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="pt-20">
          <About />
          <TrainerAbout />
        </div>
      </main>
      <Footer />
    </>
  )
}
