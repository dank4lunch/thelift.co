
'use client'

import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: '/attached_assets/IMG_0200_1754424195308.jpeg',
      alt: 'Training Session 1',
      title: 'Strength Training'
    },
    {
      src: '/attached_assets/IMG_0201_1754424195308.jpeg',
      alt: 'Training Session 2',
      title: 'Personal Coaching'
    },
    {
      src: '/attached_assets/IMG_0202_1754424195308.jpeg',
      alt: 'Training Session 3',
      title: 'Fitness Progress'
    },
    {
      src: '/attached_assets/2f6605d9-b403-4315-ba58-875ad50e9824_1754424319425.jpeg',
      alt: 'Professional Training',
      title: 'Elite Performance'
    },
    {
      src: '/attached_assets/dc6d1645-ab70-49fe-b4ae-d3b2ddb9e51c_1754424319425.jpeg',
      alt: 'Training Results',
      title: 'Transformation'
    },
    {
      src: '/attached_assets/IMG_0239_1754424813561.jpeg',
      alt: 'Gym Session 1',
      title: 'Workout Intensity'
    },
    {
      src: '/attached_assets/IMG_0240_1754424813561.jpeg',
      alt: 'Gym Session 2',
      title: 'Professional Setup'
    },
    {
      src: '/attached_assets/IMG_0241_1754424813561.jpeg',
      alt: 'Gym Session 3',
      title: 'Training Excellence'
    },
    {
      src: '/attached_assets/IMG_0242_1754424813561.jpeg',
      alt: 'Gym Session 4',
      title: 'Fitness Journey'
    },
    {
      src: '/attached_assets/IMG_0243_1754424813561.jpeg',
      alt: 'Gym Session 5',
      title: 'Elite Training'
    },
    {
      src: '/attached_assets/IMG_0245_1754424813561.jpeg',
      alt: 'Gym Session 6',
      title: 'Professional Coaching'
    },
    {
      src: '/attached_assets/IMG_0246_1754424813561.jpeg',
      alt: 'Gym Session 7',
      title: 'Strength Building'
    },
    {
      src: '/attached_assets/IMG_0248_1754424813561.jpeg',
      alt: 'Gym Session 8',
      title: 'Fitness Goals'
    },
    {
      src: '/attached_assets/IMG_0249_1754424813560.jpeg',
      alt: 'Gym Session 9',
      title: 'Training Success'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-6 py-3 rounded-full bg-primary-500/10">
              TRAINING GALLERY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 muscle-text">
            REAL TRAINING, REAL RESULTS
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
            Get lifted with your personal trainer. See the dedication, effort, and transformation in action.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="luxury-card overflow-hidden depth-hover transition-all duration-500 group cursor-pointer"
              onClick={() => setSelectedImage(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold muscle-text">{image.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl bg-neutral-900/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-neutral-800 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
