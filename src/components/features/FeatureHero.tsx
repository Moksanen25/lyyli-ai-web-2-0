
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FeatureHero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  return (
    <div className="bg-gradient-to-b from-primary/10 to-background pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {t('features.pageHero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {t('features.pageHero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/pricing')}
              >
                {t('features.pageHero.primaryCta')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                {t('features.pageHero.secondaryCta')}
              </Button>
            </div>
          </div>
          
          <div className="relative min-h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl animate-fade-in">
            <img 
              src="/images/features-dashboard.jpg" 
              alt={t('features.pageHero.imageAlt')} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHero;
