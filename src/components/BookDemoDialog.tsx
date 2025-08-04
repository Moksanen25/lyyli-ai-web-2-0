'use client';


import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';

interface BookDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookDemoDialog: React.FC<BookDemoDialogProps> = ({ open, onOpenChange }) => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  
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
      <DialogContent 
        className={`${isMobile ? 'w-[95vw] max-w-none h-[90vh] p-0' : 'max-w-4xl p-0'} overflow-hidden`}
      >
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-playfair">
            {language === 'fi' ? 'Varaa demo' : 'Book a Demo'}
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-2 overflow-auto" style={{ height: isMobile ? 'calc(90vh - 80px)' : 'auto' }}>
          <p className="text-muted-foreground mb-6">
            {language === 'fi' 
              ? 'Valitse sinulle sopiva aika kalenterista alla nähdäksesi Lyylin toiminnassa.' 
              : 'Select a convenient time from the calendar below to see Lyyli in action.'}
          </p>
          <div 
            className="meetings-iframe-container rounded-md" 
            data-src="https://meetings-eu1.hubspot.com/mikko-oksanen?embed=true"
            style={{ 
              minHeight: isMobile ? '500px' : '600px',
              height: isMobile ? 'calc(90vh - 220px)' : '600px'
            }}
          >
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoDialog;
