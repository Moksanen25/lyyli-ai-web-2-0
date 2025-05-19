
import React from 'react';
import { SegmentIcons } from '../utils/segmentIcons';
import { SegmentData } from '../types/segmentTypes';

/**
 * Creates segment data objects with translations
 * @param t Translation function
 * @returns Array of segment data objects
 */
export const createSegmentsData = (t: (key: string) => string): SegmentData[] => {
  return [
    {
      id: 'tech-smes',
      name: t('customerSegments.techSMEs.name'),
      icon: SegmentIcons.techSMEs,
      description: t('customerSegments.techSMEs.description'),
      painPoints: [
        t('customerSegments.techSMEs.painPoints.0'),
        t('customerSegments.techSMEs.painPoints.1'),
        t('customerSegments.techSMEs.painPoints.2'),
      ],
      solutions: [
        t('customerSegments.techSMEs.solutions.0'),
        t('customerSegments.techSMEs.solutions.1'),
        t('customerSegments.techSMEs.solutions.2'),
      ],
      caseStudyUrl: '/full/case-studies/tech-smes',
      image: '/images/segments/tech-smes.webp',
      testimonial: {
        quote: t('customerSegments.techSMEs.quote'),
        author: t('customerSegments.techSMEs.author'),
        company: 'Acme Corp',
        avatar: '/images/avatars/avatar-1.webp',
      },
    },
    {
      id: 'consulting',
      name: t('customerSegments.consulting.name'),
      icon: SegmentIcons.consulting,
      description: t('customerSegments.consulting.description'),
      painPoints: [
        t('customerSegments.consulting.painPoints.0'),
        t('customerSegments.consulting.painPoints.1'),
        t('customerSegments.consulting.painPoints.2'),
      ],
      solutions: [
        t('customerSegments.consulting.solutions.0'),
        t('customerSegments.consulting.solutions.1'),
        t('customerSegments.consulting.solutions.2'),
      ],
      caseStudyUrl: '/full/case-studies/consulting',
      image: '/images/segments/consulting.webp',
      testimonial: {
        quote: t('customerSegments.consulting.quote'),
        author: t('customerSegments.consulting.author'),
        company: 'Consulting Firm',
        avatar: '/images/avatars/avatar-2.webp',
      },
    },
    {
      id: 'non-profits',
      name: t('customerSegments.nonprofits.name'),
      icon: SegmentIcons.nonprofits,
      description: t('customerSegments.nonprofits.description'),
      painPoints: [
        t('customerSegments.nonprofits.painPoints.0'),
        t('customerSegments.nonprofits.painPoints.1'),
        t('customerSegments.nonprofits.painPoints.2'),
      ],
      solutions: [
        t('customerSegments.nonprofits.solutions.0'),
        t('customerSegments.nonprofits.solutions.1'),
        t('customerSegments.nonprofits.solutions.2'),
      ],
      caseStudyUrl: '/full/case-studies/non-profits',
      image: '/images/segments/non-profits.webp',
      testimonial: {
        quote: t('customerSegments.nonprofits.quote'),
        author: t('customerSegments.nonprofits.author'),
        company: 'Charity Org',
        avatar: '/images/avatars/avatar-3.webp',
      },
    },
    {
      id: 'education',
      name: t('customerSegments.education.name'),
      icon: SegmentIcons.education,
      description: t('customerSegments.education.description'),
      painPoints: [
        t('customerSegments.education.painPoints.0'),
        t('customerSegments.education.painPoints.1'),
        t('customerSegments.education.painPoints.2'),
      ],
      solutions: [
        t('customerSegments.education.solutions.0'),
        t('customerSegments.education.solutions.1'),
        t('customerSegments.education.solutions.2'),
      ],
      caseStudyUrl: '/full/case-studies/education',
      image: '/images/segments/education.webp',
      testimonial: {
        quote: t('customerSegments.education.quote'),
        author: t('customerSegments.education.author'),
        company: 'School District',
        avatar: '/images/avatars/avatar-4.webp',
      },
    },
    {
      id: 'creative-agencies',
      name: t('customerSegments.creative.name'),
      icon: SegmentIcons.creative,
      description: t('customerSegments.creative.description'),
      painPoints: [
        t('customerSegments.creative.painPoints.0'),
        t('customerSegments.creative.painPoints.1'),
        t('customerSegments.creative.painPoints.2'),
      ],
      solutions: [
        t('customerSegments.creative.solutions.0'),
        t('customerSegments.creative.solutions.1'),
        t('customerSegments.creative.solutions.2'),
      ],
      caseStudyUrl: '/full/case-studies/creative-agencies',
      image: '/images/segments/creative-agencies.webp',
      testimonial: {
        quote: t('customerSegments.creative.quote'),
        author: t('customerSegments.creative.author'),
        company: 'Design Co',
        avatar: '/images/avatars/avatar-5.webp',
      },
    },
    {
      id: 'sports-organizations',
      name: t('customerSegments.sports.name'),
      icon: SegmentIcons.sports,
      description: t('customerSegments.sports.description'),
      painPoints: [
        t('customerSegments.sports.painPoints.0'),
        t('customerSegments.sports.painPoints.1'),
        t('customerSegments.sports.painPoints.2'),
      ],
      solutions: [
        t('customerSegments.sports.solutions.0'),
        t('customerSegments.sports.solutions.1'),
        t('customerSegments.sports.solutions.2'),
      ],
      caseStudyUrl: '/full/case-studies/sports-organizations',
      image: '/images/segments/sports-organizations.webp',
      testimonial: {
        quote: t('customerSegments.sports.quote'),
        author: t('customerSegments.sports.author'),
        company: 'Sports League',
        avatar: '/images/avatars/avatar-6.webp',
      },
    },
  ];
};
