
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SegmentItem from './SegmentItem';
import type { SegmentData } from './SegmentItem';
import { useIsMobile } from '@/hooks/use-mobile';

interface DesktopTabsProps {
  segments: SegmentData[];
}

const DesktopTabs: React.FC<DesktopTabsProps> = ({ segments }) => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState(segments[0]?.id || "");
  
  // Don't render this component at all on truly small devices
  if (isMobile) {
    return null;
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="hidden sm:block">
      <Tabs 
        defaultValue={segments[0]?.id || ""} 
        className="max-w-6xl mx-auto"
        onValueChange={handleTabChange}
        value={activeTab}
      >
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <TabsList className="bg-background p-1.5 space-x-2">
            {segments.map(segment => (
              <TabsTrigger 
                key={segment.id} 
                value={segment.id} 
                className={`px-5 py-4 transition-all duration-200 ${activeTab === segment.id ? 'bg-primary/10 text-primary transform scale-105' : ''}`}
              >
                <div className="flex flex-col items-center">
                  <span className="flex mb-1">
                    {segment.icon}
                  </span>
                  <span className="text-xs sm:text-sm mt-1.5 whitespace-nowrap font-medium">{segment.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="mt-6">
          {segments.map(segment => (
            <TabsContent 
              key={segment.id} 
              value={segment.id} 
              className={`animate-fade-in transition-all duration-300 ${activeTab === segment.id ? 'opacity-100' : 'opacity-0'}`}
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
