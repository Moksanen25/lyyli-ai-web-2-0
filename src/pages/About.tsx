
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import TeamSection from '@/components/about/TeamSection';
import MissionSection from '@/components/about/MissionSection';
import CompanyTimeline from '@/components/about/CompanyTimeline';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container-padding py-12 md:py-24 flex-grow animate-fade-in">
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
