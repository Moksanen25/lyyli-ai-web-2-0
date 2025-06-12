
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import BookDemoDialog from '@/components/BookDemoDialog';

const CTASection: React.FC = () => {
  const { t } = useLanguage();
  const [showDemoDialog, setShowDemoDialog] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container-padding container mx-auto text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl mb-8 text-white/80">
            {t('cta.subtitle')}
          </p>
          <Button 
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
            onClick={() => window.open('/waitlist', '_blank')}
          >
            {t('cta.button')}
          </Button>
          
          {/* Decorative elements */}
          <div className="mt-12 relative">
            <div className="absolute top-0 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
            <div className="absolute top-10 right-1/4 w-8 h-8 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Demo Dialog */}
      <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </section>
  );
};

export default CTASection;
