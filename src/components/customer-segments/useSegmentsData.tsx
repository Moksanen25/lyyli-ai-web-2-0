
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

export const useSegmentsData = (): SegmentData[] => {
  console.log('useSegmentsData hook called');
  const { t } = useLanguage();
  
  const iconSize = { width: 28, height: 28 };
  
  try {
    console.log('Building segments data with translations');
    const segments = [
      {
        id: "tech-smes",
        name: t('customerSegments.techSMEs.name'),
        icon: <Building className="h-7 w-7 text-primary" {...iconSize} />,
        description: t('customerSegments.techSMEs.description'),
        painPoints: t('customerSegments.techSMEs.painPoints'),
        solutions: t('customerSegments.techSMEs.solutions'),
        quote: {
          text: t('customerSegments.techSMEs.quote'),
          author: t('customerSegments.techSMEs.author')
        }
      },
      {
        id: "consulting",
        name: t('customerSegments.consulting.name'),
        icon: <Briefcase className="h-7 w-7 text-primary" {...iconSize} />,
        description: t('customerSegments.consulting.description'),
        painPoints: t('customerSegments.consulting.painPoints'),
        solutions: t('customerSegments.consulting.solutions'),
        quote: {
          text: t('customerSegments.consulting.quote'),
          author: t('customerSegments.consulting.author')
        }
      },
      {
        id: "nonprofits",
        name: t('customerSegments.nonprofits.name'),
        icon: <HandHelping className="h-7 w-7 text-primary" {...iconSize} />,
        description: t('customerSegments.nonprofits.description'),
        painPoints: t('customerSegments.nonprofits.painPoints'),
        solutions: t('customerSegments.nonprofits.solutions'),
        quote: {
          text: t('customerSegments.nonprofits.quote'),
          author: t('customerSegments.nonprofits.author')
        }
      },
      {
        id: "education",
        name: t('customerSegments.education.name'),
        icon: <School className="h-7 w-7 text-primary" {...iconSize} />,
        description: t('customerSegments.education.description'),
        painPoints: t('customerSegments.education.painPoints'),
        solutions: t('customerSegments.education.solutions'),
        quote: {
          text: t('customerSegments.education.quote'),
          author: t('customerSegments.education.author')
        }
      },
      {
        id: "creative",
        name: t('customerSegments.creative.name'),
        icon: <PenTool className="h-7 w-7 text-primary" {...iconSize} />,
        description: t('customerSegments.creative.description'),
        painPoints: t('customerSegments.creative.painPoints'),
        solutions: t('customerSegments.creative.solutions'),
        quote: {
          text: t('customerSegments.creative.quote'),
          author: t('customerSegments.creative.author')
        }
      },
      {
        id: "sports",
        name: t('customerSegments.sports.name'),
        icon: <Users className="h-7 w-7 text-primary" {...iconSize} />,
        description: t('customerSegments.sports.description'),
        painPoints: t('customerSegments.sports.painPoints'),
        solutions: t('customerSegments.sports.solutions'),
        quote: {
          text: t('customerSegments.sports.quote'),
          author: t('customerSegments.sports.author')
        }
      }
    ];
    
    console.log('Successfully generated segments data:', segments.length);
    return segments;
  } catch (error) {
    console.error('Error in useSegmentsData:', error);
    // Return a safe fallback to prevent white screen
    return [];
  }
};
