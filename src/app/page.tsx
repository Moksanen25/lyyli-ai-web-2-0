import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import SolutionsSection from '@/components/SolutionsSection';
import AutomationSection from '@/components/AutomationSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import InsightsSection from '@/components/InsightsSection';
import FinalCTASection from '@/components/FinalCTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <SolutionsSection />
      <AutomationSection />
      <TestimonialsSection />
      <InsightsSection />
      <FinalCTASection />
    </>
  );
} 