
import { CookieSettings } from './types';

/**
 * Helper function to clear Datafast Analytics cookies
 */
export const clearDatafastCookies = () => {
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
    
    if (name.startsWith('datafa_')) {
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  }
};

/**
 * Helper function to clear HubSpot cookies
 */
export const clearHubspotCookies = () => {
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
    
    if (name.startsWith('__hs') || name.startsWith('hubspot')) {
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  }
};

/**
 * Save cookie settings to localStorage and update dataLayer
 */
export const saveCookieSettings = (newSettings: CookieSettings) => {
  try {
    localStorage.setItem('cookie-consent', JSON.stringify(newSettings));
    
    // Update dataLayer for GTM/GA4
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'cookieConsentUpdate',
        cookieConsent: {
          analytics: newSettings.analytics,
          marketing: newSettings.marketing,
        },
      });
    }
    
    // Clear cookies if not accepted
    if (!newSettings.analytics) {
      clearDatafastCookies();
    }
    
    if (!newSettings.marketing) {
      clearHubspotCookies();
    }
    
    return true;
  } catch (error) {
    console.error('Error saving cookie preferences:', error);
    return false;
  }
};
