
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { type SegmentData } from './useSegmentsData';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';

interface SegmentItemProps {
  segment: SegmentData;
}

const SegmentItem: React.FC<SegmentItemProps> = ({ segment }) => {
  const { t, language, customerSegmentsT } = useLanguage();
  
  // Handle potentially undefined arrays safely
  const painPoints = (segment.painPoints || []);
  const solutions = (segment.solutions || []);
  
  // Testimonial data
  const testimonial = segment.testimonial;
  
  // Construct proper URL based on current language
  const caseStudyUrl = segment.caseStudyUrl 
    ? (language === 'fi' ? `/fi${segment.caseStudyUrl}` : segment.caseStudyUrl)
    : (language === 'fi' ? `/fi/full/case-studies?segment=${segment.id}` : `/full/case-studies?segment=${segment.id}`);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">{segment.name}</h3>
        
        {segment.description && (
          <p className="text-muted-foreground text-lg">{segment.description}</p>
        )}
        
        <div className="space-y-4">
          {painPoints && painPoints.length > 0 && (
            <div>
              <h4 className="text-lg font-medium mb-2">{customerSegmentsT('challenges') || 'Challenges'}:</h4>
              <ul className="space-y-2">
                {painPoints.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-red-500 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {solutions && solutions.length > 0 && (
            <div>
              <h4 className="text-lg font-medium mb-2">{customerSegmentsT('solutions') || 'Solutions'}:</h4>
              <ul className="space-y-2">
                {solutions.map((solution, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-green-500 font-bold">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <Link to={caseStudyUrl}>
          <Button className="mt-4">
            {customerSegmentsT('readCaseStudy') || 'Read Case Study'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <ImageWithFallback 
          src={segment.image || ''} 
          alt={segment.name}
          fallbackSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
          className="object-cover w-full h-full"
        />
      </div>
      
      {testimonial && testimonial.quote && (
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 md:col-span-2 mt-4">
          <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {testimonial.author?.charAt(0) || '?'}
            </div>
            <div>
              <div className="font-medium">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{testimonial.company || ''}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SegmentItem;
