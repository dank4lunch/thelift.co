'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Trophy, TrendingUp, Target } from 'lucide-react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('transformations')
  const [lightboxImage, setLightboxImage] = useState<any>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const categories = [
    { key: 'transformations', label: 'Transformations', icon: <TrendingUp className="w-4 h-4" /> },
    { key: 'training', label: 'Training Sessions', icon: <Target className="w-4 h-4" /> },
    { key: 'achievements', label: 'Client Wins', icon: <Trophy className="w-4 h-4" /> }
  ]

  const gallery = {
    transformations: [
      {
        id: 1,
        beforeImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=500&fit=crop',
        clientName: 'Sarah M.',
        timeframe: '6 months',
        achievement: 'Lost 18kg, gained muscle',
        description: 'From struggling with basic workouts to deadlifting her bodyweight'
      },
      {
        id: 2,
        beforeImage: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=500&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop',
        clientName: 'Michael C.',
        timeframe: '4 months',
        achievement: 'Built 8kg muscle, lost 12kg fat',
        description: 'Busy entrepreneur transformed his health and energy levels'
      },
      {
        id: 3,
        beforeImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?w=400&h=500&fit=crop',
        clientName: 'Priya P.',
        timeframe: '8 months',
        achievement: 'Improved posture, eliminated back pain',
        description: 'Doctor who reclaimed her health despite demanding work schedule'
      }
    ],
    training: [
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        title: 'HIIT Boxing Session',
        description: 'High-intensity boxing combinations for cardio and strength',
        location: 'Sandton Gym'
      },
      {
        id: 5,
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop',
        title: 'Strength Training',
        description: 'Compound movements for functional strength building',
        location: 'Private Studio'
      },
      {
        id: 6,
        image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&h=400&fit=crop',
        title: 'Outdoor Bootcamp',
        description: 'Dynamic outdoor training in Sandton parks',
        location: 'Delta Park'
      },
      {
        id: 7,
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop',
        title: 'Corporate Wellness',
        description: 'Office-based training for busy professionals',
        location: 'Client Offices'
      }
    ],
    achievements: [
      {
        id: 8,
        image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&h=400&fit=crop',
        title: 'First Marathon Complete',
        description: 'Client completed their first marathon after 8 months of training',
        achievement: '42.2km in 4:15:30'
      },
      {
        id: 9,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        title: 'Powerlifting Personal Best',
        description: 'New deadlift record achieved through progressive programming',
        achievement: '180kg Deadlift'
      },
      {
        id: 10,
        image: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?w=600&h=400&fit=crop',
        title: 'Weight Loss Milestone',
        description: 'Incredible transformation through consistency and dedication',
        achievement: '25kg Lost'
      }
    ]
  }

  const openLightbox = (item: any, index: number) => {
    setLightboxImage(item)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const currentGallery = gallery[selectedCategory as keyof typeof gallery]
    let newIndex = lightboxIndex
    
    if (direction === 'prev') {
      newIndex = lightboxIndex > 0 ? lightboxIndex - 1 : currentGallery.length - 1
    } else {
      newIndex = lightboxIndex < currentGallery.length - 1 ? lightboxIndex + 1 : 0
    }
    
    setLightboxIndex(newIndex)
    setLightboxImage(currentGallery[newIndex])
  }

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="elite-badge">SUCCESS GALLERY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
            RESULTS THAT SPEAK
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Real transformations, real people, real results. See what's possible with dedicated training and expert guidance.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto">
          {selectedCategory === 'transformations' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.transformations.map((transformation, index) => (
                <div
                  key={transformation.id}
                  className="luxury-card overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(transformation, index)}
                >
                  {/* Before/After Images */}
                  <div className="relative h-64">
                    <div className="grid grid-cols-2 h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={transformation.beforeImage}
                          alt="Before"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2 bg-red-500/80 text-white px-2 py-1 rounded text-xs font-bold">
                          BEFORE
                        </div>
                      </div>
                      <div className="relative overflow-hidden">
                        <img
                          src={transformation.afterImage}
                          alt="After"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-green-500/80 text-white px-2 py-1 rounded text-xs font-bold">
                          AFTER
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-primary-400 mb-2 muscle-text">
                      {transformation.clientName}
                    </h4>
                    <p className="text-accent-400 font-medium mb-2">
                      {transformation.timeframe}
                    </p>
                    <p className="text-green-400 font-bold mb-3">
                      {transformation.achievement}
                    </p>
                    <p className="text-neutral-300 text-sm">
                      {transformation.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedCategory !== 'transformations' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery[selectedCategory as keyof typeof gallery].map((item: any, index: number) => (
                <div
                  key={item.id}
                  className="luxury-card overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(item, index)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-primary-400 mb-2 muscle-text">
                      {item.title}
                    </h4>
                    <p className="text-neutral-300 text-sm mb-3">
                      {item.description}
                    </p>
                    {item.location && (
                      <p className="text-accent-400 text-sm">📍 {item.location}</p>
                    )}
                    {item.achievement && (
                      <p className="text-green-400 font-bold text-sm">🏆 {item.achievement}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="luxury-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-400 mb-4 muscle-text">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-neutral-300 mb-6">
              Join the ranks of transformed clients. Your before and after photos could be featured here next.
            </p>
            <a
              href="#contact"
              className="btn-primary text-lg px-10 py-4 muscle-text"
            >
              START YOUR TRANSFORMATION
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-400 transition-colors z-10"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-400 transition-colors z-10"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            {/* Content */}
            <div className="bg-neutral-900 rounded-2xl overflow-hidden">
              {selectedCategory === 'transformations' ? (
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={lightboxImage.beforeImage}
                      alt="Before"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded font-bold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={lightboxImage.afterImage}
                      alt="After"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded font-bold">
                      AFTER
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-96 object-cover"
                />
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-400 mb-2">
                  {lightboxImage.clientName || lightboxImage.title}
                </h3>
                <p className="text-neutral-300 mb-4">
                  {lightboxImage.description}
                </p>
                {lightboxImage.achievement && (
                  <p className="text-green-400 font-bold">
                    🏆 {lightboxImage.achievement}
                  </p>
                )}
                {lightboxImage.timeframe && (
                  <p className="text-accent-400">
                    ⏱️ {lightboxImage.timeframe}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
