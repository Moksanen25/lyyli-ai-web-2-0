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

// Get browser language and check if we support it
const getBrowserLanguage = (): SupportedLanguage => {
  try {
    const browserLang = navigator.language.split('-')[0].toLowerCase();
    // Currently we only support 'en' and 'fi'
    return browserLang === 'fi' ? 'fi' : 'en';
  } catch (error) {
    console.error('Error detecting browser language:', error);
    return 'en'; // Default to English
  }
};

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Debug information to track initial render and context mounting
  console.log('LanguageContext rendering, current path:', location.pathname);
  
  // Determine language from path, localStorage, or browser
  const pathLanguage = location.pathname.startsWith('/fi') ? 'fi' as SupportedLanguage : null;
  const savedLanguage = localStorage.getItem('language') as SupportedLanguage | null;
  
  // Use browser language if no explicit preference has been set yet
  const browserLanguage = getBrowserLanguage();
  const initialLanguage = pathLanguage || savedLanguage || browserLanguage;
  
  const [language, setLanguageState] = useState<SupportedLanguage>(initialLanguage);
  
  // Debug information
  console.log('Selected language:', language);

  // Effect to update path when language changes
  useEffect(() => {
    console.log('Language effect triggered with language:', language);
    localStorage.setItem('language', language);
    
    // Update URL if needed based on current language
    try {
      const currentPath = location.pathname;
      
      if (language === 'fi' && !currentPath.startsWith('/fi')) {
        // Need to add /fi prefix
        const newPath = `/fi${currentPath}`;
        console.log('Updating path to:', newPath);
        navigate(newPath, { replace: true });
      } else if (language === 'en' && currentPath.startsWith('/fi')) {
        // Need to remove /fi prefix
        const newPath = currentPath.substring(3) || '/';
        console.log('Updating path to:', newPath);
        navigate(newPath, { replace: true });
      }
    } catch (error) {
      console.error('Error updating URL for language change:', error);
    }
  }, [language, location.pathname, navigate]);
  
  // Initial language detection and URL update on first load
  useEffect(() => {
    // Only execute on initial page load
    if (!savedLanguage && !pathLanguage) {
      console.log('Initial language detection:', browserLanguage);
      setLanguageState(browserLanguage);
    }
  }, []);
  
  // Function to verify language completeness
  const verifyLanguageCompleteness = () => {
    try {
      // Only run in development
      if (typeof import.meta.env.DEV === 'undefined' || !import.meta.env.DEV) return;
      
      Object.keys(languages).forEach(lang => {
        const result = verifyTranslations(lang as SupportedLanguage);
        if (!result.isComplete) {
          console.warn(`Missing translations in ${result.language}:`, result.missingKeys);
          
          try {
            toast({
              title: `Translation issues in ${result.language.toUpperCase()}`,
              description: `Missing ${result.missingKeys.length} keys. First few: ${result.missingKeys.slice(0, 3).join(', ')}...`,
              variant: "destructive",
              duration: 10000,
            });
          } catch (error) {
            console.error('Error showing toast:', error);
          }
        }
      });
    } catch (error) {
      console.error('Error in verifyLanguageCompleteness:', error);
    }
  };

  // Translation function - ENHANCED WITH DEBUG LOGGING
  const t = (key: string): string => {
    try {
      if (!key) {
        console.warn('Empty translation key provided');
        return '';
      }
      
      const keys = key.split('.');
      let value: any = languages[language];
      
      if (!value) {
        console.error(`Language not found: ${language}`);
        // Fallback to English
        value = languages.en;
        if (!value) return key;
      }
      
      // Debug for blog translations
      if (keys[0] === 'blog' && import.meta.env.DEV) {
        console.log(`Translation lookup for [${language}]: ${key}`);
      }
      
      for (const k of keys) {
        if (value && value[k] !== undefined) {
          value = value[k];
        } else {
          if (import.meta.env.DEV) {
            console.warn(`Translation key not found: ${key} in language: ${language}`);
          }
          
          // Try to fallback to English for this key
          let enValue = languages.en;
          let found = true;
          for (const enKey of keys) {
            if (enValue && enValue[enKey] !== undefined) {
              enValue = enValue[enKey];
            } else {
              found = false;
              break;
            }
          }
          
          const result = found && typeof enValue === 'string' ? enValue : key;
          
          // Debug for blog translations
          if (keys[0] === 'blog' && import.meta.env.DEV) {
            console.log(`Fallback translation for [${language}]: ${key} -> ${result}`);
          }
          
          return result;
        }
      }
      
      const result = typeof value === 'string' ? value : String(value);
      
      // Debug for blog translations
      if (keys[0] === 'blog' && import.meta.env.DEV) {
        console.log(`Final translation for [${language}]: ${key} -> ${result}`);
      }
      
      return result;
    } catch (error) {
      console.error(`Error translating key: ${key}`, error);
      return key;
    }
  };

  // Custom setLanguage function to handle both state and URL updates
  const setLanguage = (newLanguage: SupportedLanguage) => {
    console.log('Setting language to:', newLanguage);
    setLanguageState(newLanguage);
  };

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
