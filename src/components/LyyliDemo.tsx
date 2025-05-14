
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import DemoDialog from './lyyli-demo/DemoDialog';

const LyyliDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();
  
  // Reset animation state when component mounts
  useEffect(() => {
    return () => {
      // Clean up animation state when component unmounts
      setAnimationPhase(0);
      setIsLoading(false);
      setIsOpen(false);
    };
  }, []);
  
  const handleOpen = () => {
    setAnimationPhase(0); // Reset animation phase first
    setIsLoading(true);   // Set loading state
    setIsOpen(true);      // Then open dialog
  };
  
  return (
    <>
      <Button 
        variant="outline" 
        className="border-primary text-primary hover:bg-primary/10 h-10 px-4 py-2"
        onClick={handleOpen}
      >
        {t('hero.secondaryCta')}
      </Button>
      
      <DemoDialog 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        animationPhase={animationPhase}
        setAnimationPhase={setAnimationPhase}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
};

export default LyyliDemo;
