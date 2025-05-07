
import React, { createContext, useContext, useState, useEffect } from 'react';
import { languages, SupportedLanguage, TranslationsType } from '../translations';

// Type for our context
type LanguageContextType = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  t: (key: string) => string;
};

// Create the context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get the saved language from localStorage, default to 'en'
  const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') as SupportedLanguage : null;
  const [language, setLanguage] = useState<SupportedLanguage>(savedLanguage || 'en');

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    // Split the key by dots to navigate the nested object
    const keys = key.split('.');
    // Start with the selected language object
    let value: any = languages[language];
    
    // Navigate through the nested object
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        // If the key doesn't exist, return the key itself
        return key;
      }
    }
    
    // If the value is not a string, convert it to string
    return typeof value === 'string' ? value : String(value);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// For backwards compatibility, also export the languages
export { languages };
