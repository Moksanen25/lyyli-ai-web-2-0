
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ensureArray } from './utils';
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
  const { t } = useLanguage();
  
  return [
    {
      id: "tech-smes",
      name: t('customerSegments.techSMEs.name'),
      icon: <Building className="h-10 w-10 text-primary" />,
      description: t('customerSegments.techSMEs.description'),
      painPoints: ensureArray(t('customerSegments.techSMEs.painPoints')),
      solutions: ensureArray(t('customerSegments.techSMEs.solutions')),
      quote: {
        text: t('customerSegments.techSMEs.quote'),
        author: t('customerSegments.techSMEs.author')
      }
    },
    {
      id: "consulting",
      name: t('customerSegments.consulting.name'),
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      description: t('customerSegments.consulting.description'),
      painPoints: ensureArray(t('customerSegments.consulting.painPoints')),
      solutions: ensureArray(t('customerSegments.consulting.solutions')),
      quote: {
        text: t('customerSegments.consulting.quote'),
        author: t('customerSegments.consulting.author')
      }
    },
    {
      id: "nonprofits",
      name: t('customerSegments.nonprofits.name'),
      icon: <HandHelping className="h-10 w-10 text-primary" />,
      description: t('customerSegments.nonprofits.description'),
      painPoints: ensureArray(t('customerSegments.nonprofits.painPoints')),
      solutions: ensureArray(t('customerSegments.nonprofits.solutions')),
      quote: {
        text: t('customerSegments.nonprofits.quote'),
        author: t('customerSegments.nonprofits.author')
      }
    },
    {
      id: "education",
      name: t('customerSegments.education.name'),
      icon: <School className="h-10 w-10 text-primary" />,
      description: t('customerSegments.education.description'),
      painPoints: ensureArray(t('customerSegments.education.painPoints')),
      solutions: ensureArray(t('customerSegments.education.solutions')),
      quote: {
        text: t('customerSegments.education.quote'),
        author: t('customerSegments.education.author')
      }
    },
    {
      id: "creative",
      name: t('customerSegments.creative.name'),
      icon: <PenTool className="h-10 w-10 text-primary" />,
      description: t('customerSegments.creative.description'),
      painPoints: ensureArray(t('customerSegments.creative.painPoints')),
      solutions: ensureArray(t('customerSegments.creative.solutions')),
      quote: {
        text: t('customerSegments.creative.quote'),
        author: t('customerSegments.creative.author')
      }
    },
    {
      id: "sports",
      name: t('customerSegments.sports.name'),
      icon: <Users className="h-10 w-10 text-primary" />,
      description: t('customerSegments.sports.description'),
      painPoints: ensureArray(t('customerSegments.sports.painPoints')),
      solutions: ensureArray(t('customerSegments.sports.solutions')),
      quote: {
        text: t('customerSegments.sports.quote'),
        author: t('customerSegments.sports.author')
      }
    }
  ];
};
