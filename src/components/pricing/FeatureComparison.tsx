
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Check, X } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface FeatureComparisonProps {
  comparisonFeatures: Array<{
    name: string;
    free: boolean | string;
    starter: boolean | string;
    growth: boolean | string;
    professional: boolean | string;
    enterprise: boolean | string;
  }>;
  showFullComparison: boolean;
}

const FeatureComparison: React.FC<FeatureComparisonProps> = ({ 
  comparisonFeatures, 
  showFullComparison 
}) => {
  const { t } = useLanguage();

  // Function to safely get feature translation using consistent approach
  const getFeatureText = (key: string): string => {
    const translation = t(`pricing.features.${key}`);
    // If translation fails, fallback to the key itself (formatted)
    if (translation === `pricing.features.${key}`) {
      // Convert camelCase to readable format as fallback
      return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    }
    return translation;
  };
  
  if (!showFullComparison) {
    return null;
  }

  // Get translated headers
  const featureText = t('pricing.features.feature');
  const includedText = t('pricing.features.included');
  const notIncludedText = t('pricing.features.notIncluded');
  
  const renderCellValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" aria-label={includedText} />
      ) : (
        <X className="h-5 w-5 text-muted-foreground mx-auto" aria-label={notIncludedText} />
      );
    }
    return <span>{value}</span>;
  };
  
  return (
    <div className="mt-8 mb-16 max-w-7xl mx-auto overflow-x-auto">
      <div className="text-center mb-10">
        <p className="text-sm text-muted-foreground">
          {t('pricing.comparisonCaption')}
        </p>
      </div>
      
      <Table className="w-full border min-w-[800px]">
        <TableHeader>
          <TableRow className="bg-muted/60">
            <TableHead className="w-[25%] font-medium">{featureText}</TableHead>
            <TableHead className="text-center">{t('pricing.free.name')}</TableHead>
            <TableHead className="text-center">{t('pricing.starter.name')}</TableHead>
            <TableHead className="text-center">{t('pricing.growth.name')}</TableHead>
            <TableHead className="text-center">{t('pricing.professional.name')}</TableHead>
            <TableHead className="text-center">{t('pricing.enterprise.name')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonFeatures.map((feature, i) => (
            <TableRow key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-muted/30'}>
              <TableCell className="font-medium">{getFeatureText(feature.name)}</TableCell>
              <TableCell className="text-center">
                {renderCellValue(feature.free)}
              </TableCell>
              <TableCell className="text-center">
                {renderCellValue(feature.starter)}
              </TableCell>
              <TableCell className="text-center">
                {renderCellValue(feature.growth)}
              </TableCell>
              <TableCell className="text-center">
                {renderCellValue(feature.professional)}
              </TableCell>
              <TableCell className="text-center">
                {renderCellValue(feature.enterprise)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FeatureComparison;
