
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import BookDemoDialog from '@/components/BookDemoDialog';

const TargetAudience = () => {
  const {
    t,
    language
  } = useLanguage();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("tech-smes");
  const [showDemoDialog, setShowDemoDialog] = useState(false);

  // Target audience data with translations for both languages
  const audiences = [{
    id: "tech-smes",
    titleEn: "Tech-driven SMEs",
    titleFi: "Teknologiset pk-yritykset",
    subtitleEn: "Unified communication, streamlined collaboration",
    subtitleFi: "Yhtenäinen viestintä, tehokas yhteistyö",
    descriptionEn: "Lyyli connects your team's voice across Slack, Teams, and social media. In fast-paced, distributed teams, communication stays consistent and automated.",
    descriptionFi: "Lyyli yhdistää tiimisi äänen – Slackissa, Teamsissä ja somessa. Johdonmukainen viestintä syntyy automaattisesti, kun arki on hajautettua ja kiireistä."
  }, {
    id: "consultants",
    titleEn: "Consultants and experts",
    titleFi: "Konsultit ja asiantuntijat",
    subtitleEn: "Highlight your expertise without the writing hassle",
    subtitleFi: "Asiantuntemus esiin – ilman kirjoittamisen tuskaa",
    descriptionEn: "Lyyli allows consulting and expert firms to focus on their core work while newsletters, updates, and social content are generated smartly in the background.",
    descriptionFi: "Lyyli vapauttaa konsultit ja asiantuntijat keskittymään työhönsä. Uutiskirjeet, päivitykset ja somesisällöt hoituvat älykkäästi taustalla."
  }, {
    id: "nonprofits",
    titleEn: "Nonprofits and associations",
    titleFi: "Järjestöt ja yhdistykset",
    subtitleEn: "Impactful communication, even with limited resources",
    subtitleFi: "Viestintää vaikuttavasti – vaikka resurssit olisivat rajalliset",
    descriptionEn: "Lyyli helps organizations keep members, stakeholders, and funders informed—automatically, multilingual, and on schedule.",
    descriptionFi: "Lyyli auttaa järjestöjä pitämään jäsenet, sidosryhmät ja rahoittajat ajan tasalla – automaattisesti, monikielisesti ja ajallaan."
  }, {
    id: "education",
    titleEn: "Education and research",
    titleFi: "Koulutus ja tutkimus",
    subtitleEn: "Bridging communication between academia and the world",
    subtitleFi: "Viestintä akatemian ja yhteiskunnan välillä",
    descriptionEn: "Lyyli transforms complex knowledge into accessible, engaging content for both internal and public communication.",
    descriptionFi: "Lyyli muuntaa tutkimustiedon ymmärrettäväksi ja kiinnostavaksi viestinnäksi – ulkoisesti ja sisäisesti."
  }, {
    id: "creative",
    titleEn: "Creative firms and architects",
    titleFi: "Luovat toimistot ja arkkitehdit",
    subtitleEn: "More time for creativity, less time on routine",
    subtitleFi: "Luovuudelle tilaa, rutiinit automaatioon",
    descriptionEn: "Your brand voice stays aligned while Lyyli supports content planning, scheduling, and publishing for the entire team.",
    descriptionFi: "Brändi-identiteetti pysyy ehjänä, kun Lyyli tukee sisällön suunnittelua, ajastusta ja jakelua tiimin puolesta."
  }, {
    id: "sports",
    titleEn: "Sports clubs and organizations",
    titleFi: "Urheiluseurat ja taustayhteisöt",
    subtitleEn: "Your community deserves visibility—without the comms burden",
    subtitleFi: "Yhteisösi ansaitsee näkyvyyttä – ilman viestintäkuormaa",
    descriptionEn: "Lyyli helps keep fans and sponsors in the loop with continuous, automated communication.",
    descriptionFi: "Lyyli auttaa pitämään kannattajat ja sponsorit mukana automaattisen, jatkuvan viestinnän avulla."
  }];

  const handleBookDemo = () => {
    setShowDemoDialog(true);
  };

  // Render desktop tabs or mobile accordion based on screen size
  return (
    <section className="py-12 bg-slate-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {language === 'en' ? 'Who benefits from Lyyli?' : 'Kuka hyötyy Lyylista?'}
        </h2>
        
        {isMobile ? (
          // Mobile view with accordion
          <Accordion type="single" collapsible className="w-full">
            {audiences.map((audience) => (
              <AccordionItem key={audience.id} value={audience.id}>
                <AccordionTrigger className="text-lg font-semibold">
                  {language === 'en' ? audience.titleEn : audience.titleFi}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">
                      {language === 'en' ? audience.subtitleEn : audience.subtitleFi}
                    </h4>
                    <p className="text-gray-600">
                      {language === 'en' ? audience.descriptionEn : audience.descriptionFi}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          // Desktop view with tabs
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full space-y-6"
          >
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-6">
              {audiences.map((audience) => (
                <TabsTrigger 
                  key={audience.id} 
                  value={audience.id}
                  className="text-sm whitespace-normal h-auto py-2"
                >
                  {language === 'en' ? audience.titleEn : audience.titleFi}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {audiences.map((audience) => (
              <TabsContent key={audience.id} value={audience.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{language === 'en' ? audience.titleEn : audience.titleFi}</CardTitle>
                    <CardDescription className="text-lg text-primary font-medium">
                      {language === 'en' ? audience.subtitleEn : audience.subtitleFi}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {language === 'en' ? audience.descriptionEn : audience.descriptionFi}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        )}
        
        <div className="mt-10 text-center">
          <Button onClick={handleBookDemo} size="lg">
            {t('common.bookDemo')}
          </Button>
        </div>
        
        {showDemoDialog && (
          <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
        )}
      </div>
    </section>
  );
};

export default TargetAudience;
