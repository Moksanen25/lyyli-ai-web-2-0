
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeatureHero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gradient-to-b from-primary/10 to-background pt-16 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
          {t('features.pageHero.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in">
          {t('features.pageHero.description')}
        </p>
        <div className="relative h-64 md:h-96 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl animate-fade-in">
          <img 
            src="/placeholder.svg" 
            alt={t('features.pageHero.imageAlt')} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureHero;
