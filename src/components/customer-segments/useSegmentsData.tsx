
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Building, 
  Briefcase, 
  HandHelping, 
  School, 
  PenTool, 
  Users 
} from 'lucide-react';
import type { SegmentData } from './SegmentItem';
import { ensureArray } from './utils';

export const useSegmentsData = (): SegmentData[] => {
  console.log('useSegmentsData hook called');
  const { t } = useLanguage();
  
  const iconSize = { width: 28, height: 28 };
  
  try {
    console.log('Building segments data with translations');
    
    // Safely create a segment object with fallbacks for missing translations
    const createSegment = (id: string, iconComponent: React.ReactNode): SegmentData => {
      try {
        const segmentTranslationBase = `customerSegments.${id}`;
        const name = t(`${segmentTranslationBase}.name`) || id;
        const description = t(`${segmentTranslationBase}.description`) || '';
        const painPoints = ensureArray(t(`${segmentTranslationBase}.painPoints`));
        const solutions = ensureArray(t(`${segmentTranslationBase}.solutions`));
        const quoteText = t(`${segmentTranslationBase}.quote`) || '';
        const author = t(`${segmentTranslationBase}.author`) || '';
        
        console.log(`Created segment ${id} with name: ${name}`);
        
        return {
          id,
          name,
          icon: iconComponent,
          description,
          painPoints,
          solutions,
          quote: {
            text: quoteText,
            author
          }
        };
      } catch (error) {
        console.error(`Error creating segment ${id}:`, error);
        return {
          id,
          name: id,
          icon: iconComponent,
          description: `Error loading segment: ${id}`,
          painPoints: [],
          solutions: [],
          quote: {
            text: '',
            author: ''
          }
        };
      }
    };
    
    const segments = [
      createSegment("tech-smes", <Building className="h-7 w-7 text-primary" {...iconSize} />),
      createSegment("consulting", <Briefcase className="h-7 w-7 text-primary" {...iconSize} />),
      createSegment("nonprofits", <HandHelping className="h-7 w-7 text-primary" {...iconSize} />),
      createSegment("education", <School className="h-7 w-7 text-primary" {...iconSize} />),
      createSegment("creative", <PenTool className="h-7 w-7 text-primary" {...iconSize} />),
      createSegment("sports", <Users className="h-7 w-7 text-primary" {...iconSize} />)
    ];
    
    console.log('Successfully generated segments data:', segments.length);
    return segments;
  } catch (error) {
    console.error('Error in useSegmentsData:', error);
    // Return a safe fallback to prevent white screen
    return [];
  }
};
