
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Check, X } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface FeatureComparisonProps {
  comparisonFeatures: Array<{
    name: string;
    starter: boolean | string;
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
    return safeTr(`pricing.features.${key}`, key);
  };
  
  if (!showFullComparison) {
    return null;
  }

  // Get translated headers
  const featureText = getFeatureText('feature');
  const starterPlan = t('pricing.starter.name');
  const professionalPlan = t('pricing.professional.name');
  const enterprisePlan = t('pricing.enterprise.name');
  const includedText = getFeatureText('included');
  const notIncludedText = getFeatureText('notIncluded');
  
  return (
    <div className="mt-8 mb-16 max-w-6xl mx-auto overflow-x-auto">
      <div className="text-center mb-10">
        <p className="text-sm text-muted-foreground">
          {t('pricing.comparisonCaption')}
        </p>
      </div>
      
      <Table className="w-full border">
        <TableHeader>
          <TableRow className="bg-muted/60">
            <TableHead className="w-[40%] font-medium">{featureText}</TableHead>
            <TableHead className="text-center">{starterPlan}</TableHead>
            <TableHead className="text-center">{professionalPlan}</TableHead>
            <TableHead className="text-center">{enterprisePlan}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonFeatures.map((feature, i) => (
            <TableRow key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-muted/30'}>
              <TableCell className="font-medium">{getFeatureText(feature.name)}</TableCell>
              <TableCell className="text-center">
                {typeof feature.starter === 'boolean' ? (
                  feature.starter ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" aria-label={includedText} />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground mx-auto" aria-label={notIncludedText} />
                  )
                ) : (
                  <span>{feature.starter}</span>
                )}
              </TableCell>
              <TableCell className="text-center">
                {typeof feature.professional === 'boolean' ? (
                  feature.professional ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" aria-label={includedText} />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground mx-auto" aria-label={notIncludedText} />
                  )
                ) : (
                  <span>{feature.professional}</span>
                )}
              </TableCell>
              <TableCell className="text-center">
                {typeof feature.enterprise === 'boolean' ? (
                  feature.enterprise ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" aria-label={includedText} />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground mx-auto" aria-label={notIncludedText} />
                  )
                ) : (
                  <span>{feature.enterprise}</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FeatureComparison;
