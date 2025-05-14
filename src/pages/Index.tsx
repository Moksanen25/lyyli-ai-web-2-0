
import React, { ErrorBoundary } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CustomerSegments from '@/components/CustomerSegments';
import EnterpriseCallout from '@/components/EnterpriseCallout';
import TestimonialsSection from '@/components/TestimonialsSection';
import CaseStudies from '@/components/CaseStudies';
import ComplianceBadges from '@/components/ComplianceBadges';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

// Error fallback component
const SectionErrorFallback = ({ error, componentName }: { error: Error; componentName: string }) => (
  <div className="py-16 text-center">
    <p className="text-red-500">Unable to display {componentName}.</p>
    {process.env.NODE_ENV === 'development' && (
      <pre className="mt-2 text-xs text-left bg-gray-100 p-4 rounded mx-auto max-w-md overflow-auto">
        {error.message}
      </pre>
    )}
  </div>
);

// Section wrapper with error handling
const SafeSection = ({ 
  children, 
  name 
}: { 
  children: React.ReactNode; 
  name: string 
}) => {
  return (
    <React.Suspense fallback={<div className="p-8 text-center">Loading {name}...</div>}>
      <ErrorBoundary fallback={<SectionErrorFallback componentName={name} />}>
        {children}
      </ErrorBoundary>
    </React.Suspense>
  );
};

/**
 * Main landing page component
 * Structure:
 * 1. Hero section (primary message)
 * 2. Trust indicators (compliance badges)
 * 3. Main content (features, customer segments, testimonials)
 * 4. Enterprise-specific content
 * 5. Call to action
 * 6. Footer and cookie consent
 */
const Index = () => {
  console.log('Index page rendering');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Primary messaging */}
        <SafeSection name="Hero Section">
          <HeroSection />
        </SafeSection>
        
        <SafeSection name="Compliance Badges">
          <ComplianceBadges />
        </SafeSection>
        
        {/* Main content sections */}
        <SafeSection name="Features">
          <FeaturesSection />
        </SafeSection>
        
        <SafeSection name="Customer Segments">
          <CustomerSegments />
        </SafeSection>
        
        {/* Social proof and enterprise focus */}
        <SafeSection name="Enterprise">
          <EnterpriseCallout />
        </SafeSection>
        
        <SafeSection name="Testimonials">
          <TestimonialsSection />
        </SafeSection>
        
        <SafeSection name="Case Studies">
          <CaseStudies />
        </SafeSection>
        
        {/* Final conversion point */}
        <SafeSection name="CTA">
          <CTASection />
        </SafeSection>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
