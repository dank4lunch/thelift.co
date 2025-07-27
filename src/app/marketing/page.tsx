import MarketingHero from '@/components/MarketingHero'
import MarketingServices from '@/components/MarketingServices'
import Founder from '@/components/Founder'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <MarketingHero />
      <MarketingServices />
      <Founder />
      <Contact />
      <Footer />
    </main>
  )
}
