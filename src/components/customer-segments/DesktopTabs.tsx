
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
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 w-full">
          <TabsList className="bg-background/80 p-2 space-x-3 shadow-sm rounded-xl w-auto min-w-fit">
            {segments.map(segment => (
              <TabsTrigger 
                key={segment.id || `tab-${Math.random().toString(36).substr(2, 9)}`} 
                value={segment.id} 
                className="px-6 py-5"
              >
                <div className="flex flex-col items-center">
                  <span className="flex mb-2">
                    {segment.icon}
                  </span>
                  <span className="text-sm sm:text-base mt-1 whitespace-nowrap font-medium">
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
