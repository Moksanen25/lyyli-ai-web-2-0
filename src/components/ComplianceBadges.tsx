
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Shield, Server, FileCheck, Lock } from 'lucide-react';

export type ComplianceBadgeType = {
  name: string;
  image?: string;
  icon?: React.ReactNode;
  description?: string;
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
  const { t, language } = useLanguage();

  const defaultTitle = t('compliance.title') || "Enterprise-Grade Security & Compliance";

  const defaultBadges: ComplianceBadgeType[] = [
    { 
      name: t('compliance.badges.gdpr') || "GDPR Compliant", 
      image: "https://img.shields.io/badge/GDPR-Compliant-green", 
      icon: <Shield className="h-5 w-5" />,
      description: language === 'fi' 
        ? "Palvelumme noudattaa EU:n yleistä tietosuoja-asetusta (GDPR)."
        : "Our service complies with the EU General Data Protection Regulation (GDPR).",
      color: 'green' 
    },
    { 
      name: t('compliance.badges.uptime') || "99.9% Uptime SLA", 
      image: "https://img.shields.io/badge/99.9%25-Uptime_SLA-blue", 
      icon: <Server className="h-5 w-5" />,
      description: language === 'fi'
        ? "Takaamme 99.9% käytettävyyden palvelutasosopimuksen mukaisesti."
        : "We guarantee 99.9% uptime according to our Service Level Agreement.",
      color: 'blue' 
    },
    {
      name: language === 'fi' ? "DPIA:n mukainen" : "DPIA Compliant",
      icon: <FileCheck className="h-5 w-5" />,
      description: language === 'fi'
        ? "Olemme suorittaneet tietosuojaa koskevan vaikutustenarvioinnin (DPIA) palvelullemme."
        : "We have conducted a Data Protection Impact Assessment (DPIA) for our service.",
      color: 'purple'
    },
    {
      name: language === 'fi' ? "ISO 27001" : "ISO 27001",
      icon: <Lock className="h-5 w-5" />,
      description: language === 'fi'
        ? "Palvelumme noudattaa ISO 27001 tietoturvallisuuden hallintajärjestelmän standardia."
        : "Our service complies with ISO 27001 information security management system standard.",
      color: 'blue'
    }
  ];

  const badgesToRender = badges || defaultBadges;
  const titleToRender = title || defaultTitle;

  return (
    <section className={`py-6 bg-white border-t border-gray-100 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          {titleToRender && <p className="text-sm md:text-base text-muted-foreground">{titleToRender}</p>}
          {description && <p className="text-xs md:text-sm text-muted-foreground mt-1">{description}</p>}
        </div>
        <Card className="border-none shadow-sm bg-transparent">
          <CardContent className="p-4">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {badgesToRender.map((badge, index) => (
                <TooltipProvider key={index}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col items-center cursor-help">
                        <div className="flex items-center gap-2 bg-background rounded-full px-3 py-1.5 border">
                          {badge.icon}
                          <span className="text-xs md:text-sm font-medium">{badge.name}</span>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-[250px] text-center p-3">
                      <p className="text-xs">{badge.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                {language === 'fi' 
                  ? 'Yrityksemme noudattaa EU:n ja Suomen tietosuojalainsäädäntöä.'
                  : 'Our company complies with EU and Finnish data protection legislation.'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComplianceBadges;
