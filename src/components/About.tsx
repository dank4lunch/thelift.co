export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 mb-6">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold font-heading text-primary-900 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We speak the language of culture, discipline, and transformation — and we live it. 
                Our multidisciplinary approach ensures that every aspect of your growth is carefully 
                crafted and authentically delivered.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're looking to transform your body, elevate your business, or amplify 
                your brand, we provide the strategic foundation and creative execution to make it happen.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-primary-900 mb-3">Target Market</h4>
                <p className="text-gray-700">
                  Young professionals, creatives, entrepreneurs, and brands aged 21–55 seeking 
                  authentic growth in their body, business, or brand. Our clients value originality, 
                  community, and results.
                </p>
              </div>

              <div className="bg-accent-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-primary-900 mb-3">Our Approach</h4>
                <p className="text-gray-700">
                  We blend strategy with soul, creating a holistic approach that addresses every 
                  layer of your personal and professional development. It's not just about the 
                  destination — it's about the transformation journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
