
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export type ComplianceBadgeType = {
  name: string;
  image: string;
  color?: 'blue' | 'green' | 'purple' | 'red' | 'default';
};

interface ComplianceBadgesProps {
  title?: string;
  description?: string;
  badges?: ComplianceBadgeType[];
  className?: string;
}

const ComplianceBadges: React.FC<ComplianceBadgesProps> = ({ 
  title = "Enterprise-Grade Security & Compliance",
  description,
  badges,
  className = "",
}) => {
  const defaultBadges: ComplianceBadgeType[] = [
    { name: "ISO 27001", image: "https://img.shields.io/badge/ISO-27001-blue", color: 'blue' },
    { name: "GDPR Compliant", image: "https://img.shields.io/badge/GDPR-Compliant-green", color: 'green' },
    { name: "SOC2 Type II", image: "https://img.shields.io/badge/SOC2-TypeII-purple", color: 'purple' },
    { name: "HIPAA Compliant", image: "https://img.shields.io/badge/HIPAA-Compliant-red", color: 'red' },
    { name: "99.9% Uptime SLA", image: "https://img.shields.io/badge/99.9%25-Uptime_SLA-blue", color: 'blue' }
  ];

  const badgesToRender = badges || defaultBadges;

  return (
    <section className={`py-6 bg-white border-t border-gray-100 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          {title && <p className="text-sm text-muted-foreground">{title}</p>}
          {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
        </div>
        <Card className="border-none shadow-sm bg-transparent">
          <CardContent className="p-4">
            <div className="flex flex-wrap justify-center items-center gap-6">
              {badgesToRender.map((badge, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={badge.image} alt={badge.name} className="h-6" />
                  <span className="text-xs text-muted-foreground mt-1">{badge.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComplianceBadges;
