
import { useSafeTranslationBase } from './safeTranslationBase';
import { SafeTranslationOptions } from './types';

/**
 * Hook for customer segments specific translation functionality
 */
export const useCustomerSegmentsTranslation = () => {
  const { safeT, t, language } = useSafeTranslationBase();
  
  /**
   * Special function for customerSegments content with improved namespace handling
   */
  const customerSegmentsT = (key: string, options: SafeTranslationOptions = {}) => {
    // If key already has customerSegments prefix, don't add it again
    if (key.startsWith('customerSegments.')) {
      return safeT(key, options);
    }
    
    // Add customerSegments namespace
    return safeT(`customerSegments.${key}`, { 
      ...options,
      namespace: 'customerSegments'
    });
  };
  
  /**
   * Helper function to safely translate nested segment keys
   */
  const translateSegmentKey = (segmentId: string, key: string, fallback: string = '') => {
    return customerSegmentsT(`segments.${segmentId}.${key}`, { fallback });
  };
  
  return { customerSegmentsT, translateSegmentKey, t, language };
};
