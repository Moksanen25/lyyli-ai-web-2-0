
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useLanguage } from '@/hooks/useLanguage';
import SegmentItem from './SegmentItem';
import { type SegmentData } from './useSegmentsData';

interface DesktopTabsProps {
  segments: SegmentData[];
}

const DesktopTabs: React.FC<DesktopTabsProps> = ({ segments }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(segments.length > 0 ? segments[0].id : '');
  
  return (
    <Tabs 
      value={activeTab} 
      onValueChange={setActiveTab} 
      className="max-w-5xl mx-auto"
    >
      <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
        {segments.map((segment) => (
          <TabsTrigger 
            key={segment.id} 
            value={segment.id}
            className="flex flex-col gap-2 py-3"
          >
            {segment.icon && (
              <div className="text-muted-foreground">
                {segment.icon}
              </div>
            )}
            <span className="text-center">{segment.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      
      {segments.map((segment) => (
        <TabsContent key={segment.id} value={segment.id} className="mt-4">
          <SegmentItem segment={segment} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default DesktopTabs;
