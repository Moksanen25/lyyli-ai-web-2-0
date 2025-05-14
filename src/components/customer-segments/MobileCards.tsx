
import React from 'react';
import SegmentCard from './SegmentCard';
import type { SegmentData } from './SegmentItem';

interface MobileCardsProps {
  segments: SegmentData[];
}

// Stable and robust component with safeguards
const MobileCards: React.FC<MobileCardsProps> = ({ segments }) => {
  // Make sure we have valid data
  if (!segments || !Array.isArray(segments)) {
    console.warn('MobileCards received invalid segments data:', segments);
    return null; // Render nothing if data is invalid
  }
  
  return (
    <div className="sm:hidden space-y-6 py-4">
      {segments.map((segment) => (
        <SegmentCard 
          key={segment.id || `segment-${Math.random().toString(36).substr(2, 9)}`} 
          segment={segment} 
        />
      ))}
    </div>
  );
};

export default MobileCards;
