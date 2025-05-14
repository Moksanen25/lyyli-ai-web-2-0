
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';
import { ensureArray } from './utils';

export interface SegmentQuote {
  text: string;
  author: string;
}

export interface SegmentData {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  painPoints: string[] | string;
  solutions: string[] | string;
  quote: SegmentQuote | { text: string; author: string } | { [key: string]: string };
}

interface SegmentItemProps {
  segment: SegmentData;
}

const SegmentItem: React.FC<SegmentItemProps> = ({ segment }) => {
  const { t } = useLanguage();
  
  // Safety check - don't render if segment data is invalid
  if (!segment || typeof segment !== 'object') {
    console.warn('SegmentItem received invalid segment data:', segment);
    return null;
  }
  
  try {
    // Ensure painPoints and solutions are always arrays
    const painPoints = ensureArray(segment.painPoints || []);
    const solutions = ensureArray(segment.solutions || []);
    
    // Safely handle the quote object
    let quoteText = '';
    let quoteAuthor = '';
    
    if (typeof segment.quote === 'string') {
      quoteText = segment.quote;
    } else if (segment.quote && typeof segment.quote === 'object') {
      quoteText = (segment.quote as any).text || '';
      quoteAuthor = (segment.quote as any).author || '';
    }
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto py-4">
        <div>
          <div className="flex items-center mb-8">
            <span className="text-primary mr-4 flex-shrink-0">
              {segment.icon}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold">{segment.name}</h3>
          </div>
          <p className="text-lg mb-10 text-muted-foreground leading-relaxed">
            {segment.description}
          </p>
          
          <div className="mb-10">
            <h4 className="font-semibold mb-5 text-primary text-lg">{t('customerSegments.challenges')}</h4>
            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-primary/10 text-primary p-1.5 rounded-full mr-3.5 mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </span>
                  <span className="text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h4 className="font-semibold mb-5 text-primary text-lg">{t('customerSegments.solutions')}</h4>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-primary/10 text-primary p-1.5 rounded-full mr-3.5 mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                  <span className="text-base">{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button className="bg-primary hover:bg-primary/90 mt-2 px-6 py-2 h-auto text-base">{t('customerSegments.bookDemoButton')}</Button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <Card className="border-none shadow-none">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">{t('customerSegments.successStory')}</CardTitle>
              <CardDescription className="mt-1">How Lyyli transforms communication workflows</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <blockquote className="border-l-4 border-primary/30 pl-5 italic py-1 text-lg">
                "{quoteText}"
              </blockquote>
              <p className="text-right mt-6 text-sm font-medium">— {quoteAuthor}</p>
              
              <SegmentFeatures />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering SegmentItem:', error);
    return (
      <div className="text-center p-8 bg-red-50 rounded-lg">
        <p className="text-red-600">There was an error displaying this segment.</p>
      </div>
    );
  }
};

const SegmentFeatures: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-10 pt-6 border-t">
      <h4 className="font-medium mb-6 text-lg">{t('customerSegments.keyFeatures')}</h4>
      <div className="grid grid-cols-2 gap-6">
        <FeatureIcon 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
          text={t('customerSegments.voiceAI')}
        />
        <FeatureIcon 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-slack text-primary"><rect width="3" height="8" x="13" y="2" rx="1.5"/><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 22 8.5"/><rect width="3" height="8" x="8" y="14" rx="1.5"/><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 2 15.5"/><rect width="8" height="3" x="14" y="13" rx="1.5"/><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"/><rect width="8" height="3" x="2" y="8" rx="1.5"/><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"/></svg>}
          text={t('customerSegments.slackIntegration')}
        />
        <FeatureIcon 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M7 8h10"/><path d="M7 12h4"/></svg>}
          text={t('customerSegments.contentTemplates')}
        />
        <FeatureIcon 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-teams text-primary"><path d="M17 20H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4Z"/><circle cx="12" cy="10" r="3"/><path d="M12 13v4"/><path d="m8 15 8-5"/><path d="m8 9 8 5"/></svg>}
          text={t('customerSegments.teamsIntegration')}
        />
      </div>
    </div>
  );
};

const FeatureIcon: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3.5 flex-shrink-0">
      {icon}
    </div>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

export default SegmentItem;
