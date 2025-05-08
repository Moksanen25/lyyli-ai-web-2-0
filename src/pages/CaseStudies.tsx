
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const { t } = useLanguage();
  
  const industries = [
    "Finance",
    "Technology",
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Professional Services"
  ];
  
  const caseStudies = [
    {
      title: "Global Financial Corp: AI-Powered Content Transformation",
      company: "Global Financial Corp",
      industry: "Finance",
      logo: "https://img.shields.io/badge/GFC-Financial-blue",
      description: "How a Fortune 500 financial institution revolutionized their content operations and achieved 72% faster production with 45% cost savings.",
      metrics: [
        { label: "Content Production Speed", value: "+72%" },
        { label: "Cost Savings", value: "45%" },
        { label: "Time-to-Market", value: "-60%" },
        { label: "Content Engagement", value: "+28%" }
      ],
      detailed: true
    },
    {
      title: "TechNova: Scaling Global Content Operations",
      company: "TechNova Systems",
      industry: "Technology",
      logo: "https://img.shields.io/badge/TechNova-Systems-purple",
      description: "How this multinational tech leader unified content across 12 product lines and 30 global markets while maintaining consistent brand voice.",
      metrics: [
        { label: "Content Output", value: "3x" },
        { label: "Market Coverage", value: "100%" },
        { label: "Localization Time", value: "-80%" },
        { label: "Content Reuse", value: "+65%" }
      ],
      detailed: true
    },
    {
      title: "HealthFirst: Compliant Healthcare Communications",
      company: "HealthFirst Network",
      industry: "Healthcare",
      logo: "https://img.shields.io/badge/HealthFirst-Network-green",
      description: "How this healthcare provider maintained strict compliance while accelerating patient communications across their network.",
      metrics: [
        { label: "Compliance Rate", value: "99.8%" },
        { label: "Approval Cycles", value: "-60%" },
        { label: "Patient Satisfaction", value: "+42%" },
        { label: "Content Distribution", value: "5x" }
      ],
      detailed: true
    },
    {
      title: "ManufacturePro: Streamlining Technical Documentation",
      company: "ManufacturePro Industries",
      industry: "Manufacturing",
      logo: "https://img.shields.io/badge/ManufacturePro-Industries-orange",
      description: "How a global manufacturer consolidated technical documentation across 200+ product lines and reduced production time by 65%.",
      metrics: [
        { label: "Documentation Time", value: "-65%" },
        { label: "Translation Costs", value: "-50%" },
        { label: "Content Accuracy", value: "99.5%" },
        { label: "Support Tickets", value: "-30%" }
      ]
    },
    {
      title: "RetailGiant: Omnichannel Content Strategy",
      company: "RetailGiant Corp",
      industry: "Retail",
      logo: "https://img.shields.io/badge/RetailGiant-Corp-red",
      description: "How this international retailer created a unified content strategy across online and physical touchpoints, increasing conversions by 34%.",
      metrics: [
        { label: "Conversion Rate", value: "+34%" },
        { label: "Content Production", value: "7x" },
        { label: "Brand Consistency", value: "+82%" },
        { label: "Customer Journey Time", value: "-25%" }
      ]
    },
    {
      title: "ConsultPro: Knowledge Management Transformation",
      company: "ConsultPro Services",
      industry: "Professional Services",
      logo: "https://img.shields.io/badge/ConsultPro-Services-teal",
      description: "How a global consulting firm transformed their knowledge management system to enable consultants with real-time insights.",
      metrics: [
        { label: "Consultant Productivity", value: "+40%" },
        { label: "Knowledge Retrieval", value: "-85%" },
        { label: "Proposal Development", value: "3x" },
        { label: "Revenue Per Consultant", value: "+22%" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <div className="bg-gradient-to-b from-primary/10 to-background pt-24 pb-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Success Stories</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover how leading enterprises across industries have transformed their operations with our platform.
              </p>
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-sm font-medium mr-2">Filter by industry:</span>
            <Button variant="outline" size="sm" className="bg-primary/10">All</Button>
            {industries.map((industry, index) => (
              <Button key={index} variant="outline" size="sm">{industry}</Button>
            ))}
          </div>
          
          {/* Featured Case Studies */}
          <div className="grid grid-cols-1 gap-8 mb-16">
            {caseStudies.slice(0, 3).map((study, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="bg-primary/5 p-6 lg:p-8 flex flex-col">
                    <img src={study.logo} alt={`${study.company} logo`} className="h-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                    <p className="text-sm text-primary/70 mb-4">{study.industry}</p>
                    <div className="mt-auto space-y-4">
                      <Button className="w-full">Read Full Case Study</Button>
                      <Button variant="outline" className="w-full flex items-center justify-center">
                        <Download className="h-4 w-4 mr-2" /> Download PDF
                      </Button>
                    </div>
                  </div>
                  <CardContent className="col-span-2 p-6 lg:p-8">
                    <h2 className="text-2xl font-bold mb-4">{study.title}</h2>
                    <p className="text-muted-foreground mb-6">{study.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-primary/5 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">Key Outcomes:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Streamlined workflow across departments</li>
                        <li>Eliminated content bottlenecks</li>
                        <li>Improved cross-functional collaboration</li>
                        <li>Enhanced compliance and governance</li>
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          
          {/* More Case Studies */}
          <h2 className="text-2xl font-bold mb-6">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {caseStudies.slice(3).map((study, index) => (
              <Card key={index} className="border-none shadow hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <img src={study.logo} alt={`${study.company} logo`} className="h-6 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-sm text-primary/70 mb-3">{study.industry}</p>
                  <p className="text-sm text-muted-foreground mb-6">{study.description}</p>
                  
                  <button className="text-primary flex items-center text-sm font-medium mt-4">
                    View Case Study <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
