import React from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/hooks/useLanguage';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const CookiePolicy = () => {
  const { t, language } = useLanguage();
  
  const pageTitle = language === 'fi' ? 'Evästekäytäntö - Lyyli.ai' : 'Cookie Policy - Lyyli.ai';
  const pageDescription = language === 'fi'
    ? 'Lyyli.ai:n evästekäytäntö selitettynä. Lue miten käytämme evästeitä parantaaksemme käyttökokemustasi ja tarjotaksemme personoitua sisältöä.'
    : 'Lyyli.ai\'s cookie policy explained. Learn how we use cookies to improve your browsing experience and provide personalized content.';

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="canonical" href={`https://lyyli.ai/${language === 'fi' ? 'fi/' : ''}cookies`} />
      </Helmet>
      
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
