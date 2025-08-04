'use client';


import { useMemo } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { createSegmentsData } from './data/segmentsData';
import { type SegmentData, type SegmentsHookReturn } from './types/segmentTypes';

// Re-export the SegmentData type for components that use this hook
export type { SegmentData } from './types/segmentTypes';

/**
 * Custom hook to provide segment data with proper translations
 * @returns Object with segments array and utility functions
 */
export const useSegmentsData = (): SegmentsHookReturn => {
  const { t } = useLanguage();
  
  const segments = useMemo<SegmentData[]>(() => {
    console.log('Generating segments data with translations');
    return createSegmentsData(t);
  }, [t]);
  
  return {
    segments,
    getSegmentById: (id: string) => segments.find(segment => segment.id === id),
  };
};
