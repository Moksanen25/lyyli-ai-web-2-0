'use client';


import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { useSafeTranslation } from '@/utils/safeTranslation';

const CaseStudies: React.FC = () => {
  const { language } = useLanguage();
  const { safeT } = useSafeTranslation();
  const router = useRouter();
  const isMobile = useIsMobile();
  
  // Create case studies with proper translation handling
  const caseStudies = [
    {
      company: safeT('caseStudies.globalFinancial.company', { fallback: 'Global Financial Corp' }),
      industry: safeT('caseStudies.globalFinancial.industry', { fallback: 'Finance' }),
      challenge: safeT('caseStudies.globalFinancial.challenge', { fallback: 'Legacy content management systems causing workflow bottlenecks' }),
      solution: safeT('caseStudies.globalFinancial.solution', { fallback: 'AI-powered content automation with custom integration' }),
      results: safeT('caseStudies.globalFinancial.results', { fallback: '72% faster content production and 45% cost savings' }),
      logo: "https://img.shields.io/badge/GFC-Financial-blue"
    },
    {
      company: safeT('caseStudies.techNova.company', { fallback: 'TechNova Systems' }),
      industry: safeT('caseStudies.techNova.industry', { fallback: 'Technology' }),
      challenge: safeT('caseStudies.techNova.challenge', { fallback: 'Scaling content across 12 product lines and 30 global markets' }),
      solution: safeT('caseStudies.techNova.solution', { fallback: 'Centralized content hub with localization automation' }),
      results: safeT('caseStudies.techNova.results', { fallback: '3x increase in content output with consistent brand voice' }),
      logo: "https://img.shields.io/badge/TechNova-Systems-purple"
    },
    {
      company: safeT('caseStudies.healthFirst.company', { fallback: 'HealthFirst Network' }),
      industry: safeT('caseStudies.healthFirst.industry', { fallback: 'Healthcare' }),
      challenge: safeT('caseStudies.healthFirst.challenge', { fallback: 'Maintaining compliance while accelerating patient communications' }),
      solution: safeT('caseStudies.healthFirst.solution', { fallback: 'Compliance-first AI content workflow with approval automation' }),
      results: safeT('caseStudies.healthFirst.results', { fallback: '99.8% compliance rate with 60% faster approval cycles' }),
      logo: "https://img.shields.io/badge/HealthFirst-Network-green"
    }
  ];

  // For mobile, only show first case study to avoid excessive scrolling
  const displayedCaseStudies = isMobile ? caseStudies.slice(0, 1) : caseStudies;

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold py-1 px-3 rounded-full mb-3">
            {safeT('caseStudies.sectionLabel', { fallback: language === 'fi' ? 'Menestystarinat' : 'Success Stories' })}
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{safeT('caseStudies.title', { fallback: 'Enterprise Case Studies' })}</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {safeT('caseStudies.subtitle', { fallback: 'See how leading organizations transformed their operations with our enterprise solutions.' })}
          </p>
        </div>
        
        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-fade-in mb-6 md:mb-8">
          {displayedCaseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="border-none card-shadow hover:shadow-lg transition-shadow duration-300"
              onClick={() => router.push('/case-studies')}
            >
              <CardContent className="pt-6 flex flex-col h-full">
                <div className="mb-4">
                  <img src={study.logo} alt={`${study.company} logo`} className="h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{study.company}</h3>
                <p className="text-sm text-primary/70 mb-4">{study.industry}</p>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div>
                    <p className="text-sm font-semibold">
                      {safeT('caseStudies.challengeLabel', { fallback: language === 'fi' ? 'Haaste:' : 'Challenge:' })}
                    </p>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {safeT('caseStudies.solutionLabel', { fallback: language === 'fi' ? 'Ratkaisu:' : 'Solution:' })}
                    </p>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {safeT('caseStudies.resultsLabel', { fallback: language === 'fi' ? 'Tulokset:' : 'Results:' })}
                    </p>
                    <p className="text-sm text-muted-foreground">{study.results}</p>
                  </div>
                </div>
                
                <button className="text-primary flex items-center text-sm font-medium mt-auto">
                  {safeT('caseStudies.readFullCase', { fallback: language === 'fi' ? 'Lue koko tapaustutkimus' : 'Read Full Case Study' })} <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Mobile-specific "See More" button */}
        {isMobile && (
          <div className="text-center">
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => router.push('/case-studies')}
            >
              {safeT('caseStudies.seeAll', { fallback: language === 'fi' ? 'Näytä kaikki tapaustutkimukset' : 'See All Case Studies' })} <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
