
import { SupportedLanguage } from "@/translations";

// Get browser language and check if we support it
export const getBrowserLanguage = (): SupportedLanguage => {
  try {
    const browserLang = navigator.language.split('-')[0].toLowerCase();
    // Currently we only support 'en' and 'fi'
    return browserLang === 'fi' ? 'fi' : 'en';
  } catch (error) {
    console.error('Error detecting browser language:', error);
    return 'en'; // Default to English
  }
};

// Function to find translation value by key
export const findTranslationValue = (
  obj: any, 
  keys: string[], 
  index: number = 0
): string | null => {
  if (!obj || index >= keys.length) {
    return typeof obj === 'string' ? obj : null;
  }
  
  const key = keys[index];
  if (obj[key] === undefined) {
    return null;
  }
  
  return findTranslationValue(obj[key], keys, index + 1);
};

// Extract language path segment from URL
export const getPathLanguage = (pathname: string): SupportedLanguage | null => {
  return pathname.startsWith('/fi/') || pathname === '/fi' ? 'fi' : null;
};

// Update path based on language
export const getUpdatedPath = (
  currentPath: string,
  language: SupportedLanguage
): string | null => {
  if (language === 'fi' && !(currentPath.startsWith('/fi'))) {
    // Need to add /fi prefix
    if (currentPath === '/') {
      return '/fi';
    }
    return `/fi${currentPath}`;
  } else if (language === 'en' && currentPath.startsWith('/fi/')) {
    // Need to remove /fi prefix
    return currentPath.substring(3) || '/';
  } else if (language === 'en' && currentPath === '/fi') {
    // Handle root Finnish path
    return '/';
  }
  
  return null; // No change needed
};
