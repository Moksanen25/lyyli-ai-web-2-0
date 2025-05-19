import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, HelpCircle, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/hooks/useLanguage';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FeatureComparisonProps {
  comparisonFeatures: {
    name: string;
    starter: boolean | string;
    professional: boolean | string;
    enterprise: boolean | string;
  }[];
  showFullComparison: boolean;
}

const FeatureComparison: React.FC<FeatureComparisonProps> = ({ comparisonFeatures, showFullComparison }) => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('pricing.comparison.title')}</h2>
          <p className="text-base md:text-xl text-primary/80 max-w-2xl mx-auto">
            {t('pricing.comparison.subtitle')}
          </p>
        </div>

        <ScrollArea className="w-full">
          <Table className="min-w-[800px] md:min-w-[1200px] lg:min-w-[1400px]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">{t('pricing.feature')}</TableHead>
                <TableHead className="text-center">{t('pricing.starter.name')}</TableHead>
                <TableHead className="text-center">{t('pricing.professional.name')}</TableHead>
                <TableHead className="text-center">{t('pricing.enterprise.name')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonFeatures.map((feature, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{t(`pricing.features.${feature.name}`) || feature.name}</TableCell>
                  <TableCell className="text-center">
                    {typeof feature.starter === 'boolean' ? (
                      feature.starter ? <Check className="mx-auto h-4 w-4" /> : <X className="mx-auto h-4 w-4" />
                    ) : (
                      feature.starter
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof feature.professional === 'boolean' ? (
                      feature.professional ? <Check className="mx-auto h-4 w-4" /> : <X className="mx-auto h-4 w-4" />
                    ) : (
                      feature.professional
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? <Check className="mx-auto h-4 w-4" /> : <X className="mx-auto h-4 w-4" />
                    ) : (
                      feature.enterprise
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </section>
  );
};

export default FeatureComparison;
