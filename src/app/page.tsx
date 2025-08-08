import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import HowItWorks from '@/components/HowItWorks';
import SolutionIntroSection from '@/components/SolutionIntroSection';
import ValuePropositionsSection from '@/components/ValuePropositionsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogInsightsSection from '@/components/BlogInsightsSection';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <SolutionIntroSection />
      <ValuePropositionsSection />
      <TestimonialsSection />
      <BlogInsightsSection />
      <CTASection />
    </>
  );
} 