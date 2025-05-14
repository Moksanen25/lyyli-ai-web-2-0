
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Waitlist: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Create script element for HubSpot form
    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/146205702.js';
    script.defer = true;
    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 md:px-6 w-full">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Lyyli</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-10 px-4 md:py-20 bg-gradient-to-b from-white to-accent/20">
        <div className="max-w-md w-full mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
            Something big is coming!
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-foreground/80">
            We're building the next generation AI-powered content management platform. Join our waitlist to be the first to know when we launch.
          </p>
          
          {/* HubSpot Form */}
          <div className="hs-form-frame" data-region="eu1" data-form-id="f337eade-e814-4038-b2aa-908dcf612cce" data-portal-id="146205702"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-foreground/70">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Lyyli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Waitlist;
