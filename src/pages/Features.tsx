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
 * Structure:
 * 1. Hero section (overview of features)
 * 2. Trust indicators (compliance badges)
 * 3. Detailed feature information
 * 4. Integration showcase 
 * 5. Customer segments (with anchor links)
 * 6. Customer quotes
 * 7. Comparison and FAQ
 * 8. Call to action
 */
const Features = () => {
  const { t } = useLanguage();
  const [showSegmentNav, setShowSegmentNav] = useState(false);

  // Setup segments data for navigation
  const segments = [
    { id: 'tech-smes', title: t('features.customerSegments.segments.tech.title') },
    { id: 'consulting', title: t('features.customerSegments.segments.consulting.title') },
    { id: 'nonprofit', title: t('features.customerSegments.segments.nonprofit.title') },
    { id: 'education', title: t('features.customerSegments.segments.education.title') },
    { id: 'creative', title: t('features.customerSegments.segments.creative.title') },
    { id: 'sports', title: t('features.customerSegments.segments.sports.title') }
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
          title="Enterprise-Ready Technology"
          description="Our platform meets the highest security and compliance standards"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.customerSegments.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('features.customerSegments.subtitle')}
            </p>
          </div>
        </section>
        
        {/* Tech SMEs Segment */}
        <SegmentBlock 
          id="tech-smes"
          title={t('features.customerSegments.segments.tech.title')}
          tagline={t('features.customerSegments.segments.tech.tagline')}
          description={t('features.customerSegments.segments.tech.description')}
          caseStudy={{
            quote: t('features.customerSegments.segments.tech.quote'),
            author: t('features.customerSegments.segments.tech.author')
          }}
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
          icon="tech"
        />
        
        {/* Consulting Segment */}
        <SegmentBlock 
          id="consulting"
          title={t('features.customerSegments.segments.consulting.title')}
          tagline={t('features.customerSegments.segments.consulting.tagline')}
          description={t('features.customerSegments.segments.consulting.description')}
          caseStudy={{
            quote: t('features.customerSegments.segments.consulting.quote'),
            author: t('features.customerSegments.segments.consulting.author')
          }}
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
          icon="consulting"
          reverse={true}
        />
        
        {/* Nonprofit Segment */}
        <SegmentBlock 
          id="nonprofit"
          title={t('features.customerSegments.segments.nonprofit.title')}
          tagline={t('features.customerSegments.segments.nonprofit.tagline')}
          description={t('features.customerSegments.segments.nonprofit.description')}
          caseStudy={{
            quote: t('features.customerSegments.segments.nonprofit.quote'),
            author: t('features.customerSegments.segments.nonprofit.author')
          }}
          image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800"
          icon="nonprofit"
        />
        
        {/* Education Segment */}
        <SegmentBlock 
          id="education"
          title={t('features.customerSegments.segments.education.title')}
          tagline={t('features.customerSegments.segments.education.tagline')}
          description={t('features.customerSegments.segments.education.description')}
          caseStudy={{
            quote: t('features.customerSegments.segments.education.quote'),
            author: t('features.customerSegments.segments.education.author')
          }}
          image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
          icon="education"
          reverse={true}
        />
        
        {/* Creative Segment */}
        <SegmentBlock 
          id="creative"
          title={t('features.customerSegments.segments.creative.title')}
          tagline={t('features.customerSegments.segments.creative.tagline')}
          description={t('features.customerSegments.segments.creative.description')}
          caseStudy={{
            quote: t('features.customerSegments.segments.creative.quote'),
            author: t('features.customerSegments.segments.creative.author')
          }}
          image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
          icon="creative"
        />
        
        {/* Sports Segment */}
        <SegmentBlock 
          id="sports"
          title={t('features.customerSegments.segments.sports.title')}
          tagline={t('features.customerSegments.segments.sports.tagline')}
          description={t('features.customerSegments.segments.sports.description')}
          caseStudy={{
            quote: t('features.customerSegments.segments.sports.quote'),
            author: t('features.customerSegments.segments.sports.author')
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
