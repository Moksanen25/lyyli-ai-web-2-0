
import { useContext } from 'react';
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
   * Translate a key to the current language
   * @param key The translation key (dot notation)
   * @returns The translated string
   */
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
      
      // Use utility function to find translation
      const translatedValue = findTranslationValue(value, keys);
      
      if (translatedValue !== null) {
        return translatedValue;
      }
      
      // Fallback to English
      const enValue = findTranslationValue(languages.en, keys);
      const result = enValue !== null ? enValue : key;
      
      // Debug for missing translations in development
      if (import.meta.env.DEV && enValue === null) {
        console.warn(`Missing translation for key: ${key} in both ${language} and en languages`);
      }
      
      return result;
    } catch (error) {
      console.error(`Error translating key: ${key}`, error);
      return key;
    }
  };

  return {
    t,
    language
  };
};
