
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      text: t('testimonials.testimonial1.text'),
      author: t('testimonials.testimonial1.author'),
      role: t('testimonials.testimonial1.role'),
    },
    {
      text: t('testimonials.testimonial2.text'),
      author: t('testimonials.testimonial2.author'),
      role: t('testimonials.testimonial2.role'),
    },
    {
      text: t('testimonials.testimonial3.text'),
      author: t('testimonials.testimonial3.author'),
      role: t('testimonials.testimonial3.role'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-none card-shadow hover:-translate-y-1 transition-transform duration-300"
            >
              <CardContent className="pt-6 flex flex-col h-full">
                <div className="text-3xl text-primary mb-4">"</div>
                <p className="text-primary/80 italic mb-6 flex-grow">{testimonial.text}</p>
                <div className="mt-auto">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 text-primary font-bold">
                      {testimonial.author.split(' ')[0][0]}{testimonial.author.split(' ')[1][0]}
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-primary/60">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
