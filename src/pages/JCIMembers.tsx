
import React, { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const JCIMembers: React.FC = () => {
  const { language } = useLanguage();

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
          font-size: 16px !important;
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

  const pageTitle = language === 'fi' ? 'Lyyli - JCI jäsenet' : 'Lyyli - JCI Members';
  const pageDescription = language === 'fi' 
    ? 'Lyyli testiohjelma JCI jäsenille - Liity mukaan testaamaan tekoälyllä toimivaa sisällönhallintajärjestelmää.' 
    : 'Lyyli test program for JCI members - Join to test our AI-powered content management platform.';

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Header */}
      <header className="py-4 md:py-6 px-4 md:px-6 w-full">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/full" className="flex items-center" aria-label="Lyyli home page">
              <img 
                src="/lovable-uploads/39c9c229-44c8-40ee-9e43-016269635def.png"
                alt="Lyyli.ai"
                className="h-10 w-auto"
              />
            </Link>
            <div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-8 px-4 md:py-16 bg-gradient-to-b from-white to-accent/20">
        <div className="max-w-2xl w-full mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">
              {language === 'fi' ? 'Tervetuloa JCI jäsenet!' : 'Welcome JCI Members!'}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 text-foreground/80 px-2">
              {language === 'fi' 
                ? 'Haluaisimme kutsua sinut testaamaan uutta tekoälyllä toimivaa sisällönhallintajärjestelmäämme. Jätä yhteystietosi alla olevaan lomakkeeseen, niin otamme sinuun yhteyttä pian.' 
                : 'We would like to invite you to test our new AI-powered content management platform. Please leave your contact information in the form below and we will get in touch with you soon.'}
            </p>
          </div>
          
          {/* HubSpot Form */}
          <div 
            className="hs-form-frame" 
            data-region="eu1" 
            data-form-id="1bb10d50-0764-4b5c-93e2-63e788096b52" 
            data-portal-id="146205702"
            aria-label={language === 'fi' ? 'JCI jäsenten lomake' : 'JCI members form'}
          ></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 text-center text-sm text-foreground/70">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Lyyli. {language === 'fi' ? 'Kaikki oikeudet pidätetään.' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
};

export default JCIMembers;
