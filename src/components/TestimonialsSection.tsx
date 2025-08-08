'use client';

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

const testimonials = [
  {
    quote: "Lyyli on muuttanut täysin miten viestimme asiakkaillemme. Viestintä on nyt ammattimaisempaa ja tehokkaampaa.",
    author: "Mari Virtanen",
    title: "Markkinointipäällikkö",
    company: "TechCorp Oy"
  },
  {
    quote: "Ajan säästö on ollut valtava. Viestien kirjoittaminen vie nyt minuutteja tuntien sijaan.",
    author: "Jussi Mäkinen",
    title: "Myyntipäällikkö",
    company: "SalesPro Finland"
  },
  {
    quote: "Asiakastyytyväisyys on parantunut huomattavasti kun viestintä on yhtenäisempää ja ammattimaisempaa.",
    author: "Anna Koskinen",
    title: "Asiakaspalvelupäällikkö",
    company: "ServicePlus"
  }
]

export default function TestimonialsSection() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 shadow-lg border border-gray-100 transition-all duration-300 ${
                  index === currentIndex ? 'scale-105 shadow-xl' : 'opacity-75'
                }`}
              >
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 italic text-center">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
