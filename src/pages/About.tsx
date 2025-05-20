
import React, { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import TeamSection from '@/components/about/TeamSection';
import MissionSection from '@/components/about/MissionSection';
import CompanyTimeline from '@/components/about/CompanyTimeline';

/**
 * About page component
 * Displays company information, mission, team and timeline
 */
const About = () => {
  const { language, verifyLanguageCompleteness } = useLanguage();
  
  // Add console log for debugging
  console.log('About page rendering with language:', language);
  
  // Verify translations on mount in development mode
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('Verifying translations completeness on About page mount');
      verifyLanguageCompleteness?.();
    }
  }, [language, verifyLanguageCompleteness]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container-padding py-20 md:py-28 flex-grow animate-fade-in mt-16">
        <AboutHero />
        <MissionSection />
        <TeamSection />
        <CompanyTimeline />
      </div>
      <Footer />
    </div>
  );
};

export default About;
