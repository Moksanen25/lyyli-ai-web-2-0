import React from 'react';
import { 
  Building, 
  Briefcase, 
  HandHelping, 
  School, 
  PenTool, 
  Users 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CustomerSegments: React.FC = () => {
  const { t } = useLanguage();

  // Helper function to ensure we get an array from translations
  const ensureArray = (value: unknown): string[] => {
    if (Array.isArray(value)) return value;
    return [];
  };
  
  const segments = [
    {
      id: "tech-smes",
      name: t('customerSegments.techSMEs.name'),
      icon: <Building className="h-10 w-10 text-primary" />,
      description: t('customerSegments.techSMEs.description'),
      painPoints: ensureArray(t('customerSegments.techSMEs.painPoints')),
      solutions: ensureArray(t('customerSegments.techSMEs.solutions')),
      quote: {
        text: t('customerSegments.techSMEs.quote'),
        author: t('customerSegments.techSMEs.author')
      }
    },
    {
      id: "consulting",
      name: t('customerSegments.consulting.name'),
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      description: t('customerSegments.consulting.description'),
      painPoints: ensureArray(t('customerSegments.consulting.painPoints')),
      solutions: ensureArray(t('customerSegments.consulting.solutions')),
      quote: {
        text: t('customerSegments.consulting.quote'),
        author: t('customerSegments.consulting.author')
      }
    },
    {
      id: "nonprofits",
      name: t('customerSegments.nonprofits.name'),
      icon: <HandHelping className="h-10 w-10 text-primary" />,
      description: t('customerSegments.nonprofits.description'),
      painPoints: ensureArray(t('customerSegments.nonprofits.painPoints')),
      solutions: ensureArray(t('customerSegments.nonprofits.solutions')),
      quote: {
        text: t('customerSegments.nonprofits.quote'),
        author: t('customerSegments.nonprofits.author')
      }
    },
    {
      id: "education",
      name: t('customerSegments.education.name'),
      icon: <School className="h-10 w-10 text-primary" />,
      description: t('customerSegments.education.description'),
      painPoints: ensureArray(t('customerSegments.education.painPoints')),
      solutions: ensureArray(t('customerSegments.education.solutions')),
      quote: {
        text: t('customerSegments.education.quote'),
        author: t('customerSegments.education.author')
      }
    },
    {
      id: "creative",
      name: t('customerSegments.creative.name'),
      icon: <PenTool className="h-10 w-10 text-primary" />,
      description: t('customerSegments.creative.description'),
      painPoints: ensureArray(t('customerSegments.creative.painPoints')),
      solutions: ensureArray(t('customerSegments.creative.solutions')),
      quote: {
        text: t('customerSegments.creative.quote'),
        author: t('customerSegments.creative.author')
      }
    },
    {
      id: "sports",
      name: t('customerSegments.sports.name'),
      icon: <Users className="h-10 w-10 text-primary" />,
      description: t('customerSegments.sports.description'),
      painPoints: ensureArray(t('customerSegments.sports.painPoints')),
      solutions: ensureArray(t('customerSegments.sports.solutions')),
      quote: {
        text: t('customerSegments.sports.quote'),
        author: t('customerSegments.sports.author')
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold py-1 px-3 rounded-full mb-3">
            {t('customerSegments.tailoredSolutions')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('customerSegments.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('customerSegments.subtitle')}
          </p>
        </div>

        {/* Tabs for Desktop */}
        <div className="hidden md:block">
          <Tabs defaultValue="tech-smes" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-background">
                {segments.map(segment => (
                  <TabsTrigger key={segment.id} value={segment.id} className="px-4 py-2">
                    <div className="flex flex-col items-center">
                      <span className="hidden lg:flex">{segment.icon}</span>
                      <span className="text-xs lg:text-sm mt-1">{segment.name}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {segments.map(segment => (
              <TabsContent key={segment.id} value={segment.id} className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      {segment.icon}
                      <h3 className="text-2xl font-bold ml-3">{segment.name}</h3>
                    </div>
                    <p className="text-lg mb-6 text-muted-foreground">
                      {segment.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">{t('customerSegments.challenges')}</h4>
                      <ul className="space-y-2">
                        {segment.painPoints.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-primary/10 text-primary p-1 rounded-full mr-2 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold mb-3 text-primary">{t('customerSegments.solutions')}</h4>
                      <ul className="space-y-2">
                        {segment.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-primary/10 text-primary p-1 rounded-full mr-2 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                            </span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-primary hover:bg-primary/90">{t('customerSegments.bookDemoButton')}</Button>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <Card className="border-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{t('customerSegments.successStory')}</CardTitle>
                        <CardDescription>How Lyyli transforms communication workflows</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <blockquote className="border-l-4 border-primary/30 pl-4 italic">
                          "{segment.quote.text}"
                        </blockquote>
                        <p className="text-right mt-4 text-sm font-medium">— {segment.quote.author}</p>
                        
                        <div className="mt-8 pt-4 border-t">
                          <h4 className="font-medium mb-3">{t('customerSegments.keyFeatures')}</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                              </div>
                              <span className="text-sm">{t('customerSegments.voiceAI')}</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-slack text-primary"><rect width="3" height="8" x="13" y="2" rx="1.5"/><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 22 8.5"/><rect width="3" height="8" x="8" y="14" rx="1.5"/><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 2 15.5"/><rect width="8" height="3" x="14" y="13" rx="1.5"/><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"/><rect width="8" height="3" x="2" y="8" rx="1.5"/><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"/></svg>
                              </div>
                              <span className="text-sm">{t('customerSegments.slackIntegration')}</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M7 8h10"/><path d="M7 12h4"/></svg>
                              </div>
                              <span className="text-sm">{t('customerSegments.contentTemplates')}</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-teams text-primary"><path d="M17 20H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4Z"/><circle cx="12" cy="10" r="3"/><path d="M12 13v4"/><path d="m8 15 8-5"/><path d="m8 9 8 5"/></svg>
                              </div>
                              <span className="text-sm">{t('customerSegments.teamsIntegration')}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Card Layout for Mobile */}
        <div className="md:hidden space-y-8">
          {segments.map((segment, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-primary/5 flex flex-row items-center gap-3">
                {segment.icon}
                <div>
                  <CardTitle>{segment.name}</CardTitle>
                  <CardDescription className="mt-1">{segment.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-primary mb-2">{t('customerSegments.challenges')}</h4>
                  <ul className="space-y-1 text-sm">
                    {segment.painPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-1">•</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-sm text-primary mb-2">{t('customerSegments.solutions')}</h4>
                  <ul className="space-y-1 text-sm">
                    {segment.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-1">•</span> {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button size="sm" className="w-full mt-2">{t('customerSegments.learnMoreButton')}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('customerSegments.closingText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90">{t('customerSegments.bookDemoButton')}</Button>
            <Button variant="outline" className="border-primary text-primary">
              {t('customerSegments.viewComparisonButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;
