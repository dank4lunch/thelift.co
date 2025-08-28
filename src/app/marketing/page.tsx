import MarketingHero from '@/components/MarketingHero'
import MarketingServices from '@/components/MarketingServices'
import Founder from '@/components/Founder'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creative Marketing & Business Strategy Services',
  description: 'Strategic moves for your business! 🚀 Creative marketing, brand development, event coordination & digital strategy. Built to boost your business to elite status. Let\'s elevate together! ✨',
  keywords: 'creative marketing, brand development, digital marketing, business strategy, event coordination, creative services, brand elevation, strategic business growth',
  openGraph: {
    title: 'Creative Marketing That Elevates Your Brand 🚀',
    description: 'Strategic moves. Creative lifts. Business transformation that takes your brand to elite status.',
    type: 'website',
  },
}

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
