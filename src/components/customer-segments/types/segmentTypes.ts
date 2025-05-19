
import React from 'react';

// Define proper SegmentData interface for customer segments
export interface SegmentData {
  id: string;
  name: string;
  icon?: React.ReactNode;
  description?: string;
  painPoints: string[];
  solutions: string[];
  caseStudyUrl?: string;
  image?: string;
  testimonial?: {
    quote: string;
    author: string;
    company: string;
    avatar?: string;
  };
}

// Export type for the hook return value
export interface SegmentsHookReturn {
  segments: SegmentData[];
  getSegmentById: (id: string) => SegmentData | undefined;
}
