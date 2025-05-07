
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutHero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Lyyli</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
        We're creating revolutionary AI-powered content management solutions that transform how businesses handle their content workflows.
      </p>
      <div className="relative h-80 md:h-96 w-full max-w-5xl mx-auto rounded-xl overflow-hidden">
        <img 
          src="/placeholder.svg" 
          alt="Team collaboration" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutHero;
