
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import DemoDialog from './lyyli-demo/DemoDialog';

const LyyliDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const { t } = useLanguage();
  
  const handleOpen = () => {
    setIsOpen(true);
  };
  
  return (
    <>
      <Button 
        variant="outline" 
        className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
        onClick={handleOpen}
      >
        {t('hero.secondaryCta')}
      </Button>
      
      <DemoDialog 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        animationPhase={animationPhase}
        setAnimationPhase={setAnimationPhase}
      />
    </>
  );
};

export default LyyliDemo;
