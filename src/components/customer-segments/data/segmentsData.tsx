
import React from 'react';
import { SegmentIcons } from '../utils/segmentIcons';
import { SegmentData } from '../types/segmentTypes';

/**
 * Creates segment data objects with translations
 * @param t Translation function
 * @returns Array of segment data objects
 */
export const createSegmentsData = (t: (key: string) => string): SegmentData[] => {
  // Helper to get segment data with proper translation paths
  const getSegmentData = (id: string, defaultName: string) => {
    // Try different translation paths to be resilient
    const name = t(`customerSegments.segments.${id}.title`) || 
                t(`features.customerSegments.segments.${id}.title`) ||
                defaultName;
                
    const description = t(`customerSegments.segments.${id}.description`) || 
                       t(`features.customerSegments.segments.${id}.description`) ||
                       '';
                       
    // Get segment-specific data
    return {
      id,
      name,
      description,
      icon: SegmentIcons[id] || null,
      image: `/images/segments/${id}.webp`,
      painPoints: [
        t(`customerSegments.segments.${id}.painPoints.0`) || '',
        t(`customerSegments.segments.${id}.painPoints.1`) || '',
        t(`customerSegments.segments.${id}.painPoints.2`) || ''
      ].filter(Boolean),
      solutions: [
        t(`customerSegments.segments.${id}.solutions.0`) || '',
        t(`customerSegments.segments.${id}.solutions.1`) || '',
        t(`customerSegments.segments.${id}.solutions.2`) || ''
      ].filter(Boolean),
      testimonial: {
        quote: t(`customerSegments.segments.${id}.quote`) || 
              t(`features.customerSegments.segments.${id}.quote`) || '',
        author: t(`customerSegments.segments.${id}.author`) || 
               t(`features.customerSegments.segments.${id}.author`) || '',
        company: id === 'tech' ? 'Tech Corp' : 
                id === 'consulting' ? 'Consulting Firm' :
                id === 'nonprofit' ? 'Charity Org' :
                id === 'education' ? 'University' :
                id === 'creative' ? 'Design Studio' :
                id === 'sports' ? 'Sports League' : '',
      }
    };
  };

  return [
    {
      ...getSegmentData('tech', 'Technology Companies'),
      id: 'tech',
      // Use unsplash fallback images that will always work
      image: 'https://images.unsplash.com/photo-1581092921461-eab10380bdba?auto=format&fit=crop&q=80&w=800'
    },
    {
      ...getSegmentData('consulting', 'Consulting Firms'),
      id: 'consulting',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    },
    {
      ...getSegmentData('nonprofit', 'Nonprofit Organizations'),
      id: 'nonprofit',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800'
    },
    {
      ...getSegmentData('education', 'Educational Institutions'),
      id: 'education',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'
    },
    {
      ...getSegmentData('creative', 'Creative Industries'),
      id: 'creative',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=800'
    },
    {
      ...getSegmentData('sports', 'Sports Organizations'),
      id: 'sports',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800'
    }
  ];
};
