
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
  
  return {
    ...context,
    t,
    language,
    safeT,
    blogT,
    pricingT,
    heroT,
    featuresT,
    calculatorT,
    customerSegmentsT,
    debugTranslation,
    // Helper flag for Finnish language
    isFinnish: language === 'fi'
  };
};
