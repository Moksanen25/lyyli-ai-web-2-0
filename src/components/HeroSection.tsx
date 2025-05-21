
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Shield, Database, MessageSquare } from 'lucide-react';
import DemoDialog from '@/components/lyyli-demo/DemoDialog';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { useIsMobile } from '@/hooks/use-mobile';
import { checkImageExists } from '@/utils/imageUtils';

const HeroSection: React.FC = () => {
  const { heroT } = useLanguage();
  const [showDemo, setShowDemo] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  const [logoLoaded, setLogoLoaded] = useState(false);
  
  // Image URL for the logo
  const logoUrl = "/lovable-uploads/742f48bc-10ea-41bc-a63e-62b14b607126.png";
  
  // Debug the image URL
  useEffect(() => {
    console.log("Hero logo URL:", logoUrl);
    
    // Check if the image exists
    checkImageExists(logoUrl).then(exists => {
      console.log(`Logo image exists: ${exists}`);
      setLogoLoaded(exists);
    });
  }, [logoUrl]);
  
  const handleOpenDemo = () => {
    setAnimationPhase(0); // Reset animation
    setIsLoading(true);   // Start with loading state
    setShowDemo(true);    // Show the demo dialog
  };
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-primary/10">
      <div className="container-padding container mx-auto text-center">
        {/* Mobile-only logo above the heading */}
        {isMobile && (
          <div className="mb-8 flex justify-center">
            <ImageWithFallback
              src={logoUrl}
              alt="Lyyli.ai Logo"
              className="w-40 h-auto"
              fallbackSrc="/placeholder.svg"
              width={160}
              height={160}
              style={{ display: 'block', maxHeight: '160px' }}
            />
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          {heroT('title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          {heroT('subtitle')}
        </p>
        <div className="flex justify-center space-x-4 mb-12 animate-fade-in">
          <a href="https://lyyli.vercel.app" target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              {heroT('cta')}
            </Button>
          </a>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleOpenDemo}
            className="hidden md:inline-flex"
          >
            {heroT('secondaryCta')}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in">
          {/* Trust indicator badges removed from here */}
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
