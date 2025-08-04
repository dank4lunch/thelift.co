'use client'

import { useState } from 'react'
import { Star, Clock, Target, TrendingUp, Users, Download, CheckCircle } from 'lucide-react'

export default function FitnessPlans() {
  const [selectedGoal, setSelectedGoal] = useState('weight-loss')

  const fitnessPlans = {
    'weight-loss': {
      title: 'Fat Loss Transformation',
      rating: 5,
      difficulty: 'Beginner to Intermediate',
      duration: '12 weeks',
      description: 'Science-based fat loss program combining HIIT, strength training, and nutrition guidance for sustainable weight loss.',
      features: [
        'Progressive HIIT workouts',
        'Strength training circuit',
        'Meal planning templates',
        'Weekly progress tracking',
        'Supplement recommendations'
      ],
      schedule: {
        'Week 1-4': 'Foundation building, 3x per week',
        'Week 5-8': 'Intensity increase, 4x per week',
        'Week 9-12': 'Peak performance, 5x per week'
      },
      nutrition: [
        'Caloric deficit calculation',
        'Macro-nutrient breakdown',
        'Meal timing strategies',
        'Hydration guidelines',
        'Cheat meal incorporation'
      ]
    },
    'muscle-gain': {
      title: 'Muscle Building Mastery',
      rating: 5,
      difficulty: 'Intermediate to Advanced',
      duration: '16 weeks',
      description: 'Comprehensive muscle building program focusing on progressive overload, compound movements, and optimal recovery.',
      features: [
        'Progressive overload training',
        'Compound movement focus',
        'Recovery optimization',
        'Supplement protocols',
        'Body composition tracking'
      ],
      schedule: {
        'Week 1-4': 'Adaptation phase, 4x per week',
        'Week 5-8': 'Growth phase, 5x per week',
        'Week 9-12': 'Intensification, 5x per week',
        'Week 13-16': 'Peak muscle building, 6x per week'
      },
      nutrition: [
        'Caloric surplus planning',
        'Protein optimization',
        'Pre/post workout nutrition',
        'Creatine supplementation',
        'Recovery meal planning'
      ]
    },
    'strength': {
      title: 'Elite Strength Development',
      rating: 5,
      difficulty: 'Intermediate to Advanced',
      duration: '20 weeks',
      description: 'Powerlifting-inspired program to maximize strength in squat, bench press, and deadlift while building overall power.',
      features: [
        'Powerlifting technique focus',
        'Periodized training blocks',
        'Accessory work selection',
        'Competition preparation',
        'Strength testing protocols'
      ],
      schedule: {
        'Week 1-5': 'Base building, 4x per week',
        'Week 6-10': 'Strength accumulation, 4x per week',
        'Week 11-15': 'Intensification, 5x per week',
        'Week 16-20': 'Peaking phase, 3x per week'
      },
      nutrition: [
        'Performance nutrition',
        'Energy system support',
        'Recovery enhancement',
        'Competition day nutrition',
        'Long-term health focus'
      ]
    },
    'endurance': {
      title: 'Cardiovascular Excellence',
      rating: 5,
      difficulty: 'Beginner to Advanced',
      duration: '14 weeks',
      description: 'Complete endurance training system for runners, cyclists, and athletes looking to improve cardiovascular fitness.',
      features: [
        'Zone-based training',
        'Interval programming',
        'Cross-training options',
        'Recovery monitoring',
        'Performance testing'
      ],
      schedule: {
        'Week 1-4': 'Aerobic base building, 4x per week',
        'Week 5-8': 'Threshold development, 5x per week',
        'Week 9-12': 'VO2 max training, 5x per week',
        'Week 13-14': 'Competition taper, 3x per week'
      },
      nutrition: [
        'Carbohydrate periodization',
        'Hydration strategies',
        'Race day fueling',
        'Electrolyte management',
        'Recovery nutrition'
      ]
    },
    'general-fitness': {
      title: 'Complete Wellness Program',
      rating: 5,
      difficulty: 'All Levels',
      duration: '10 weeks',
      description: 'Balanced fitness approach combining strength, cardio, flexibility, and wellness for overall health improvement.',
      features: [
        'Full-body workouts',
        'Flexibility training',
        'Stress management',
        'Sleep optimization',
        'Lifestyle integration'
      ],
      schedule: {
        'Week 1-3': 'Habit formation, 3x per week',
        'Week 4-6': 'Progression phase, 4x per week',
        'Week 7-10': 'Optimization, 4x per week'
      },
      nutrition: [
        'Balanced meal planning',
        'Portion control education',
        'Healthy cooking methods',
        'Snack strategies',
        'Social eating guidelines'
      ]
    }
  }

  const currentPlan = fitnessPlans[selectedGoal as keyof typeof fitnessPlans]

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="elite-badge">5-STAR FITNESS PLANS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
            PROVEN PROGRAMS
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Elite-level fitness programs designed by Tshiamo Sookane. Each plan is scientifically crafted and battle-tested for maximum results.
          </p>
        </div>

        {/* Goal Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(fitnessPlans).map(([key, plan]) => (
            <button
              key={key}
              onClick={() => setSelectedGoal(key)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                selectedGoal === key
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {plan.title}
            </button>
          ))}
        </div>

        {/* Selected Plan Details */}
        <div className="max-w-6xl mx-auto">
          <div className="luxury-card p-8 mb-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Plan Overview */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-primary-400 muscle-text">
                    {currentPlan.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(currentPlan.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary-400" />
                    <span className="text-neutral-300">{currentPlan.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent-400" />
                    <span className="text-neutral-300">{currentPlan.difficulty}</span>
                  </div>
                </div>

                <p className="text-neutral-300 mb-6 leading-relaxed">
                  {currentPlan.description}
                </p>

                <h4 className="text-xl font-bold text-primary-400 mb-4 muscle-text">
                  Plan Features
                </h4>
                <ul className="space-y-2">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Training Schedule */}
              <div>
                <h4 className="text-xl font-bold text-primary-400 mb-4 muscle-text">
                  Training Schedule
                </h4>
                <div className="space-y-3 mb-6">
                  {Object.entries(currentPlan.schedule).map(([period, details]) => (
                    <div key={period} className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
                      <div className="font-bold text-accent-400 mb-1">{period}</div>
                      <div className="text-neutral-300 text-sm">{details}</div>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-primary-400 mb-4 muscle-text">
                  Nutrition Guidelines
                </h4>
                <ul className="space-y-2">
                  {currentPlan.nutrition.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-neutral-300">
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Plan Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="luxury-card p-6">
              <h4 className="text-xl font-bold text-primary-400 mb-4 muscle-text">
                Get Your Custom Plan
              </h4>
              <p className="text-neutral-300 mb-4">
                This plan will be customized to your fitness level, schedule, and specific goals during your consultation.
              </p>
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfdujG_QCb1auGWGglp6o37N8TBJaed7Dn0EJ785iM4oq9Mzg/viewform?usp=send_form', '_blank')}
                className="w-full btn-primary py-3 px-6 font-bold muscle-text"
              >
                REQUEST CUSTOM PLAN
              </button>
            </div>

            <div className="luxury-card p-6">
              <h4 className="text-xl font-bold text-accent-400 mb-4 muscle-text">
                Download Sample Workout
              </h4>
              <p className="text-neutral-300 mb-4">
                Get a taste of this program with a free sample workout from week 1.
              </p>
              <button className="w-full btn-secondary py-3 px-6 font-bold muscle-text flex items-center justify-center gap-3">
                <Download className="w-5 h-5" />
                DOWNLOAD SAMPLE
              </button>
            </div>
          </div>

          {/* Success Stats */}
          <div className="text-center">
            <div className="luxury-card p-8">
              <h3 className="text-2xl font-bold text-primary-400 mb-8 muscle-text">
                Plan Success Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
                  <div className="text-neutral-400 text-sm">Completion Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-400 mb-2">4.9</div>
                  <div className="text-neutral-400 text-sm">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-400 mb-2">85%</div>
                  <div className="text-neutral-400 text-sm">Goal Achievement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
                  <div className="text-neutral-400 text-sm">Success Stories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
