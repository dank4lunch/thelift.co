'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Trophy, TrendingUp, Target } from 'lucide-react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('training')
  const [lightboxImage, setLightboxImage] = useState<any>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const categories = [
    { key: 'training', label: 'Training Sessions', icon: <Target className="w-4 h-4" /> },
    { key: 'achievements', label: 'Client Wins', icon: <Trophy className="w-4 h-4" /> }
  ]

  const gallery = {
    training: [
      {
        id: 4,
        image: 'https://cdn.builder.io/api/v1/image/assets%2F638bb35e274840ce81c9d7bdb01f9214%2Fd5da22afa2e74b648bb83f7edf38edbc?format=webp&width=800',
        title: 'Professional Training Session',
        description: 'Expert guidance for optimal form and technique',
        location: 'Sandton Gym'
      },
      {
        id: 5,
        image: 'https://cdn.builder.io/api/v1/image/assets%2F638bb35e274840ce81c9d7bdb01f9214%2F39783d7751884673bf65539803af8447?format=webp&width=800',
        title: 'Strength Building',
        description: 'Progressive overload training for muscle development',
        location: 'Private Studio'
      },
      {
        id: 6,
        image: 'https://cdn.builder.io/api/v1/image/assets%2F638bb35e274840ce81c9d7bdb01f9214%2F69908528a8a04f72a6cd443220fbad8f?format=webp&width=800',
        title: 'Functional Training',
        description: 'Real-world movement patterns for daily life',
        location: 'Training Facility'
      },
      {
        id: 7,
        image: 'https://cdn.builder.io/api/v1/image/assets%2F638bb35e274840ce81c9d7bdb01f9214%2Fb0f83d7123d84028b9b0cb9aa41b79b6?format=webp&width=800',
        title: 'Cardio Conditioning',
        description: 'High-intensity cardiovascular training sessions',
        location: 'Elite Fitness Center'
      },
      {
        id: 8,
        image: 'https://cdn.builder.io/api/v1/image/assets%2F638bb35e274840ce81c9d7bdb01f9214%2F5a4e871366814a2f887ac43b2e20c895?format=webp&width=800',
        title: 'Performance Training',
        description: 'Athletic performance enhancement sessions',
        location: 'Performance Center'
      },
      {
        id: 9,
        image: 'https://cdn.builder.io/api/v1/image/assets%2F638bb35e274840ce81c9d7bdb01f9214%2Fa2e81d4179ac465587e8b06efd65f50f?format=webp&width=800',
        title: 'Elite Coaching',
        description: 'Professional coaching for advanced athletes',
        location: 'Elite Training Facility'
      }
    ],
    achievements: [
      {
        id: 10,
        image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&h=400&fit=crop',
        title: 'First Marathon Complete',
        description: 'Client completed their first marathon after 8 months of training',
        achievement: '42.2km in 4:15:30'
      },
      {
        id: 11,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        title: 'Powerlifting Personal Best',
        description: 'New deadlift record achieved through progressive programming',
        achievement: '180kg Deadlift'
      },
      {
        id: 12,
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
                    <p className="text-accent-400 text-sm">{item.location}</p>
                  )}
                  {item.achievement && (
                    <p className="text-green-400 font-bold text-sm">{item.achievement}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
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
