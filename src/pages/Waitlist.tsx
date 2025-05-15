
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import DemoDialog from '@/components/lyyli-demo/DemoDialog';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const Waitlist: React.FC = () => {
  const { t, language } = useLanguage();
  const [showDemo, setShowDemo] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create script element for HubSpot form
    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/146205702.js';
    script.defer = true;
    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Add custom CSS to hide HubSpot branding
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Hide HubSpot branding */
      .hubspot-link__container {
        display: none !important;
      }
      
      /* Hide any powered by text */
      a.submitted-message__powered-by {
        display: none !important;
      }
      
      /* Adjust form width and spacing */
      .hs-form .hs-form-field {
        max-width: 100% !important;
      }
      
      .hs-form .legal-consent-container {
        max-width: 100% !important;
      }
      
      /* Make form container wider */
      .hs-form-iframe, .hs-form-frame {
        width: 100% !important;
        max-width: 600px !important;
        margin: 0 auto !important;
      }
      
      /* Improve mobile form styles */
      @media (max-width: 768px) {
        .hs-form .hs-form-field input, 
        .hs-form .hs-form-field select,
        .hs-form .hs-form-field textarea {
          min-height: 44px !important;
          font-size: 16px !important; /* Prevent zoom on iOS */
        }
        
        .hs-form .hs-button {
          min-height: 44px !important;
          width: 100% !important;
          font-size: 16px !important;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Reset animation phase when demo is opened
  useEffect(() => {
    if (showDemo) {
      setAnimationPhase(0);
      setIsLoading(true);
    }
  }, [showDemo]);

  const pageTitle = language === 'fi' ? 'Lyyli - Liity jonotuslistalle' : 'Lyyli - Join our Waitlist';
  const pageDescription = language === 'fi' 
    ? 'Liity Lyylin jonotuslistalle ollaksesi ensimmäinen, joka saa tietää kun julkaisemme tekoälyllä toimivan sisällönhallintajärjestelmän.' 
    : 'Join the Lyyli waitlist to be the first to know when we launch our AI-powered content management platform.';

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      {/* Header */}
      <header className="py-4 md:py-6 px-4 md:px-6 w-full">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/full" className="text-2xl font-bold text-primary" aria-label="Lyyli home page">Lyyli</Link>
            <div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-8 px-4 md:py-16 bg-gradient-to-b from-white to-accent/20">
        <div className="max-w-xl w-full mx-auto text-center animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-primary">
            {language === 'fi' ? 'Jotain suurta on tulossa!' : 'Something big is coming!'}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-foreground/80 px-2">
            {language === 'fi' 
              ? 'Olemme rakentamassa seuraavan sukupolven tekoälyllä toimivaa sisällönhallintajärjestelmää. Liity jonotuslistallemme ollaksesi ensimmäinen, joka saa tietää, kun julkaisemme sen.' 
              : 'We\'re building the next generation AI-powered content management platform. Join our waitlist to be the first to know when we launch.'}
          </p>
          
          {/* Demo Button */}
          <div className="mb-8">
            <Button 
              onClick={() => setShowDemo(true)} 
              variant="secondary" 
              className="px-6 py-2"
              aria-label={language === 'fi' ? t('demo.seeHowItWorks') : 'See how it works'}
            >
              {language === 'fi' ? t('demo.seeHowItWorks') : 'See how it works'}
            </Button>
          </div>
          
          {/* HubSpot Form */}
          <div 
            className="hs-form-frame" 
            data-region="eu1" 
            data-form-id="f337eade-e814-4038-b2aa-908dcf612cce" 
            data-portal-id="146205702"
            aria-label={language === 'fi' ? 'Jonotuslistan lomake' : 'Waitlist signup form'}
          ></div>
        </div>
      </main>

      {/* Demo Dialog */}
      <DemoDialog
        isOpen={showDemo}
        setIsOpen={setShowDemo}
        animationPhase={animationPhase}
        setAnimationPhase={setAnimationPhase}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 text-center text-sm text-foreground/70">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Lyyli. {language === 'fi' ? 'Kaikki oikeudet pidätetään.' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
};

export default Waitlist;
