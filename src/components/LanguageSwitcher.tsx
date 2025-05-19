
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Only show verification button in development mode
const isDev = import.meta.env.DEV;

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, verifyLanguageCompleteness } = useLanguage();

  const handleLanguageChange = (newLanguage: 'en' | 'fi') => {
    console.log('Switching language from', language, 'to', newLanguage);
    setLanguage(newLanguage);
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
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button 
            className="flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label="Select language"
          >
            <span className={`${language === 'en' ? 'font-semibold' : ''} mr-1`}>EN</span>
            <span className="mx-1">|</span>
            <span className={`${language === 'fi' ? 'font-semibold' : ''} ml-1`}>FI</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem 
            onClick={() => handleLanguageChange('en')}
            className={`${language === 'en' ? 'bg-primary/10 font-medium' : ''}`}
          >
            English
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => handleLanguageChange('fi')}
            className={`${language === 'fi' ? 'bg-primary/10 font-medium' : ''}`}
          >
            Finnish
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
