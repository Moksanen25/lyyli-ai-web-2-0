
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from 'lucide-react';
import SegmentDetails from './SegmentDetails';
import { Segment } from './types';

interface MobileSegmentCardProps {
  segment: Segment;
  language: string;
}

const MobileSegmentCard: React.FC<MobileSegmentCardProps> = ({ segment, language }) => {
  return (
    <Card className="border-none shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-10 h-10 rounded-lg ${segment.lightColor} flex items-center justify-center`}>
            <segment.icon className="w-5 h-5 text-gray-600" />
          </div>
          <CardTitle className="text-xl text-[#295045]">
            {language === 'fi' ? segment.nameFi : segment.nameEn}
          </CardTitle>
        </div>
        <p className="text-muted-foreground">
          {language === 'fi' ? segment.descFi : segment.descEn}
        </p>
      </CardHeader>
      <CardContent>
        <SegmentDetails segment={segment} language={language} compact />
        
        {/* Start Now CTA for mobile */}
        <div className="mt-6 text-center">
          <Button 
            className="bg-[#295045] hover:bg-[#1f3c34] text-white px-6 py-2 w-full"
            onClick={() => window.open('/waitlist', '_blank')}
          >
            {language === 'fi' ? 'Aloita nyt' : 'Start Now'}
            <Zap className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileSegmentCard;
