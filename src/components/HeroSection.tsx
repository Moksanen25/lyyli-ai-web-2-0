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
    <section className="py-16 md:py-24 bg-gradient-to-br from-light-gray via-white to-soft-rose/30 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-normal mb-6 text-forest-green leading-tight">
              {heroT('title')}
            </h1>
            <p className="text-lg md:text-xl text-dark-gray mb-8 leading-relaxed font-inter font-normal">
              {heroT('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="btn-primary px-8 py-4 text-lg font-inter font-semibold shadow-soft hover:shadow-medium transition-all duration-300"
                asChild
              >
                <Link href={waitlistPath}>
                  {heroT('cta')}
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="btn-secondary px-8 py-4 text-lg font-inter font-semibold shadow-soft hover:shadow-medium transition-all duration-300"
                onClick={() => setShowDemo(true)}
              >
                {heroT('demoCta')}
              </Button>
            </div>
          </div>
          
          {/* Right side - ROI Widget */}
          <div className="flex justify-center lg:justify-end">
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
