'use client';


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useSafeTranslation } from '@/utils/safeTranslation';
import { ArrowRight, MessageSquare } from 'lucide-react';
import CTASection from '@/components/CTASection';

const CaseStudies = () => {
  const { language } = useLanguage();
  const { safeT } = useSafeTranslation();
  
  // SEO metadata
  // const pageDescription = language === 'fi'
  //   ? 'Tutustu yritysten menestystarinoihin ja näe, kuinka Lyyli.ai on auttanut Fortune 500 -yrityksiä säästämään 45% kustannuksista ja nopeuttamaan sisällöntuotantoa 72%.'
  //   : 'Explore enterprise success stories and see how Lyyli.ai has helped Fortune 500 companies save 45% costs and increase content production speed by 72%.';
  
  const industries = [
    safeT('caseStudies.industries.finance', { fallback: language === 'fi' ? "Rahoitus" : "Finance" }),
    safeT('caseStudies.industries.technology', { fallback: language === 'fi' ? "Teknologia" : "Technology" }),
    safeT('caseStudies.industries.healthcare', { fallback: language === 'fi' ? "Terveydenhuolto" : "Healthcare" }),
    safeT('caseStudies.industries.manufacturing', { fallback: language === 'fi' ? "Valmistus" : "Manufacturing" }),
    safeT('caseStudies.industries.retail', { fallback: language === 'fi' ? "Vähittäiskauppa" : "Retail" }),
    safeT('caseStudies.industries.professional', { fallback: language === 'fi' ? "Asiantuntijapalvelut" : "Professional Services" })
  ];
  
  const caseStudies = [
    {
      title: safeT('caseStudies.globalFinancial.title', { 
        fallback: language === 'fi' ? "Global Financial Corp: Tekoälyllä tehostettu sisällön muutos" : "Global Financial Corp: AI-Powered Content Transformation"
      }),
      company: safeT('caseStudies.globalFinancial.company'),
      industry: safeT('caseStudies.globalFinancial.industry'),
      logo: "https://img.shields.io/badge/GFC-Financial-blue",
      description: safeT('caseStudies.globalFinancial.description', {
        fallback: language === 'fi' 
          ? "Kuinka Fortune 500 -rahoituslaitos uudisti sisällöntuotantonsa ja saavutti 72% nopeamman tuotannon 45% kustannussäästöillä."
          : "How a Fortune 500 financial institution revolutionized their content operations and achieved 72% faster production with 45% cost savings."
      }),
      metrics: [
        { 
          label: safeT('caseStudies.metrics.contentSpeed', { fallback: language === 'fi' ? "Sisällöntuotannon nopeus" : "Content Production Speed" }), 
          value: "+72%" 
        },
        { 
          label: safeT('caseStudies.metrics.costSavings', { fallback: language === 'fi' ? "Kustannussäästöt" : "Cost Savings" }), 
          value: "45%" 
        },
        { 
          label: safeT('caseStudies.metrics.timeToMarket', { fallback: language === 'fi' ? "Markkinoilletuloaika" : "Time-to-Market" }), 
          value: "-60%" 
        },
        { 
          label: safeT('caseStudies.metrics.contentEngagement', { fallback: language === 'fi' ? "Sisällön sitoutuminen" : "Content Engagement" }), 
          value: "+28%" 
        }
      ],
      detailed: true
    },
    {
      title: safeT('caseStudies.techNova.title', {
        fallback: language === 'fi' ? "TechNova: Globaalin sisällöntuotannon skaalaaminen" : "TechNova: Scaling Global Content Operations"
      }),
      company: safeT('caseStudies.techNova.company'),
      industry: safeT('caseStudies.techNova.industry'),
      logo: "https://img.shields.io/badge/TechNova-Systems-purple",
      description: safeT('caseStudies.techNova.description', {
        fallback: language === 'fi'
          ? "Kuinka tämä monikansallinen teknologiajohtaja yhdisti sisällön 12 tuotelinjan ja 30 globaalin markkinan välillä säilyttäen yhtenäisen brändiään."
          : "How this multinational tech leader unified content across 12 product lines and 30 global markets while maintaining consistent brand voice."
      }),
      metrics: [
        { 
          label: safeT('caseStudies.metrics.contentOutput', { fallback: language === 'fi' ? "Sisällöntuotanto" : "Content Output" }), 
          value: "3x" 
        },
        { 
          label: safeT('caseStudies.metrics.marketCoverage', { fallback: language === 'fi' ? "Markkinakattavuus" : "Market Coverage" }), 
          value: "100%" 
        },
        { 
          label: safeT('caseStudies.metrics.localizationTime', { fallback: language === 'fi' ? "Lokalisointiaika" : "Localization Time" }), 
          value: "-80%" 
        },
        { 
          label: safeT('caseStudies.metrics.contentReuse', { fallback: language === 'fi' ? "Sisällön uudelleenkäyttö" : "Content Reuse" }), 
          value: "+65%" 
        }
      ],
      detailed: true
    },
    {
      title: safeT('caseStudies.healthFirst.title', {
        fallback: language === 'fi' ? "HealthFirst: Terveydenhuollon vaatimustenmukainen viestintä" : "HealthFirst: Compliant Healthcare Communications"
      }),
      company: safeT('caseStudies.healthFirst.company'),
      industry: safeT('caseStudies.healthFirst.industry'),
      logo: "https://img.shields.io/badge/HealthFirst-Network-green",
      description: safeT('caseStudies.healthFirst.description', {
        fallback: language === 'fi'
          ? "Kuinka tämä terveydenhuollon tarjoaja ylläpiti tiukkaa vaatimustenmukaisuutta nopeuttaen samalla potilasviestintää verkostossaan."
          : "How this healthcare provider maintained strict compliance while accelerating patient communications across their network."
      }),
      metrics: [
        { 
          label: safeT('caseStudies.metrics.complianceRate', { fallback: language === 'fi' ? "Vaatimustenmukaisuusaste" : "Compliance Rate" }), 
          value: "99.8%" 
        },
        { 
          label: safeT('caseStudies.metrics.approvalCycles', { fallback: language === 'fi' ? "Hyväksyntäsyklit" : "Approval Cycles" }), 
          value: "-60%" 
        },
        { 
          label: safeT('caseStudies.metrics.patientSatisfaction', { fallback: language === 'fi' ? "Potilastyytyväisyys" : "Patient Satisfaction" }), 
          value: "+42%" 
        },
        { 
          label: safeT('caseStudies.metrics.contentDistribution', { fallback: language === 'fi' ? "Sisällön jakelu" : "Content Distribution" }), 
          value: "5x" 
        }
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {safeT('caseStudies.pageTitle', { fallback: language === 'fi' ? 'Yritysten menestystarinat' : 'Enterprise Success Stories' })}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {safeT('caseStudies.pageSubtitle', { 
                  fallback: language === 'fi' 
                    ? 'Tutustu, kuinka johtavat yritykset eri toimialoilla ovat muuttaneet toimintaansa alustamme avulla.'
                    : 'Discover how leading enterprises across industries have transformed their operations with our platform.'
                })}
              </p>
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-sm font-medium mr-2">
              {safeT('caseStudies.filterByIndustry', { fallback: language === 'fi' ? 'Suodata toimialan mukaan:' : 'Filter by industry:' })}
            </span>
            <Button variant="outline" size="sm" className="bg-primary/10">
              {safeT('caseStudies.allIndustries', { fallback: language === 'fi' ? 'Kaikki' : 'All' })}
            </Button>
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
                      <Button className="w-full">
                        {safeT('caseStudies.readFullCaseStudy', { fallback: language === 'fi' ? 'Lue koko tapaustutkimus' : 'Read Full Case Study' })}
                      </Button>
                      <Button variant="outline" className="w-full flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 mr-2" /> 
                        {safeT('caseStudies.downloadPdf', { fallback: language === 'fi' ? 'Lataa PDF' : 'Download PDF' })}
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
                      <h4 className="font-semibold mb-2">
                        {safeT('caseStudies.keyOutcomes', { fallback: language === 'fi' ? 'Keskeiset tulokset:' : 'Key Outcomes:' })}
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>
                          {safeT('caseStudies.outcomes.workflow', { 
                            fallback: language === 'fi' 
                              ? 'Sujuvoitettu työnkulku osastojen välillä' 
                              : 'Streamlined workflow across departments'
                          })}
                        </li>
                        <li>
                          {safeT('caseStudies.outcomes.bottlenecks', { 
                            fallback: language === 'fi' 
                              ? 'Poistettu sisällön pullonkaulat' 
                              : 'Eliminated content bottlenecks'
                          })}
                        </li>
                        <li>
                          {safeT('caseStudies.outcomes.collaboration', { 
                            fallback: language === 'fi' 
                              ? 'Parannettu toimintojen välistä yhteistyötä' 
                              : 'Improved cross-functional collaboration'
                          })}
                        </li>
                        <li>
                          {safeT('caseStudies.outcomes.compliance', { 
                            fallback: language === 'fi' 
                              ? 'Tehostettu vaatimustenmukaisuutta ja hallintotapaa' 
                              : 'Enhanced compliance and governance'
                          })}
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          
          {/* More Case Studies */}
          <h2 className="text-2xl font-bold mb-6">
            {safeT('caseStudies.moreSuccessStories', { fallback: language === 'fi' ? 'Lisää menestystarinoita' : 'More Success Stories' })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {caseStudies.slice(3).map((study, index) => (
              <Card key={index} className="border-none shadow hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <img src={study.logo} alt={`${study.company} logo`} className="h-6 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-sm text-primary/70 mb-3">{study.industry}</p>
                  <p className="text-sm text-muted-foreground mb-6">{study.description}</p>
                  
                  <button className="text-primary flex items-center text-sm font-medium mt-4">
                    {safeT('caseStudies.viewCaseStudy', { fallback: language === 'fi' ? 'Katso tapaustutkimus' : 'View Case Study' })} <ArrowRight className="h-4 w-4 ml-1" />
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
