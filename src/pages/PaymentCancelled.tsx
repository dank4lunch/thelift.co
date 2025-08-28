
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function PaymentCancelled() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-8">Payment Cancelled</h1>
          <p className="text-neutral-300 text-lg mb-8">
            Your payment was cancelled. No charges were made.
          </p>
          <Link to="/" className="bg-primary-500 text-neutral-950 px-6 py-3 rounded-lg font-bold hover:bg-primary-600 transition-colors">
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
