
import { useSafeTranslationBase } from './safeTranslationBase';
import { languages } from '@/translations';
import { SafeTranslationOptions } from './types';

/**
 * Hook for features-specific translation functionality
 */
export const useFeaturesTranslation = () => {
  const { safeT, t, language } = useSafeTranslationBase();
  
  /**
   * Special function for features content with better fallbacks
   */
  const featuresT = (key: string, options: SafeTranslationOptions = {}) => {
    try {
      // First try direct key
      const result = safeT(`features.${key}`, options);
      
      // If result is just returning key or empty, try English fallback
      if (!result || result === `features.${key}`) {
        // Try to get English version as fallback
        const enTranslations = languages.en;
        const keyPath = key.split('.');
        
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
          return value; // Return English fallback
        }
      }
      
      return result;
    } catch (error) {
      console.error(`Error in featuresT for key: ${key}`, error);
      return options.fallback || key;
    }
  };
  
  return { featuresT, safeT, t, language };
};
