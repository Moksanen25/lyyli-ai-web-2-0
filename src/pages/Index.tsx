import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionIntroSection from '@/components/SolutionIntroSection';
import ValuePropositionsSection from '@/components/ValuePropositionsSection';
import UseCase from '@/components/UseCase';
import FeaturesSection from '@/components/FeaturesSection';
import EnterpriseCallout from '@/components/EnterpriseCallout';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogCarousel from '@/components/blog/BlogCarousel';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import HowItWorks from '@/components/HowItWorks';

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
        <HeroSection />
        
        {/* Problem Section - Creates empathy */}
        <ProblemSection />
        
        {/* Solution Introduction */}
        <SolutionIntroSection />
        
        {/* Value Propositions - Three key arguments */}
        <ValuePropositionsSection />

        {/* How It Works Section */}
        <HowItWorks />
        
        {/* Main content sections */}
        <FeaturesSection />
        
        {/* How Lyyli works section */}
        <UseCase />
        
        {/* Social proof and enterprise focus */}
        <EnterpriseCallout />
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Hidden for now */}
        {/* <SafeSection name="Implementation Timeline">
          <React.Suspense fallback={<div>Loading...</div>}>
            <ImplementationTimeline />
          </React.Suspense>
        </SafeSection> */}
        
        {/* Blog Posts */}
        <BlogCarousel />
        
        {/* Final conversion point */}
        <CTASection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
