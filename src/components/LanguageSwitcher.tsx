
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

// Only show verification button in development mode
const isDev = import.meta.env.DEV;

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, verifyLanguageCompleteness } = useLanguage();

  const toggleLanguage = () => {
    console.log('Switching language from', language, 'to', language === 'en' ? 'fi' : 'en');
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
          <Check className="h-4 w-4 mr-1" />
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

export default LanguageSwitcher;
