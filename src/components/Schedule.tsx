'use client'

import { useState } from 'react'
import { Clock, Users, MapPin, Calendar, CheckCircle, AlertCircle } from 'lucide-react'

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState('monday')

  const schedule = {
    monday: [
      {
        time: '06:00 - 07:00',
        type: 'Personal Training',
        available: true,
        intensity: 'High',
        location: 'Sandton Gym',
        spots: '1-on-1',
        focus: 'Strength Training'
      },
      {
        time: '07:30 - 08:30',
        type: 'Personal Training',
        available: false,
        intensity: 'Medium',
        location: 'Client Location',
        spots: '1-on-1',
        focus: 'HIIT Conditioning'
      },
      {
        time: '17:00 - 18:00',
        type: 'Personal Training',
        available: true,
        intensity: 'High',
        location: 'Sandton Gym',
        spots: '1-on-1',
        focus: 'Boxing & Cardio'
      },
      {
        time: '18:30 - 19:30',
        type: 'Personal Training',
        available: true,
        intensity: 'Medium',
        location: 'Outdoor Park',
        spots: '1-on-1',
        focus: 'Functional Training'
      }
    ],
    tuesday: [
      {
        time: '06:00 - 07:00',
        type: 'Personal Training',
        available: true,
        intensity: 'High',
        location: 'Sandton Gym',
        spots: '1-on-1',
        focus: 'Powerlifting'
      },
      {
        time: '12:00 - 13:00',
        type: 'Corporate Wellness',
        available: false,
        intensity: 'Low',
        location: 'Client Office',
        spots: 'Group',
        focus: 'Desk Warrior Recovery'
      },
      {
        time: '17:00 - 18:00',
        type: 'Personal Training',
        available: true,
        intensity: 'High',
        location: 'Client Home',
        spots: '1-on-1',
        focus: 'Athletic Performance'
      }
    ],
    wednesday: [
      {
        time: '06:00 - 07:00',
        type: 'Personal Training',
        available: false,
        intensity: 'Medium',
        location: 'Sandton Gym',
        spots: '1-on-1',
        focus: 'Mobility & Strength'
      },
      {
        time: '07:30 - 08:30',
        type: 'Personal Training',
        available: true,
        intensity: 'High',
        location: 'Outdoor Park',
        spots: '1-on-1',
        focus: 'Bootcamp Style'
      },
      {
        time: '17:30 - 18:30',
        type: 'Personal Training',
        available: true,
        intensity: 'Medium',
        location: 'Sandton Gym',
        spots: '1-on-1',
        focus: 'Hypertrophy'
      }
    ],
    thursday: [
      {
        time: '06:00 - 07:00',
        type: 'Personal Training',
        available: true,
        intensity: 'High',
        location: 'Sandton Gym',
        spots: '1-on-1',
        focus: 'Compound Movements'
      },
      {
        time: '12:00 - 13:00',
        type: 'Corporate Wellness',
        available: true,
        intensity: 'Low',
        location: 'Various Offices',
        spots: 'Group',
        focus: 'Stress Relief'
      },
      {
        time: '17:00 - 18:00',
        type: 'Personal Training',
        available: false,
        intensity: 'High',
        location: 'Client Location',
        spots: '1-on-1',
        focus: 'Sport Specific'
      }
    ],
    friday: [
      {
        time: '06:00 - 07:00',
        type: 'Personal Training',
        available: true,
        intensity: 'Medium',
        location: 'Sandton Gym',
        spots: '1-on-1',
        focus: 'End of Week Push'
      },
      {
        time: '07:30 - 08:30',
        type: 'Personal Training',
        available: true,
        intensity: 'High',
        location: 'Outdoor Park',
        spots: '1-on-1',
        focus: 'HIIT Finisher'
      },
      {
        time: '17:00 - 18:00',
        type: 'Personal Training',
        available: false,
        intensity: 'Low',
        location: 'Client Home',
        spots: '1-on-1',
        focus: 'Recovery Session'
      }
    ],
    saturday: [
      {
        time: '08:00 - 09:00',
        type: 'Personal Training',
        available: true,
        intensity: 'High',
        location: 'Sandton Gym',
        spots: '1-on-1',
        focus: 'Weekend Warrior'
      },
      {
        time: '09:30 - 10:30',
        type: 'Group Training',
        available: true,
        intensity: 'Medium',
        location: 'Outdoor Park',
        spots: '2-4 people',
        focus: 'Fun Fitness'
      },
      {
        time: '11:00 - 12:00',
        type: 'Personal Training',
        available: true,
        intensity: 'Medium',
        location: 'Client Choice',
        spots: '1-on-1',
        focus: 'Technique Focus'
      }
    ],
    sunday: [
      {
        time: '09:00 - 10:00',
        type: 'Personal Training',
        available: true,
        intensity: 'Low',
        location: 'Outdoor Park',
        spots: '1-on-1',
        focus: 'Active Recovery'
      },
      {
        time: '10:30 - 11:30',
        type: 'Group Training',
        available: true,
        intensity: 'Medium',
        location: 'Sandton Gym',
        spots: '2-4 people',
        focus: 'Sunday Sweat'
      }
    ]
  }

  const days = [
    { key: 'monday', label: 'Mon', full: 'Monday' },
    { key: 'tuesday', label: 'Tue', full: 'Tuesday' },
    { key: 'wednesday', label: 'Wed', full: 'Wednesday' },
    { key: 'thursday', label: 'Thu', full: 'Thursday' },
    { key: 'friday', label: 'Fri', full: 'Friday' },
    { key: 'saturday', label: 'Sat', full: 'Saturday' },
    { key: 'sunday', label: 'Sun', full: 'Sunday' }
  ]

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'High': return 'text-red-400 bg-red-500/20'
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20'
      case 'Low': return 'text-green-400 bg-green-500/20'
      default: return 'text-neutral-400 bg-neutral-500/20'
    }
  }

  const handleBooking = (time: string, day: string) => {
    const dayName = days.find(d => d.key === day)?.full || day
    const message = encodeURIComponent(`Hi Tshiamo! I'd like to book the ${time} slot on ${dayName}. Please let me know if it's still available.`)
    window.open(`https://wa.me/27635432439?text=${message}`, '_blank')
  }

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="elite-badge">TRAINING SCHEDULE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
            BOOK YOUR SPOT
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Check my availability and book your training session. All times are in SAST (South African Standard Time).
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {days.map((day) => (
            <button
              key={day.key}
              onClick={() => setSelectedDay(day.key)}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                selectedDay === day.key
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              <span className="block sm:hidden">{day.label}</span>
              <span className="hidden sm:block">{day.full}</span>
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4">
            {schedule[selectedDay as keyof typeof schedule]?.map((slot, index) => (
              <div key={index} className="luxury-card p-6 hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  {/* Time & Type */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span className="font-bold text-primary-400">{slot.time}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-200">
                      {slot.type}
                    </h4>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-400" />
                      <span className="text-neutral-300 text-sm">{slot.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent-400" />
                      <span className="text-neutral-300 text-sm">{slot.spots}</span>
                    </div>
                  </div>

                  {/* Focus & Intensity */}
                  <div className="space-y-2">
                    <div className="text-neutral-300 text-sm">
                      <span className="font-medium">Focus:</span> {slot.focus}
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getIntensityColor(slot.intensity)}`}>
                      {slot.intensity} Intensity
                    </div>
                  </div>

                  {/* Availability & Action */}
                  <div className="text-center">
                    {slot.available ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2 text-green-400">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Available</span>
                        </div>
                        <button
                          onClick={() => handleBooking(slot.time, selectedDay)}
                          className="btn-primary px-6 py-2 text-sm muscle-text w-full"
                        >
                          BOOK NOW
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2 text-red-400">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Booked</span>
                        </div>
                        <button
                          onClick={() => handleBooking(slot.time, selectedDay)}
                          className="btn-outline px-6 py-2 text-sm muscle-text w-full opacity-50"
                          disabled
                        >
                          WAITLIST
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Notes */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="luxury-card p-8">
            <h3 className="text-2xl font-bold text-primary-400 mb-6 muscle-text text-center">
              📅 Booking Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-neutral-300">
              <div>
                <h4 className="font-bold text-primary-400 mb-3">⏰ Scheduling</h4>
                <ul className="space-y-2">
                  <li>• Sessions are 45-60 minutes</li>
                  <li>• Book at least 24 hours in advance</li>
                  <li>• Flexible location options available</li>
                  <li>• Custom times available on request</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-400 mb-3">📋 Policies</h4>
                <ul className="space-y-2">
                  <li>• 24-hour cancellation required</li>
                  <li>• Late arrivals reduce session time</li>
                  <li>• Package deals available</li>
                  <li>• First consultation is FREE</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-accent-400 font-medium">
                Need a different time? WhatsApp me and we'll find a slot that works!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
