
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
      company: "Global Financial Corp",
      industry: "Finance",
      challenge: "Legacy content management systems causing workflow bottlenecks",
      solution: "AI-powered content automation with custom integration",
      results: "72% faster content production and 45% cost savings",
      logo: "https://img.shields.io/badge/GFC-Financial-blue"
    },
    {
      company: "TechNova Systems",
      industry: "Technology",
      challenge: "Scaling content across 12 product lines and 30 global markets",
      solution: "Centralized content hub with localization automation",
      results: "3x increase in content output with consistent brand voice",
      logo: "https://img.shields.io/badge/TechNova-Systems-purple"
    },
    {
      company: "HealthFirst Network",
      industry: "Healthcare",
      challenge: "Maintaining compliance while accelerating patient communications",
      solution: "Compliance-first AI content workflow with approval automation",
      results: "99.8% compliance rate with 60% faster approval cycles",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how leading organizations transformed their operations with our enterprise solutions.
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
                  Read Full Case Study <ArrowRight className="h-4 w-4 ml-1" />
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
