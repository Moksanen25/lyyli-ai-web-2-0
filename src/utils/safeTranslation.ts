
import { useTranslation } from '@/hooks/useTranslation';

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

  const safeT = (key: string, options: SafeTranslationOptions = {}) => {
    try {
      // Allow forcing a specific language for translation
      const currentLanguage = options.forceLanguage || language;
      const isFinnish = currentLanguage === 'fi';
      
      // Special handling for blog and pricing content
      const isBlogRelated = key.startsWith('blog.');
      const isPricingRelated = key.startsWith('pricing.');
      const isHeroRelated = key.startsWith('hero.');
      const isFeatureRelated = key.startsWith('features.');
      const isCalculatorRelated = key.startsWith('calculator.');
      
      // Get translation or empty string if undefined
      let translation = t(key) || '';
      
      // Handle interpolation for variables like {amount}
      if (options.interpolation && translation) {
        Object.entries(options.interpolation).forEach(([key, value]) => {
          translation = translation.replace(new RegExp(`{${key}}`, 'g'), String(value));
        });
      }
      
      // If we got a valid translation, return it
      if (translation && translation !== key) {
        // If in debug mode, log successful translation
        if ((options.debug || isBlogRelated || isPricingRelated || isHeroRelated || isFeatureRelated || isCalculatorRelated) && import.meta.env.DEV) {
          console.log(`[safeT] Successfully translated: ${key} -> "${translation}" (${currentLanguage})`);
        }
        return translation;
      }
      
      // Enhanced logging for specific content types
      if ((isBlogRelated || isPricingRelated || isHeroRelated || isFeatureRelated || isCalculatorRelated) && import.meta.env.DEV) {
        console.warn(`[safeT] Missing translation: "${key}" in language: ${currentLanguage}`);
        
        // For Finnish content specifically, let's log what we're getting
        if (isFinnish) {
          console.log('Finnish translation lookup debug:', { key, language: currentLanguage, translation });
        }
      } else if (import.meta.env.DEV || options.debug) {
        // Regular logging for other content
        console.warn(`[safeT] Missing translation for key: "${key}" in language: ${currentLanguage}`);
      }
      
      // Return fallback or key
      return options.fallback || translation || key;
    } catch (error) {
      console.error(`[safeT] Error translating key: "${key}"`, error);
      return options.fallback || key;
    }
  };

  /**
   * Special function for blog content that ensures Finnish content is displayed
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
      interpolation,
      debug: true // Always debug pricing translations
    });
  };

  /**
   * Special function for hero content
   */
  const heroT = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(`hero.${key}`, {
      ...options,
      debug: true
    });
  };

  /**
   * Special function for features content
   */
  const featuresT = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(`features.${key}`, {
      ...options,
      debug: true
    });
  };

  /**
   * Special function for calculator content
   */
  const calculatorT = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(`calculator.${key}`, {
      ...options,
      debug: true
    });
  };

  return { 
    safeT, 
    blogT,
    pricingT,
    heroT,
    featuresT,
    calculatorT,
    t, 
    language,
    isFinish: language === 'fi'
  };
};
