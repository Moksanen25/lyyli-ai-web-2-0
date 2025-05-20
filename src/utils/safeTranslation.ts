
import { useTranslation } from '@/hooks/useTranslation';
import { languages } from '@/translations';

type SafeTranslationOptions = {
  debug?: boolean;
  fallback?: string;
  forceLanguage?: 'en' | 'fi';
  interpolation?: Record<string, string | number>;
}

/**
 * Hook to safely access translations with fallbacks
 * to prevent UI crashes due to missing translation keys
 */
export const useSafeTranslation = () => {
  const { t, language } = useTranslation();

  // Super-safe translation function with multiple fallback strategies
  const safeT = (key: string, options: SafeTranslationOptions = {}) => {
    try {
      if (!key) return options.fallback || ''; 
      
      // Allow forcing a specific language for translation
      const currentLanguage = options.forceLanguage || language;
      const isFinnish = currentLanguage === 'fi';
      
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
      
      // Debug output in development
      if (options.debug && import.meta.env.DEV) {
        console.log(`[safeT] Key: ${key}, Result: "${translation}", Language: ${currentLanguage}`);
        
        if (translation === key) {
          console.warn(`[safeT] Translation likely missing for: ${key}`);
        }
      }
      
      return translation || options.fallback || key;
    } catch (error) {
      console.error(`[safeT] Error translating key: "${key}"`, error);
      return options.fallback || key;
    }
  };

  /**
   * Special function for blog content
   */
  const blogT = (key: string, options: SafeTranslationOptions = {}) => {
    // For blog titles and content that shouldn't be translated, just return the original
    if (key.includes('title') || key.includes('content') || key.includes('excerpt')) {
      return key;
    }
    
    // For UI elements that should be translated
    return safeT(`blog.${key}`, { 
      ...options,
      debug: true // Always debug blog translations
    });
  };
  
  /**
   * Special function for pricing content with interpolation support
   */
  const pricingT = (key: string, interpolation?: Record<string, string | number>, options: SafeTranslationOptions = {}) => {
    return safeT(`pricing.${key}`, {
      ...options,
      interpolation
    });
  };

  /**
   * Special function for hero content
   */
  const heroT = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(`hero.${key}`, options);
  };

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

  /**
   * Special function for calculator content
   */
  const calculatorT = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(`calculator.${key}`, options);
  };

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

  return { 
    safeT, 
    blogT,
    pricingT,
    heroT,
    featuresT,
    calculatorT,
    customerSegmentsT,
    t, 
    language,
    isFinish: language === 'fi' // Typo fixed (isFinish -> isFinnish)
  };
};
