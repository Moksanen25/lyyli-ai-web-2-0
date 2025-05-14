
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
  
  // On truly small devices (under 640px), don't show this component at all
  if (typeof window !== 'undefined' && window.innerWidth < 640) {
    return null;
  }

  return (
    <div className="hidden sm:block">
      <Tabs defaultValue="tech-smes" className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <TabsList className="bg-background">
            {segments.map(segment => (
              <TabsTrigger key={segment.id} value={segment.id} className="px-3 sm:px-4 py-2">
                <div className="flex flex-col items-center">
                  <span className={isMobile ? "hidden" : "flex"}>
                    {segment.icon}
                  </span>
                  <span className="text-xs sm:text-sm mt-1 whitespace-nowrap">{segment.name}</span>
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
