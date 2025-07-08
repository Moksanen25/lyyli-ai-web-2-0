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
    description: language === 'fi' ? "Palvelumme noudattaa EU:n yleistä tietosuoja-asetusta (GDPR)." : "Our service complies with the EU General Data Protection Regulation (GDPR).",
    color: 'green'
  }, {
    name: t('compliance.badges.uptime') || "99.9% Uptime SLA",
    image: "https://img.shields.io/badge/99.9%25-Uptime_SLA-blue",
    icon: <Server className="h-5 w-5" />,
    description: language === 'fi' ? "Takaamme 99.9% käytettävyyden palvelutasosopimuksen mukaisesti." : "We guarantee 99.9% uptime according to our Service Level Agreement.",
    color: 'blue'
  }, {
    name: language === 'fi' ? "DPIA:n mukainen" : "DPIA Compliant",
    icon: <FileCheck className="h-5 w-5" />,
    description: language === 'fi' ? "Olemme suorittaneet tietosuojaa koskevan vaikutustenarvioinnin (DPIA) palvelullemme." : "We have conducted a Data Protection Impact Assessment (DPIA) for our service.",
    color: 'purple'
  }, {
    name: language === 'fi' ? "ISO 27001" : "ISO 27001",
    icon: <Lock className="h-5 w-5" />,
    description: language === 'fi' ? "Palvelumme noudattaa ISO 27001 tietoturvallisuuden hallintajärjestelmän standardia." : "Our service complies with ISO 27001 information security management system standard.",
    color: 'blue'
  }];
  const badgesToRender = badges || defaultBadges;
  const titleToRender = title || defaultTitle;
  return;
};
export default ComplianceBadges;