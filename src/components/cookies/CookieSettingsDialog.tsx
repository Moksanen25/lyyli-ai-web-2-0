import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { CookieSettings } from './types';
import { saveCookieSettings } from './cookieUtils';

interface CookieSettingsDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  settings: CookieSettings;
  setSettings: React.Dispatch<React.SetStateAction<CookieSettings>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CookieSettingsDialog: React.FC<CookieSettingsDialogProps> = ({
  open,
  setOpen,
  settings,
  setSettings,
  setVisible
}) => {
  const { t, language } = useLanguage();

  const handleSaveSettings = () => {
    saveCookieSettings(settings);
    setVisible(false);
    setOpen(false);
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
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            onClick={handleSaveSettings}
            className="sm:order-2 w-full sm:w-auto"
          >
            {t('cookieBanner.save')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettingsDialog;
