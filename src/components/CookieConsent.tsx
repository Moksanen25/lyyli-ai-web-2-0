
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show cookie banner after a short delay
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setVisible(false);
  };
  
  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in">
      <div className="container mx-auto">
        <div className="bg-white card-shadow rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-6">
            <h3 className="text-lg font-semibold mb-2">{t('cookieBanner.title')}</h3>
            <p className="text-primary/70">{t('cookieBanner.description')}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:flex-shrink-0">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={acceptEssential}
            >
              {t('cookieBanner.essential')}
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={acceptAll}
            >
              {t('cookieBanner.accept')}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2" 
              onClick={acceptEssential}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
