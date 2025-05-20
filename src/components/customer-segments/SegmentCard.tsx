
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
  const { t, language, customerSegmentsT, safeTr } = useLanguage();
  
  // Try multiple translation approaches for maximum reliability
  const getName = () => {
    // First try direct translation (most specific)
    const direct = t(segment.name);
    if (direct && direct !== segment.name) return direct;
    
    // Next try with customerSegments prefix
    const withPrefix = segment.name.includes('.') ? 
      t(segment.name) : 
      t(`customerSegments.${segment.name}`);
    if (withPrefix && withPrefix !== `customerSegments.${segment.name}`) return withPrefix;
    
    // Next try customerSegmentsT helper
    const fromHelper = customerSegmentsT(segment.name);
    if (fromHelper && fromHelper !== segment.name) return fromHelper;
    
    // Next try features prefix (sometimes segment data comes from features)
    const featuresPrefix = t(`features.customerSegments.segments.${segment.id}.title`);
    if (featuresPrefix && !featuresPrefix.includes('features.customerSegments')) return featuresPrefix;
    
    // Finally fall back to the original name or a default
    return segment.name || `Segment ${segment.id}`;
  };
  
  const getDescription = () => {
    if (!segment.description) return '';
    
    // Try similar multiple approaches for description
    const direct = t(segment.description);
    if (direct && direct !== segment.description) return direct;
    
    const withPrefix = segment.description.includes('.') ?
      t(segment.description) :
      t(`customerSegments.${segment.description}`);
    if (withPrefix && withPrefix !== `customerSegments.${segment.description}`) return withPrefix;
    
    const fromHelper = customerSegmentsT(segment.description);
    if (fromHelper && fromHelper !== segment.description) return fromHelper;
    
    const featuresPrefix = t(`features.customerSegments.segments.${segment.id}.description`);
    if (featuresPrefix && !featuresPrefix.includes('features.customerSegments')) return featuresPrefix;
    
    return segment.description;
  };
  
  const name = getName();
  const description = getDescription();
  
  // Translate the pain points and solutions with fallbacks
  const translateItem = (item: string) => {
    const translated = t(item) || customerSegmentsT(item) || item;
    return translated !== item ? translated : item;
  };
  
  const painPoints = (segment.painPoints || []).map(translateItem);
  const solutions = (segment.solutions || []).map(translateItem);
  
  // Construct proper URL based on current language
  const caseStudyUrl = segment.caseStudyUrl 
    ? (language === 'fi' ? `/fi${segment.caseStudyUrl}` : segment.caseStudyUrl)
    : (language === 'fi' ? `/fi/full/case-studies?segment=${segment.id}` : `/full/case-studies?segment=${segment.id}`);
  
  // Use safe translations for UI elements with fallbacks
  const challengesLabel = safeTr('customerSegments.challenges', 'Challenges');
  const solutionsLabel = safeTr('customerSegments.solutions', 'Solutions');
  const learnMoreButton = safeTr('customerSegments.learnMoreButton', 'Learn More');
  
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
              <h4 className="font-medium mb-2">{challengesLabel}:</h4>
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
              <h4 className="font-medium mb-2">{solutionsLabel}:</h4>
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
              {learnMoreButton}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SegmentCard;
