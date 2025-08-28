
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import LandingPage from './pages/LandingPage'
import MarketingPage from './pages/MarketingPage'
import HomeFull from './pages/HomeFull'
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentCancelled from './pages/PaymentCancelled'
import './app/globals.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-950 text-neutral-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/home" element={<HomeFull />} />
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/payment/cancelled" element={<PaymentCancelled />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
