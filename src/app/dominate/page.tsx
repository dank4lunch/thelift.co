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
          <TrainerAbout
            aboutText="The Lift.co is an amalgamation of a holistic creative process. It is a segmented business, split into sport and fitness training and creative marketing services. The training is in-person training and online coaching and sports specific training and conditioning, and the creative marketing business extends from digital marketing to event coordination and curation, and everything in between. Based on the talents of one dreamer, who is willing to stand out and service across the spectrum."
            operatingHours="Monday to Sunday: 5 AM - 10 PM, Sunday by appointment."
            packages={[
              {
                name: 'Dominate Program',
                description: "Elite performance training designed for those who refuse to settle for mediocrity. This is where champions are forged.",
                sessions: '12 sessions over 6 weeks',
                duration: '75 min per session',
                price: 'R3 240',
                perSessionPrice: 'R270 per session'
              }
            ]}
            faq={[
              {
                question: "What makes the Dominate program different?",
                answer: "This program is designed for serious athletes and individuals who want to push their limits with advanced training methodologies."
              }
            ]}
            consultationPrice="R500"
          />
          <Specializations />
        </div>
      </main>
      <Footer />
    </>
  )
}