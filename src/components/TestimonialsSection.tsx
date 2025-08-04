'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: language === 'fi' ? 'Markkinointipäällikkö' : 'Marketing Manager',
      company: 'TechCorp',
      content: language === 'fi'
        ? 'Lyyli on muuttanut täysin miten ymmärrämme asiakkaitamme. ROI on parantunut 300%.'
        : 'Lyyli has completely changed how we understand our customers. ROI improved by 300%.',
      rating: 5
    },
    {
      name: 'Mika Virtanen',
      role: language === 'fi' ? 'Toimitusjohtaja' : 'CEO',
      company: 'Nordic Solutions',
      content: language === 'fi'
        ? 'Automaattinen segmentointi on säästänyt meille tuntikausia työtä viikossa.'
        : 'Automatic segmentation has saved us hours of work per week.',
      rating: 5
    },
    {
      name: 'Emma Andersson',
      role: language === 'fi' ? 'Asiakkuusjohtaja' : 'Customer Success Manager',
      company: 'GrowthLab',
      content: language === 'fi'
        ? 'Asiakkaidemme tyytyväisyys on noussut merkittävästi henkilökohtaisten kampanjoiden ansiosta.'
        : 'Our customer satisfaction has increased significantly thanks to personalized campaigns.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'fi' ? 'Asiakkaidemme kokemukset' : 'What our customers say'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'fi'
              ? 'Katso mitä asiakkaamme sanovat Lyylin vaikutuksesta liiketoimintaansa'
              : 'See what our customers say about Lyyli\'s impact on their business'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
