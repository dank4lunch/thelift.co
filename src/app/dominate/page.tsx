
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import TrainerAbout from '@/components/TrainerAbout'
import Specializations from '@/components/Specializations'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'

export const metadata: Metadata = {
  title: 'Why We Dominate - Elite Training Excellence 🔥',
  description: 'Discover what sets The Lift Co apart! 10+ years of elite training expertise, specialized techniques, and proven results. See why we dominate the fitness industry in Gauteng.',
  keywords: 'elite personal training, fitness expertise, training specializations, boxing coach, HIIT specialist, strength training expert',
  openGraph: {
    title: 'Why We Dominate - Elite Training Excellence 🔥',
    description: 'Discover what sets The Lift Co apart! Elite training expertise, specialized techniques, and proven results.',
    type: 'website',
  },
}

export default function DominatePage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="pt-20">
          <TrainerAbout />
          <Specializations />
        </div>
      </main>
      <Footer />
    </>
  )
}
