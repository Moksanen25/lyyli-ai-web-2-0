
import React, { useState, useEffect, useCallback } from 'react';
import { CookieSettings } from './cookies/types';
import { saveCookieSettings } from './cookies/cookieUtils';
import CookieBanner from './cookies/CookieBanner';
import CookieSettingsDialog from './cookies/CookieSettingsDialog';

// Make sure TypeScript knows about dataLayer for GA4
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });
  
  useEffect(() => {
    // Check if user has already accepted cookies
    try {
      const cookieConsent = localStorage.getItem('cookie-consent');
      
      if (cookieConsent) {
        try {
          const savedSettings = JSON.parse(cookieConsent);
          setSettings(savedSettings);
        } catch (e) {
          // If parsing fails, show the banner again
          console.error('Error parsing stored cookie consent:', e);
          setVisible(true);
        }
      } else {
        // Show cookie banner after a short delay if no consent is stored
        const timer = setTimeout(() => {
          setVisible(true);
        }, 1000);
        
        return () => clearTimeout(timer);
      }
    } catch (error) {
      // If localStorage access fails (e.g., in private browsing mode)
      console.error('Error accessing localStorage:', error);
      setVisible(true);
    }
    
    // Listen for the openCookieSettings event
    const handleOpenSettings = () => {
      setSettingsOpen(true);
    };
    
    window.addEventListener('openCookieSettings', handleOpenSettings);
    
    return () => {
      window.removeEventListener('openCookieSettings', handleOpenSettings);
    };
  }, []);

  return (
    <>
      <CookieBanner 
        visible={visible}
        setVisible={setVisible}
        setSettingsOpen={setSettingsOpen}
        settings={settings}
        setSettings={setSettings}
      />
      
      <CookieSettingsDialog
        open={settingsOpen}
        setOpen={setSettingsOpen}
        settings={settings}
        setSettings={setSettings}
        setVisible={setVisible}
      />
    </>
  );
};

export default CookieConsent;
