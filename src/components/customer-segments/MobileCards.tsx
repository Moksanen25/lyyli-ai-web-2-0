
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
    <div 
      className="sm:hidden space-y-6 py-4 px-4" 
      aria-label="Customer segments for mobile devices"
    >
      {segments.map((segment, index) => (
        <div key={segment.id || `mobile-segment-${index}`}>
          <h3 className="sr-only">{segment.name}</h3>
          <SegmentCard 
            segment={segment} 
          />
        </div>
      ))}
    </div>
  );
};

export default MobileCards;
