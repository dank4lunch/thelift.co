'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface HealthQuestion {
  id: string
  question: string
  type: 'multiple' | 'text' | 'number' | 'boolean'
  options?: string[]
  required: boolean
}

interface HealthAssistantProps {
  onClose: () => void
}

const healthQuestions: HealthQuestion[] = [
  {
    id: 'goals',
    question: "What are your main fitness goals?",
    type: 'multiple',
    options: [
      'Lose weight',
      'Build muscle',
      'Improve endurance',
      'Increase strength',
      'General health and wellness',
      'Sport-specific training'
    ],
    required: true
  },
  {
    id: 'experience',
    question: "What's your current fitness level?",
    type: 'multiple',
    options: [
      'Beginner (just starting)',
      'Intermediate (6 months - 2 years)',
      'Advanced (2+ years)',
      'Athlete/Competitive level'
    ],
    required: true
  },
  {
    id: 'age',
    question: "What's your age?",
    type: 'number',
    required: true
  },
  {
    id: 'injuries',
    question: "Do you have any current injuries or health conditions I should know about?",
    type: 'text',
    required: false
  },
  {
    id: 'availability',
    question: "How many days per week can you commit to training?",
    type: 'multiple',
    options: ['2-3 days', '4-5 days', '6-7 days'],
    required: true
  },
  {
    id: 'duration',
    question: "How long can you train per session?",
    type: 'multiple',
    options: ['30-45 minutes', '45-60 minutes', '60-90 minutes'],
    required: true
  },
  {
    id: 'equipment',
    question: "What equipment do you have access to?",
    type: 'multiple',
    options: [
      'Full gym access',
      'Home gym with weights',
      'Basic equipment (resistance bands, dumbbells)',
      'Bodyweight only'
    ],
    required: true
  }
]

export default function AIHealthAssistant({ onClose }: HealthAssistantProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isGenerating, setIsGenerating] = useState(false)
  const [fitnessPlan, setFitnesssPlan] = useState<string>('')
  const [showPlan, setShowPlan] = useState(false)

  const handleAnswer = (answer: string) => {
    const question = healthQuestions[currentQuestion]
    setAnswers(prev => ({ ...prev, [question.id]: answer }))

    if (currentQuestion < healthQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      generateFitnessPlan()
    }
  }

  const generateFitnessPlan = async () => {
    setIsGenerating(true)
    
    try {
      const prompt = `As Tshiamo Sookane, a certified personal trainer from The Lift Co, create a personalized fitness plan based on these client responses:

Goals: ${answers.goals}
Experience: ${answers.experience}
Age: ${answers.age}
Injuries/Conditions: ${answers.injuries || 'None mentioned'}
Training Days: ${answers.availability}
Session Duration: ${answers.duration}
Equipment: ${answers.equipment}

Create a detailed, actionable fitness plan that includes:
1. Training structure and weekly schedule
2. Specific exercises and progressions
3. Safety considerations
4. Motivation and mindset tips
5. How this connects to The Lift Co's training philosophy

Write in first person as Tshiamo, with an encouraging, professional tone that reflects The Lift Co's "Built to Boost. Strategic Moves. Creative Lifts." philosophy.`

      const response = await fetch('/api/generate-fitness-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt })
      })

      if (!response.ok) {
        throw new Error('Failed to generate fitness plan')
      }

      const data = await response.json()
      setFitnesssPlan(data.plan)
      setShowPlan(true)
    } catch (error) {
      console.error('Error generating fitness plan:', error)
      setFitnesssPlan("I'd love to create a personalized plan for you! Let's schedule a consultation to discuss your goals in detail. Contact me through WhatsApp or book your free consultation.")
      setShowPlan(true)
    } finally {
      setIsGenerating(false)
    }
  }

  const currentQ = healthQuestions[currentQuestion]

  if (showPlan) {
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
        <motion.div 
          className="bg-neutral-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary-500/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary-400">Your Personalized Fitness Plan</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-neutral-800 hover:bg-neutral-700 rounded-lg flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-neutral-200 leading-relaxed">
                {fitnessPlan}
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => window.open('https://wa.me/27635432439?text=Hi Tshiamo! I just completed the AI fitness assessment and would love to book a session with you.', '_blank')}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 rounded-lg font-bold hover:from-primary-600 hover:to-accent-600 transition-all"
              >
                💬 Contact Tshiamo
              </button>
              <button
                onClick={() => window.open('https://forms.gle/8mz7dZXLcr47QSNG8', '_blank')}
                className="flex-1 py-3 px-6 bg-neutral-700 text-white rounded-lg font-bold hover:bg-neutral-600 transition-all"
              >
                📋 Book Free Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  if (isGenerating) {
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
        <motion.div 
          className="bg-neutral-900 rounded-xl p-8 text-center border border-primary-500/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h3 className="text-xl font-bold text-primary-400 mb-2">Creating Your Personal Plan</h3>
          <p className="text-neutral-400">Tshiamo is analyzing your responses to create the perfect fitness plan for you...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <motion.div 
        className="bg-neutral-900 rounded-xl max-w-2xl w-full border border-primary-500/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-primary-400">AI Fitness Assessment</h2>
              <p className="text-neutral-400">Question {currentQuestion + 1} of {healthQuestions.length}</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-neutral-800 hover:bg-neutral-700 rounded-lg flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-neutral-800 rounded-full h-2 mb-8">
            <div 
              className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / healthQuestions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{currentQ.question}</h3>
              
              {currentQ.type === 'multiple' && currentQ.options && (
                <div className="space-y-3">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className="w-full text-left p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-all duration-200 hover:border-primary-500 border border-transparent"
                    >
                      <span className="text-white">{option}</span>
                    </button>
                  ))}
                </div>
              )}

              {currentQ.type === 'text' && (
                <div className="space-y-4">
                  <textarea
                    className="w-full p-4 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none"
                    rows={4}
                    placeholder="Share any details that might help create your perfect plan..."
                    onChange={(e) => setAnswers(prev => ({ ...prev, [currentQ.id]: e.target.value }))}
                  />
                  <button
                    onClick={() => handleAnswer(answers[currentQ.id] || '')}
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 rounded-lg font-bold hover:from-primary-600 hover:to-accent-600 transition-all"
                  >
                    Continue
                  </button>
                </div>
              )}

              {currentQ.type === 'number' && (
                <div className="space-y-4">
                  <input
                    type="number"
                    className="w-full p-4 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none"
                    placeholder="Enter your age"
                    onChange={(e) => setAnswers(prev => ({ ...prev, [currentQ.id]: e.target.value }))}
                  />
                  <button
                    onClick={() => handleAnswer(answers[currentQ.id] || '')}
                    disabled={!answers[currentQ.id]}
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 rounded-lg font-bold hover:from-primary-600 hover:to-accent-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}