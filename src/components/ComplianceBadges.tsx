
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

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
  title,
  description,
  badges,
  className = "",
}) => {
  const { t } = useLanguage();

  const defaultTitle = t('compliance.title') || "Enterprise-Grade Security & Compliance";

  const defaultBadges: ComplianceBadgeType[] = [
    { name: t('compliance.badges.gdpr') || "GDPR Compliant", image: "https://img.shields.io/badge/GDPR-Compliant-green", color: 'green' },
    { name: t('compliance.badges.uptime') || "99.9% Uptime SLA", image: "https://img.shields.io/badge/99.9%25-Uptime_SLA-blue", color: 'blue' }
  ];

  const badgesToRender = badges || defaultBadges;
  const titleToRender = title || defaultTitle;

  return (
    <section className={`py-6 bg-white border-t border-gray-100 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          {titleToRender && <p className="text-sm text-muted-foreground">{titleToRender}</p>}
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
