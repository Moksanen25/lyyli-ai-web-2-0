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
  className = ""
}) => {
  const {
    t,
    language
  } = useLanguage();
  const defaultTitle = t('compliance.title') || "Enterprise-Grade Security & Compliance";
  const defaultBadges: ComplianceBadgeType[] = [{
    name: t('compliance.badges.gdpr') || "GDPR Compliant",
    image: "https://img.shields.io/badge/GDPR-Compliant-green",
    icon: <Shield className="h-5 w-5" />,
    description: language === 'fi' ? "Palvelumme noudattaa EU:n yleistä tietosuoja-asetusta (GDPR)." : language === 'sv' ? "Vår tjänst följer EU:s allmänna dataskyddsförordning (GDPR)." : "Our service complies with the EU General Data Protection Regulation (GDPR).",
    color: 'green'
  }, {
    name: t('compliance.badges.uptime') || "99.9% Uptime SLA",
    image: "https://img.shields.io/badge/99.9%25-Uptime_SLA-blue",
    icon: <Server className="h-5 w-5" />,
    description: language === 'fi' ? "Takaamme 99.9% käytettävyyden palvelutasosopimuksen mukaisesti." : language === 'sv' ? "Vi garanterar 99,9% drifttid enligt vårt servicenivåavtal." : "We guarantee 99.9% uptime according to our Service Level Agreement.",
    color: 'blue'
  }, {
    name: language === 'fi' ? "DPIA:n mukainen" : language === 'sv' ? "DPIA-kompatibel" : "DPIA Compliant",
    icon: <FileCheck className="h-5 w-5" />,
    description: language === 'fi' ? "Olemme suorittaneet tietosuojaa koskevan vaikutustenarvioinnin (DPIA) palvelullemme." : language === 'sv' ? "Vi har genomfört en konsekvensbedömning avseende dataskydd (DPIA) för vår tjänst." : "We have conducted a Data Protection Impact Assessment (DPIA) for our service.",
    color: 'purple'
  }, {
    name: language === 'fi' ? "ISO 27001" : language === 'sv' ? "ISO 27001" : "ISO 27001",
    icon: <Lock className="h-5 w-5" />,
    description: language === 'fi' ? "Palvelumme noudattaa ISO 27001 tietoturvallisuuden hallintajärjestelmän standardia." : language === 'sv' ? "Vår tjänst följer ISO 27001-standarden för informationssäkerhet." : "Our service complies with ISO 27001 information security management system standard.",
    color: 'blue'
  }];
  const badgesToRender = badges || defaultBadges;
  const titleToRender = title || defaultTitle;

  return (
    <Card className={`w-full ${className}`}>
      <CardContent className="p-6">
        {titleToRender && (
          <h3 className="text-xl font-semibold mb-4 text-foreground hyphens-none">
            {titleToRender}
          </h3>
        )}
        {description && (
          <p className="text-muted-foreground mb-6 hyphens-none">
            {description}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {badgesToRender.map((badge, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                    {badge.icon && (
                      <div className="flex-shrink-0 text-primary">
                        {badge.icon}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <Badge 
                        variant={badge.color === 'green' ? 'default' : 'secondary'}
                        className="text-xs font-medium hyphens-none"
                      >
                        {badge.name}
                      </Badge>
                    </div>
                  </div>
                </TooltipTrigger>
                {badge.description && (
                  <TooltipContent side="bottom" className="max-w-xs">
                    <p className="text-sm hyphens-none">{badge.description}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
export default ComplianceBadges;