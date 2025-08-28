
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
                name: 'One-on-One',
                description: "Whether you want a full-time trainer or you need a few months of training to help you reach one of your short-term goals, you can work with your trainer to select a custom package. This allows you to set the frequency of workouts and duration you'll need them for.",
                sessions: '8 sessions over 1 month',
                duration: '60 min per session',
                price: 'R2 160',
                perSessionPrice: 'R270 per session'
              }
            ]}
            faq={[
              {
                question: 'What makes your training different?',
                answer: 'We provide holistic transformation combining fitness with strategic business guidance.'
              }
            ]}
            consultationPrice="R350"
          />
          <Specializations />
        </div>
      </main>
      <Footer />
    </>
  )
}
