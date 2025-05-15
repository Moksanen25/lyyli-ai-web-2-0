
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutHero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('about.hero.title')}</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
        {t('about.hero.description')}
      </p>
      <div className="relative h-80 md:h-96 w-full max-w-5xl mx-auto rounded-xl overflow-hidden">
        <AspectRatio ratio={16/9}>
          <img 
            src="/images/features-dashboard.jpg" 
            alt={t('about.hero.imageAlt')} 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default AboutHero;
