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
    company: "ServiceFirst Ltd"
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
    <section style={{ backgroundColor: '#f9fafb', padding: '64px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>
            {t('testimonials.title')}
          </h2>
          <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '16px', 
            padding: '48px', 
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            minHeight: '280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} style={{ width: '20px', height: '20px', color: '#fbbf24', fill: '#fbbf24', marginRight: '4px' }} />
              ))}
            </div>

            {/* Quote */}
            <blockquote style={{ 
              fontSize: '20px', 
              fontStyle: 'italic', 
              color: '#1f2937', 
              marginBottom: '32px',
              lineHeight: '1.6',
              margin: '0 0 32px 0'
            }}>
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Author */}
            <div>
              <div style={{ fontWeight: '600', color: '#1f2937', fontSize: '18px' }}>
                {testimonials[currentIndex].author}
              </div>
              <div style={{ color: '#6b7280', fontSize: '16px' }}>
                {testimonials[currentIndex].title}
              </div>
              <div style={{ color: '#2F5D50', fontSize: '16px', fontWeight: '500' }}>
                {testimonials[currentIndex].company}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'white',
              border: '2px solid #e5e7eb',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = '#2F5D50'
              e.target.style.backgroundColor = '#f9fafb'
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = '#e5e7eb'
              e.target.style.backgroundColor = 'white'
            }}
          >
            <ChevronLeft style={{ width: '20px', height: '20px', color: '#6b7280' }} />
          </button>

          <button
            onClick={nextTestimonial}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'white',
              border: '2px solid #e5e7eb',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = '#2F5D50'
              e.target.style.backgroundColor = '#f9fafb'
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = '#e5e7eb'
              e.target.style.backgroundColor = 'white'
            }}
          >
            <ChevronRight style={{ width: '20px', height: '20px', color: '#6b7280' }} />
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px', gap: '8px' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: currentIndex === index ? '#2F5D50' : '#d1d5db',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}