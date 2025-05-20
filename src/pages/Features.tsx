
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
    { id: 'tech-smes', title: t('customerSegments.techSMEs.name') || 'Technology Companies' },
    { id: 'consulting', title: t('customerSegments.consulting.name') || 'Consulting' },
    { id: 'nonprofit', title: t('customerSegments.nonprofits.name') || 'Nonprofit' },
    { id: 'education', title: t('customerSegments.education.name') || 'Education' },
    { id: 'creative', title: t('customerSegments.creative.name') || 'Creative Industries' },
    { id: 'sports', title: t('customerSegments.sports.name') || 'Sports Organizations' }
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
          title={t('compliance.title') || "Compliance and Security"}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('customerSegments.title') || 'Solutions for Every Industry'}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('customerSegments.subtitle') || 'Lyyli adapts to your specific industry needs, whether you\'re in tech, consulting, education, or beyond'}
            </p>
          </div>
        </section>
        
        {/* Tech SMEs Segment */}
        <SegmentBlock 
          id="tech-smes"
          title={t('customerSegments.techSMEs.name') || 'Technology Companies'}
          tagline={t('customerSegments.techSMEs.description') || 'Streamline technical communication'}
          description={t('customerSegments.techSMEs.description') || 'Streamline technical communication and product updates'}
          caseStudy={{
            quote: t('customerSegments.techSMEs.quote') || 'Lyyli helped us reduce documentation time by 60% while improving quality',
            author: t('customerSegments.techSMEs.author') || 'Maria T., CTO, DevStack'
          }}
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
          icon="tech"
        />
        
        {/* Consulting Segment */}
        <SegmentBlock 
          id="consulting"
          title={t('customerSegments.consulting.name') || 'Consulting Firms'}
          tagline={t('customerSegments.consulting.description') || 'Enhance client communication'}
          description={t('customerSegments.consulting.description') || 'Enhance client communication and project updates'}
          caseStudy={{
            quote: t('customerSegments.consulting.quote') || 'We\'ve seen a 40% improvement in client engagement',
            author: t('customerSegments.consulting.author') || 'James W., Managing Partner, Insight Consulting'
          }}
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
          icon="consulting"
          reverse={true}
        />
        
        {/* Nonprofit Segment */}
        <SegmentBlock 
          id="nonprofit"
          title={t('customerSegments.nonprofits.name') || 'Nonprofit Organizations'}
          tagline={t('customerSegments.nonprofits.description') || 'Streamline donor communication'}
          description={t('customerSegments.nonprofits.description') || 'Streamline donor communication and volunteer programs'}
          caseStudy={{
            quote: t('customerSegments.nonprofits.quote') || 'With Lyyli, we can create impactful campaign materials in minutes',
            author: t('customerSegments.nonprofits.author') || 'Sarah L., Communications Director, Global Hope Initiative'
          }}
          image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800"
          icon="nonprofit"
        />
        
        {/* Education Segment */}
        <SegmentBlock 
          id="education"
          title={t('customerSegments.education.name') || 'Educational Institutions'}
          tagline={t('customerSegments.education.description') || 'Connect with your educational community'}
          description={t('customerSegments.education.description') || 'Connect students, parents and faculty with effective communication'}
          caseStudy={{
            quote: t('customerSegments.education.quote') || 'Lyyli has transformed how we communicate with our diverse community',
            author: t('customerSegments.education.author') || 'Dr. Robert Chen, Dean of Communications, Westfield University'
          }}
          image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
          icon="education"
          reverse={true}
        />
        
        {/* Creative Segment */}
        <SegmentBlock 
          id="creative"
          title={t('customerSegments.creative.name') || 'Creative Industries'}
          tagline={t('customerSegments.creative.description') || 'Showcase your creative work professionally'}
          description={t('customerSegments.creative.description') || 'Showcase your creative work professionally and win new clients'}
          caseStudy={{
            quote: t('customerSegments.creative.quote') || 'The AI understands creative language in a way that\'s truly impressive',
            author: t('customerSegments.creative.author') || 'Emma D., Creative Director, Design Forward'
          }}
          image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
          icon="creative"
        />
        
        {/* Sports Segment */}
        <SegmentBlock 
          id="sports"
          title={t('customerSegments.sports.name') || 'Sports Organizations'}
          tagline={t('customerSegments.sports.description') || 'Engage your sports community'}
          description={t('customerSegments.sports.description') || 'Engage fans, members and sponsors with effective communication'}
          caseStudy={{
            quote: t('customerSegments.sports.quote') || 'We\'ve seen a 35% increase in event attendance since streamlining our communication',
            author: t('customerSegments.sports.author') || 'Mark J., Communications Manager, Metropolitan Sports League'
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
