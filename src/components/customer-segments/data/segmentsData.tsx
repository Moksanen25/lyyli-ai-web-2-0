
import { SegmentData } from '../types/segmentTypes';
import { buildSegmentData } from './segmentBuilder';

/**
 * Creates segment data objects with translations
 * @param t Translation function
 * @returns Array of segment data objects
 */
export const createSegmentsData = (t: (key: string) => string): SegmentData[] => {
  // Define segment IDs to process
  const segmentIds = ['tech', 'consulting', 'nonprofit', 'creative', 'sports'];
  
  // Build segment data for each ID
  return segmentIds.map(id => buildSegmentData(id, t));
};
