
import { useContext, useMemo, useCallback } from 'react';
import { languages, SupportedLanguage } from '@/translations';
import { findTranslationValue } from '@/utils/languageUtils';
import { LanguageContext } from '@/contexts/LanguageContext';

/**
 * Custom hook for translation functionality
 */
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  
  const { language } = context;

  /**
   * Translate a key to the current language with fallbacks
   */
  const t = useCallback((key: string): string => {
    try {
      if (!key) {
        console.warn('Empty translation key provided');
        return '';
      }
      
      const keys = key.split('.');
      
      // Try current language first
      let currentLangValue: any = languages[language];
      
      if (!currentLangValue) {
        console.error(`Language not found: ${language}`);
        // Fallback to English
        currentLangValue = languages.en;
        if (!currentLangValue) return key;
      }
      
      // Use utility function to find translation in current language
      const translatedValue = findTranslationValue(currentLangValue, keys);
      
      if (translatedValue !== null) {
        return translatedValue;
      }
      
      // If translation not found in current language, try English
      if (language !== 'en') {
        const enValue = findTranslationValue(languages.en, keys);
        if (enValue !== null) {
          // Log missing translations in development
          if (import.meta.env.DEV) {
            console.warn(`Missing translation for ${language}: ${key}, using English fallback`);
          }
          return enValue;
        }
      }
      
      // If still not found, return key
      if (import.meta.env.DEV) {
        console.warn(`Missing translation for key: ${key} in both ${language} and en languages`);
      }
      
      return key;
    } catch (error) {
      console.error(`Error translating key: ${key}`, error);
      return key;
    }
  }, [language]);
  
  // Memoize result to prevent unnecessary re-renders
  const value = useMemo(() => ({
    t,
    language
  }), [t, language]);

  return value;
};
