
import React from 'react';
import SegmentCard from './SegmentCard';
import type { SegmentData } from './SegmentItem';

interface MobileCardsProps {
  segments: SegmentData[];
}

// Simplified component with stable rendering
const MobileCards = ({ segments }: MobileCardsProps) => {
  // Simple render with explicit keys
  return (
    <div className="sm:hidden space-y-6 py-4">
      {segments.length > 0 && segments.map((segment) => (
        <SegmentCard 
          key={segment.id || Math.random().toString(36)} 
          segment={segment} 
        />
      ))}
    </div>
  );
};

export default MobileCards;
