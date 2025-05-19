
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
      name: 'customerSegments.techSMEs.name',
      icon: SegmentIcons.techSMEs,
      description: 'customerSegments.techSMEs.description',
      painPoints: [
        'customerSegments.techSMEs.painPoints.0',
        'customerSegments.techSMEs.painPoints.1',
        'customerSegments.techSMEs.painPoints.2',
      ],
      solutions: [
        'customerSegments.techSMEs.solutions.0',
        'customerSegments.techSMEs.solutions.1',
        'customerSegments.techSMEs.solutions.2',
      ],
      caseStudyUrl: '/full/case-studies/tech-smes',
      image: '/images/segments/tech-smes.webp',
      testimonial: {
        quote: 'customerSegments.techSMEs.quote',
        author: 'customerSegments.techSMEs.author',
        company: 'Acme Corp',
        avatar: '/images/avatars/avatar-1.webp',
      },
    },
    {
      id: 'consulting',
      name: 'customerSegments.consulting.name',
      icon: SegmentIcons.consulting,
      description: 'customerSegments.consulting.description',
      painPoints: [
        'customerSegments.consulting.painPoints.0',
        'customerSegments.consulting.painPoints.1',
        'customerSegments.consulting.painPoints.2',
      ],
      solutions: [
        'customerSegments.consulting.solutions.0',
        'customerSegments.consulting.solutions.1',
        'customerSegments.consulting.solutions.2',
      ],
      caseStudyUrl: '/full/case-studies/consulting',
      image: '/images/segments/consulting.webp',
      testimonial: {
        quote: 'customerSegments.consulting.quote',
        author: 'customerSegments.consulting.author',
        company: 'Consulting Firm',
        avatar: '/images/avatars/avatar-2.webp',
      },
    },
    {
      id: 'non-profits',
      name: 'customerSegments.nonprofits.name',
      icon: SegmentIcons.nonprofits,
      description: 'customerSegments.nonprofits.description',
      painPoints: [
        'customerSegments.nonprofits.painPoints.0',
        'customerSegments.nonprofits.painPoints.1',
        'customerSegments.nonprofits.painPoints.2',
      ],
      solutions: [
        'customerSegments.nonprofits.solutions.0',
        'customerSegments.nonprofits.solutions.1',
        'customerSegments.nonprofits.solutions.2',
      ],
      caseStudyUrl: '/full/case-studies/non-profits',
      image: '/images/segments/non-profits.webp',
      testimonial: {
        quote: 'customerSegments.nonprofits.quote',
        author: 'customerSegments.nonprofits.author',
        company: 'Charity Org',
        avatar: '/images/avatars/avatar-3.webp',
      },
    },
    {
      id: 'education',
      name: 'customerSegments.education.name',
      icon: SegmentIcons.education,
      description: 'customerSegments.education.description',
      painPoints: [
        'customerSegments.education.painPoints.0',
        'customerSegments.education.painPoints.1',
        'customerSegments.education.painPoints.2',
      ],
      solutions: [
        'customerSegments.education.solutions.0',
        'customerSegments.education.solutions.1',
        'customerSegments.education.solutions.2',
      ],
      caseStudyUrl: '/full/case-studies/education',
      image: '/images/segments/education.webp',
      testimonial: {
        quote: 'customerSegments.education.quote',
        author: 'customerSegments.education.author',
        company: 'School District',
        avatar: '/images/avatars/avatar-4.webp',
      },
    },
    {
      id: 'creative-agencies',
      name: 'customerSegments.creative.name',
      icon: SegmentIcons.creative,
      description: 'customerSegments.creative.description',
      painPoints: [
        'customerSegments.creative.painPoints.0',
        'customerSegments.creative.painPoints.1',
        'customerSegments.creative.painPoints.2',
      ],
      solutions: [
        'customerSegments.creative.solutions.0',
        'customerSegments.creative.solutions.1',
        'customerSegments.creative.solutions.2',
      ],
      caseStudyUrl: '/full/case-studies/creative-agencies',
      image: '/images/segments/creative-agencies.webp',
      testimonial: {
        quote: 'customerSegments.creative.quote',
        author: 'customerSegments.creative.author',
        company: 'Design Co',
        avatar: '/images/avatars/avatar-5.webp',
      },
    },
    {
      id: 'sports-organizations',
      name: 'customerSegments.sports.name',
      icon: SegmentIcons.sports,
      description: 'customerSegments.sports.description',
      painPoints: [
        'customerSegments.sports.painPoints.0',
        'customerSegments.sports.painPoints.1',
        'customerSegments.sports.painPoints.2',
      ],
      solutions: [
        'customerSegments.sports.solutions.0',
        'customerSegments.sports.solutions.1',
        'customerSegments.sports.solutions.2',
      ],
      caseStudyUrl: '/full/case-studies/sports-organizations',
      image: '/images/segments/sports-organizations.webp',
      testimonial: {
        quote: 'customerSegments.sports.quote',
        author: 'customerSegments.sports.author',
        company: 'Sports League',
        avatar: '/images/avatars/avatar-6.webp',
      },
    },
  ];
};
