'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { SupportedLanguage } from '@/utils/simpleTranslations';
import { toast } from '@/components/ui/use-toast';
import { 
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
export const LanguageProvider: React.FC<{ 
  children: React.ReactNode;
  initialLanguage?: SupportedLanguage;
}> = ({ children, initialLanguage }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('language') as SupportedLanguage;
      if (storedLang && (storedLang === 'en' || storedLang === 'fi')) {
        return storedLang;
      }
      const pathLang = getPathLanguage(pathname || '');
      if (pathLang && (pathLang === 'en' || pathLang === 'fi')) {
        return pathLang;
      }
    }
    return initialLanguage || 'en';
  });

  const setLanguage = useCallback((newLanguage: SupportedLanguage) => {
    if (newLanguage === 'en' || newLanguage === 'fi') {
      setLanguageState(newLanguage);
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage);
        const newPath = getUpdatedPath(pathname || '', newLanguage);
        if (newPath && newPath !== pathname) {
          router.replace(newPath);
        }
      }
    } else {
      console.warn(`Unsupported language: ${newLanguage}`);
    }
  }, [pathname, router]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathLang = getPathLanguage(pathname || '');
      if (pathLang && pathLang !== language && (pathLang === 'en' || pathLang === 'fi')) {
        setLanguage(pathLang);
      }
    }
  }, [pathname, language, setLanguage]);

  const verifyLanguageCompleteness = useCallback(() => {
    if (process.env.NODE_ENV === 'development') {
      toast({
        title: "Language System",
        description: `Current language: ${language}`,
      });
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    verifyLanguageCompleteness,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
