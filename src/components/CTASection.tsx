
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BookDemoDialog from '@/components/BookDemoDialog';

const CTASection: React.FC = () => {
  const { t, language } = useLanguage();
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const waitlistPath = language === 'fi' ? '/fi/waitlist' : '/waitlist';

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-16 left-10 w-28 h-28 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-16 w-20 h-20 bg-white/15 rounded-full blur-lg"></div>
      <div className="absolute top-40 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-lg"></div>
      
      <div className="container-padding container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl mb-8 text-white/80">
            {t('cta.subtitle')}
          </p>
          <Button 
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 font-semibold"
            asChild
          >
            <Link to={waitlistPath}>
              {t('cta.button')}
            </Link>
          </Button>
          
          {/* Enhanced decorative elements */}
          <div className="mt-12 relative">
            <div className="absolute top-0 left-1/4 w-16 h-16 bg-gradient-to-br from-white/20 to-accent/20 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute top-10 right-1/4 w-12 h-12 bg-gradient-to-br from-accent/30 to-white/20 rounded-full blur-sm"></div>
            <div className="absolute -top-5 left-1/2 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Demo Dialog */}
      <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </section>
  );
};

export default CTASection;
