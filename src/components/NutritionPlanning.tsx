'use client'

import { useState } from 'react'
import { ShoppingCart, Calendar, Target, Clock, CheckCircle, MessageCircle, Star, Apple } from 'lucide-react'

export default function NutritionPlanning() {
  const [selectedPlan, setSelectedPlan] = useState('complete')
  const [activeDay, setActiveDay] = useState('monday')

  const nutritionPlans = {
    complete: {
      name: 'Complete Nutrition Package',
      price: 899,
      description: 'Everything you need for nutrition success',
      features: [
        'Personalized meal prep plan',
        'Weekly grocery shopping list',
        'Custom training plan integration',
        'Round the clock coaching support',
        'Macro tracking guidance',
        'Recipe variations for 4 weeks',
        'WhatsApp support group access',
        'Monthly progress review calls'
      ],
      popular: true
    },
    basic: {
      name: 'Basic Meal Planning',
      price: 499,
      description: 'Essential meal planning and guidance',
      features: [
        'Basic meal plan (2 weeks)',
        'Simple grocery list',
        'Basic macro guidelines',
        'Email support'
      ],
      popular: false
    },
    premium: {
      name: 'Premium Nutrition Coaching',
      price: 1299,
      description: 'Complete nutrition transformation',
      features: [
        'All Complete Package features',
        'One-on-one nutrition coaching',
        'Custom supplement recommendations',
        'Body composition analysis',
        'Metabolic rate testing',
        'Lifestyle integration planning',
        'Family meal adaptation',
        'Special dietary accommodations'
      ],
      popular: false
    }
  }

  const sampleMealPlan = {
    monday: {
      breakfast: {
        name: 'Protein Power Bowl',
        calories: 420,
        protein: 35,
        carbs: 28,
        fat: 18,
        ingredients: ['2 eggs', '1 cup oats', '1 banana', '1 tbsp almond butter', 'berries'],
        prepTime: 15
      },
      lunch: {
        name: 'Grilled Chicken Salad',
        calories: 380,
        protein: 42,
        carbs: 15,
        fat: 16,
        ingredients: ['150g chicken breast', 'mixed greens', 'cherry tomatoes', 'cucumber', 'olive oil dressing'],
        prepTime: 20
      },
      dinner: {
        name: 'Salmon & Sweet Potato',
        calories: 450,
        protein: 35,
        carbs: 35,
        fat: 18,
        ingredients: ['120g salmon fillet', '1 medium sweet potato', 'asparagus', 'lemon', 'herbs'],
        prepTime: 25
      },
      snacks: [
        { name: 'Greek Yogurt & Nuts', calories: 180, protein: 15 },
        { name: 'Apple & Peanut Butter', calories: 160, protein: 8 }
      ]
    },
    tuesday: {
      breakfast: {
        name: 'Smoothie Bowl',
        calories: 390,
        protein: 28,
        carbs: 45,
        fat: 12,
        ingredients: ['protein powder', 'frozen berries', 'spinach', 'banana', 'chia seeds'],
        prepTime: 10
      },
      lunch: {
        name: 'Turkey Wrap',
        calories: 410,
        protein: 30,
        carbs: 38,
        fat: 15,
        ingredients: ['whole wheat tortilla', 'sliced turkey', 'avocado', 'lettuce', 'tomato'],
        prepTime: 10
      },
      dinner: {
        name: 'Lean Beef Stir Fry',
        calories: 420,
        protein: 38,
        carbs: 32,
        fat: 16,
        ingredients: ['120g lean beef', 'brown rice', 'mixed vegetables', 'soy sauce', 'ginger'],
        prepTime: 20
      },
      snacks: [
        { name: 'Protein Shake', calories: 150, protein: 25 },
        { name: 'Mixed Berries', calories: 80, protein: 1 }
      ]
    }
  }

  const groceryList = [
    {
      category: 'Proteins',
      items: [
        { name: 'Chicken breast', amount: '1kg', price: 'R89' },
        { name: 'Salmon fillets', amount: '500g', price: 'R120' },
        { name: 'Eggs', amount: '18 pack', price: 'R45' },
        { name: 'Greek yogurt', amount: '1kg tub', price: 'R65' },
        { name: 'Protein powder', amount: '1 container', price: 'R450' }
      ]
    },
    {
      category: 'Carbohydrates',
      items: [
        { name: 'Oats', amount: '1kg', price: 'R35' },
        { name: 'Brown rice', amount: '2kg', price: 'R45' },
        { name: 'Sweet potatoes', amount: '2kg', price: 'R28' },
        { name: 'Whole wheat bread', amount: '1 loaf', price: 'R18' },
        { name: 'Bananas', amount: '1kg', price: 'R22' }
      ]
    },
    {
      category: 'Vegetables & Fruits',
      items: [
        { name: 'Mixed salad greens', amount: '3 bags', price: 'R45' },
        { name: 'Cherry tomatoes', amount: '500g', price: 'R25' },
        { name: 'Avocados', amount: '6 pieces', price: 'R48' },
        { name: 'Mixed berries', amount: '1kg frozen', price: 'R65' },
        { name: 'Asparagus', amount: '500g', price: 'R35' }
      ]
    },
    {
      category: 'Healthy Fats',
      items: [
        { name: 'Olive oil', amount: '500ml', price: 'R55' },
        { name: 'Almond butter', amount: '1 jar', price: 'R85' },
        { name: 'Mixed nuts', amount: '500g', price: 'R95' },
        { name: 'Chia seeds', amount: '250g', price: 'R45' }
      ]
    }
  ]

  const totalGroceryCost = groceryList.reduce((total, category) => 
    total + category.items.reduce((catTotal, item) => 
      catTotal + parseInt(item.price.replace('R', '')), 0), 0)

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  const handlePurchase = (planKey: string) => {
    const plan = nutritionPlans[planKey as keyof typeof nutritionPlans]
    const message = encodeURIComponent(`Hi Tshiamo! I'd like to purchase the ${plan.name} for R${plan.price}. Please send me the payment details.`)
    window.open(`https://wa.me/27635432439?text=${message}`, '_blank')
  }

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="elite-badge">NUTRITION PLANNING</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
            FUEL YOUR SUCCESS
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Professional nutrition planning with meal prep, grocery lists, and round-the-clock coaching support to accelerate your transformation.
          </p>
        </div>

        {/* Nutrition Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(nutritionPlans).map(([key, plan]) => (
            <div
              key={key}
              className={`luxury-card p-8 relative ${
                plan.popular ? 'ring-2 ring-primary-500 shadow-2xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Apple className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-400 mb-2 muscle-text">
                  {plan.name}
                </h3>
                <p className="text-neutral-400 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-primary-400 mb-2">
                  R{plan.price}
                </div>
                <div className="text-neutral-500 text-sm">per month</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePurchase(key)}
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 muscle-text ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-2xl'
                    : 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white'
                }`}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>

        {/* Sample Meal Plan */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary-400 mb-8 muscle-text">
            Sample Meal Plan
          </h3>
          
          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {days.slice(0, 2).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 capitalize ${
                  activeDay === day
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Daily Meals */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {['breakfast', 'lunch', 'dinner'].map((mealType) => {
              const meal = sampleMealPlan[activeDay as keyof typeof sampleMealPlan][mealType as keyof typeof sampleMealPlan.monday]
              return (
                <div key={mealType} className="luxury-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary-400" />
                    <h4 className="text-xl font-bold text-primary-400 muscle-text capitalize">
                      {mealType}
                    </h4>
                  </div>
                  
                  <h5 className="text-lg font-bold text-neutral-200 mb-3">{meal.name}</h5>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <div className="bg-neutral-800/50 rounded px-2 py-1">
                      <span className="text-neutral-400">Calories:</span> <span className="text-accent-400 font-bold">{meal.calories}</span>
                    </div>
                    <div className="bg-neutral-800/50 rounded px-2 py-1">
                      <span className="text-neutral-400">Protein:</span> <span className="text-green-400 font-bold">{meal.protein}g</span>
                    </div>
                    <div className="bg-neutral-800/50 rounded px-2 py-1">
                      <span className="text-neutral-400">Carbs:</span> <span className="text-blue-400 font-bold">{meal.carbs}g</span>
                    </div>
                    <div className="bg-neutral-800/50 rounded px-2 py-1">
                      <span className="text-neutral-400">Fat:</span> <span className="text-yellow-400 font-bold">{meal.fat}g</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-sm font-bold text-neutral-300 mb-2">Ingredients:</h6>
                    <ul className="text-sm text-neutral-400 space-y-1">
                      {meal.ingredients.map((ingredient, idx) => (
                        <li key={idx}>• {ingredient}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Clock className="w-4 h-4" />
                    Prep time: {meal.prepTime} mins
                  </div>
                </div>
              )
            })}
          </div>

          {/* Daily Snacks */}
          <div className="luxury-card p-6">
            <h4 className="text-xl font-bold text-primary-400 mb-4 muscle-text">Daily Snacks</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {sampleMealPlan[activeDay as keyof typeof sampleMealPlan].snacks.map((snack, idx) => (
                <div key={idx} className="bg-neutral-800/50 rounded-lg p-4">
                  <h5 className="font-bold text-neutral-200 mb-2">{snack.name}</h5>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Calories: <span className="text-accent-400">{snack.calories}</span></span>
                    <span className="text-neutral-400">Protein: <span className="text-green-400">{snack.protein}g</span></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grocery List */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary-400 mb-8 muscle-text">
            Weekly Grocery List
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {groceryList.map((category) => (
                <div key={category.category} className="luxury-card p-6">
                  <h4 className="text-xl font-bold text-primary-400 mb-4 muscle-text">
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex justify-between items-center">
                        <div>
                          <span className="text-neutral-200">{item.name}</span>
                          <span className="text-neutral-400 text-sm ml-2">({item.amount})</span>
                        </div>
                        <span className="text-accent-400 font-bold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="luxury-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingCart className="w-8 h-8 text-primary-400" />
                <h4 className="text-2xl font-bold text-primary-400 muscle-text">Shopping Summary</h4>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-300">Total Items:</span>
                  <span className="text-accent-400 font-bold">
                    {groceryList.reduce((total, cat) => total + cat.items.length, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-300">Estimated Total:</span>
                  <span className="text-green-400 font-bold text-xl">R{totalGroceryCost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-300">Cost per day:</span>
                  <span className="text-accent-400 font-bold">R{Math.round(totalGroceryCost / 7)}</span>
                </div>
              </div>

              <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 mb-6">
                <h5 className="font-bold text-primary-400 mb-2">Money-Saving Tips:</h5>
                <ul className="text-neutral-300 text-sm space-y-1">
                  <li>• Buy proteins in bulk and freeze portions</li>
                  <li>• Shop seasonal vegetables for better prices</li>
                  <li>• Use loyalty cards for additional savings</li>
                  <li>• Prep meals on Sundays to save time</li>
                </ul>
              </div>

              <button
                onClick={() => handlePurchase('complete')}
                className="w-full btn-primary py-4 text-lg muscle-text flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                GET COMPLETE NUTRITION PLAN
              </button>
            </div>
          </div>
        </div>

        {/* Support Features */}
        <div className="text-center">
          <div className="luxury-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary-400 mb-6 muscle-text">
              Round-the-Clock Support Included
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="font-bold text-neutral-200 mb-2">WhatsApp Support</h4>
                <p className="text-neutral-400 text-sm">Direct access to Tshiamo for quick questions and motivation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="font-bold text-neutral-200 mb-2">Weekly Check-ins</h4>
                <p className="text-neutral-400 text-sm">Regular progress reviews and plan adjustments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-400" />
                </div>
                <h4 className="font-bold text-neutral-200 mb-2">Goal Tracking</h4>
                <p className="text-neutral-400 text-sm">Monitor your progress with detailed tracking tools</p>
              </div>
            </div>
            <p className="text-lg text-neutral-300 mb-6">
              Everything you need to succeed nutritionally, backed by professional guidance and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handlePurchase('complete')}
                className="btn-primary text-lg px-10 py-4 muscle-text"
              >
                START YOUR NUTRITION JOURNEY - R899
              </button>
              <a
                href="/contact"
                className="btn-secondary text-lg px-10 py-4 muscle-text"
              >
                HAVE QUESTIONS?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
