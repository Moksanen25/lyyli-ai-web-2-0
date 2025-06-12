
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Segment } from './types';

interface SegmentDetailsProps {
  segment: Segment;
  language: string;
  compact?: boolean;
}

const SegmentDetails: React.FC<SegmentDetailsProps> = ({ segment, language, compact = false }) => {
  const challenges = language === 'fi' ? segment.challengesFi : segment.challengesEn;
  const solutions = language === 'fi' ? segment.solutionsFi : segment.solutionsEn;

  return (
    <div className={`grid gap-8 ${compact ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
      {/* Challenges */}
      <Card className="border-red-200 bg-red-50/50">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <CardTitle className="text-lg text-red-700">
              {language === 'fi' ? 'Haasteet' : 'Challenges'}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {challenges.map((challenge: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
              <p className="text-sm text-gray-700">{challenge}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Solutions */}
      <Card className="border-green-200 bg-green-50/50">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <CardTitle className="text-lg text-green-700">
              {language === 'fi' ? 'Lyylin ratkaisut' : 'Lyyli Solutions'}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {solutions.map((solution: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-700">{solution}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SegmentDetails;
