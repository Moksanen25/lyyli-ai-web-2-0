
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

export interface SegmentQuote {
  text: string;
  author: string;
}

export interface SegmentData {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  painPoints: string[];
  solutions: string[];
  quote: SegmentQuote;
}

interface SegmentItemProps {
  segment: SegmentData;
}

const SegmentItem: React.FC<SegmentItemProps> = ({ segment }) => {
  const { t } = useLanguage();
  
  return (
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
            
            <SegmentFeatures />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const SegmentFeatures: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-8 pt-4 border-t">
      <h4 className="font-medium mb-3">{t('customerSegments.keyFeatures')}</h4>
      <div className="grid grid-cols-2 gap-3">
        <FeatureIcon 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
          text={t('customerSegments.voiceAI')}
        />
        <FeatureIcon 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-slack text-primary"><rect width="3" height="8" x="13" y="2" rx="1.5"/><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 22 8.5"/><rect width="3" height="8" x="8" y="14" rx="1.5"/><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 2 15.5"/><rect width="8" height="3" x="14" y="13" rx="1.5"/><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"/><rect width="8" height="3" x="2" y="8" rx="1.5"/><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"/></svg>}
          text={t('customerSegments.slackIntegration')}
        />
        <FeatureIcon 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M7 8h10"/><path d="M7 12h4"/></svg>}
          text={t('customerSegments.contentTemplates')}
        />
        <FeatureIcon 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-teams text-primary"><path d="M17 20H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4Z"/><circle cx="12" cy="10" r="3"/><path d="M12 13v4"/><path d="m8 15 8-5"/><path d="m8 9 8 5"/></svg>}
          text={t('customerSegments.teamsIntegration')}
        />
      </div>
    </div>
  );
};

const FeatureIcon: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center">
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2">
      {icon}
    </div>
    <span className="text-sm">{text}</span>
  </div>
);

export default SegmentItem;
