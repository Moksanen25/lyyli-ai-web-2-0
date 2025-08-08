'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

const SolutionIntroSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeIndustry, setActiveIndustry] = useState('health');

  const getText = (key: string): string => {
    const texts = {
      en: {
        title: 'Solutions for every industry',
        subtitle: 'AI communication assistant for expert organizations – communicate in messaging channels like a professional and ensure important matters are never left uncommunicated.',
        cta: 'Book demo',
        secondaryCta: 'Start free trial',
        industries: {
          health: 'Health and well-being',
          finance: 'Finance and insurance',
          education: 'Education and training',
          technology: 'Technology and IT',
          consulting: 'Consulting and services'
        }
      },
      fi: {
        title: 'Ratkaisuja jokaiselle toimialalle',
        subtitle: 'Asiantuntijaorganisaatioille tehty AI-viestintäassistentti, jonka avulla viestit pikaviestikanavissa kuin ammattilainen ja varmistat, etteivät tärkeät asiat jaa ikinä viestimättä.',
        cta: 'Varaa demo',
        secondaryCta: 'Aloita ilmainen kokeilu',
        industries: {
          health: 'Terveys ja hyvinvointi',
          finance: 'Rahoitus ja vakuutus',
          education: 'Koulutus ja koulutus',
          technology: 'Teknologia ja IT',
          consulting: 'Konsultointi ja palvelut'
        }
      }
    };
    
    // Handle nested object access for industries
    if (key.includes('.')) {
      const [parentKey, childKey] = key.split('.');
      const parent = texts[language as keyof typeof texts]?.[parentKey as keyof typeof texts.en] || texts.en[parentKey as keyof typeof texts.en];
      const result = (parent as Record<string, unknown>)?.[childKey];
      return result || '';
    }
    
    const result = texts[language as keyof typeof texts]?.[key as keyof typeof texts.en] || texts.en[key as keyof typeof texts.en];
    return result as string;
  };

  const getChallenges = (industry: string): string[] => {
    const challenges = {
      en: {
        health: [
          'Complex medical terminology',
          'Patient communication barriers',
          'Regulatory compliance requirements',
          'Time-consuming documentation'
        ],
        finance: [
          'Financial jargon complexity',
          'Client trust building',
          'Regulatory compliance',
          'Risk communication'
        ],
        education: [
          'Student engagement challenges',
          'Parent communication',
          'Administrative complexity',
          'Learning outcome communication'
        ],
        technology: [
          'Technical complexity',
          'Client onboarding',
          'Project communication',
          'Support ticket management'
        ],
        consulting: [
          'Client relationship management',
          'Project complexity',
          'Stakeholder communication',
          'Deliverable presentation'
        ]
      },
      fi: {
        health: [
          'Monimutkainen lääketieteellinen terminologia',
          'Potilaskommunikaation esteet',
          'Sääntelyvaatimukset',
          'Aikaa vievä dokumentointi'
        ],
        finance: [
          'Rahoitusterminologian monimutkaisuus',
          'Asiakasluottamuksen rakentaminen',
          'Sääntelyvaatimukset',
          'Riskikommunikaatio'
        ],
        education: [
          'Opiskelijoiden sitouttamisen haasteet',
          'Vanhempien kommunikaatio',
          'Hallinnollinen monimutkaisuus',
          'Oppimistulosten kommunikaatio'
        ],
        technology: [
          'Tekninen monimutkaisuus',
          'Asiakkaan perehdyttäminen',
          'Projektikommunikaatio',
          'Tukilipukkeiden hallinta'
        ],
        consulting: [
          'Asiakassuhteiden hallinta',
          'Projektin monimutkaisuus',
          'Sidosryhmäkommunikaatio',
          'Toimitusten esittely'
        ]
      }
    };
    
    return challenges[language as keyof typeof challenges]?.[industry as keyof typeof challenges.en] || challenges.en[industry as keyof typeof challenges.en] || [];
  };

  const getSolutions = (industry: string): string[] => {
    const solutions = {
      en: {
        health: [
          'Clear medical communication',
          'Patient-friendly language',
          'Compliance-ready messaging',
          'Automated documentation'
        ],
        finance: [
          'Simplified financial terms',
          'Trust-building communication',
          'Compliance automation',
          'Risk clarity'
        ],
        education: [
          'Engaging student communication',
          'Parent-friendly updates',
          'Streamlined administration',
          'Clear learning outcomes'
        ],
        technology: [
          'Simplified technical communication',
          'Smooth client onboarding',
          'Clear project updates',
          'Efficient support responses'
        ],
        consulting: [
          'Enhanced client relationships',
          'Clear project communication',
          'Stakeholder alignment',
          'Professional deliverables'
        ]
      },
      fi: {
        health: [
          'Selkeä lääketieteellinen kommunikaatio',
          'Potilasystävällinen kieli',
          'Sääntelyvaatimusten mukainen viestintä',
          'Automaattinen dokumentointi'
        ],
        finance: [
          'Yksinkertaistetut rahoitustermit',
          'Luottamuksen rakentava viestintä',
          'Sääntelyautomaatio',
          'Riskin selkeys'
        ],
        education: [
          'Sitouttava opiskelijakommunikaatio',
          'Vanhempien ystävälliset päivitykset',
          'Suoraviivainen hallinto',
          'Selkeät oppimistulokset'
        ],
        technology: [
          'Yksinkertaistettu tekninen kommunikaatio',
          'Sujuvat asiakkaan perehdytykset',
          'Selkeät projektipäivitykset',
          'Tehokkaat tukivastaukset'
        ],
        consulting: [
          'Parannetut asiakassuhteet',
          'Selkeä projektikommunikaatio',
          'Sidosryhmäyhtenmukaisuus',
          'Ammattimaiset toimitokset'
        ]
      }
    };
    
    return solutions[language as keyof typeof solutions]?.[industry as keyof typeof solutions.en] || solutions.en[industry as keyof typeof solutions.en] || [];
  };

  const industries = ['health', 'finance', 'education', 'technology', 'consulting'];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            {getText('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {getText('subtitle')}
          </p>
        </div>
        
        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setActiveIndustry(industry)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeIndustry === industry
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
              }`}
            >
              {getText(`industries.${industry}`)}
            </button>
          ))}
        </div>
        
        {/* Challenge vs Solution Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Challenges */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-6">Haasteet</h3>
            <div className="space-y-4">
              {getChallenges(activeIndustry).map((challenge: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <X className="h-4 w-4 text-red-600" />
                  </div>
                  <p className="text-red-800">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Solutions */}
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-emerald-800 mb-6">Lyylin ratkaisut</h3>
            <div className="space-y-4">
              {getSolutions(activeIndustry).map((solution: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-emerald-800">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href={language === 'fi' ? '/fi/contact' : '/contact'}>
              {getText('cta')}
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            asChild
          >
            <Link href={language === 'fi' ? '/fi/waitlist' : '/waitlist'}>
              {getText('secondaryCta')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionIntroSection;