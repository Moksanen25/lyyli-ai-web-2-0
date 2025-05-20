import { useSafeTranslationBase } from './safeTranslationBase';
import { languages } from '@/translations';
import { SafeTranslationOptions } from './types';

/**
 * Hook for customer segments-specific translation functionality
 */
export const useCustomerSegmentsTranslation = () => {
  const { safeT, t, language } = useSafeTranslationBase();
  
  /**
   * Special function for customer segments content with extended fallback behavior
   */
  const customerSegmentsT = (key: string, options: SafeTranslationOptions = {}) => {
    try {
      // First attempt with standard path
      const result = safeT(`customerSegments.${key}`, {
        ...options,
        debug: import.meta.env.DEV // Debug in development
      });
      
      // If we got a meaningful result, return it
      if (result && result !== `customerSegments.${key}`) {
        return result;
      }
      
      // Try direct key if the prefixed version failed
      if (key.includes('.')) {
        const directResult = safeT(key, options);
        if (directResult && directResult !== key) {
          return directResult;
        }
      }
      
      // Final fallback - try to get from English translations
      if (language === 'fi') {
        try {
          const enTranslations = languages.en;
          const fullKey = key.includes('.') ? key : `customerSegments.${key}`;
          const keyPath = fullKey.split('.');
          
          let value = enTranslations;
          let found = true;
          
          // Navigate through nested keys
          keyPath.forEach(k => {
            if (value && typeof value === 'object' && k in value) {
              value = value[k];
            } else {
              found = false;
            }
          });
          
          if (found && typeof value === 'string') {
            if (import.meta.env.DEV) {
              console.warn(`[customerSegmentsT] Using English fallback for: ${key}`);
            }
            return value; // Return English fallback
          }
        } catch (err) {
          console.error(`Error in English fallback for key: ${key}`, err);
        }
      }
      
      // Last resort fallback
      return options.fallback || key;
    } catch (error) {
      console.error(`Error in customerSegmentsT for key: ${key}`, error);
      return options.fallback || key;
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
  
  return { customerSegmentsT, translateSegmentKey, safeT, t, language };
};
