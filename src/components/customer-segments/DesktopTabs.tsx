
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SegmentItem from './SegmentItem';
import type { SegmentData } from './SegmentItem';

interface DesktopTabsProps {
  segments: SegmentData[];
}

const DesktopTabs: React.FC<DesktopTabsProps> = ({ segments }) => {
  return (
    <div className="hidden md:block">
      <Tabs defaultValue="tech-smes" className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-background">
            {segments.map(segment => (
              <TabsTrigger key={segment.id} value={segment.id} className="px-4 py-2">
                <div className="flex flex-col items-center">
                  <span className="hidden lg:flex">{segment.icon}</span>
                  <span className="text-xs lg:text-sm mt-1">{segment.name}</span>
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
