
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import FeatureHero from '@/components/features/FeatureHero';
import ComplianceBadges from '@/components/ComplianceBadges';
import FeatureDetails from '@/components/features/FeatureDetails';
import IntegrationShowcase from '@/components/features/IntegrationShowcase';
import SegmentNavigation from '@/components/features/SegmentNavigation';
import SegmentBlock from '@/components/features/SegmentBlock';
import CustomerQuotes from '@/components/features/CustomerQuotes';
import FeatureComparison from '@/components/features/FeatureComparison';
import FeatureFAQ from '@/components/features/FeatureFAQ';
import CTASection from '@/components/CTASection';

/**
 * Features page component
 */
const Features = () => {
  const { t } = useLanguage();
  const [showSegmentNav, setShowSegmentNav] = useState(false);

  // Setup segments data for navigation
  const segments = [
    { id: 'tech-smes', title: t('customerSegments.techSMEs.name') },
    { id: 'consulting', title: t('customerSegments.consulting.name') },
    { id: 'nonprofit', title: t('customerSegments.nonprofits.name') },
    { id: 'education', title: t('customerSegments.education.name') },
    { id: 'creative', title: t('customerSegments.creative.name') },
    { id: 'sports', title: t('customerSegments.sports.name') }
  ];

  // Placeholder for segment navigation to prevent content jumps
  const navHeight = '101px'; // Approximate height of the navigation bar

  // Show the segment navigation after scrolling past the general features
  useEffect(() => {
    const handleScroll = () => {
      const segmentsSection = document.getElementById('customer-segments');
      if (segmentsSection) {
        const rect = segmentsSection.getBoundingClientRect();
        setShowSegmentNav(rect.top <= 150);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <FeatureHero />
        
        {/* Trust Indicators */}
        <ComplianceBadges 
          title={t('compliance.title')}
          description={t('compliance.subtitle') || "Our platform meets the highest security and compliance standards"}
        />
        
        {/* General Features */}
        <FeatureDetails />
        <IntegrationShowcase />
        
        {/* Placeholder div to prevent content jumps when the navigation appears */}
        <div style={{ height: showSegmentNav ? '0px' : navHeight, transition: 'height 0.2s ease' }} aria-hidden="true" />
        
        {/* Customer Segments Navigation (conditionally shown) */}
        {showSegmentNav && <SegmentNavigation segments={segments} />}
        
        {/* Customer Segments Section */}
        <section id="customer-segments" className="py-16 bg-primary/5">
          <div className="container-padding container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('customerSegments.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('customerSegments.subtitle')}
            </p>
          </div>
        </section>
        
        {/* Tech SMEs Segment */}
        <SegmentBlock 
          id="tech-smes"
          title={t('customerSegments.techSMEs.name')}
          tagline={t('customerSegments.techSMEs.description')}
          description={t('customerSegments.techSMEs.description')}
          caseStudy={{
            quote: t('customerSegments.techSMEs.quote'),
            author: t('customerSegments.techSMEs.author')
          }}
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
          icon="tech"
        />
        
        {/* Consulting Segment */}
        <SegmentBlock 
          id="consulting"
          title={t('customerSegments.consulting.name')}
          tagline={t('customerSegments.consulting.description')}
          description={t('customerSegments.consulting.description')}
          caseStudy={{
            quote: t('customerSegments.consulting.quote'),
            author: t('customerSegments.consulting.author')
          }}
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
          icon="consulting"
          reverse={true}
        />
        
        {/* Nonprofit Segment */}
        <SegmentBlock 
          id="nonprofit"
          title={t('customerSegments.nonprofits.name')}
          tagline={t('customerSegments.nonprofits.description')}
          description={t('customerSegments.nonprofits.description')}
          caseStudy={{
            quote: t('customerSegments.nonprofits.quote'),
            author: t('customerSegments.nonprofits.author')
          }}
          image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800"
          icon="nonprofit"
        />
        
        {/* Education Segment */}
        <SegmentBlock 
          id="education"
          title={t('customerSegments.education.name')}
          tagline={t('customerSegments.education.description')}
          description={t('customerSegments.education.description')}
          caseStudy={{
            quote: t('customerSegments.education.quote'),
            author: t('customerSegments.education.author')
          }}
          image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
          icon="education"
          reverse={true}
        />
        
        {/* Creative Segment */}
        <SegmentBlock 
          id="creative"
          title={t('customerSegments.creative.name')}
          tagline={t('customerSegments.creative.description')}
          description={t('customerSegments.creative.description')}
          caseStudy={{
            quote: t('customerSegments.creative.quote'),
            author: t('customerSegments.creative.author')
          }}
          image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
          icon="creative"
        />
        
        {/* Sports Segment */}
        <SegmentBlock 
          id="sports"
          title={t('customerSegments.sports.name')}
          tagline={t('customerSegments.sports.description')}
          description={t('customerSegments.sports.description')}
          caseStudy={{
            quote: t('customerSegments.sports.quote'),
            author: t('customerSegments.sports.author')
          }}
          image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800"
          icon="sports"
          reverse={true}
        />
        
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
