
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SegmentItem from './SegmentItem';
import type { SegmentData } from './SegmentItem';

interface DesktopTabsProps {
  segments: SegmentData[];
  activeSegmentId: string;
  onSegmentChange: (id: string) => void;
}

const DesktopTabs: React.FC<DesktopTabsProps> = ({ 
  segments, 
  activeSegmentId, 
  onSegmentChange 
}) => {
  // Safety check for data
  if (!segments || !Array.isArray(segments) || segments.length === 0) {
    console.warn('DesktopTabs received invalid or empty segments data');
    return null;
  }

  // Ensure we have a valid active ID, defaulting to the first segment if needed
  const validActiveId = segments.some(s => s.id === activeSegmentId) 
    ? activeSegmentId 
    : segments[0]?.id || "";

  return (
    <div className="hidden sm:block">
      <Tabs 
        defaultValue={validActiveId}
        value={validActiveId}
        onValueChange={onSegmentChange}
        className="w-full max-w-6xl mx-auto"
      >
        <div className="mb-8 md:mb-12 w-full">
          <TabsList className="w-full flex justify-center space-x-2 px-2 py-2 overflow-x-auto" role="tablist" aria-label="Customer segments">
            {segments.map(segment => (
              <TabsTrigger 
                key={segment.id || `tab-${Math.random().toString(36).substr(2, 9)}`} 
                value={segment.id} 
                className="px-3 md:px-4 py-2 md:py-3 flex-shrink-0"
                role="tab"
                aria-selected={segment.id === validActiveId}
                aria-controls={`panel-${segment.id}`}
              >
                <div className="flex flex-col items-center">
                  <span className="flex mb-2" aria-hidden="true">
                    {segment.icon}
                  </span>
                  <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                    {segment.name}
                  </span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="mt-8">
          {segments.map(segment => (
            <TabsContent 
              key={segment.id || `content-${Math.random().toString(36).substr(2, 9)}`} 
              value={segment.id}
              role="tabpanel"
              id={`panel-${segment.id}`}
              aria-labelledby={`tab-${segment.id}`}
            >
              <SegmentItem segment={segment} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default DesktopTabs;
