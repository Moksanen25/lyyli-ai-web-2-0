
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Only show verification button in development mode
const isDev = import.meta.env.DEV;

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, verifyLanguageCompleteness } = useLanguage();

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (newLanguage: string) => {
    console.log('Switching language from', language, 'to', newLanguage);
    setLanguage(newLanguage as 'en' | 'fi' | 'sv');
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
          <Button 
            variant="ghost" 
            size="sm"
            className="flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <span className="text-lg">{currentLanguage.flag}</span>
            <span className="font-medium">{currentLanguage.code.toUpperCase()}</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white border shadow-lg">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50 ${
                language === lang.code ? 'bg-primary/10 text-primary' : ''
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
              {language === lang.code && <Check className="h-4 w-4 ml-auto" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
