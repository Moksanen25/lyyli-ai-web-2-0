
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
  const { t, safeTr } = useLanguage();

  // Function to safely get feature translation
  const getFeatureText = (key: string): string => {
    const directTranslation = t(`pricing.features.${key}`);
    
    // If direct translation works, use it
    if (directTranslation && directTranslation !== `pricing.features.${key}`) {
      return directTranslation;
    }
    
    // Try with features prefix as fallback
    const featureTranslation = t(`features.${key}`);
    if (featureTranslation && featureTranslation !== `features.${key}`) {
      return featureTranslation;
    }
    
    // Last resort fallback
    return safeTr(`pricing.features.${key}`, {}, { fallback: key });
  };
  
  if (!showFullComparison) {
    return null;
  }

  // Get translated headers
  const featureText = getFeatureText('feature');
  const includedText = getFeatureText('included');
  const notIncludedText = getFeatureText('notIncluded');
  
  const renderCellValue = (value: boolean | string, label: string) => {
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
            <TableHead className="text-center">Free</TableHead>
            <TableHead className="text-center">Starter</TableHead>
            <TableHead className="text-center">Growth</TableHead>
            <TableHead className="text-center">Professional</TableHead>
            <TableHead className="text-center">Enterprise</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonFeatures.map((feature, i) => (
            <TableRow key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-muted/30'}>
              <TableCell className="font-medium">{getFeatureText(feature.name)}</TableCell>
              <TableCell className="text-center">
                {renderCellValue(feature.free, includedText)}
              </TableCell>
              <TableCell className="text-center">
                {renderCellValue(feature.starter, includedText)}
              </TableCell>
              <TableCell className="text-center">
                {renderCellValue(feature.growth, includedText)}
              </TableCell>
              <TableCell className="text-center">
                {renderCellValue(feature.professional, includedText)}
              </TableCell>
              <TableCell className="text-center">
                {renderCellValue(feature.enterprise, includedText)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FeatureComparison;
