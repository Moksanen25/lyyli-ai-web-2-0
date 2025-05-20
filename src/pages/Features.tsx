
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

// Define the segment type to match expected values
type SegmentType = "tech" | "consulting" | "nonprofit" | "education" | "creative" | "sports";

/**
 * Features page component
 */
const Features = () => {
  const { t, safeTr, featuresT, customerSegmentsT, language, verifyLanguageCompleteness } = useLanguage();
  const [showSegmentNav, setShowSegmentNav] = useState(false);

  // Check translations on mount
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('Features page mounted, language:', language);
      verifyLanguageCompleteness?.();
    }
  }, [language, verifyLanguageCompleteness]);

  // Setup segments data with reliable translations
  const getTranslatedSegment = (id: SegmentType, defaultName: string) => {
    // First try features path
    let title = featuresT(`customerSegments.segments.${id}.title`);
    
    // If that didn't work, try direct path
    if (!title || title === `customerSegments.segments.${id}.title` || title.includes('features.')) {
      title = customerSegmentsT(`segments.${id}.title`);
    }
    
    // If that still didn't work, try direct customerSegments path 
    if (!title || title.includes('customerSegments.') || title.includes('segments.')) {
      title = t(`features.customerSegments.segments.${id}.title`);
    }
    
    // If all else fails, use the provided default
    if (!title || title.includes('customerSegments') || title.includes('features') || title.includes('segments')) {
      title = defaultName;
    }
    
    return { id, title };
  };

  // Define segments with properly typed segment IDs
  const segments = [
    getTranslatedSegment("tech", 'Technology Companies'),
    getTranslatedSegment("consulting", 'Consulting'),
    getTranslatedSegment("nonprofit", 'Nonprofit'),
    getTranslatedSegment("education", 'Education'),
    getTranslatedSegment("creative", 'Creative Industries'),
    getTranslatedSegment("sports", 'Sports Organizations')
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
  
  // Get safe translations with fallbacks for segment section
  const segmentsTitle = featuresT('customerSegments.title') || safeTr('customerSegments.title', 'Solutions for Every Industry');
  const segmentsSubtitle = featuresT('customerSegments.subtitle') || safeTr(
    'customerSegments.subtitle', 
    "Lyyli adapts to your specific industry needs, whether you're in tech, consulting, education, or beyond"
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <FeatureHero />
        
        {/* Trust Indicators */}
        <ComplianceBadges 
          title={safeTr('compliance.title', "Compliance and Security")}
          description={safeTr('compliance.subtitle', "Our platform meets the highest security and compliance standards")}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{segmentsTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{segmentsSubtitle}</p>
          </div>
        </section>
        
        {/* Render each segment block with safe translations */}
        {segments.map((segment, index) => {
          // Get translations for this specific segment with multiple fallbacks
          const tagline = featuresT(`customerSegments.segments.${segment.id}.tagline`) || 
                          customerSegmentsT(`segments.${segment.id}.tagline`) || 
                          safeTr(`customerSegments.${segment.id}.tagline`, '') || 
                          safeTr(`features.customerSegments.segments.${segment.id}.tagline`, '');
          
          const description = featuresT(`customerSegments.segments.${segment.id}.description`) || 
                              customerSegmentsT(`segments.${segment.id}.description`) || 
                              safeTr(`customerSegments.${segment.id}.description`, '') || 
                              safeTr(`features.customerSegments.segments.${segment.id}.description`, '');
          
          const quote = featuresT(`customerSegments.segments.${segment.id}.quote`) || 
                        customerSegmentsT(`segments.${segment.id}.quote`) || 
                        safeTr(`customerSegments.${segment.id}.quote`, '') || 
                        safeTr(`features.customerSegments.segments.${segment.id}.quote`, '');
          
          const author = featuresT(`customerSegments.segments.${segment.id}.author`) || 
                         customerSegmentsT(`segments.${segment.id}.author`) || 
                         safeTr(`customerSegments.${segment.id}.author`, '') || 
                         safeTr(`features.customerSegments.segments.${segment.id}.author`, '');
                  
          return (
            <SegmentBlock 
              key={segment.id}
              id={segment.id as SegmentType}
              title={segment.title}
              tagline={tagline}
              description={description}
              caseStudy={{
                quote: quote,
                author: author
              }}
              image={`https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800`}
              icon={segment.id as SegmentType}
              reverse={index % 2 === 1}
            />
          );
        })}
        
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
