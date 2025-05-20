
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
  
  // Translate directly here instead of passing keys
  const name = t(segment.name) || segment.name;
  const description = t(segment.description || '') || segment.description || '';
  
  // Handle potentially undefined arrays safely and translate each item
  const painPoints = (segment.painPoints || []).map(point => t(point) || point);
  const solutions = (segment.solutions || []).map(solution => t(solution) || solution);
  
  // Testimonial translations if present
  const testimonial = segment.testimonial ? {
    ...segment.testimonial,
    quote: t(segment.testimonial.quote) || segment.testimonial.quote,
    author: t(segment.testimonial.author) || segment.testimonial.author,
    company: segment.testimonial.company
  } : null;
  
  // Construct proper URL based on current language
  const caseStudyUrl = segment.caseStudyUrl 
    ? (language === 'fi' ? `/fi${segment.caseStudyUrl}` : segment.caseStudyUrl)
    : (language === 'fi' ? `/fi/full/case-studies?segment=${segment.id}` : `/full/case-studies?segment=${segment.id}`);
  
  // Ensure we're using a valid image URL or fallback
  const imageUrl = segment.image && typeof segment.image === 'string' && !segment.image.includes('customerSegments') 
    ? segment.image 
    : '/placeholder.svg';
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">{name}</h3>
        
        {description && (
          <p className="text-muted-foreground text-lg">{description}</p>
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
          src={imageUrl} 
          alt={name}
          fallbackSrc="/placeholder.svg"
          className="object-cover w-full h-full"
        />
      </div>
      
      {testimonial && testimonial.quote && (
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 md:col-span-2 mt-4">
          <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
          <div className="flex items-center gap-3">
            {testimonial.avatar && (
              <ImageWithFallback
                src={testimonial.avatar} 
                alt={testimonial.author || ''}
                fallbackSrc="/placeholder.svg"
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
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
