
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const caseStudies = [
    {
      company: t('caseStudies.globalFinancial.company'),
      industry: t('caseStudies.globalFinancial.industry'),
      challenge: t('caseStudies.globalFinancial.challenge'),
      solution: t('caseStudies.globalFinancial.solution'),
      results: t('caseStudies.globalFinancial.results'),
      logo: "https://img.shields.io/badge/GFC-Financial-blue"
    },
    {
      company: t('caseStudies.techNova.company'),
      industry: t('caseStudies.techNova.industry'),
      challenge: t('caseStudies.techNova.challenge'),
      solution: t('caseStudies.techNova.solution'),
      results: t('caseStudies.techNova.results'),
      logo: "https://img.shields.io/badge/TechNova-Systems-purple"
    },
    {
      company: t('caseStudies.healthFirst.company'),
      industry: t('caseStudies.healthFirst.industry'),
      challenge: t('caseStudies.healthFirst.challenge'),
      solution: t('caseStudies.healthFirst.solution'),
      results: t('caseStudies.healthFirst.results'),
      logo: "https://img.shields.io/badge/HealthFirst-Network-green"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold py-1 px-3 rounded-full mb-3">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('caseStudies.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('caseStudies.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {caseStudies.map((study, index) => (
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
                    <p className="text-sm font-semibold">Challenge:</p>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Solution:</p>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Results:</p>
                    <p className="text-sm text-muted-foreground">{study.results}</p>
                  </div>
                </div>
                
                <button className="text-primary flex items-center text-sm font-medium mt-auto">
                  {t('caseStudies.readFullCase')} <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
