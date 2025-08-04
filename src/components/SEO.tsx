import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Person' | 'Service' | 'Event' | 'Article'
  data: any
}

export function SEO({
  title = 'The Lift Co - Personal Trainer in Sandton | Tshiamo Sookane',
  description = 'Transform your body with elite personal training in Sandton CBD. Tshiamo Sookane offers personalized fitness programs, HIIT, boxing, and sports conditioning.',
  keywords = ['personal trainer Sandton', 'fitness trainer Johannesburg', 'HIIT training', 'boxing fitness'],
  image = '/og-image.jpg',
  url = 'https://theliftco.co.za',
  type = 'website',
  author = 'Tshiamo Sookane',
  publishedTime,
  modifiedTime
}: SEOProps) {
  const keywordsString = keywords.join(', ')

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="The Lift Co" />
      <meta property="og:locale" content="en_ZA" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="ZA-GP" />
      <meta name="geo.placename" content="Sandton, Gauteng, South Africa" />
      <meta name="geo.position" content="-26.1076;28.0567" />
      <meta name="ICBM" content="-26.1076, 28.0567" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.builder.io" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
    </Head>
  )
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

// Predefined structured data for common pages
export const localBusinessSchema = {
  name: "The Lift Co",
  description: "Personal training and fitness services in Sandton CBD",
  url: "https://theliftco.co.za",
  telephone: "+27635432439",
  email: "tshiamokl@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sandton",
    addressRegion: "Gauteng",
    addressCountry: "ZA"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.1076,
    longitude: 28.0567
  },
  openingHours: [
    "Mo-Fr 06:00-20:00",
    "Sa 08:00-18:00", 
    "Su 09:00-16:00"
  ],
  priceRange: "$$",
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -26.1076,
      longitude: 28.0567
    },
    geoRadius: "25000"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Personal Training Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Training",
          description: "One-on-one personal training sessions"
        }
      },
      {
        "@type": "Offer", 
        itemOffered: {
          "@type": "Service",
          name: "HIIT Training",
          description: "High-intensity interval training sessions"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "Boxing Fitness",
          description: "Boxing-based fitness training"
        }
      }
    ]
  },
  founder: {
    "@type": "Person",
    name: "Tshiamo Sookane",
    jobTitle: "Personal Trainer & Fitness Coach",
    description: "HFPA Certified trainer with 5+ years experience",
    knowsAbout: ["HIIT Training", "Boxing Fitness", "Strength Training", "Sports Conditioning"],
    alumniOf: "Health and Fitness Professionals Association"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1"
  }
}

export const trainerSchema = {
  name: "Tshiamo Sookane",
  jobTitle: "Personal Trainer & Fitness Coach",
  description: "HFPA Certified trainer with 5+ years experience transforming lives through science-based fitness programming",
  url: "https://theliftco.co.za/about",
  image: "https://cdn.builder.io/api/v1/image/assets%2F638bb35e274840ce81c9d7bdb01f9214%2Ffadd090fbad343b0a01ea52fc1729fed?format=webp&width=800",
  telephone: "+27635432439",
  email: "tshiamokl@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sandton",
    addressRegion: "Gauteng",
    addressCountry: "ZA"
  },
  worksFor: {
    "@type": "Organization",
    name: "The Lift Co"
  },
  knowsAbout: [
    "HIIT Training",
    "Boxing Fitness", 
    "Strength Training",
    "Sports Conditioning",
    "Exercise Science",
    "Nutrition Planning"
  ],
  alumniOf: "Health and Fitness Professionals Association",
  hasCredential: "HFPA Certification"
}
