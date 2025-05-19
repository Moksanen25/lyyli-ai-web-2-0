
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import DemoDialog from './lyyli-demo/DemoDialog';
import BookDemoDialog from '@/components/BookDemoDialog';
import { ErrorBoundary } from './ui/error-boundary';
import { useSafeTranslation } from '@/utils/safeTranslation';

const LyyliDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { safeT } = useSafeTranslation();
  
  // Reset animation state when component mounts or unmounts
  useEffect(() => {
    console.log('LyyliDemo mounted');
    
    return () => {
      console.log('LyyliDemo unmounting, cleaning up state');
      setAnimationPhase(0);
      setIsLoading(false);
      setIsOpen(false);
      setShowBooking(false);
    };
  }, []);
  
  const handleOpen = () => {
    console.log('Opening demo dialog');
    setAnimationPhase(0); // Reset animation phase first
    setIsLoading(true);   // Set loading state
    setIsOpen(true);      // Then open dialog
  };

  const handleClose = () => {
    console.log('Closing demo dialog');
    setIsOpen(false);
    
    // Reset other states after a delay to ensure clean unmount
    setTimeout(() => {
      setAnimationPhase(0);
      setIsLoading(false);
    }, 300);
  };

  const handleBookDemo = () => {
    setShowBooking(true);
  };
  
  return (
    <ErrorBoundary>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary/10 h-10 px-4 py-2"
          onClick={handleOpen}
        >
          {safeT('hero.secondaryCta', { fallback: 'See how it works' })}
        </Button>
        
        <Button
          className="bg-primary hover:bg-primary/90 h-10 px-4 py-2"
          onClick={handleBookDemo}
        >
          {safeT('hero.primaryCta', { fallback: 'Book a demo' })}
        </Button>
      </div>
      
      <DemoDialog 
        isOpen={isOpen}
        setIsOpen={handleClose}
        animationPhase={animationPhase}
        setAnimationPhase={setAnimationPhase}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      
      <BookDemoDialog open={showBooking} onOpenChange={setShowBooking} />
    </ErrorBoundary>
  );
};

export default LyyliDemo;
