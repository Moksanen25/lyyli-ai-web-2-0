
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import SecurityHero from '@/components/security/SecurityHero';
import SecurityFeatures from '@/components/security/SecurityFeatures';
import GDPRCompliance from '@/components/security/GDPRCompliance';
import TechnicalArchitecture from '@/components/security/TechnicalArchitecture';
import AccessControl from '@/components/security/AccessControl';
import ContinuousImprovement from '@/components/security/ContinuousImprovement';
import SecurityContact from '@/components/security/SecurityContact';
import CTASection from '@/components/CTASection';
import { Helmet } from 'react-helmet';

const Security = () => {
  const { t, language } = useLanguage();
  
  const pageTitle = language === 'fi' ? 'Tietoturva - Lyyli.ai' : 'Security - Lyyli.ai';
  const pageDescription = language === 'fi'
    ? 'Tutustu Lyyli.ai:n tietoturvaratkaisuihin ja yksityisyydensuojaan. GDPR-yhteensopiva, EU-palvelimet ja korkean tason tietosuoja.'
    : 'Discover Lyyli.ai\'s cybersecurity and data protection solutions. GDPR compliant, EU servers, and enterprise-grade security.';
  
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
        <link rel="canonical" href={`https://lyyli.ai/${language === 'fi' ? 'fi/' : ''}security`} />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow pt-16">
        <SecurityHero />
        <SecurityFeatures />
        <TechnicalArchitecture />
        <GDPRCompliance />
        <AccessControl />
        <ContinuousImprovement />
        <SecurityContact />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Security;
