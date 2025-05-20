
import { useSafeTranslationBase } from './safeTranslationBase';
import { SafeTranslationOptions } from './types';

/**
 * Hook for specialized translation functions
 */
export const useSpecialTranslations = () => {
  const { safeT } = useSafeTranslationBase();
  
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
   * Special function for calculator content
   */
  const calculatorT = (key: string, options: SafeTranslationOptions = {}) => {
    return safeT(`calculator.${key}`, options);
  };
  
  return { pricingT, heroT, calculatorT };
};
