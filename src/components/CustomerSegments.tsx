
import React from 'react';
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

  return (
    <section className="py-12 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader />
        <DesktopTabs segments={segments} />
        <MobileCards segments={segments} />
        <SegmentCTA />
      </div>
    </section>
  );
};

export default CustomerSegments;
