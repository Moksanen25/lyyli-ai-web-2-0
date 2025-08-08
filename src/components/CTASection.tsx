'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CTASection: React.FC = () => {
  const { language } = useLanguage();

  const getText = (key: string) => {
    const texts = {
      en: {
        title: 'Ready to boost your expert organization\'s communication?',
        cta: 'Book demo'
      },
      fi: {
        title: 'Valmis tehostamaan asiantuntijaorganisaatiosi viestintää?',
        cta: 'Varaa demo'
      }
    };
    return texts[language as keyof typeof texts]?.[key as keyof typeof texts.en] || texts.en[key as keyof typeof texts.en];
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {getText('title')}
          </h2>
          <Button 
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold rounded-lg"
            asChild
          >
            <Link href={language === 'fi' ? '/fi/contact' : '/contact'}>
              {getText('cta')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
