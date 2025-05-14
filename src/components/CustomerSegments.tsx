
import React, { useState, useEffect } from 'react';
import { useSegmentsData } from './customer-segments/useSegmentsData';
import SectionHeader from './customer-segments/SectionHeader';
import DesktopTabs from './customer-segments/DesktopTabs';
import MobileCards from './customer-segments/MobileCards';
import SegmentCTA from './customer-segments/SegmentCTA';

/**
 * CustomerSegments displays industry-specific solutions using a tabbed interface on desktop
 * and cards on mobile, showing challenges and solutions for each customer segment.
 */
const CustomerSegments: React.FC = () => {
  const segments = useSegmentsData();
  // Use state with a more stable approach - set initial value once and maintain it
  const [activeSegmentId, setActiveSegmentId] = useState('');
  
  // Set initial active ID once when segments are loaded
  useEffect(() => {
    if (segments.length > 0 && !activeSegmentId) {
      setActiveSegmentId(segments[0]?.id || '');
    }
  }, [segments, activeSegmentId]);

  const handleSegmentChange = (id: string) => {
    if (id) {
      setActiveSegmentId(id);
    }
  };

  return (
    <section className="py-16 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader />
        {segments.length > 0 && (
          <div className="mt-16 mb-12">
            <DesktopTabs 
              segments={segments} 
              activeSegmentId={activeSegmentId}
              onSegmentChange={handleSegmentChange}
            />
            <MobileCards segments={segments} />
          </div>
        )}
        <SegmentCTA />
      </div>
    </section>
  );
};

export default CustomerSegments;
