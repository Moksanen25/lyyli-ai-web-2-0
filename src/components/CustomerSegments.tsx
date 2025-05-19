
import React, { useState, useEffect } from 'react';
import { useSegmentsData } from './customer-segments/useSegmentsData';
import SectionHeader from './customer-segments/SectionHeader';
import DesktopTabs from './customer-segments/DesktopTabs';
import MobileCards from './customer-segments/MobileCards';
import SegmentCTA from './customer-segments/SegmentCTA';
import { useLanguage } from '@/hooks/useLanguage';

/**
 * CustomerSegments displays industry-specific solutions using a tabbed interface on desktop
 * and cards on mobile, showing challenges and solutions for each customer segment.
 */
const CustomerSegments: React.FC = () => {
  console.log('CustomerSegments component rendering');
  const { t } = useLanguage();
  
  try {
    // Get segment data with error handling
    const { segments } = useSegmentsData();
    const [activeSegmentId, setActiveSegmentId] = useState<string>('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    
    // Initialize with safer logic
    useEffect(() => {
      try {
        console.log('CustomerSegments useEffect running', { 
          segmentsCount: segments?.length || 0, 
          activeSegmentId 
        });
        
        if (segments && segments.length > 0) {
          // Make sure we have a valid active segment
          if (!activeSegmentId || !segments.some(s => s.id === activeSegmentId)) {
            setActiveSegmentId(segments[0]?.id || '');
          }
          setIsLoaded(true);
        } else if (segments && segments.length === 0) {
          // Even with no segments, mark as loaded
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Error in CustomerSegments useEffect:', error);
        setHasError(true);
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

    // Fall back to a placeholder if we have no segments
    if (segments.length === 0 && isLoaded && !hasError) {
      console.log('No segments available, showing placeholder');
      return (
        <section className="py-16 md:py-32 bg-muted/20" id="customer-segments">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader />
            <div className="text-center py-10">
              <p>{t('customerSegments.noSegmentsAvailable')}</p>
            </div>
            <SegmentCTA />
          </div>
        </section>
      );
    }

    // Show an error message if we had a problem
    if (hasError) {
      return (
        <section className="py-16 md:py-32 bg-muted/20" id="customer-segments">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold text-red-600">{t('customerSegments.errorTitle')}</h2>
            <p className="mt-4">{t('customerSegments.errorMessage')}</p>
          </div>
        </section>
      );
    }

    return (
      <section className="py-16 md:py-32 bg-muted/20" id="customer-segments">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader />
          
          {isLoaded ? (
            <>
              {segments && segments.length > 0 ? (
                <div className="mt-16 mb-12">
                  <div className="hidden md:block">
                    <DesktopTabs segments={segments} />
                  </div>
                  <div className="md:hidden">
                    <MobileCards segments={segments} />
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <p>{t('customerSegments.noSegmentsAvailable')}</p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="animate-pulse h-6 w-40 bg-muted rounded mx-auto mb-8"></div>
              <div className="animate-pulse h-24 w-full max-w-4xl bg-muted rounded mx-auto"></div>
            </div>
          )}
          
          <SegmentCTA />
        </div>
      </section>
    );
  } catch (error) {
    console.error('Fatal error in CustomerSegments component:', error);
    return (
      <section className="py-16 md:py-32 bg-muted/20" id="customer-segments">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-red-600">Unable to render customer segments</h2>
          <p className="mt-4">There was an unexpected error. Please try refreshing the page.</p>
        </div>
      </section>
    );
  }
};

export default CustomerSegments;
