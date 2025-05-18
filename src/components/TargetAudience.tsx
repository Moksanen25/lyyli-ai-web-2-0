
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
  const { t, language } = useLanguage();
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

  // Render different UI based on screen size
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('targetAudience.title')}
          </h2>
        </div>
        
        {isMobile ? (
          // Mobile accordion view
          <Accordion type="single" collapsible className="w-full mb-8">
            {audiences.map((audience) => (
              <AccordionItem key={audience.id} value={audience.id}>
                <AccordionTrigger className="text-left px-4 py-3">
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold">
                      {language === 'fi' ? audience.titleFi : audience.titleEn}
                    </h3>
                    <p className="text-sm text-muted-foreground font-normal">
                      {language === 'fi' ? audience.subtitleFi : audience.subtitleEn}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="mb-4">
                    {language === 'fi' ? audience.descriptionFi : audience.descriptionEn}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          // Desktop tabs view
          <Tabs 
            defaultValue="tech-smes" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full mb-8"
          >
            <div className="flex justify-center mb-6">
              <TabsList className="grid grid-cols-3 md:grid-cols-6">
                {audiences.map((audience) => (
                  <TabsTrigger 
                    key={audience.id} 
                    value={audience.id}
                    className="px-4 py-2"
                  >
                    {language === 'fi' ? audience.titleFi.split(' ')[0] : audience.titleEn.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {audiences.map((audience) => (
              <TabsContent key={audience.id} value={audience.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{language === 'fi' ? audience.titleFi : audience.titleEn}</CardTitle>
                    <CardDescription>{language === 'fi' ? audience.subtitleFi : audience.subtitleEn}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{language === 'fi' ? audience.descriptionFi : audience.descriptionEn}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        )}
        
        <div className="flex justify-center">
          <Button 
            variant="default" 
            size="lg" 
            onClick={handleBookDemo}
            className="rounded-full px-8"
          >
            {t('targetAudience.bookDemo')}
          </Button>
        </div>
        
        {showDemoDialog && (
          <BookDemoDialog
            open={showDemoDialog} 
            onOpenChange={setShowDemoDialog}
          />
        )}
      </div>
    </section>
  );
};

export default TargetAudience;
