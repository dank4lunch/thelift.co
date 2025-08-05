
'use client'

import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: '/images/IMG_0200_1754424195308.jpeg',
      alt: 'Training Session 1',
      title: 'This is where the magic happens',
      description: 'Every rep, every set, every drop of sweat - it all counts'
    },
    {
      src: '/images/IMG_0201_1754424195308.jpeg',
      alt: 'Training Session 2', 
      title: 'Form over everything',
      description: 'Perfect technique builds perfect results'
    },
    {
      src: '/images/IMG_0202_1754424195308.jpeg',
      alt: 'Training Session 3',
      title: 'Progress in motion',
      description: 'Small steps, massive transformations'
    },
    {
      src: '/images/2f6605d9-b403-4315-ba58-875ad50e9824_1754424319425.jpeg',
      alt: 'Professional Training',
      title: 'Elite mindset, elite results',
      description: 'When you train with purpose, everything changes'
    },
    {
      src: '/images/dc6d1645-ab70-49fe-b4ae-d3b2ddb9e51c_1754424319425.jpeg',
      alt: 'Training Results',
      title: 'Transformation evidence',
      description: 'This is what dedication looks like'
    },
    {
      src: '/images/IMG_0239_1754424813561.jpeg',
      alt: 'Gym Session 1',
      title: 'Intensity with intelligence',
      description: 'Hard work, smart programming'
    },
    {
      src: '/images/IMG_0240_1754424813561.jpeg',
      alt: 'Gym Session 2',
      title: 'Professional environment',
      description: 'Where champions are made'
    },
    {
      src: '/images/IMG_0241_1754424813561.jpeg',
      alt: 'Gym Session 3',
      title: 'Excellence in action',
      description: 'Every session counts toward your goals'
    },
    {
      src: '/images/IMG_0242_1754424813561.jpeg',
      alt: 'Gym Session 4',
      title: 'Your fitness journey',
      description: 'One workout at a time'
    },
    {
      src: '/images/IMG_0243_1754424813561.jpeg',
      alt: 'Gym Session 5',
      title: 'Elite training standards',
      description: 'No shortcuts, just results'
    },
    {
      src: '/images/IMG_0245_1754424813561.jpeg',
      alt: 'Gym Session 6',
      title: 'Personal coaching excellence',
      description: 'Your success is my mission'
    },
    {
      src: '/images/IMG_0246_1754424813561.jpeg',
      alt: 'Gym Session 7',
      title: 'Building real strength',
      description: 'Physical and mental fortitude'
    },
    {
      src: '/images/IMG_0248_1754424813561.jpeg',
      alt: 'Gym Session 8',
      title: 'Goals becoming reality',
      description: 'This is how dreams take shape'
    },
    {
      src: '/images/IMG_0249_1754424813560.jpeg',
      alt: 'Gym Session 9',
      title: 'Success stories in the making',
      description: 'Your chapter starts here'
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
            This isn't just a photo gallery - it's proof. Proof that transformation is real, that hard work pays off, 
            and that with the right guidance, you can become the person you've always wanted to be.
          </p>
          <p className="text-sm sm:text-base text-primary-300 mt-4 font-semibold">
            Every picture tells a story of someone who decided to stop making excuses and start making progress.
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
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold muscle-text mb-1">{image.title}</h4>
                    <p className="text-primary-300 text-xs font-medium">{image.description}</p>
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
