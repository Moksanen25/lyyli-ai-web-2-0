
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();
  
  // Try to get the saved language from localStorage, default to 'en'
  const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') as SupportedLanguage : null;
  // Check if path starts with /fi to determine language
  const pathLanguage = location.pathname.startsWith('/fi') ? 'fi' : null;
  
  // Use path language first, then saved language, then default to 'en'
  const [language, setLanguageState] = useState<SupportedLanguage>(pathLanguage || savedLanguage || 'en');

  // Custom setLanguage function to handle both state and URL updates
  const setLanguage = (newLanguage: SupportedLanguage) => {
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
        newPath = currentPath.substring(3);
      }
    }
    
    // Only navigate if the path changed
    if (newPath !== currentPath) {
      navigate(newPath);
    }
  };

  // Update URL on initial load if needed
  useEffect(() => {
    if (language === 'fi' && !location.pathname.startsWith('/fi')) {
      navigate(`/fi${location.pathname}`);
    } else if (language === 'en' && location.pathname.startsWith('/fi')) {
      navigate(location.pathname.substring(3));
    }
  }, []);

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
