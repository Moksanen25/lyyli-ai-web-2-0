
import { useLanguage } from '@/contexts/LanguageContext';

type SafeTranslationOptions = {
  debug?: boolean;
  fallback?: string;
  forceLanguage?: 'en' | 'fi';
}

/**
 * Hook to safely access translations with fallbacks
 * to prevent UI crashes due to missing translation keys
 */
export const useSafeTranslation = () => {
  const { t, language } = useLanguage();

  const safeT = (key: string, options: SafeTranslationOptions = {}) => {
    try {
      // Allow forcing a specific language for translation
      const currentLanguage = options.forceLanguage || language;
      const isFinnish = currentLanguage === 'fi';
      
      // Special handling for blog content
      const isBlogRelated = key.startsWith('blog.');
      
      // Get translation or empty string if undefined
      const translation = t(key) || '';
      
      // If we got a valid translation, return it
      if (translation && translation !== key) {
        // If in debug mode, log successful translation
        if ((options.debug || isBlogRelated) && import.meta.env.DEV) {
          console.log(`[safeT] Successfully translated: ${key} -> "${translation}" (${currentLanguage})`);
        }
        return translation;
      }
      
      // Enhanced logging for blog-related translations
      if (isBlogRelated && import.meta.env.DEV) {
        console.warn(`[safeT] Missing blog translation: "${key}" in language: ${currentLanguage}`);
        
        // For Finnish content specifically, let's log what we're getting
        if (isFinnish) {
          console.log('Finnish translation lookup debug:', { key, language: currentLanguage, translation });
        }
      } else if (import.meta.env.DEV || options.debug) {
        // Regular logging for non-blog content
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
   * This is a workaround specifically for blog content
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

  return { 
    safeT, 
    blogT,
    t, 
    language,
    isFinish: language === 'fi'
  };
};
