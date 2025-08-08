'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  
  const getText = (key: string) => {
    const texts = {
      en: {
        title: 'What our customers say',
        subtitle: 'See what our customers say about Lyyli\'s impact on their business'
      },
      fi: {
        title: 'Mitä asiakkaamme sanovat',
        subtitle: 'Katso mitä asiakkaamme sanovat Lyylin vaikutuksesta liiketoimintaansa'
      }
    };
    return texts[language as keyof typeof texts]?.[key as keyof typeof texts.en] || texts.en[key as keyof typeof texts.en];
  };

  const testimonials = [
    {
      name: language === 'fi' ? 'Mikko Oksanen' : 'Mikko Oksanen',
      role: language === 'fi' ? 'Toimitusjohtaja' : 'CEO',
      company: 'Nordic Solutions',
      content: language === 'fi' 
        ? 'Lyyli on muuttanut täysin viestintätehokkuutemme. Tekoälyassistentti auttaa meitä ylläpitämään ammattimaista sävyä kaikissa viesteissämme.'
        : 'Lyyli has completely transformed our communication efficiency. The AI assistant helps us maintain professional tone in all our messages.'
    },
    {
      name: language === 'fi' ? 'Jaana Virtanen' : 'Jaana Virtanen',
      role: language === 'fi' ? 'Markkinointipäällikkö' : 'Marketing Director',
      company: 'TechCorp',
      content: language === 'fi'
        ? 'Automaatioominaisuudet ovat säästäneet meille lukemattomia tunteja. Tiimimme voi nyt keskittyä strategisiin tehtäviin rutiiniviestinnän sijaan.'
        : 'The automation features have saved us countless hours. Our team can now focus on strategic tasks instead of routine communication.'
    },
    {
      name: language === 'fi' ? 'Erik Andersson' : 'Erik Andersson',
      role: language === 'fi' ? 'Asiakkuusjohtaja' : 'Customer Success Manager',
      company: 'GrowthLab',
      content: language === 'fi'
        ? 'Asiakkaidemme tyytyväisyys on parantunut merkittävästi Lyylin käyttöönoton jälkeen. Ammattimainen viestintätyyli tekee todellisen eron.'
        : 'Our customer satisfaction has improved significantly since implementing Lyyli. The professional communication style makes a real difference.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            {getText('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {getText('subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border-2 border-primary/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-muted-foreground mb-6 italic leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
