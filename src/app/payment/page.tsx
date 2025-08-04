import Payment from '@/components/Payment'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Secure Payment & Training Packages | The Lift Co',
  description: 'Secure payment processing for personal training packages. Multiple payment options available including card, EFT, and digital wallets.',
}

export default function PaymentPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Payment />
      <Footer />
    </main>
  )
}
