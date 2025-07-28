export default function InstagramShowcase() {
  const instagramPosts = [
    {
      id: 'C--Q54Nttq9',
      url: 'https://www.instagram.com/p/C--Q54Nttq9/',
      title: 'Elite Training Session',
    },
    {
      id: 'DA8l4rWNWfU',
      url: 'https://www.instagram.com/p/DA8l4rWNWfU/',
      title: 'Strength & Conditioning',
    },
    {
      id: 'CjDSY09DugY',
      url: 'https://www.instagram.com/p/CjDSY09DugY/',
      title: 'Professional Results',
    },
    {
      id: 'Chjsd14DgDT',
      url: 'https://www.instagram.com/p/Chjsd14DgDT/',
      title: 'Transformation Journey',
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-6 py-3 rounded-full bg-primary-500/10">
              TRAINING IN ACTION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 sm:mb-8 animate-fade-in muscle-text">
            ELITE RESULTS
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
            See the transformation in action. Real training, real results, real commitment to excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-card overflow-hidden depth-hover transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 h-64 flex flex-col justify-center items-center text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-primary-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-primary-400 mb-2 muscle-text">{post.title}</h4>
                <p className="text-neutral-300 text-sm group-hover:text-primary-300 transition-colors duration-300">
                  View on Instagram
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-neutral-300 mb-8 font-medium text-base sm:text-lg">
              Follow our journey and see the transformation happening every day. 
              Ready to be part of the elite?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://instagram.com/thelift.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 muscle-text"
              >
                📱 FOLLOW ON INSTAGRAM
              </a>
              <a 
                href="#services" 
                className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 muscle-text"
              >
                START TRAINING
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
