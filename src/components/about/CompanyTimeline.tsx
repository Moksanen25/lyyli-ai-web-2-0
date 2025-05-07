
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
  return (
    <div className="relative pb-12 pl-8 border-l-2 border-primary/20 last:border-l-transparent last:pb-0">
      <div className="absolute left-0 -translate-x-1/2 -top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>
      <div className="text-sm font-medium text-primary mb-2">{year}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const CompanyTimeline = () => {
  const { t } = useLanguage();

  const timelineItems: TimelineItemProps[] = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Lyyli was founded by Mikko Oksanen and Veikko Laitinen with a vision to transform content workflows through AI."
    },
    {
      year: "2024",
      title: "First Product Launch",
      description: "We launched our AI-powered content management platform to help businesses streamline their content creation process."
    },
    {
      year: "2024",
      title: "First Major Partnerships",
      description: "Established key partnerships to expand our platform's capabilities and reach more customers."
    },
    {
      year: "2025",
      title: "Looking Forward",
      description: "Planning to expand our offerings and team to better serve our growing customer base."
    }
  ];
  
  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Journey</h2>
      <div className="max-w-3xl mx-auto mt-12">
        {timelineItems.map((item, index) => (
          <TimelineItem 
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyTimeline;
