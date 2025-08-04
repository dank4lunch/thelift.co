import CleanHero from '@/components/CleanHero'
import CleanAbout from '@/components/CleanAbout'
import CleanServices from '@/components/CleanServices'
import CleanContact from '@/components/CleanContact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { GoogleAnalytics, PerformanceMonitor } from '@/components/Analytics'

export default function Home() {
  return (
    <main className="min-h-screen">
      <GoogleAnalytics />
      <PerformanceMonitor />
      <Navigation />
      <CleanHero />
      <CleanAbout />
      <CleanServices />
      <CleanContact />
      <Footer />
    </main>
  )
}
