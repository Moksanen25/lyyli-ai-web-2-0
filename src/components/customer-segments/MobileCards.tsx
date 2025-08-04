'use client';


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import SegmentCard from './SegmentCard';
import { type SegmentData } from './useSegmentsData';

interface MobileCardsProps {
  segments: SegmentData[];
}

const MobileCards: React.FC<MobileCardsProps> = ({ segments }) => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Debug the segments
  console.log("MobileCards segments:", segments);
  
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : segments.length - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev < segments.length - 1 ? prev + 1 : 0));
  };
  
  if (!segments || segments.length === 0) {
    console.log("No segments available for MobileCards");
    return (
      <div className="text-center py-8">
        <p>{t('customerSegments.noSegmentsAvailable')}</p>
      </div>
    );
  }
  
  return (
    <div className="relative">
      <div className="overflow-hidden py-4">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xl text-center mb-2">
            {segments[activeIndex]?.name || ''}
          </h3>
          
          <div className="transition-transform duration-300 ease-in-out">
            {segments[activeIndex] && (
              <SegmentCard segment={segments[activeIndex]} />
            )}
          </div>
          
          <div className="flex justify-center items-center gap-2 mt-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">{t('customerSegments.previous')}</span>
            </Button>
            
            <div className="flex gap-1">
              {segments.map((_, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  size="sm"
                  className={`w-2 h-2 p-0 rounded-full ${i === activeIndex ? 'bg-primary' : 'bg-muted'}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <span className="sr-only">{`${t('customerSegments.goToSlide')} ${i + 1}`}</span>
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">{t('customerSegments.next')}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCards;
