
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { type SegmentData } from './useSegmentsData';

interface SegmentItemProps {
  segment: SegmentData;
}

const SegmentItem: React.FC<SegmentItemProps> = ({ segment }) => {
  const { t } = useLanguage();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">{segment.name}</h3>
        
        {segment.description && (
          <p className="text-muted-foreground text-lg">{segment.description}</p>
        )}
        
        <div className="space-y-4">
          {segment.painPoints && segment.painPoints.length > 0 && (
            <div>
              <h4 className="text-lg font-medium mb-2">{t('customerSegments.challenges')}:</h4>
              <ul className="space-y-2">
                {segment.painPoints.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-red-500 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {segment.solutions && segment.solutions.length > 0 && (
            <div>
              <h4 className="text-lg font-medium mb-2">{t('customerSegments.solutions')}:</h4>
              <ul className="space-y-2">
                {segment.solutions.map((solution, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-green-500 font-bold">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <Link to={segment.caseStudyUrl || `/full/case-studies?segment=${segment.id}`}>
          <Button className="mt-4">
            {t('customerSegments.readCaseStudy')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      {segment.image && (
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <img 
            src={segment.image} 
            alt={segment.name}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      
      {segment.testimonial && (
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 md:col-span-2 mt-4">
          <blockquote className="text-lg italic mb-4">"{segment.testimonial.quote}"</blockquote>
          <div className="flex items-center gap-3">
            {segment.testimonial.avatar && (
              <img 
                src={segment.testimonial.avatar} 
                alt={segment.testimonial.author}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <div>
              <div className="font-medium">{segment.testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{segment.testimonial.company}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SegmentItem;
