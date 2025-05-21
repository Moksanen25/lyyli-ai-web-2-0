
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
  
  // Use the existing logo URL that we know works
  const logoUrl = "/lovable-uploads/39c9c229-44c8-40ee-9e43-016269635def.png";
  
  useEffect(() => {
    // Debug logging to verify the image is loading
    console.log("Current logo URL:", logoUrl);
    const img = new Image();
    img.onload = () => console.log("Logo image loaded successfully!");
    img.onerror = () => console.error("Logo failed to load from URL:", logoUrl);
    img.src = logoUrl;
  }, []);
  
  const handleOpenDemo = () => {
    setAnimationPhase(0); // Reset animation
    setIsLoading(true);   // Start with loading state
    setShowDemo(true);    // Show the demo dialog
  };
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-primary/10">
      <div className="container-padding container mx-auto text-center">
        {/* Mobile logo with the new image */}
        {isMobile && (
          <div className="mb-8 flex justify-center">
            <div className="w-64 h-64 flex items-center justify-center bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
              <ImageWithFallback 
                src={logoUrl}
                alt="Lyyli.ai Logo"
                className="max-w-full max-h-full object-contain p-4"
                fallbackSrc="/placeholder.svg"
              />
            </div>
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
