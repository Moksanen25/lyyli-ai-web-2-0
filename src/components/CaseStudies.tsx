
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { useSafeTranslation } from '@/utils/safeTranslation';

const CaseStudies: React.FC = () => {
  const { language } = useLanguage();
  const { safeT } = useSafeTranslation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const caseStudies = [
    {
      company: safeT('caseStudies.globalFinancial.company'),
      industry: safeT('caseStudies.globalFinancial.industry'),
      challenge: safeT('caseStudies.globalFinancial.challenge'),
      solution: safeT('caseStudies.globalFinancial.solution'),
      results: safeT('caseStudies.globalFinancial.results'),
      logo: "https://img.shields.io/badge/GFC-Financial-blue"
    },
    {
      company: safeT('caseStudies.techNova.company'),
      industry: safeT('caseStudies.techNova.industry'),
      challenge: safeT('caseStudies.techNova.challenge'),
      solution: safeT('caseStudies.techNova.solution'),
      results: safeT('caseStudies.techNova.results'),
      logo: "https://img.shields.io/badge/TechNova-Systems-purple"
    },
    {
      company: safeT('caseStudies.healthFirst.company'),
      industry: safeT('caseStudies.healthFirst.industry'),
      challenge: safeT('caseStudies.healthFirst.challenge'),
      solution: safeT('caseStudies.healthFirst.solution'),
      results: safeT('caseStudies.healthFirst.results'),
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
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{safeT('caseStudies.title')}</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {safeT('caseStudies.subtitle')}
          </p>
        </div>
        
        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-fade-in mb-6 md:mb-8">
          {displayedCaseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="border-none card-shadow hover:shadow-lg transition-shadow duration-300"
              onClick={() => navigate('/case-studies')}
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
                  {safeT('caseStudies.readFullCase')} <ArrowRight className="h-4 w-4 ml-1" />
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
              onClick={() => navigate('/case-studies')}
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
