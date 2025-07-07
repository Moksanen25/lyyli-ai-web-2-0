
import React, { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import TeamSection from '@/components/about/TeamSection';
import MissionSection from '@/components/about/MissionSection';
import CompanyTimeline from '@/components/about/CompanyTimeline';
import { Helmet } from 'react-helmet';

/**
 * About page component
 * Displays company information, mission, team and timeline
 */
const About = () => {
  const { language, verifyLanguageCompleteness } = useLanguage();
  
  // SEO metadata
  const pageTitle = language === 'fi' ? 'Tietoa meistä - Lyyli.ai' : 'About Us - Lyyli.ai';
  const pageDescription = language === 'fi'
    ? 'Tutustu Lyyli.ai:n tarinaan, tiimiin ja visioon. Olemme kehittämässä tekoälyä, joka tekee viestinnästä tehokkaampaa ja inhimillisempää.'
    : 'Learn about Lyyli.ai\'s story, team and vision. We\'re developing AI that makes communication more efficient and human.';
  
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
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href={`https://lyyli.ai/${language === 'fi' ? 'fi/' : ''}about`} />
      </Helmet>
      
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
