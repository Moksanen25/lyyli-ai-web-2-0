
import { useLanguage } from '@/contexts/LanguageContext';

type SafeTranslationOptions = {
  debug?: boolean;
  fallback?: string;
}

/**
 * Hook to safely access translations with fallbacks
 * to prevent UI crashes due to missing translation keys
 */
export const useSafeTranslation = () => {
  const { t, language } = useLanguage();

  const safeT = (key: string, options: SafeTranslationOptions = {}) => {
    try {
      // Get translation or empty string if undefined
      const translation = t(key) || '';
      
      // If we got a valid translation, return it
      if (translation && translation !== key) {
        // If in debug mode, log successful translation
        if ((options.debug || key.startsWith('blog.')) && import.meta.env.DEV) {
          console.log(`[safeT] Successfully translated: ${key} -> "${translation}" (${language})`);
        }
        return translation;
      }
      
      // Log missing translation in development
      if (import.meta.env.DEV || options.debug) {
        console.warn(`[safeT] Missing translation for key: "${key}" in language: ${language}`);
      }
      
      // Return fallback or key
      return options.fallback || translation || key;
    } catch (error) {
      console.error(`[safeT] Error translating key: "${key}"`, error);
      return options.fallback || key;
    }
  };

  return { safeT, t, language };
};
