
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { useTranslation } from './useTranslation';
import { useSafeTranslation } from '@/utils/safeTranslation';

/**
 * Custom hook to use the language context combined with translation
 * This hook combines language selection with translation functionality
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  // Use the enhanced translation hooks
  const { t, language } = useTranslation();
  const { 
    safeT, 
    blogT, 
    pricingT, 
    heroT, 
    featuresT, 
    calculatorT,
    customerSegmentsT 
  } = useSafeTranslation();
  
  // Debug function to help diagnose translation issues
  const debugTranslation = (key: string): void => {
    if (import.meta.env.DEV) {
      try {
        const translated = t(key);
        console.log(`Translation Debug - Key: "${key}", Result: "${translated || 'MISSING'}", Language: ${language}`);
        
        if (translated === key) {
          console.warn(`Translation missing for key "${key}" in language "${language}"`);
        }
      } catch (error) {
        console.error(`Translation error for key "${key}":`, error);
      }
    }
  };
  
  // Helper function to translate a customer segment key
  const translateSegmentKey = (key: string): string => {
    if (!key) return '';
    try {
      // If the key is already a full path, use t directly
      if (key.includes('.')) {
        return t(key) || key;
      }
      // Otherwise, assume it's a customer segment key and prefix it
      return t(`customerSegments.${key}`) || key;
    } catch (error) {
      console.error(`Error translating segment key: ${key}`, error);
      return key;
    }
  };
  
  // Safe translate function that never returns undefined or crashes
  const safeTr = (key: string, defaultValue: string = ''): string => {
    if (!key) return defaultValue;
    
    try {
      const translated = t(key);
      // If translation exists and isn't just returning the key itself
      if (translated && translated !== key) {
        return translated;
      }
      
      // Try with features prefix if it's a feature key
      if (!key.startsWith('features.') && key.includes('.')) {
        const featureKey = `features.${key}`;
        const featureTranslated = t(featureKey);
        if (featureTranslated && featureTranslated !== featureKey) {
          return featureTranslated;
        }
      }
      
      // Try with customerSegments prefix
      if (!key.startsWith('customerSegments.')) {
        const segmentKey = `customerSegments.${key}`;
        const segmentTranslated = t(segmentKey);
        if (segmentTranslated && segmentTranslated !== segmentKey) {
          return segmentTranslated;
        }
      }
      
      // Finally return default or key as last resort
      return defaultValue || key;
    } catch (error) {
      console.error(`Error in safeTr for key: ${key}`, error);
      return defaultValue || key;
    }
  };
  
  return {
    ...context,
    t,
    safeTr,
    language,
    safeT,
    blogT,
    pricingT,
    heroT,
    featuresT,
    calculatorT,
    customerSegmentsT,
    debugTranslation,
    translateSegmentKey,
    // Helper flag for Finnish language
    isFinnish: language === 'fi'
  };
};
