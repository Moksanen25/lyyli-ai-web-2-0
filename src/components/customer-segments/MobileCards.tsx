
import React from 'react';
import SegmentCard from './SegmentCard';
import type { SegmentData } from './SegmentItem';

interface MobileCardsProps {
  segments: SegmentData[];
}

const MobileCards: React.FC<MobileCardsProps> = ({ segments }) => {
  // Use a stable rendering approach with fixed keys based on ID
  return (
    <div className="sm:hidden space-y-6 py-4">
      {segments.map((segment, index) => (
        <SegmentCard 
          key={`mobile-segment-${segment.id || index}`} 
          segment={segment} 
        />
      ))}
    </div>
  );
};

export default MobileCards;
