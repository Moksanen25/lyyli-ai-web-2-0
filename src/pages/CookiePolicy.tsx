import React from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/hooks/useLanguage';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />
      <main className="container-padding container mx-auto py-12 md:py-24 flex-grow animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t('cookiePolicy.title')}</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('cookiePolicy.whatAreCookiesTitle')}</h2>
          <p className="text-primary/80">{t('cookiePolicy.whatAreCookiesDescription')}</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('cookiePolicy.howWeUseCookiesTitle')}</h2>
          <p className="text-primary/80">{t('cookiePolicy.howWeUseCookiesDescription')}</p>
          <ul className="list-disc pl-6 mt-4">
            <li>{t('cookiePolicy.essentialCookies')}</li>
            <li>{t('cookiePolicy.analyticsCookies')}</li>
            <li>{t('cookiePolicy.marketingCookies')}</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('cookiePolicy.typesOfCookiesTitle')}</h2>
          <p className="text-primary/80">{t('cookiePolicy.typesOfCookiesDescription')}</p>
          <ul className="list-disc pl-6 mt-4">
            <li>{t('cookiePolicy.firstPartyCookies')}</li>
            <li>{t('cookiePolicy.thirdPartyCookies')}</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('cookiePolicy.managingCookiesTitle')}</h2>
          <p className="text-primary/80">{t('cookiePolicy.managingCookiesDescription')}</p>
          <ul className="list-disc pl-6 mt-4">
            <li>{t('cookiePolicy.browserSettings')}</li>
            <li>{t('cookiePolicy.cookieConsentTool')}</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('cookiePolicy.changesToPolicyTitle')}</h2>
          <p className="text-primary/80">{t('cookiePolicy.changesToPolicyDescription')}</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
