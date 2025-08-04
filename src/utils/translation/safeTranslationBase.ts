
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { languages, SupportedLanguage } from '@/translations';
import { SafeTranslationOptions } from './types';

/**
 * Base safe translation function with multiple fallback strategies
 */
export const createSafeTranslator = (t: (key: string) => string, language: string) => {
  return (key: string, options: SafeTranslationOptions = {}) => {
    try {
      if (!key) return options.fallback || ''; 
      
      // Get translation or fallback to key
      let translation = t(key) || '';
      
      // If translation is same as key, it probably failed - try fallback
      if (translation === key && options.fallback) {
        translation = options.fallback;
      }
      
      // Handle interpolation for variables like {amount}
      if (options.interpolation && translation) {
        Object.entries(options.interpolation).forEach(([interpKey, value]) => {
          translation = translation.replace(new RegExp(`{${interpKey}}`, 'g'), String(value));
        });
      }
      
      // Debug logging
      if (options.debug && process.env.NODE_ENV === 'development') {
        console.log(`Safe translation for key: ${key}`, { language, result: translation, fallback: options.fallback });
      }
      
      return translation || options.fallback || key;
    } catch (error) {
      console.error(`[safeT] Error translating key: "${key}"`, error);
      return options.fallback || key;
    }
  };
};

/**
 * Hook to safely access translations with fallbacks
 * to prevent UI crashes due to missing translation keys
 */
export const useSafeTranslationBase = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useSafeTranslationBase must be used within a LanguageProvider');
  }
  
  const { language } = context;
  
  // Simple translation function to avoid circular dependency
  const t = (key: string): string => {
    try {
      const keys = key.split('.');
      let result: any = languages[language as SupportedLanguage] || languages.en;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          // Fallback to English
          result = languages.en;
          for (const fallbackKey of keys) {
            if (result && typeof result === 'object' && fallbackKey in result) {
              result = result[fallbackKey];
            } else {
              return key; // Return key if translation not found
            }
          }
          break;
        }
      }
      
      return typeof result === 'string' ? result : key;
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  };
  
  const safeT = createSafeTranslator(t, language);
  
  return {
    safeT,
    t,
    language,
    isFinnish: language === 'fi'
  };
};