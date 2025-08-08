'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const ProblemSection: React.FC = () => {
  const { language, t } = useLanguage();

  const features = [
    { category: 'features', items: ['support', 'interface', 'automation', 'costSavings', 'professionalTone'] },
    { category: 'benefits', items: ['timeSavings', 'consistency', 'analytics', 'satisfaction'] }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            {t('whyChoose.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('whyChoose.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {features.map((featureGroup, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {featureGroup.category === 'features' ? 'Ominaisuudet' : 'Edut'}
              </h3>
              <div className="space-y-4">
                {featureGroup.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-emerald-600" />
                    </div>
                    <p className="text-muted-foreground">
                      {t(`whyChoose.${featureGroup.category}.${item}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href={language === 'fi' ? '/fi/waitlist' : '/waitlist'}>
              {t('hero.cta')}
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            asChild
          >
            <Link href={language === 'fi' ? '/fi/contact' : '/contact'}>
              {t('hero.demoCta')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;