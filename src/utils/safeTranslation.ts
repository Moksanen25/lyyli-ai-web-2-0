
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { languages, SupportedLanguage } from '@/translations';
import { SafeTranslationOptions } from './translation/types';

/**
 * Hook to safely access translations with fallbacks
 * to prevent UI crashes due to missing translation keys
 */
export const useSafeTranslation = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useSafeTranslation must be used within a LanguageProvider');
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
  
  // Create safeT function
  const safeT = (key: string, options: SafeTranslationOptions = {}) => {
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
  
  // Simple implementations to avoid circular dependencies
  const blogT = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(`blog.${key}`, options);
  };
  
  const featuresT = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(`features.${key}`, options);
  };
  
  const customerSegmentsT = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(`customerSegments.${key}`, options);
  };
  
  const pricingT = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(`pricing.${key}`, options);
  };
  
  const heroT = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(`hero.${key}`, options);
  };
  
  const calculatorT = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(`calculator.${key}`, options);
  };
  
  const debugTranslation = (key: string) => {
    return t(key);
  };
  
  const translateSegmentKey = (key: string) => {
    return t(`customerSegments.${key}`);
  };
  
  const safeTr = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(key, options);
  };
  
  return { 
    safeT, 
    blogT,
    pricingT,
    heroT,
    featuresT,
    calculatorT,
    customerSegmentsT,
    debugTranslation,
    translateSegmentKey,
    safeTr,
    t, 
    language,
    isFinnish: language === 'fi'
  };
};
export type { SafeTranslationOptions } from './translation/types';

