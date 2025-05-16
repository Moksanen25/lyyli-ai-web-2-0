
import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { X, Settings } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC = () => {
  const { t, language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });
  
  // Memoized function to reduce re-renders
  const saveSettings = useCallback((newSettings: CookieSettings) => {
    try {
      localStorage.setItem('cookie-consent', JSON.stringify(newSettings));
      setSettings(newSettings);
      setVisible(false);
      setSettingsOpen(false);
      
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
      
      // Clear Datafast Analytics cookies if analytics not accepted
      if (!newSettings.analytics) {
        clearDatafastCookies();
      }
      
      // Clear HubSpot cookies if marketing not accepted
      if (!newSettings.marketing) {
        clearHubspotCookies();
      }
    } catch (error) {
      console.error('Error saving cookie preferences:', error);
    }
  }, []);
  
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
  
  const acceptAll = () => {
    const allSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveSettings(allSettings);
  };
  
  const acceptEssential = () => {
    const essentialSettings = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveSettings(essentialSettings);
  };
  
  const openSettings = () => {
    setSettingsOpen(true);
  };
  
  // Helper function to clear Datafast Analytics cookies
  const clearDatafastCookies = () => {
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
  
  // Helper function to clear HubSpot cookies
  const clearHubspotCookies = () => {
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

  return (
    <>
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in" aria-label={t('cookieBanner.aria.banner')}>
          <div className="container mx-auto">
            <div className="bg-white card-shadow rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-6">
                <h3 className="text-lg font-semibold mb-2">{t('cookieBanner.title')}</h3>
                <p className="text-primary/70">{t('cookieBanner.description')}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-primary/60">
                  <Link to={language === 'fi' ? '/fi/privacy' : '/privacy'} className="underline hover:text-primary">
                    {t('cookieBanner.privacyLink')}
                  </Link>
                  <span>•</span>
                  <Link to={language === 'fi' ? '/fi/cookies' : '/cookies'} className="underline hover:text-primary">
                    {t('cookieBanner.cookieLink')}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 md:flex-shrink-0 w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                  onClick={acceptEssential}
                  aria-label={t('cookieBanner.essential')}
                >
                  {t('cookieBanner.essential')}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                  onClick={openSettings}
                  aria-label={t('cookieBanner.aria.settings')}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  {t('cookieBanner.settings')}
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
                  onClick={acceptAll}
                  aria-label={t('cookieBanner.accept')}
                >
                  {t('cookieBanner.accept')}
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2" 
                  onClick={acceptEssential}
                  aria-label={t('cookieBanner.aria.close')}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Cookie Settings Dialog */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="sm:max-w-[500px]" aria-label={t('cookieBanner.aria.dialog')}>
          <DialogHeader>
            <DialogTitle className="text-xl">{t('cookieBanner.settings')}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className={cn("flex flex-col space-y-2 border-b pb-4")}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="necessary" 
                    checked={true} 
                    disabled={true}
                  />
                  <label htmlFor="necessary" className="font-medium cursor-not-allowed">
                    {t('cookieBanner.categories.necessary')}
                  </label>
                </div>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                  {language === 'fi' ? 'Pakollinen' : 'Required'}
                </span>
              </div>
              <p className="text-sm text-primary/70 pl-6">
                {t('cookieBanner.categoryDescriptions.necessary')}
              </p>
            </div>
            
            {/* Analytics Cookies */}
            <div className="flex flex-col space-y-2 border-b pb-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="analytics" 
                  checked={settings.analytics}
                  onCheckedChange={(checked) => 
                    setSettings({...settings, analytics: !!checked})
                  }
                />
                <label htmlFor="analytics" className="font-medium cursor-pointer">
                  {t('cookieBanner.categories.analytics')}
                </label>
              </div>
              <p className="text-sm text-primary/70 pl-6">
                {t('cookieBanner.categoryDescriptions.analytics')}
              </p>
            </div>
            
            {/* Marketing Cookies */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="marketing" 
                  checked={settings.marketing}
                  onCheckedChange={(checked) => 
                    setSettings({...settings, marketing: !!checked})
                  }
                />
                <label htmlFor="marketing" className="font-medium cursor-pointer">
                  {t('cookieBanner.categories.marketing')}
                </label>
              </div>
              <p className="text-sm text-primary/70 pl-6">
                {t('cookieBanner.categoryDescriptions.marketing')}
              </p>
            </div>
          </div>
          
          <DialogFooter className="flex-col sm:flex-row sm:justify-between gap-4">
            <Button 
              variant="outline" 
              onClick={acceptEssential}
              className="sm:order-1 w-full sm:w-auto"
            >
              {t('cookieBanner.essential')}
            </Button>
            <Button 
              onClick={() => saveSettings(settings)}
              className="sm:order-2 w-full sm:w-auto"
            >
              {t('cookieBanner.save')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Make sure TypeScript knows about dataLayer for GA4
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export default CookieConsent;
