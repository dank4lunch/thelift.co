'use client'

import { useState, useEffect } from 'react'
import { User, Lock, Eye, EyeOff, Calendar, TrendingUp, Target, Award } from 'lucide-react'

interface ClientData {
  id: string
  name: string
  email: string
  joinDate: string
  currentPlan: string
  sessionsCompleted: number
  nextSession: string
  goals: string[]
  progress: {
    weight: { current: number, start: number, target: number }
    measurements: { chest: number, waist: number, hips: number }
    achievements: string[]
  }
}

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [clientData, setClientData] = useState<ClientData | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

  // Mock client data - in real app this would come from API
  const mockClientData: ClientData = {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    joinDate: '2024-01-15',
    currentPlan: 'PT Six Pack',
    sessionsCompleted: 12,
    nextSession: '2024-03-25 09:00',
    goals: ['Weight Loss', 'Muscle Building', 'Improved Endurance'],
    progress: {
      weight: { current: 68, start: 75, target: 65 },
      measurements: { chest: 92, waist: 78, hips: 95 },
      achievements: ['Lost 7kg', 'Increased bench press by 15kg', 'Completed first 5K run']
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Mock login - in real app would authenticate with backend
    setTimeout(() => {
      if (credentials.email === 'demo@client.com' && credentials.password === 'demo123') {
        setIsLoggedIn(true)
        setClientData(mockClientData)
      } else {
        alert('Invalid credentials. Use demo@client.com / demo123')
      }
      setIsLoading(false)
    }, 1500)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setClientData(null)
    setCredentials({ email: '', password: '' })
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <User className="w-4 h-4" /> },
    { id: 'progress', label: 'Progress', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'workouts', label: 'Workouts', icon: <Target className="w-4 h-4" /> },
    { id: 'achievements', label: 'Achievements', icon: <Award className="w-4 h-4" /> }
  ]

  if (!isLoggedIn) {
    return (
      <section className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <div className="luxury-card p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-primary-400 mb-2 muscle-text">
                  Client Portal
                </h2>
                <p className="text-neutral-300">
                  Access your training progress and schedules
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={credentials.email}
                    onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={credentials.password}
                      onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none pr-12"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-primary-400"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary py-3 text-lg muscle-text flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Sign In
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 text-sm text-center">
                  <strong>Demo Login:</strong><br />
                  Email: demo@client.com<br />
                  Password: demo123
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-neutral-400 text-sm">
                  Don't have an account?{' '}
                  <a href="/contact" className="text-primary-400 hover:text-primary-300">
                    Contact Tshiamo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary-400 muscle-text">
              Welcome back, {clientData?.name}!
            </h1>
            <p className="text-neutral-300">Member since {new Date(clientData?.joinDate || '').toLocaleDateString()}</p>
          </div>
          <button
            onClick={handleLogout}
            className="btn-secondary px-6 py-3 muscle-text"
          >
            Sign Out
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-neutral-800/50 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white'
                  : 'text-neutral-400 hover:text-primary-400'
              }`}
            >
              {tab.icon}
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="luxury-card p-6">
              <h3 className="text-xl font-bold text-primary-400 mb-4 muscle-text">Current Plan</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-neutral-300">Package:</span>
                  <span className="text-accent-400 font-bold">{clientData?.currentPlan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-300">Sessions Completed:</span>
                  <span className="text-green-400 font-bold">{clientData?.sessionsCompleted}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-300">Next Session:</span>
                  <span className="text-primary-400 font-bold">
                    {new Date(clientData?.nextSession || '').toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="luxury-card p-6">
              <h3 className="text-xl font-bold text-primary-400 mb-4 muscle-text">Goals</h3>
              <div className="space-y-2">
                {clientData?.goals.map((goal, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Target className="w-4 h-4 text-accent-400" />
                    <span className="text-neutral-300">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="luxury-card p-6">
              <h3 className="text-xl font-bold text-primary-400 mb-4 muscle-text">Weight Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-300">Start Weight</span>
                    <span className="font-bold">{clientData?.progress.weight.start}kg</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-300">Current Weight</span>
                    <span className="text-primary-400 font-bold">{clientData?.progress.weight.current}kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-300">Target Weight</span>
                    <span className="font-bold">{clientData?.progress.weight.target}kg</span>
                  </div>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-3 rounded-full"
                    style={{ 
                      width: `${((clientData?.progress.weight.start || 0) - (clientData?.progress.weight.current || 0)) / 
                        ((clientData?.progress.weight.start || 0) - (clientData?.progress.weight.target || 0)) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="luxury-card p-6">
              <h3 className="text-xl font-bold text-primary-400 mb-4 muscle-text">Measurements</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-300">Chest:</span>
                  <span className="font-bold">{clientData?.progress.measurements.chest}cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-300">Waist:</span>
                  <span className="font-bold">{clientData?.progress.measurements.waist}cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-300">Hips:</span>
                  <span className="font-bold">{clientData?.progress.measurements.hips}cm</span>
                </div>
              </div>
            </div>

            <div className="luxury-card p-6">
              <h3 className="text-xl font-bold text-primary-400 mb-4 muscle-text">Recent Achievements</h3>
              <div className="space-y-2">
                {clientData?.progress.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-green-400" />
                    <span className="text-neutral-300 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'workouts' && (
          <div className="luxury-card p-6">
            <h3 className="text-xl font-bold text-primary-400 mb-4 muscle-text">Upcoming Workouts</h3>
            <div className="space-y-4">
              <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-primary-400" />
                  <span className="font-bold text-neutral-200">March 25, 2024 - 9:00 AM</span>
                </div>
                <p className="text-neutral-300 mb-2">HIIT + Strength Training</p>
                <p className="text-neutral-400 text-sm">Sandton Gym - Studio 2</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-primary-400" />
                  <span className="font-bold text-neutral-200">March 27, 2024 - 6:00 PM</span>
                </div>
                <p className="text-neutral-300 mb-2">Boxing Conditioning</p>
                <p className="text-neutral-400 text-sm">Sandton Gym - Boxing Ring</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="grid md:grid-cols-2 gap-6">
            {clientData?.progress.achievements.map((achievement, index) => (
              <div key={index} className="luxury-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-400">{achievement}</h4>
                    <p className="text-neutral-400 text-sm">Completed in session #{index + 5}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
