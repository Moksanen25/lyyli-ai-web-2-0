
import { SegmentData } from '../types/segmentTypes';
import { SegmentIcons } from '../utils/segmentIcons';
import { createTestimonial, getTranslatedArray, getSegmentFallbackImage } from './segmentUtils';
import { defaultSegmentNames } from './segmentDefaults';

/**
 * Creates a single segment data object with translations
 * @param id Segment identifier
 * @param t Translation function
 * @returns Segment data object
 */
export const buildSegmentData = (id: string, t: (key: string) => string): SegmentData => {
  // Try different translation paths to be resilient
  const name = t(`customerSegments.segments.${id}.title`) || 
              t(`features.customerSegments.segments.${id}.title`) ||
              defaultSegmentNames[id as keyof typeof defaultSegmentNames] || id;
              
  const description = t(`customerSegments.segments.${id}.description`) || 
                     t(`features.customerSegments.segments.${id}.description`) ||
                     '';
  
  // Get arrays of pain points and solutions
  const painPoints = getTranslatedArray(id, 'painPoints', t);
  const solutions = getTranslatedArray(id, 'solutions', t);
  
  // Create testimonial data
  const testimonial = createTestimonial(id, t);
  
  // Get image with fallback
  const image = getSegmentFallbackImage(id);
  
  return {
    id,
    name,
    description,
    icon: SegmentIcons[id as keyof typeof SegmentIcons] || null,
    image,
    painPoints,
    solutions,
    testimonial
  };
};
