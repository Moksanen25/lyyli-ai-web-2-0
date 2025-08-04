'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import DemoDialog from '@/components/lyyli-demo/DemoDialog';
import HeroROIWidget from '@/components/HeroROIWidget';

const HeroSection: React.FC = () => {
  const { heroT, language } = useLanguage();
  const [showDemo, setShowDemo] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const waitlistPath = language === 'fi' ? '/fi/waitlist' : '/waitlist';
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-primary/5 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-60"></div>
      <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-lg opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-lg opacity-50"></div>
      
      <div className="container-padding container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-[#295045] hyphens-none">
          {heroT('title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          {heroT('subtitle')}
        </p>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12 animate-fade-in">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-12 py-6 text-xl rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <Link href={waitlistPath}>
                {heroT('cta')}
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 bg-white/80 backdrop-blur-sm text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <Link href={language === 'fi' ? '/fi/features' : '/features'}>
                {language === 'fi' ? 'Tutustu ominaisuuksiin' : 'Explore features'}
              </Link>
            </Button>
          </div>
          
          {/* ROI Widget */}
          <div className="lg:ml-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl blur-lg"></div>
            <div className="relative">
              <HeroROIWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Dialog */}
      <DemoDialog 
        isOpen={showDemo}
        setIsOpen={setShowDemo}
        animationPhase={animationPhase}
        setAnimationPhase={setAnimationPhase}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </section>
  );
};

export default HeroSection;
