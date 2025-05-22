
import { useSafeTranslationBase } from './translation/safeTranslationBase';
import { useBlogTranslation } from './translation/blogTranslation';
import { useFeaturesTranslation } from './translation/featuresTranslation';
import { useCustomerSegmentsTranslation } from './translation/customerSegmentsTranslation';
import { useSpecialTranslations } from './translation/specialTranslations';
import { useDebugTranslation } from './translation/debugTranslation';
import { createSafeTrTranslation } from './translation/safeTrUtils';

/**
 * Hook to safely access translations with fallbacks
 * to prevent UI crashes due to missing translation keys
 */
export const useSafeTranslation = () => {
  // Get base translation utilities
  const { safeT, t, language, isFinnish } = useSafeTranslationBase();
  
  // Get specialized translation utilities
  const { blogT } = useBlogTranslation();
  const { featuresT } = useFeaturesTranslation();
  const { customerSegmentsT, translateSegmentKey } = useCustomerSegmentsTranslation();
  const { pricingT, heroT, calculatorT } = useSpecialTranslations();
  const { debugTranslation } = useDebugTranslation();
  
  // Create safeTr using the factory function to avoid circular dependencies
  const { safeTr } = createSafeTrTranslation(safeT);
  
  return { 
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
    t, 
    language,
    isFinnish: language === 'fi'
  };
};

export type { SafeTranslationOptions } from './translation/types';
