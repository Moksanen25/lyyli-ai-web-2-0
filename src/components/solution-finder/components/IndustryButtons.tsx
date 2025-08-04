
import React from 'react';
import { Button } from '@/components/ui/button';
import { industryOptions } from '../data/industryOptions';
import { useSafeTranslation } from '@/utils/safeTranslation';

interface IndustryButtonsProps {
  onSelectIndustry: (industry: string) => void;
  isVisible: boolean;
}

const IndustryButtons: React.FC<IndustryButtonsProps> = ({ 
  onSelectIndustry, 
  isVisible
}) => {
  const { customerSegmentsT } = useSafeTranslation();
  
  if (!isVisible) return null;
  
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {industryOptions.map((option) => (
        <Button
          key={option.id}
          variant="outline"
          size="sm"
          className="text-xs"
          onClick={() => onSelectIndustry(option.id)}
        >
          {customerSegmentsT(`segments.${option.id}.buttonLabel`, { fallback: option.label })}
        </Button>
      ))}
    </div>
  );
};

export default IndustryButtons;
