'use client';

import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { getTranslation, SupportedLanguage } from '@/utils/simpleTranslations';

/**
 * Custom hook to use the language context combined with translation
 * This hook combines language selection with translation functionality
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  // Simple translation function using the new system
  const t = (key: string): string => {
    return getTranslation(context.language as SupportedLanguage, key);
  };
  
  // Safe translation function with fallback support
  const safeTr = (key: string, interpolation?: Record<string, string | number>, options: { fallback?: string } = {}) => {
    try {
      let translation = t(key);
      
      // Handle interpolation
      if (interpolation && translation) {
        Object.entries(interpolation).forEach(([interpKey, value]) => {
          translation = translation.replace(new RegExp(`{${interpKey}}`, 'g'), String(value));
        });
      }
      
      // Return translation or fallback
      return translation || options.fallback || key;
    } catch (error) {
      console.error('Safe translation error:', error);
      return options.fallback || key;
    }
  };
  
  // Safe translation function (alias for safeTr)
  const safeT = (key: string, options: { fallback?: string } = {}) => {
    return safeTr(key, {}, options);
  };
  
  // Customer segments translation function
  const customerSegmentsT = (key: string, options: { fallback?: string } = {}) => {
    return safeTr(`customerSegments.${key}`, {}, options);
  };
  
  // Features translation function
  const featuresT = (key: string, options: { fallback?: string } = {}) => {
    return safeTr(`features.${key}`, {}, options);
  };
  
  // Hero translation function
  const heroT = (key: string, options: { fallback?: string } = {}) => {
    return safeTr(`hero.${key}`, {}, options);
  };
  
  // Calculator translation function
  const calculatorT = (key: string, options: { fallback?: string } = {}) => {
    return safeTr(`calculator.${key}`, {}, options);
  };
  
  return {
    ...context,
    t,
    safeTr,
    safeT,
    customerSegmentsT,
    featuresT,
    heroT,
    calculatorT,
    language: context.language,
    // Helper flag for Finnish language
    isFinnish: context.language === 'fi'
  };
};

export default useLanguage;
