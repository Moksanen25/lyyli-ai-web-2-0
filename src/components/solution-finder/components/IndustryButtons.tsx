
import React from 'react';
import { Button } from '@/components/ui/button';
import { industryOptions } from '../data/industryOptions';

interface IndustryButtonsProps {
  onSelectIndustry: (industry: string) => void;
}

const IndustryButtons: React.FC<IndustryButtonsProps> = ({ onSelectIndustry }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {industryOptions.map((option) => (
        <Button
          key={option.id}
          variant="outline"
          size="sm"
          className="text-xs"
          onClick={() => onSelectIndustry(option.label)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default IndustryButtons;
