import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionIntroSection from '@/components/SolutionIntroSection';
import ValuePropositionsSection from '@/components/ValuePropositionsSection';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export default function HomePageSv() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionIntroSection />
      <ValuePropositionsSection />
      <HowItWorks />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
