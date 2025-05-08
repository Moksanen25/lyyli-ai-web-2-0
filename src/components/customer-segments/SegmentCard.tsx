
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SegmentData } from './SegmentItem';
import { ensureArray } from './utils';

interface SegmentCardProps {
  segment: SegmentData;
}

const SegmentCard: React.FC<SegmentCardProps> = ({ segment }) => {
  const { t } = useLanguage();
  
  // Ensure painPoints and solutions are always arrays
  const painPoints = ensureArray(segment.painPoints);
  const solutions = ensureArray(segment.solutions);
  
  return (
    <Card className="overflow-hidden">
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
            {painPoints.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary mr-1">•</span> {point}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-5">
          <h4 className="font-semibold text-sm text-primary mb-2">{t('customerSegments.solutions')}</h4>
          <ul className="space-y-1 text-sm">
            {solutions.map((solution, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary mr-1">•</span> {solution}
              </li>
            ))}
          </ul>
        </div>

        <Button size="sm" className="w-full mt-2">{t('customerSegments.learnMoreButton')}</Button>
      </CardContent>
    </Card>
  );
};

export default SegmentCard;
