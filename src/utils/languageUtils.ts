
import { SupportedLanguage } from "@/translations";

// Get browser language and check if we support it
export const getBrowserLanguage = (): SupportedLanguage => {
  try {
    const browserLang = navigator.language.split('-')[0].toLowerCase();
    // Support 'en', 'fi', and 'sv'
    if (browserLang === 'fi') return 'fi';
    if (browserLang === 'sv') return 'sv';
    return 'en'; // Default to English
  } catch (error) {
    console.error('Error detecting browser language:', error);
    return 'en'; // Default to English
  }
};

// Function to safely find translation value by key
export const findTranslationValue = (
  obj: any, 
  keys: string[], 
  index: number = 0
): string | null => {
  try {
    if (!obj || index >= keys.length) {
      return typeof obj === 'string' ? obj : null;
    }
    
    const key = keys[index];
    if (obj[key] === undefined) {
      return null;
    }
    
    return findTranslationValue(obj[key], keys, index + 1);
  } catch (error) {
    console.error(`Error finding translation value for keys: ${keys.join('.')}`, error);
    return null;
  }
};

// Extract language path segment from URL
export const getPathLanguage = (pathname: string): SupportedLanguage | null => {
  if (pathname.startsWith('/fi/') || pathname === '/fi') return 'fi';
  if (pathname.startsWith('/sv/') || pathname === '/sv') return 'sv';
  return null;
};

// Update path based on language
export const getUpdatedPath = (
  currentPath: string,
  language: SupportedLanguage
): string | null => {
  // Remove any existing language prefix
  const isCurrentlyFi = currentPath.startsWith('/fi');
  const isCurrentlySv = currentPath.startsWith('/sv');
  
  if (language === 'fi' && !isCurrentlyFi) {
    // Need to add /fi prefix
    let basePath = currentPath;
    if (isCurrentlySv) {
      basePath = currentPath.startsWith('/sv/') ? currentPath.substring(3) : '/';
    }
    return basePath === '/' ? '/fi' : `/fi${basePath}`;
  } else if (language === 'sv' && !isCurrentlySv) {
    // Need to add /sv prefix
    let basePath = currentPath;
    if (isCurrentlyFi) {
      basePath = currentPath.startsWith('/fi/') ? currentPath.substring(3) : '/';
    }
    return basePath === '/' ? '/sv' : `/sv${basePath}`;
  } else if (language === 'en' && (isCurrentlyFi || isCurrentlySv)) {
    // Need to remove language prefix
    if (currentPath.startsWith('/fi/')) {
      return currentPath.substring(3) || '/';
    } else if (currentPath.startsWith('/sv/')) {
      return currentPath.substring(3) || '/';
    } else if (currentPath === '/fi' || currentPath === '/sv') {
      return '/';
    }
  }
  
  return null; // No change needed
};

// Safe way to get a nested translation object
export const getNestedTranslation = (obj: any, path: string): any => {
  if (!obj || !path) return null;
  
  try {
    const keys = path.split('.');
    let result = obj;
    
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return null;
      }
    }
    
    return result;
  } catch (error) {
    console.error(`Error accessing nested translation path: ${path}`, error);
    return null;
  }
};

// Extract language from URL path
export const getLanguageFromPath = (pathname: string): SupportedLanguage => {
  if (pathname.startsWith('/fi/') || pathname === '/fi') {
    return 'fi';
  }
  if (pathname.startsWith('/sv/') || pathname === '/sv') {
    return 'sv';
  }
  return 'en';
};

// Build localized path
export const buildLocalizedPath = (path: string, language: SupportedLanguage): string => {
  // Remove existing language prefix if present
  let cleanPath = path;
  if (path.startsWith('/fi/')) {
    cleanPath = path.substring(3);
  } else if (path.startsWith('/sv/')) {
    cleanPath = path.substring(3);
  } else if (path === '/fi' || path === '/sv') {
    cleanPath = '/';
  }
  
  if (language === 'fi') {
    return cleanPath === '/' ? '/fi' : `/fi${cleanPath}`;
  } else if (language === 'sv') {
    return cleanPath === '/' ? '/sv' : `/sv${cleanPath}`;
  }
  
  return cleanPath;
};
