
import React from 'react';
import { Shield, Database, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface TrustIndicatorProps {
  indicators?: Array<{
    icon: React.ReactNode;
    label: string;
  }>;
  className?: string;
}

const TrustIndicators: React.FC<TrustIndicatorProps> = ({ 
  indicators,
  className = "" 
}) => {
  const { t } = useLanguage();
  
  const defaultIndicators = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      label: t('hero.badges.security') || "Enterprise Security"
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      label: t('hero.badges.uptime') || "99.9% Uptime SLA"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      label: t('hero.badges.support') || "24/7 Support"
    }
  ];

  const indicatorsToRender = indicators || defaultIndicators;

  return (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
      {indicatorsToRender.map((indicator, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="bg-secondary/30 p-2 rounded-full mb-2">
            {indicator.icon}
          </div>
          <span className="text-sm font-medium">{indicator.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustIndicators;
