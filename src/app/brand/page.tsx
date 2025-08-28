
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import MarketingHero from '@/components/MarketingHero'
import MarketingServices from '@/components/MarketingServices'
import BusinessOverview from '@/components/BusinessOverview'
import Founder from '@/components/Founder'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'

export const metadata: Metadata = {
  title: 'Brand Development & Creative Strategy - Elevate Your Empire 🎯',
  description: 'Transform your brand with strategic development & creative direction. Brand identity, digital presence, marketing strategy & business growth solutions. Built to boost your brand to elite status! 🚀',
  keywords: 'brand development, creative strategy, brand identity, digital marketing, business growth, creative direction, brand elevation, strategic branding',
  openGraph: {
    title: 'Brand Development That Creates Market Leaders 🎯',
    description: 'Strategic brand development and creative solutions that elevate your business to elite status. Transform your brand identity and dominate your market.',
    type: 'website',
    images: [
      {
        url: '/images/IMG_0253_1754429519057.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Lift Co - Brand Development Services',
      },
    ],
  },
}

export default function BrandPage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main>
        <MarketingHero />
        <MarketingServices />
        <BusinessOverview />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
