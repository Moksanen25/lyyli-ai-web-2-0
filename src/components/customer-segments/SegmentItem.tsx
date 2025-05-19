import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

interface Solution {
  title: string;
  description: string;
}

interface Challenge {
  title: string;
  description: string;
}

interface SegmentItemProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  challenges: Challenge[] | Challenge;
  solutions: Solution[] | Solution;
  active?: boolean;
  showFull?: boolean;
}

const ensureArray = <T,>(item: T | T[]): T[] => {
  return Array.isArray(item) ? item : [item];
};

const SegmentItem: React.FC<SegmentItemProps> = ({
  id,
  title,
  description,
  icon,
  challenges,
  solutions,
  active = false,
  showFull = false,
}) => {
  // Convert to arrays if needed
  const challengesArray = ensureArray(challenges);
  const solutionsArray = ensureArray(solutions);
  
  const { t } = useLanguage();
  
  return (
    <TabsContent value={id} className="space-y-4">
      <Card className="border-none">
        <CardHeader>
          <CardTitle className="flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <h4 className="font-bold">{t('customerSegments.challenges')}</h4>
            <ul className="list-disc pl-5">
              {challengesArray.map((challenge, index) => (
                <li key={index}>
                  <p className="font-medium">{challenge.title}</p>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold">{t('customerSegments.solutions')}</h4>
            <ul className="list-disc pl-5">
              {solutionsArray.map((solution, index) => (
                <li key={index}>
                  <p className="font-medium">{solution.title}</p>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default SegmentItem;
