
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureHero from '@/components/features/FeatureHero';
import FeatureDetails from '@/components/features/FeatureDetails';
import FeatureComparison from '@/components/features/FeatureComparison';
import IntegrationShowcase from '@/components/features/IntegrationShowcase';
import CustomerQuotes from '@/components/features/CustomerQuotes';
import FeatureFAQ from '@/components/features/FeatureFAQ';
import CTASection from '@/components/CTASection';
import ComplianceBadges from '@/components/ComplianceBadges';
import SegmentBlock from '@/components/features/SegmentBlock';
import SegmentNavigation from '@/components/features/SegmentNavigation';
import { 
  Building, 
  Briefcase, 
  Handshake, 
  School, 
  Lightbulb, 
  Flag 
} from 'lucide-react';

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
          image="/images/features-dashboard.jpg"
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
