'use client';


import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { TrialSignupDialog } from './TrialSignupDialog';
import { EnterpriseDialog } from './EnterpriseDialog';
import { WaitlistDialog } from './WaitlistDialog';
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
  const { track } = useAnalytics();
  const { t } = useLanguage();
  
  const monthlyPrice = monthly !== null ? monthly : undefined;
  const yearlyPrice = monthly !== null ? Math.round(monthly * 12 * yearlyDiscountRate) : undefined;
  
  const getPrice = () => {
    if (billingPeriod === 'monthly' && monthlyPrice !== undefined) {
      return `${monthlyPrice}€`;
    } else if (billingPeriod === 'yearly' && yearlyPrice !== undefined) {
      return `${yearlyPrice}€`;
    } else {
      return t('pricing.custom');
    }
  };
  
  const handleCtaClick = () => {
    track('pricing_cta_click', { plan: name });
    
    if (name === 'Free') {
      // Handle free plan signup
      setOpenTrialDialog(true);
    } else if (name === 'Starter') {
      setOpenTrialDialog(true);
    } else if (name === 'Growth') {
      setOpenWaitlistDialog(true);
    } else if (name === 'Professional') {
      setOpenWaitlistDialog(true);
    } else if (name === 'Enterprise') {
      setOpenEnterpriseDialog(true);
    }
  };

  return (
    <Card className={`h-full flex flex-col border-none transition-all duration-300 hover:-translate-y-2 group ${accent ? 'bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden shadow-xl' : 'bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl'}`}>
      {accent && (
        <>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </>
      )}
      {!accent && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
      
      <CardHeader className="space-y-2.5 flex-shrink-0 relative z-10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-semibold">{name}</CardTitle>
          <div className={`rounded-full p-3 transition-transform duration-300 group-hover:scale-110 ${accent ? 'bg-white/20' : 'bg-gradient-to-br from-primary/20 to-accent/20'}`}>
            {icon}
          </div>
        </div>
        <CardDescription className={`relative z-10 ${accent ? "text-white/90" : "text-muted-foreground"}`}>
          {description}
        </CardDescription>
        
        {/* Price section with consistent height */}
        <div className="mt-4 h-20 flex flex-col justify-center relative z-10">
          {monthly !== null ? (
            <>
              <div className="text-center">
                <span className="text-4xl font-bold">{getPrice()}</span>
                <span className="ml-1 text-sm">
                  {billingPeriod === 'yearly' ? t('pricing.perYear') : t('pricing.perMonth')}
                </span>
              </div>
              
              {billingPeriod === 'yearly' && monthly > 0 && (
                <div className="mt-1 text-center text-sm text-emerald-600 dark:text-emerald-400">
                  {t('pricing.save')} {Math.round((1 - yearlyDiscountRate) * 100)}%
                </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <span className="text-2xl font-bold">{t('pricing.custom')}</span>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow flex flex-col gap-4 relative z-10">
        <ul className="space-y-2 flex-grow">
          {primaryFeatures.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${accent ? 'text-white' : 'text-primary'}`} />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        {secondaryFeatures && (
          <div className="mt-4 pt-4 border-t border-gray-200/20">
            <Badge variant={accent ? "secondary" : "default"} className="mb-2 text-xs">
              {t('pricing.features.alsoIncluded')}
            </Badge>
            <ul className="space-y-2">
              {secondaryFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${accent ? 'text-white' : 'text-primary'}`} />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="mt-auto pt-6 relative z-10">
        <Button 
          className={`w-full min-h-[44px] font-semibold transition-all duration-300 hover:-translate-y-1 ${accent ? 'bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl' : 'bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl'}`}
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
