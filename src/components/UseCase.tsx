
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UseCase = () => {
  const { language } = useLanguage();

  // Use case data with translations for both languages
  const useCases = [
    {
      id: "slack-social",
      titleEn: "Slack + Social Media",
      titleFi: "Slack + Sosiaalinen media",
      descriptionEn: "Lyyli scans Slack conversations and suggests content snippets. You can edit and schedule them directly to LinkedIn or Instagram.",
      descriptionFi: "Lyyli lukee Slack-keskusteluja ja ehdottaa sisällöiksi sopivia nostoja. Ne voi muokata ja ajastaa suoraan LinkedIniin tai Instagramiin."
    },
    {
      id: "teams-newsletter",
      titleEn: "Teams + Newsletter",
      titleFi: "Teams + Uutiskirje",
      descriptionEn: "Internal discussions are turned into weekly summaries or newsletters. Lyyli suggests headlines and takes care of publishing.",
      descriptionFi: "Teamsin viestit muuttuvat viikkokoosteiksi tai uutiskirjeiksi. Lyyli ehdottaa otsikoita ja julkaisee automaattisesti."
    },
    {
      id: "news-website",
      titleEn: "News + Website",
      titleFi: "Ajankohtaista + Verkkosivut",
      descriptionEn: "Lyyli automatically updates your website with current content—multilingual support included.",
      descriptionFi: "Lyyli julkaisee verkkosivuille ajankohtaisia sisältöjä automaattisesti – kieliversiot mukaan lukien."
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
          {language === 'fi' ? 'Näin Lyyli toimii eri ympäristöissä' : 'How Lyyli works in real use'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <Card key={useCase.id} className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">
                  {language === 'fi' ? useCase.titleFi : useCase.titleEn}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'fi' ? useCase.descriptionFi : useCase.descriptionEn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCase;
