import WorkoutTracker from '@/components/WorkoutTracker'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Workout Tracker - Log Your Training Sessions | The Lift Co',
  description: 'Track your workouts, monitor progress, and achieve your fitness goals with our comprehensive workout tracking system. Used by clients of personal trainer Tshiamo Sookane.',
}

export default function WorkoutsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <WorkoutTracker />
      <Footer />
    </main>
  )
}
