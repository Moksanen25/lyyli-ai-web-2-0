
import { languages, SupportedLanguage, TranslationsType } from '@/translations';

/**
 * Recursively check if all keys in the reference object exist in the target object
 * @param reference The reference object to check against (usually English)
 * @param target The target object to check (other language)
 * @param path Current path in the object (for generating error messages)
 * @returns Array of missing keys with their paths
 */
export const findMissingTranslations = (
  reference: any,
  target: any,
  path: string = ''
): string[] => {
  if (!reference || typeof reference !== 'object') {
    console.warn(`Invalid reference at path ${path}:`, reference);
    return [];
  }
  
  if (!target || typeof target !== 'object') {
    console.warn(`Invalid target at path ${path}:`, target);
    return [path || 'root'];
  }
  
  const missingKeys: string[] = [];

  try {
    // Check each key in the reference object
    Object.keys(reference).forEach(key => {
      const currentPath = path ? `${path}.${key}` : key;
      
      // If key doesn't exist in target
      if (!(key in target)) {
        missingKeys.push(currentPath);
      } 
      // If both are objects, recursively check
      else if (
        typeof reference[key] === 'object' && 
        reference[key] !== null &&
        typeof target[key] === 'object' &&
        target[key] !== null
      ) {
        const nestedMissing = findMissingTranslations(
          reference[key],
          target[key],
          currentPath
        );
        missingKeys.push(...nestedMissing);
      }
    });
  } catch (error) {
    console.error(`Error in findMissingTranslations at path ${path}:`, error);
    missingKeys.push(`Error checking path: ${path}`);
  }

  return missingKeys;
};

/**
 * Verify that all translations are present for a given language
 * @param language Language to check
 * @param referenceLanguage Language to use as reference (defaults to 'en')
 * @returns Object with verification results
 */
export const verifyTranslations = (
  language: SupportedLanguage,
  referenceLanguage: SupportedLanguage = 'en'
): { 
  isComplete: boolean;
  missingKeys: string[];
  language: SupportedLanguage;
} => {
  try {
    console.log(`Verifying translations for ${language} against ${referenceLanguage}`);
    
    // Don't check the reference language against itself
    if (language === referenceLanguage) {
      return {
        isComplete: true,
        missingKeys: [],
        language
      };
    }

    const reference = languages[referenceLanguage];
    const target = languages[language];
    
    if (!reference) {
      console.error(`Reference language ${referenceLanguage} not found`);
      return {
        isComplete: false,
        missingKeys: [`Reference language ${referenceLanguage} not found`],
        language
      };
    }
    
    if (!target) {
      console.error(`Target language ${language} not found`);
      return {
        isComplete: false,
        missingKeys: [`Target language ${language} not found`],
        language
      };
    }
    
    const missingKeys = findMissingTranslations(reference, target);
    
    return {
      isComplete: missingKeys.length === 0,
      missingKeys,
      language
    };
  } catch (error) {
    console.error(`Error in verifyTranslations for ${language}:`, error);
    return {
      isComplete: false,
      missingKeys: [`Verification error: ${error instanceof Error ? error.message : String(error)}`],
      language
    };
  }
};
