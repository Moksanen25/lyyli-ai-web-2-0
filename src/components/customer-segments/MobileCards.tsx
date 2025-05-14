
import React from 'react';
import SegmentCard from './SegmentCard';
import type { SegmentData } from './SegmentItem';

interface MobileCardsProps {
  segments: SegmentData[];
}

const MobileCards: React.FC<MobileCardsProps> = ({ segments }) => {
  return (
    <div className="sm:hidden space-y-6">
      {segments.map((segment, index) => (
        <SegmentCard key={index} segment={segment} />
      ))}
    </div>
  );
};

export default MobileCards;
