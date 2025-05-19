
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Building, 
  Briefcase, 
  Handshake, 
  School, 
  Lightbulb, 
  Flag 
} from 'lucide-react';

interface Segment {
  id: string;
  title: string;
}

const SegmentNavigation: React.FC<{ segments: Segment[] }> = ({ segments }) => {
  const { t } = useLanguage();
  
  // Map segment IDs to icons
  const getIconForSegment = (id: string) => {
    switch (id) {
      case 'tech-smes':
        return <Building className="w-4 h-4 mr-2" />;
      case 'consulting':
        return <Briefcase className="w-4 h-4 mr-2" />;
      case 'nonprofit':
        return <Handshake className="w-4 h-4 mr-2" />;
      case 'education':
        return <School className="w-4 h-4 mr-2" />;
      case 'creative':
        return <Lightbulb className="w-4 h-4 mr-2" />;
      case 'sports':
        return <Flag className="w-4 h-4 mr-2" />;
      default:
        return null;
    }
  };
  
  return (
    <section className="bg-primary/5 py-6 sticky top-16 z-30 border-b border-primary/10 shadow-sm">
      <div className="container-padding container mx-auto">
        <h3 className="font-medium mb-4 text-center text-primary/80">{t('features.customerSegments.navigation')}</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {segments.map((segment) => (
            <a
              key={segment.id}
              href={`#${segment.id}`}
              className="px-4 py-2 rounded-full bg-white border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors text-sm flex items-center shadow-sm hover:shadow"
            >
              {getIconForSegment(segment.id)}
              {segment.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentNavigation;
