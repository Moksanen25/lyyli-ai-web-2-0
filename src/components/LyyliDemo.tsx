
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import DemoDialog from './lyyli-demo/DemoDialog';
import { ErrorBoundary } from './ui/error-boundary';
import { useSafeTranslation } from '@/utils/safeTranslation';

const LyyliDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  
  return (
    <ErrorBoundary>
      <Button 
        variant="outline" 
        className="border-primary text-primary hover:bg-primary/10 h-10 px-4 py-2"
        onClick={handleOpen}
      >
        {safeT('hero.secondaryCta', { fallback: 'See how it works' })}
      </Button>
      
      <DemoDialog 
        isOpen={isOpen}
        setIsOpen={handleClose}
        animationPhase={animationPhase}
        setAnimationPhase={setAnimationPhase}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </ErrorBoundary>
  );
};

export default LyyliDemo;
