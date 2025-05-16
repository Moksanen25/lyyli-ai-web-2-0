
import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';

interface BookDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookDemoDialog: React.FC<BookDemoDialogProps> = ({ open, onOpenChange }) => {
  const { t, language } = useLanguage();
  
  // Load HubSpot meetings script when the dialog opens
  useEffect(() => {
    if (open) {
      // Clear any existing script to avoid duplicates
      const existingScript = document.getElementById('hs-meetings-embed');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Create and append the HubSpot script
      const script = document.createElement('script');
      script.id = 'hs-meetings-embed';
      script.type = 'text/javascript';
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-playfair">
            {language === 'fi' ? 'Varaa demo' : 'Book a Demo'}
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-2">
          <p className="text-muted-foreground mb-6">
            {language === 'fi' 
              ? 'Valitse sinulle sopiva aika kalenterista alla nähdäksesi Lyylin toiminnassa.' 
              : 'Select a convenient time from the calendar below to see Lyyli in action.'}
          </p>
          <div className="meetings-iframe-container min-h-[600px] rounded-md" 
            data-src="https://meetings-eu1.hubspot.com/mikko-oksanen?embed=true">
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoDialog;
