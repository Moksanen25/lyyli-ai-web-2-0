
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink } from 'lucide-react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  link?: {
    url: string;
    text: string;
  };
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description, link }) => {
  return (
    <div className="relative pb-12 pl-8 border-l-2 border-primary/20 last:border-l-transparent last:pb-0">
      <div className="absolute left-0 -translate-x-1/2 -top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>
      <div className="text-sm font-medium text-primary mb-2">{date}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">
        {description}
        {link && (
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center ml-1 text-primary hover:underline"
          >
            {link.text} <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        )}
      </p>
    </div>
  );
};

const CompanyTimeline = () => {
  const { t } = useLanguage();

  const timelineItems: TimelineItemProps[] = [
    {
      date: "04/2025",
      title: t('about.timeline.founded.title'),
      description: t('about.timeline.founded.description')
    },
    {
      date: "07/2025",
      title: t('about.timeline.investor.title'),
      description: t('about.timeline.investor.description'),
      link: {
        url: "https://www.expion.fi",
        text: "Expion Oy"
      }
    },
    {
      date: "08/2025",
      title: t('about.timeline.launch.title'),
      description: t('about.timeline.launch.description')
    },
    {
      date: "12/2025",
      title: t('about.timeline.international.title'),
      description: t('about.timeline.international.description')
    }
  ];
  
  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t('about.timeline.title')}</h2>
      <div className="max-w-3xl mx-auto mt-12">
        {timelineItems.map((item, index) => (
          <TimelineItem 
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyTimeline;
