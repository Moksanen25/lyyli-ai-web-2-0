
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutHero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-8 md:mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{t('about.hero.title')}</h1>
      <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4">
        {t('about.hero.description')}
      </p>
      <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden px-4 md:px-0">
        <AspectRatio ratio={16/9} className="bg-gray-100">
          <img 
            src="/images/features-dashboard.jpg" 
            alt={t('about.hero.imageAlt') || "Lyyli platform dashboard interface showing various content management features"} 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default AboutHero;
