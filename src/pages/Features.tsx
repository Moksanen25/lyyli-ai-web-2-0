'use client';


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import FeatureHero from '@/components/features/FeatureHero';
import ComplianceBadges from '@/components/ComplianceBadges';
import FeatureDetails from '@/components/features/FeatureDetails';
import IntegrationShowcase from '@/components/features/IntegrationShowcase';
import HowItWorks from '@/components/HowItWorks';
import CustomerQuotes from '@/components/features/CustomerQuotes';
import FeatureComparison from '@/components/features/FeatureComparison';
import FeatureFAQ from '@/components/features/FeatureFAQ';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import Link from 'next/link';

/**
 * Features page component
 */
const Features = () => {
  const { featuresT, language } = useLanguage();
  
  // SEO metadata with proper translations and keywords
  // const pageDescription = language === 'fi'
  //   ? 'Viestintäassistentti tekoälyllä asiantuntijaorganisaatioille. Sisäisen viestinnän työkalu, joka automatisoi yrityksen sisäisen viestinnän. Viestinnän automaatio suomalaisille yrityksille.'
  //   : 'AI communication assistant for expert organizations. Internal communication tool that automates company internal communication. Communication automation for Finnish companies.';
  
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <FeatureHero />
        
        {/* Security Highlight Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'fi' 
                    ? 'Yritystason tietoturva ja yksityisyydensuoja'
                    : 'Enterprise-grade Security and Privacy Protection'
                  }
                </h2>
                <p className="text-gray-600 mb-6">
                  {language === 'fi'
                    ? 'Lyyli tarjoaa GDPR-yhteensopivan, turvallisen alustan EU-palvelimilla. Tietosi pysyvät turvassa ja eristettyinä.'
                    : 'Lyyli provides a GDPR-compliant, secure platform with EU servers. Your data stays safe and isolated.'
                  }
                </p>
                <Button size="lg" asChild>
                  <Link href={language === 'fi' ? '/fi/security' : '/security'}>
                    {language === 'fi' ? 'Lue lisää tietoturvasta' : 'Learn More About Security'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust Indicators */}
        <ComplianceBadges 
          title={featuresT('compliance.title', { fallback: "Compliance and Security" })}
          description={featuresT('compliance.subtitle', { fallback: "Our platform meets the highest security and compliance standards" })}
        />
        
        {/* General Features */}
        <FeatureDetails />
        <IntegrationShowcase />
        
        {/* How It Works Section */}
        <HowItWorks />
        
        {/* Customer Quotes */}
        <CustomerQuotes />
        
        {/* Feature Comparison */}
        <FeatureComparison />
        
        {/* FAQ */}
        <FeatureFAQ />
        
        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
