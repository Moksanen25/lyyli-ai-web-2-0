import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

// Define the SegmentData type for use in other components
export interface SegmentData {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: React.ReactNode;
  cta?: string;
  image?: string;
}

interface SegmentItemProps {
  segment: SegmentData;
}

const SegmentItem: React.FC<SegmentItemProps> = ({ segment }) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col md:flex-row items-center bg-card rounded-xl shadow-sm overflow-hidden">
      {/* Image */}
      <div className="md:w-1/2">
        <img 
          src={segment.image || "https://via.placeholder.com/600x400"} 
          alt={segment.title} 
          className="w-full h-48 md:h-full object-cover" 
        />
      </div>
      
      {/* Content */}
      <div className="p-6 md:w-1/2">
        <h3 className="text-xl font-bold mb-2">{segment.title}</h3>
        <p className="text-muted-foreground mb-4">{segment.description}</p>
        
        {/* Features */}
        <ul className="list-disc pl-5 mb-4 text-sm text-muted-foreground">
          {segment.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        
        {/* CTA Button */}
        <Button asChild variant="secondary">
          <a href={`#${segment.id}`} className="flex items-center">
            {segment.cta || t('customerSegments.learnMore')}
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default SegmentItem;
