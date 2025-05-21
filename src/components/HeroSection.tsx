
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Shield, Database, MessageSquare } from 'lucide-react';
import DemoDialog from '@/components/lyyli-demo/DemoDialog';
import { useIsMobile } from '@/hooks/use-mobile';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const HeroSection: React.FC = () => {
  const { heroT } = useLanguage();
  const [showDemo, setShowDemo] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  
  // Handle demo dialog
  const handleOpenDemo = () => {
    setAnimationPhase(0); // Reset animation
    setIsLoading(true);   // Start with loading state
    setShowDemo(true);    // Show the demo dialog
  };
  
  return (
    <section className="py-20 md:py-32 bg-background relative">
      <div className="container-padding container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-[#295045]">
          {heroT('title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          {heroT('subtitle')}
        </p>
        <div className="flex justify-center mb-12 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-[#295045] hover:bg-[#1f3c34] text-white px-12 py-6 text-xl rounded-md"
          >
            {heroT('cta')}
          </Button>
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
