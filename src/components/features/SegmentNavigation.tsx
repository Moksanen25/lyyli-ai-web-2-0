
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface Segment {
  id: string;
  title: string;
}

const SegmentNavigation: React.FC<{ segments: Segment[] }> = ({ segments }) => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-primary/5 py-8 sticky top-16 z-30">
      <div className="container-padding container mx-auto">
        <h3 className="font-medium mb-4 text-center">{t('features.customerSegments.navigation')}</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {segments.map((segment) => (
            <Link
              key={segment.id}
              to={`#${segment.id}`}
              className="px-4 py-2 rounded-full bg-white border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors text-sm"
            >
              {segment.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentNavigation;
