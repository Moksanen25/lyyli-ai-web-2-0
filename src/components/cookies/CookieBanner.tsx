
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { X, Settings } from 'lucide-react';
import Link from 'next/link';
import { CookieSettings } from './types';
import { saveCookieSettings } from './cookieUtils';

interface CookieBannerProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  settings: CookieSettings;
  setSettings: React.Dispatch<React.SetStateAction<CookieSettings>>;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ 
  visible, 
  setVisible, 
  setSettingsOpen,
  setSettings
}) => {
  const { t, language } = useLanguage();

  const acceptAll = () => {
    const allSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveCookieSettings(allSettings);
    setSettings(allSettings);
    setVisible(false);
  };
  
  const acceptEssential = () => {
    const essentialSettings = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveCookieSettings(essentialSettings);
    setSettings(essentialSettings);
    setVisible(false);
  };
  
  const openSettings = () => {
    setSettingsOpen(true);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in" aria-label={t('cookieBanner.aria.banner')}>
      <div className="container mx-auto">
        <div className="bg-white card-shadow rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-6">
            <h3 className="text-lg font-semibold mb-2">{t('cookieBanner.title')}</h3>
            <p className="text-primary/70">{t('cookieBanner.description')}</p>
            <div className="mt-2 flex flex-wrap gap-2 text-sm text-primary/60">
              <Link href={language === 'fi' ? '/fi/privacy' : '/privacy'} className="underline hover:text-primary">
                {t('cookieBanner.privacyLink')}
              </Link>
              <span>•</span>
              <Link href={language === 'fi' ? '/fi/cookies' : '/cookies'} className="underline hover:text-primary">
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
  );
};

export default CookieBanner;
