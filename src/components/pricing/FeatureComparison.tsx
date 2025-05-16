
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
  
  // Render check or X based on boolean value
  const renderCheckOrX = (value: boolean | string) => {
    if (typeof value === 'string') {
      return <span className="text-sm">{value}</span>;
    }
    
    return value ? 
      <Check className="h-5 w-5 text-primary" aria-label="Included" /> :
      <X className="h-5 w-5 text-muted-foreground" aria-label="Not included" />;
  };

  if (!showFullComparison) return null;

  return (
    <div className="mt-8 rounded-lg border bg-card shadow-sm p-1 overflow-hidden max-w-6xl mx-auto">
      <ScrollArea className={isMobile ? "h-[400px]" : "h-[500px]"}>
        <div className={isMobile ? "min-w-[640px]" : ""}>
          <Table>
            <TableCaption>Complete feature comparison across all plans</TableCaption>
            <TableHeader className="sticky top-0 bg-card z-10">
              <TableRow>
                <TableHead className="w-[300px]">Feature</TableHead>
                <TableHead className="text-center">Starter</TableHead>
                <TableHead className="text-center">Professional</TableHead>
                <TableHead className="text-center">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonFeatures.map((feature) => (
                <TableRow key={feature.name}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
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
