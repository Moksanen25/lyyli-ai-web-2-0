
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SecurityHero from '@/components/security/SecurityHero';
import SecurityFeatures from '@/components/security/SecurityFeatures';
import GDPRCompliance from '@/components/security/GDPRCompliance';
import TechnicalArchitecture from '@/components/security/TechnicalArchitecture';
import AccessControl from '@/components/security/AccessControl';
import ContinuousImprovement from '@/components/security/ContinuousImprovement';
import SecurityContact from '@/components/security/SecurityContact';
import CTASection from '@/components/CTASection';

const Security = () => {
  return (
    <div className="min-h-screen flex flex-col">

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
