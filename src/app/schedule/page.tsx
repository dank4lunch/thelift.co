import Schedule from '@/components/Schedule'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Book Training Sessions & Schedule | The Lift Co Sandton',
  description: 'View available training slots and book your personal training sessions with Tshiamo Sookane. Flexible scheduling available in Sandton CBD.',
}

export default function SchedulePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Schedule />
      <Footer />
    </main>
  )
}
