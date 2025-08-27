
import Navigation from '@/components/Navigation'
import SkipNav from '@/components/SkipNav'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="pt-20">
          <Contact />
          <FAQ />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  )
}
