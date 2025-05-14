
import React from 'react';
import SegmentCard from './SegmentCard';
import type { SegmentData } from './SegmentItem';

interface MobileCardsProps {
  segments: SegmentData[];
}

// Making this component as simple and stable as possible with no internal state
const MobileCards: React.FC<MobileCardsProps> = ({ segments }) => {
  return (
    <div className="sm:hidden space-y-6 py-4">
      {segments.map((segment) => (
        <SegmentCard 
          key={segment.id} 
          segment={segment} 
        />
      ))}
    </div>
  );
};

// Using React.memo to prevent unnecessary re-renders
export default React.memo(MobileCards);
