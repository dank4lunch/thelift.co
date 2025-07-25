export default function Founder() {
  const brands = [
    "Herbally VSC", "Busa Creative Agency", "The J Spot", "House of Hemp", 
    "Canna Kush", "GIBS", "BasslineLive", "Mwanza Risk Solutions", "Senqu Municipality"
  ]

  const fitnessPartners = [
    "Switch Playgrounds", "STRONG", "F45", "BODY 20",
    "CResults Digital Fitness Boxing", "True Combat Boxing",
    "Virgin Active", "Bodyflo"
  ]

  return (
    <section id="founder" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 mb-6">
            Meet The Founder
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold font-heading text-primary-900 mb-2">
                  Tshiamo Sookane
                </h3>
                <p className="text-xl text-accent-600 font-medium mb-6">
                  Creative Strategist & Certified Personal Trainer
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Tshiamo is a versatile creative strategist and certified personal trainer with a 
                strong background in project management, brand development, and fitness coaching.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                The Lift Co is his expression of holistic upliftment — a manifestation of years 
                of experience in transforming both businesses and lives through strategic thinking 
                and authentic execution.
              </p>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8">
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-primary-900 mb-4">Brand Experience</h4>
                <div className="grid grid-cols-2 gap-2">
                  {brands.map((brand, index) => (
                    <div key={index} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700 text-center">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-primary-900 mb-4">Fitness Partners</h4>
                <div className="grid grid-cols-2 gap-2">
                  {fitnessPartners.map((partner, index) => (
                    <div key={index} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700 text-center">
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-4">Ready to Transform?</h4>
            <p className="text-lg mb-6 opacity-90">
              Join the movement. Experience the unique blend of strategy, creativity, and authentic growth.
            </p>
            <a href="#contact" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-block">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
