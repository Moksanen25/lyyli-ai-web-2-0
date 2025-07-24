
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-primary/10 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-16 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-lg opacity-50"></div>
      <div className="absolute bottom-16 right-20 w-32 h-32 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-xl opacity-60"></div>
      
      <div className="container-padding container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-none bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <CardContent className="pt-6 flex flex-col h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-4xl text-primary mb-4 relative z-10 font-bold">"</div>
                <p className="text-primary/80 italic mb-6 flex-grow relative z-10">{testimonial.text}</p>
                <div className="mt-auto relative z-10">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-3 text-primary font-bold shadow-lg">
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
