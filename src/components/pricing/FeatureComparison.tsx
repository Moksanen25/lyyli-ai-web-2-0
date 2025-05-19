
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Check, X } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

interface Feature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

interface FeatureComparisonProps {
  comparisonFeatures: Feature[];
  showFullComparison: boolean;
}

const FeatureComparison: React.FC<FeatureComparisonProps> = ({ comparisonFeatures, showFullComparison }) => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  
  // Render check or X based on boolean value
  const renderCheckOrX = (value: boolean | string) => {
    if (typeof value === 'string') {
      return <span className="text-sm">{value}</span>;
    }
    
    return value ? 
      <Check className="h-5 w-5 text-primary" aria-label={t('pricing.features.included')} /> :
      <X className="h-5 w-5 text-muted-foreground" aria-label={t('pricing.features.notIncluded')} />;
  };

  if (!showFullComparison) return null;

  return (
    <div className="mt-8 rounded-lg border bg-card shadow-sm p-1 overflow-hidden max-w-6xl mx-auto">
      <ScrollArea className={isMobile ? "h-[400px]" : "h-[500px]"}>
        <div className={isMobile ? "min-w-[640px]" : ""}>
          <Table>
            <TableCaption>{t('pricing.comparisonCaption')}</TableCaption>
            <TableHeader className="sticky top-0 bg-card z-10">
              <TableRow>
                <TableHead className="w-[300px]">{t('pricing.features.feature')}</TableHead>
                <TableHead className="text-center">{t('pricing.starter.name')}</TableHead>
                <TableHead className="text-center">{t('pricing.professional.name')}</TableHead>
                <TableHead className="text-center">{t('pricing.enterprise.name')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonFeatures.map((feature) => (
                <TableRow key={feature.name}>
                  <TableCell className="font-medium">{t(`pricing.features.${feature.name}`)}</TableCell>
                  <TableCell className="text-center">{renderCheckOrX(feature.starter)}</TableCell>
                  <TableCell className="text-center">{renderCheckOrX(feature.professional)}</TableCell>
                  <TableCell className="text-center">{renderCheckOrX(feature.enterprise)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
    </div>
  );
};

export default FeatureComparison;
