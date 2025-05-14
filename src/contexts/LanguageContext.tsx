import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { languages, SupportedLanguage } from '../translations';
import { verifyTranslations } from '@/utils/translationUtils';
import { toast } from '@/components/ui/use-toast';

// Type for our context
type LanguageContextType = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  t: (key: string) => string;
  verifyLanguageCompleteness: () => void;
};

// Create the context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine language from path or localStorage
  const pathLanguage = location.pathname.startsWith('/fi') ? 'fi' as SupportedLanguage : null;
  const savedLanguage = localStorage.getItem('language') as SupportedLanguage | null;
  const initialLanguage = pathLanguage || savedLanguage || 'en';
  
  const [language, setLanguageState] = useState<SupportedLanguage>(initialLanguage);
  
  // Debug information
  console.log('Initial render - Current path:', location.pathname);
  console.log('Initial render - Selected language:', language);

  // Function to verify language completeness
  const verifyLanguageCompleteness = () => {
    // Only run in development
    if (!import.meta.env.DEV) return;
    
    Object.keys(languages).forEach(lang => {
      const result = verifyTranslations(lang as SupportedLanguage);
      if (!result.isComplete) {
        console.warn(`Missing translations in ${result.language}:`, result.missingKeys);
        
        toast({
          title: `Translation issues in ${result.language.toUpperCase()}`,
          description: `Missing ${result.missingKeys.length} keys. First few: ${result.missingKeys.slice(0, 3).join(', ')}...`,
          variant: "destructive",
          duration: 10000,
        });
      }
    });
  };

  // Translation function
  const t = (key: string): string => {
    try {
      const keys = key.split('.');
      let value: any = languages[language];
      
      for (const k of keys) {
        if (value && value[k] !== undefined) {
          value = value[k];
        } else {
          if (import.meta.env.DEV) {
            console.warn(`Translation key not found: ${key} in language: ${language}`);
          }
          return key;
        }
      }
      
      return typeof value === 'string' ? value : String(value);
    } catch (error) {
      console.error(`Error translating key: ${key}`, error);
      return key;
    }
  };

  // Custom setLanguage function to handle both state and URL updates
  const setLanguage = (newLanguage: SupportedLanguage) => {
    console.log('Setting language to:', newLanguage);
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    
    // Update URL based on language
    const currentPath = location.pathname;
    let newPath = currentPath;
    
    if (newLanguage === 'fi') {
      // Add /fi prefix if not already there
      if (!currentPath.startsWith('/fi')) {
        newPath = `/fi${currentPath}`;
      }
    } else {
      // Remove /fi prefix if it's there
      if (currentPath.startsWith('/fi')) {
        newPath = currentPath.substring(3) || '/';
        if (newPath === '') newPath = '/';
      }
    }
    
    // Only navigate if the path changed
    if (newPath !== currentPath) {
      console.log('Navigating to:', newPath);
      navigate(newPath, { replace: true }); // Use replace to avoid adding to history stack
    }
  };

  // Sync URL with language state on mount only - not on language changes to prevent loops
  useEffect(() => {
    console.log('Language context mounted - Syncing URL if needed');
    
    // No automatic path changes on language provider mount to prevent loops
    // We'll only update localStorage to keep track of the language
    localStorage.setItem('language', language);
    
    // Verify translations in development mode
    if (import.meta.env.DEV) {
      verifyLanguageCompleteness();
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, verifyLanguageCompleteness }}>
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
