
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useMobile } from '@/hooks/use-mobile';

const TargetAudience = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const isMobile = useMobile();
  const [activeTab, setActiveTab] = useState("tech-smes");

  // Target audience data with translations for both languages
  const audiences = [
    {
      id: "tech-smes",
      titleEn: "Tech-driven SMEs",
      titleFi: "Teknologiset pk-yritykset",
      subtitleEn: "Unified communication, streamlined collaboration",
      subtitleFi: "Yhtenäinen viestintä, tehokas yhteistyö",
      descriptionEn: "Lyyli connects your team's voice across Slack, Teams, and social media. In fast-paced, distributed teams, communication stays consistent and automated.",
      descriptionFi: "Lyyli yhdistää tiimisi äänen – Slackissa, Teamsissä ja somessa. Johdonmukainen viestintä syntyy automaattisesti, kun arki on hajautettua ja kiireistä."
    },
    {
      id: "consultants",
      titleEn: "Consultants and experts",
      titleFi: "Konsultit ja asiantuntijat",
      subtitleEn: "Highlight your expertise without the writing hassle",
      subtitleFi: "Asiantuntemus esiin – ilman kirjoittamisen tuskaa",
      descriptionEn: "Lyyli allows consulting and expert firms to focus on their core work while newsletters, updates, and social content are generated smartly in the background.",
      descriptionFi: "Lyyli vapauttaa konsultit ja asiantuntijat keskittymään työhönsä. Uutiskirjeet, päivitykset ja somesisällöt hoituvat älykkäästi taustalla."
    },
    {
      id: "nonprofits",
      titleEn: "Nonprofits and associations",
      titleFi: "Järjestöt ja yhdistykset",
      subtitleEn: "Impactful communication, even with limited resources",
      subtitleFi: "Viestintää vaikuttavasti – vaikka resurssit olisivat rajalliset",
      descriptionEn: "Lyyli helps organizations keep members, stakeholders, and funders informed—automatically, multilingual, and on schedule.",
      descriptionFi: "Lyyli auttaa järjestöjä pitämään jäsenet, sidosryhmät ja rahoittajat ajan tasalla – automaattisesti, monikielisesti ja ajallaan."
    },
    {
      id: "education",
      titleEn: "Education and research",
      titleFi: "Koulutus ja tutkimus",
      subtitleEn: "Bridging communication between academia and the world",
      subtitleFi: "Viestintä akatemian ja yhteiskunnan välillä",
      descriptionEn: "Lyyli transforms complex knowledge into accessible, engaging content for both internal and public communication.",
      descriptionFi: "Lyyli muuntaa tutkimustiedon ymmärrettäväksi ja kiinnostavaksi viestinnäksi – ulkoisesti ja sisäisesti."
    },
    {
      id: "creative",
      titleEn: "Creative firms and architects",
      titleFi: "Luovat toimistot ja arkkitehdit",
      subtitleEn: "More time for creativity, less time on routine",
      subtitleFi: "Luovuudelle tilaa, rutiinit automaatioon",
      descriptionEn: "Your brand voice stays aligned while Lyyli supports content planning, scheduling, and publishing for the entire team.",
      descriptionFi: "Brändi-identiteetti pysyy ehjänä, kun Lyyli tukee sisällön suunnittelua, ajastusta ja jakelua tiimin puolesta."
    },
    {
      id: "sports",
      titleEn: "Sports clubs and organizations",
      titleFi: "Urheiluseurat ja taustayhteisöt",
      subtitleEn: "Your community deserves visibility—without the comms burden",
      subtitleFi: "Yhteisösi ansaitsee näkyvyyttä – ilman viestintäkuormaa",
      descriptionEn: "Lyyli helps keep fans and sponsors in the loop with continuous, automated communication.",
      descriptionFi: "Lyyli auttaa pitämään kannattajat ja sponsorit mukana automaattisen, jatkuvan viestinnän avulla."
    }
  ];

  const handleBookDemo = () => {
    navigate('/waitlist');
  };

  // Render desktop tabs or mobile accordion based on screen size
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
          {language === 'fi' ? 'Kenelle Lyyli sopii' : 'Who is Lyyli for'}
        </h2>

        {isMobile ? (
          <Accordion type="single" collapsible className="w-full">
            {audiences.map((audience) => (
              <AccordionItem key={audience.id} value={audience.id}>
                <AccordionTrigger className="text-xl font-medium">
                  {language === 'fi' ? audience.titleFi : audience.titleEn}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mb-3 text-primary font-medium">
                    {language === 'fi' ? audience.subtitleFi : audience.subtitleEn}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {language === 'fi' ? audience.descriptionFi : audience.descriptionEn}
                  </p>
                  <Button 
                    onClick={handleBookDemo}
                    className="w-full mt-2"
                  >
                    {language === 'fi' ? 'Varaa demo' : 'Book a demo'}
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
                {audiences.map((audience) => (
                  <TabsTrigger key={audience.id} value={audience.id} className="text-sm">
                    {language === 'fi' ? audience.titleFi : audience.titleEn}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {audiences.map((audience) => (
                <TabsContent key={audience.id} value={audience.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{language === 'fi' ? audience.titleFi : audience.titleEn}</CardTitle>
                      <CardDescription className="text-primary text-lg">
                        {language === 'fi' ? audience.subtitleFi : audience.subtitleEn}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {language === 'fi' ? audience.descriptionFi : audience.descriptionEn}
                      </p>
                      <Button onClick={handleBookDemo}>
                        {language === 'fi' ? 'Varaa demo' : 'Book a demo'}
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        )}
      </div>
    </section>
  );
};

export default TargetAudience;
