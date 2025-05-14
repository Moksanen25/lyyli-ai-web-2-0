
import React from 'react';
import SegmentCard from './SegmentCard';
import type { SegmentData } from './SegmentItem';

interface MobileCardsProps {
  segments: SegmentData[];
}

const MobileCards: React.FC<MobileCardsProps> = ({ segments }) => {
  // Using React.useMemo to stabilize the component rendering
  const mobileCards = React.useMemo(() => {
    return segments.map((segment) => (
      <SegmentCard 
        key={`mobile-card-${segment.id}`} 
        segment={segment} 
      />
    ));
  }, [segments]);

  return (
    <div className="sm:hidden space-y-6 py-4">
      {mobileCards}
    </div>
  );
};

export default MobileCards;
