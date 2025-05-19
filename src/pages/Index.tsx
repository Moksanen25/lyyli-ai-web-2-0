
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import UseCase from '@/components/UseCase';
import FeaturesSection from '@/components/FeaturesSection';
import CustomerSegments from '@/components/CustomerSegments';
import EnterpriseCallout from '@/components/EnterpriseCallout';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogCarousel from '@/components/blog/BlogCarousel';
import ComplianceBadges from '@/components/ComplianceBadges';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

// Error boundary class implementation
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ComponentType<{ error: Error; componentName: string }> },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ComponentType<{ error: Error; componentName: string }> }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`Component error: ${error.message}`, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback;
      return <FallbackComponent error={this.state.error} componentName="component" />;
    }
    return this.props.children;
  }
}

// Add componentName property to the ErrorBoundary props
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ComponentType<{ error: Error; componentName: string }>;
  componentName: string;
}

// Correctly typed error boundary wrapper component
class NamedErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean; error: Error | null }> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`${this.props.componentName} error:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback;
      return <FallbackComponent error={this.state.error} componentName={this.props.componentName} />;
    }
    return this.props.children;
  }
}

// Error fallback component with correct typing
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

// Section wrapper with error handling using our custom ErrorBoundary
const SafeSection = ({ 
  children, 
  name 
}: { 
  children: React.ReactNode; 
  name: string 
}) => {
  return (
    <React.Suspense fallback={<div className="p-8 text-center">Loading {name}...</div>}>
      <NamedErrorBoundary fallback={SectionErrorFallback} componentName={name}>
        {children}
      </NamedErrorBoundary>
    </React.Suspense>
  );
};

/**
 * Main landing page component
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
        
        {/* How Lyyli works section */}
        <SafeSection name="Use Cases">
          <UseCase />
        </SafeSection>
        
        {/* Social proof and enterprise focus */}
        <SafeSection name="Enterprise">
          <EnterpriseCallout />
        </SafeSection>
        
        <SafeSection name="Testimonials">
          <TestimonialsSection />
        </SafeSection>
        
        <SafeSection name="Blog Posts">
          <BlogCarousel />
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
