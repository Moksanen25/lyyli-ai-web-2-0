
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { type SegmentData } from './useSegmentsData';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';

interface SegmentCardProps {
  segment: SegmentData;
}

const SegmentCard: React.FC<SegmentCardProps> = ({ segment }) => {
  const { t, language, customerSegmentsT } = useLanguage();
  
  // Get the segment properties directly
  const name = segment.name || '';
  const description = segment.description || '';
  const painPoints = segment.painPoints || [];
  const solutions = segment.solutions || [];
  
  // Construct proper URL based on current language
  const caseStudyUrl = segment.caseStudyUrl 
    ? (language === 'fi' ? `/fi${segment.caseStudyUrl}` : segment.caseStudyUrl)
    : (language === 'fi' ? `/fi/full/case-studies?segment=${segment.id}` : `/full/case-studies?segment=${segment.id}`);
  
  return (
    <Card className="h-full flex flex-col border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        {segment.icon && <div className="w-8 h-8 text-primary">{segment.icon}</div>}
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="mb-4">
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
        
        <div className="space-y-4 flex-grow">
          {painPoints && painPoints.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">{customerSegmentsT('challenges') || 'Challenges'}:</h4>
              <ul className="space-y-1">
                {painPoints.slice(0, 3).map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-red-500">•</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {solutions && solutions.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">{customerSegmentsT('solutions') || 'Solutions'}:</h4>
              <ul className="space-y-1">
                {solutions.slice(0, 3).map((solution, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-green-500">•</span> {solution}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="mt-auto pt-4">
          <Link to={caseStudyUrl}>
            <Button variant="ghost" className="w-full justify-between">
              {customerSegmentsT('learnMoreButton') || 'Learn More'}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SegmentCard;
