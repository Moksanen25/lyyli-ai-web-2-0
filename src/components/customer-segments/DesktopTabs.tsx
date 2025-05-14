
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SegmentItem from './SegmentItem';
import type { SegmentData } from './SegmentItem';
import { useIsMobile } from '@/hooks/use-mobile';

interface DesktopTabsProps {
  segments: SegmentData[];
}

const DesktopTabs: React.FC<DesktopTabsProps> = ({ segments }) => {
  const isMobile = useIsMobile();
  
  // Don't render this component at all on truly small devices
  if (isMobile) {
    return null;
  }

  return (
    <div className="hidden sm:block">
      <Tabs defaultValue={segments[0]?.id || ""} className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <TabsList className="bg-background">
            {segments.map(segment => (
              <TabsTrigger key={segment.id} value={segment.id} className="px-4 sm:px-5 py-3">
                <div className="flex flex-col items-center">
                  <span className="flex">
                    {segment.icon}
                  </span>
                  <span className="text-xs sm:text-sm mt-1.5 whitespace-nowrap">{segment.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {segments.map(segment => (
          <TabsContent key={segment.id} value={segment.id} className="animate-fade-in">
            <SegmentItem segment={segment} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default DesktopTabs;
