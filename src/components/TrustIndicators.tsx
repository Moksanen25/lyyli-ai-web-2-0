
import React from 'react';
import { Shield, Database, MessageSquare, CheckCircle } from 'lucide-react';

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
  const defaultIndicators = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      label: "Enterprise Security"
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      label: "99.9% Uptime SLA"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      label: "24/7 Support"
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
