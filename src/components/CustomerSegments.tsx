
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
  console.log('CustomerSegments component rendering');
  
  // Get segment data with error handling
  const segments = useSegmentsData();
  const [activeSegmentId, setActiveSegmentId] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Initialize with safer logic
  useEffect(() => {
    console.log('CustomerSegments useEffect running', { 
      segments: segments?.length || 0, 
      activeSegmentId 
    });
    
    if (segments && segments.length > 0) {
      if (!activeSegmentId) {
        setActiveSegmentId(segments[0]?.id || '');
      }
      setIsLoaded(true);
    } else if (segments && segments.length === 0) {
      // Even with no segments, mark as loaded
      setIsLoaded(true);
    }
  }, [segments, activeSegmentId]);

  // Handler for switching segments
  const handleSegmentChange = (id: string) => {
    console.log('Changing segment to:', id);
    if (id) {
      setActiveSegmentId(id);
    }
  };

  console.log('CustomerSegments rendering with', {
    hasSegments: Boolean(segments?.length),
    segmentCount: segments?.length || 0,
    activeId: activeSegmentId,
    isLoaded
  });

  return (
    <section className="py-16 md:py-32 bg-muted/20" id="customer-segments">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader />
        
        {isLoaded && (
          <>
            {segments && segments.length > 0 ? (
              <div className="mt-16 mb-12">
                <DesktopTabs 
                  segments={segments} 
                  activeSegmentId={activeSegmentId || segments[0]?.id || ''}
                  onSegmentChange={handleSegmentChange}
                />
                <MobileCards 
                  segments={segments} 
                />
              </div>
            ) : (
              <div className="text-center py-10">
                <p>No customer segments available at this time.</p>
              </div>
            )}
          </>
        )}
        
        <SegmentCTA />
      </div>
    </section>
  );
};

export default CustomerSegments;
