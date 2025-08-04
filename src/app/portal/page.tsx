import ClientPortal from '@/components/ClientPortal'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Client Portal - The Lift Co | Track Your Fitness Progress',
  description: 'Access your personal training progress, workout schedules, and achievements with Tshiamo Sookane at The Lift Co.',
}

export default function PortalPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ClientPortal />
      <Footer />
    </main>
  )
}
