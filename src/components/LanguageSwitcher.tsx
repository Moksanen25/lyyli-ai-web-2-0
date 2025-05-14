
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

// Only show in development mode
const isDev = import.meta.env.DEV;

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, verifyLanguageCompleteness } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fi' : 'en');
  };

  return (
    <div className="flex items-center space-x-2">
      {isDev && (
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs px-2 text-muted-foreground hover:text-primary"
          onClick={verifyLanguageCompleteness}
          title="Verify all translations are complete"
        >
          <VerifyIcon className="h-4 w-4 mr-1" />
          Verify
        </Button>
      )}
      
      <button 
        onClick={toggleLanguage}
        className="flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        aria-label={language === 'en' ? 'Switch to Finnish' : 'Vaihda englantiin'}
      >
        <span className={`${language === 'en' ? 'font-semibold' : ''} mr-1`}>EN</span>
        <span className="mx-1">|</span>
        <span className={`${language === 'fi' ? 'font-semibold' : ''} ml-1`}>FI</span>
      </button>
    </div>
  );
};

// Simple verify icon component
const VerifyIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);
