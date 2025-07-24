import React, { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { languages, SupportedLanguage } from '../translations';
import { verifyTranslations } from '@/utils/translationUtils';
import { toast } from '@/components/ui/use-toast';
import { 
  getBrowserLanguage, 
  getPathLanguage,
  getUpdatedPath
} from '@/utils/languageUtils';

// Type for our context
type LanguageContextType = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  verifyLanguageCompleteness: () => void;
};

// Create the context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine language from path, localStorage, or browser
  const pathLanguage = getPathLanguage(location.pathname);
  const savedLanguage = localStorage.getItem('language') as SupportedLanguage | null;
  
  // Debug information to track initial render and context mounting
  console.log('LanguageContext rendering, current path:', location.pathname, 'detected path language:', pathLanguage);
  
  // Use browser language if no explicit preference has been set yet
  const browserLanguage = getBrowserLanguage();
  const initialLanguage = pathLanguage || savedLanguage || browserLanguage;
  
  const [language, setLanguageState] = useState<SupportedLanguage>(initialLanguage);
  
  // Debug information
  console.log('Final language selected:', language, 'Path language:', pathLanguage, 'Saved:', savedLanguage, 'Browser:', browserLanguage, 'Path:', location.pathname);

  // Effect to update path when language changes
  useEffect(() => {
    console.log('Language effect triggered with language:', language);
    localStorage.setItem('language', language);
    
    // Update URL if needed based on current language
    try {
      const currentPath = location.pathname;
      const newPath = getUpdatedPath(currentPath, language);
      
      if (newPath) {
        console.log('Updating path to:', newPath);
        // Use replace: true to avoid adding to browser history
        navigate(newPath, { replace: true });
      }
    } catch (error) {
      console.error('Error updating URL for language change:', error);
    }
  }, [language, location.pathname, navigate]);

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

  // Custom setLanguage function that forces path update immediately
  const setLanguage = (newLanguage: SupportedLanguage) => {
    console.log('Setting language to:', newLanguage);
    
    // Update language in state
    setLanguageState(newLanguage);
    
    // Get the updated path using the improved logic
    const newPath = getUpdatedPath(location.pathname, newLanguage);
    
    if (newPath) {
      console.log('Immediately updating path from', location.pathname, 'to:', newPath);
      navigate(newPath, { replace: true });
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      verifyLanguageCompleteness 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Export the languages for backwards compatibility
export { languages };
