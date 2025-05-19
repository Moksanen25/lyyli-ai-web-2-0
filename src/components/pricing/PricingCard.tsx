
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from "lucide-react";
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

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
  yearlyDiscountRate
}) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  // Calculate yearly price based on monthly with discount
  const getYearlyPrice = (monthlyPrice: number) => {
    return monthlyPrice * 12 * yearlyDiscountRate;
  };
  
  // Calculate savings
  const calculateSavings = (monthlyPrice: number): string => {
    const monthlyCost = monthlyPrice * 12;
    const yearlyCost = getYearlyPrice(monthlyPrice);
    const savings = monthlyCost - yearlyCost;
    
    return savings.toFixed(0);
  };

  return (
    <Card className={`flex flex-col h-full ${accent ? 'bg-primary text-white shadow-lg' : 'bg-white'}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{name}</CardTitle>
          {icon}
        </div>
        <div className="mt-4 mb-2">
          {monthly !== null ? (
            <div>
              <span className="text-3xl font-bold">
                {billingPeriod === 'monthly' 
                  ? `${monthly}€` 
                  : `${getYearlyPrice(monthly).toFixed(0)}€`
                }
              </span>
              <span className="text-sm ml-1">
                /{billingPeriod === 'monthly' ? t('pricing.perMonth') : t('pricing.perYear')}
              </span>
            </div>
          ) : (
            <span className="text-3xl font-bold">{t('pricing.custom')}</span>
          )}
          {billingPeriod === 'yearly' && monthly !== null && (
            <div className="text-xs mt-1">
              {t('pricing.savePerYear', { amount: calculateSavings(monthly) })}
            </div>
          )}
        </div>
        <CardDescription className={accent ? "text-white/80" : ""}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {primaryFeatures.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className={`h-4 w-4 flex-shrink-0 ${accent ? 'text-white' : 'text-primary'}`} />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
          {secondaryFeatures && secondaryFeatures.length > 0 && (
            <>
              <Separator className={`my-4 ${accent ? 'bg-white/20' : ''}`} />
              {secondaryFeatures.map((feature, index) => (
                <li key={`secondary-${index}`} className="flex items-center gap-2">
                  <Check className={`h-4 w-4 flex-shrink-0 ${accent ? 'text-white' : 'text-primary'}`} />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </>
          )}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${accent 
            ? 'bg-white text-primary hover:bg-white/90' 
            : 'bg-primary text-white'}`}
          onClick={() => navigate('/contact')}
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
