import EnhancedContact from '@/components/EnhancedContact'
import FAQ from '@/components/FAQ'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact Tshiamo Sookane - Personal Trainer Sandton | The Lift Co',
  description: 'Get in touch with personal trainer Tshiamo Sookane in Sandton CBD. Book your free consultation, ask questions, or schedule training sessions.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EnhancedContact />
      <FAQ />
      <Footer />
    </main>
  )
}
