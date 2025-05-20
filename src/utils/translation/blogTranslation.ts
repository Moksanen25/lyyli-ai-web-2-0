
import { useSafeTranslationBase } from './safeTranslationBase';
import { SafeTranslationOptions } from './types';

/**
 * Hook for blog-specific translation functionality
 */
export const useBlogTranslation = () => {
  const { safeT, t, language } = useSafeTranslationBase();
  
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
  
  return { blogT, t, language };
};
