
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { TrialSignupDialog } from './TrialSignupDialog';
import { EnterpriseDialog } from './EnterpriseDialog';
import { WaitlistDialog } from './WaitlistDialog';
import { useProPlan } from '@/hooks/use-pro-plan';
import { useEnterprisePlan } from '@/hooks/use-enterprise-plan';
import { useFreePlan } from '@/hooks/use-free-plan';
import { useAnalytics } from '@/hooks/use-analytics';
import { useLanguage } from '@/hooks/useLanguage';
import { Badge } from '@/components/ui/badge';

interface PricingCardProps {
  name: string;
  monthly: number | null;
  description: string;
  primaryFeatures: string[];
  secondaryFeatures?: string[];
  cta: string;
  accent: boolean;
  icon: React.ReactNode;
  billingPeriod: 'monthly' | 'yearly';
  yearlyDiscountRate: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  monthly,
  description,
  primaryFeatures,
  secondaryFeatures,
  cta,
  accent,
  icon,
  billingPeriod,
  yearlyDiscountRate,
}) => {
  const [openTrialDialog, setOpenTrialDialog] = useState(false);
  const [openEnterpriseDialog, setOpenEnterpriseDialog] = useState(false);
  const [openWaitlistDialog, setOpenWaitlistDialog] = useState(false);
  const { isProPlan } = useProPlan();
  const { isEnterprisePlan } = useEnterprisePlan();
  const { isFreePlan } = useFreePlan();
  const { track } = useAnalytics();
  const { t } = useLanguage();
  
  const monthlyPrice = monthly !== null ? monthly : undefined;
  const yearlyPrice = monthly !== null ? Math.round(monthly * 12 * yearlyDiscountRate) : undefined;
  
  const getPrice = () => {
    if (billingPeriod === 'monthly' && monthlyPrice !== undefined) {
      return `${monthlyPrice} €`;
    } else if (billingPeriod === 'yearly' && yearlyPrice !== undefined) {
      return `${yearlyPrice} €`;
    } else {
      return t('pricing.custom');
    }
  };
  
  const handleCtaClick = () => {
    track('pricing_cta_click', { plan: name });
    
    if (name === 'Starter') {
      setOpenTrialDialog(true);
    } else if (name === 'Professional') {
      setOpenWaitlistDialog(true);
    } else if (name === 'Enterprise') {
      setOpenEnterpriseDialog(true);
    }
  };

  return (
    <Card className={`border-none card-shadow ${accent ? 'bg-primary text-white' : 'bg-white'}`}>
      <CardHeader className="space-y-2.5">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-semibold">{name}</CardTitle>
          <div className="rounded-full p-2 bg-secondary/20">
            {icon}
          </div>
        </div>
        <CardDescription className={accent ? "text-white" : ""}>{description}</CardDescription>
        
        {/* Display price more prominently */}
        {monthly !== null && (
          <div className="mt-4 text-center">
            <span className="text-3xl font-bold">{getPrice()}</span>
            <span className="ml-1 text-sm">
              {billingPeriod === 'yearly' ? t('pricing.perYear') : t('pricing.perMonth')}
            </span>
            
            {billingPeriod === 'yearly' && (
              <div className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
                {t('pricing.save')} {Math.round((1 - yearlyDiscountRate) * 100)}%
              </div>
            )}
          </div>
        )}
      </CardHeader>
      <CardContent className="grid gap-4">
        <ul className="space-y-2">
          {primaryFeatures.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>
        
        {secondaryFeatures && (
          <div className="mt-4">
            <Badge variant="secondary" className="mb-2">{t('pricing.features.alsoIncluded')}</Badge>
            <ul className="space-y-2">
              {secondaryFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant={accent ? "secondary" : "default"}
          onClick={handleCtaClick}
        >
          {cta}
        </Button>
      </CardFooter>
      
      <TrialSignupDialog open={openTrialDialog} onOpenChange={setOpenTrialDialog} />
      <EnterpriseDialog open={openEnterpriseDialog} onOpenChange={setOpenEnterpriseDialog} />
      <WaitlistDialog open={openWaitlistDialog} onOpenChange={setOpenWaitlistDialog} />
    </Card>
  );
};

export default PricingCard;
