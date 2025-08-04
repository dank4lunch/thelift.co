import NutritionPlanning from '@/components/NutritionPlanning'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Nutrition Planning & Meal Prep - R899 Complete Package | The Lift Co',
  description: 'Get your complete nutrition package for R899 including personalized meal prep plans, grocery lists, and round-the-clock coaching support from Tshiamo Sookane.',
  keywords: ['nutrition planning', 'meal prep', 'grocery list', 'nutrition coaching', 'Sandton nutritionist', 'R899 meal plan']
}

export default function NutritionPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <NutritionPlanning />
      <Footer />
    </main>
  )
}
