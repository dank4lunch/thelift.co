import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import SkipNav from '@/components/SkipNav'

export default function Home() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <Hero />
      </main>
    </>
  )
}