
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
        <div className="flex justify-center mb-16 overflow-x-auto pb-2">
          <TabsList className="bg-background/80 p-2 space-x-3 shadow-sm rounded-xl">
            {segments.map(segment => (
              <TabsTrigger 
                key={segment.id} 
                value={segment.id} 
                className={`px-6 py-5 transition-all duration-300 ${
                  activeTab === segment.id 
                    ? 'bg-primary/10 text-primary transform scale-105 shadow-sm' 
                    : 'hover:bg-muted'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className={`flex mb-2 transition-transform duration-300 ${
                    activeTab === segment.id ? 'scale-110' : ''
                  }`}>
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
              key={segment.id} 
              value={segment.id} 
              className={`transition-all duration-500 ${
                activeTab === segment.id 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4 absolute'
              }`}
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
