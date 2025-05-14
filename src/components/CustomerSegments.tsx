
import React, { useState, useEffect, useMemo } from 'react';
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
  // Get segment data
  const segments = useSegmentsData();
  
  // Create a memoized copy of segments to prevent unnecessary re-renders
  const memoizedSegments = useMemo(() => segments, [segments]);
  
  // Set initial state with a default empty value
  const [activeSegmentId, setActiveSegmentId] = useState<string>('');
  
  // Only set the activeSegmentId once when segments are loaded and it's not set yet
  useEffect(() => {
    if (memoizedSegments.length > 0 && !activeSegmentId) {
      setActiveSegmentId(memoizedSegments[0]?.id || '');
    }
  }, [memoizedSegments, activeSegmentId]);

  // Handler for switching segments
  const handleSegmentChange = (id: string) => {
    if (id) {
      setActiveSegmentId(id);
    }
  };

  // Ensure we have valid data before rendering the component
  const shouldRenderContent = memoizedSegments.length > 0 && activeSegmentId;

  return (
    <section className="py-16 md:py-32 bg-muted/20" id="customer-segments">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader />
        
        {shouldRenderContent && (
          <div className="mt-16 mb-12">
            <DesktopTabs 
              segments={memoizedSegments} 
              activeSegmentId={activeSegmentId}
              onSegmentChange={handleSegmentChange}
            />
            <MobileCards 
              segments={memoizedSegments} 
            />
          </div>
        )}
        
        <SegmentCTA />
      </div>
    </section>
  );
};

export default CustomerSegments;
