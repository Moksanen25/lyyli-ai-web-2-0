
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
    customerSegmentsT,
    debugTranslation,
    translateSegmentKey,
    safeTr,
  } = useSafeTranslation();
  
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
