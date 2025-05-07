import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Separator } from '@/components/ui/separator';
import { Check, X, CircleCheck, CircleDollarSign, ListCheck } from "lucide-react";
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
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Define pricing data
interface Feature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

interface PricingTier {
  name: string;
  monthly: number;
  description: string;
  primaryFeatures: string[];
  secondaryFeatures?: string[];
  cta: string;
  accent: boolean;
  icon: React.ReactNode;
}

const PricingPage = () => {
  const { t } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [showFullComparison, setShowFullComparison] = useState(false);
  const navigate = useNavigate();
  
  // Define discount rate for yearly billing
  const yearlyDiscountRate = 0.8; // 20% discount
  
  // Define pricing tiers
  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      monthly: 199,
      description: 'Perfect for small and medium enterprises just getting started.',
      primaryFeatures: [
        'One AI agent',
        'Web app access',
        'Up to 3 integrations',
        'Single user account',
        'Basic support'
      ],
      cta: 'Get Started',
      accent: false,
      icon: <CircleDollarSign className="h-8 w-8 text-primary/80" />
    },
    {
      name: 'Professional',
      monthly: 499,
      description: 'Everything you need for a growing business with multiple needs.',
      primaryFeatures: [
        'Everything in Starter',
        'Native Slack & Teams apps',
        'AI image creation (50/month)',
        'Up to 6 integrations',
        'Three user accounts',
        'Priority support'
      ],
      secondaryFeatures: [
        'Additional images at 0.35€ each',
        'Advanced analytics',
        'Custom workflows'
      ],
      cta: 'Start Free Trial',
      accent: true,
      icon: <ListCheck className="h-8 w-8 text-white" />
    },
    {
      name: 'Enterprise',
      monthly: null,
      description: 'Custom solutions for large organizations with advanced requirements.',
      primaryFeatures: [
        'Everything in Professional',
        'Unlimited integrations',
        'Custom AI image allocation',
        'Unlimited user accounts',
        'Dedicated account manager',
        'Custom onboarding'
      ],
      cta: 'Contact Us',
      accent: false,
      icon: <CircleCheck className="h-8 w-8 text-primary/80" />
    }
  ];
  
  // Define comparison features for the detailed table
  const comparisonFeatures: Feature[] = [
    { name: 'AI Agents', starter: '1', professional: '1', enterprise: 'Custom' },
    { name: 'User Accounts', starter: '1', professional: '3', enterprise: 'Unlimited' },
    { name: 'Integrations', starter: '3', professional: '6', enterprise: 'Unlimited' },
    { name: 'Web App Access', starter: true, professional: true, enterprise: true },
    { name: 'Slack Integration', starter: false, professional: true, enterprise: true },
    { name: 'Teams Integration', starter: false, professional: true, enterprise: true },
    { name: 'AI Image Creation', starter: false, professional: '50/month', enterprise: 'Custom' },
    { name: 'Additional Images Cost', starter: 'N/A', professional: '0.35€', enterprise: 'Custom' },
    { name: 'Custom Workflows', starter: false, professional: true, enterprise: true },
    { name: 'API Access', starter: false, professional: false, enterprise: true },
    { name: 'White Labeling', starter: false, professional: false, enterprise: true },
    { name: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
    { name: 'Priority Support', starter: false, professional: true, enterprise: true },
    { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
    { name: 'Custom Onboarding', starter: false, professional: false, enterprise: true },
    { name: 'SLA', starter: false, professional: false, enterprise: true },
  ];
  
  // Calculate yearly price based on monthly with discount
  const getYearlyPrice = (monthlyPrice: number) => {
    return monthlyPrice * 12 * yearlyDiscountRate;
  };
  
  // Format price
  const formatPrice = (price: number | null, yearly = false): string => {
    if (price === null) return 'Custom';
    
    const finalPrice = yearly ? getYearlyPrice(price) : price;
    return `${finalPrice}€${yearly ? '/year' : '/month'}`;
  };
  
  // Calculate savings
  const calculateSavings = (monthlyPrice: number): string => {
    const monthlyCost = monthlyPrice * 12;
    const yearlyCost = getYearlyPrice(monthlyPrice);
    const savings = monthlyCost - yearlyCost;
    
    return savings.toFixed(0);
  };
  
  // Render check or X based on boolean value
  const renderCheckOrX = (value: boolean | string) => {
    if (typeof value === 'string') {
      return <span className="text-sm">{value}</span>;
    }
    
    return value ? 
      <Check className="h-5 w-5 text-primary" /> :
      <X className="h-5 w-5 text-muted-foreground" />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container-padding py-12 md:py-24 flex-grow animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your business needs. All plans include our core AI functionality.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mt-8 mb-4 space-x-4">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch 
              checked={billingPeriod === 'yearly'} 
              onCheckedChange={(checked) => setBillingPeriod(checked ? 'yearly' : 'monthly')}
            />
            <span className="flex items-center text-sm font-medium">
              <span className={billingPeriod === 'yearly' ? 'text-primary' : 'text-muted-foreground'}>Yearly</span>
              {billingPeriod === 'yearly' && (
                <Badge variant="outline" className="ml-2 bg-accent text-accent-foreground">
                  Save 20%
                </Badge>
              )}
            </span>
          </div>
        </div>
        
        {/* Main pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col h-full ${tier.accent ? 'bg-primary text-white shadow-lg' : 'bg-white'}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  {tier.icon}
                </div>
                <div className="mt-4 mb-2">
                  {tier.monthly !== null ? (
                    <div>
                      <span className="text-3xl font-bold">
                        {billingPeriod === 'monthly' 
                          ? `${tier.monthly}€` 
                          : `${getYearlyPrice(tier.monthly).toFixed(0)}€`
                        }
                      </span>
                      <span className="text-sm ml-1">
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold">Custom</span>
                  )}
                  {billingPeriod === 'yearly' && tier.monthly !== null && (
                    <div className="text-xs mt-1">
                      Save {calculateSavings(tier.monthly)}€ per year
                    </div>
                  )}
                </div>
                <CardDescription className={tier.accent ? "text-white/80" : ""}>
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {tier.primaryFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className={`h-4 w-4 flex-shrink-0 ${tier.accent ? 'text-white' : 'text-primary'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {tier.secondaryFeatures && tier.secondaryFeatures.length > 0 && (
                    <>
                      <Separator className={`my-4 ${tier.accent ? 'bg-white/20' : ''}`} />
                      {tier.secondaryFeatures.map((feature, index) => (
                        <li key={`secondary-${index}`} className="flex items-center gap-2">
                          <Check className={`h-4 w-4 flex-shrink-0 ${tier.accent ? 'text-white' : 'text-primary'}`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${tier.accent 
                    ? 'bg-white text-primary hover:bg-white/90' 
                    : 'bg-primary text-white'}`}
                  onClick={() => navigate('/contact')}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Toggle for detailed comparison */}
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            onClick={() => setShowFullComparison(!showFullComparison)}
          >
            {showFullComparison ? 'Hide' : 'Show'} Full Feature Comparison
          </Button>
        </div>
        
        {/* Full comparison table */}
        {showFullComparison && (
          <div className="mt-8 rounded-lg border bg-card shadow-sm p-1 overflow-hidden max-w-6xl mx-auto">
            <ScrollArea className="h-[500px] w-full">
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
            </ScrollArea>
          </div>
        )}
        
        {/* FAQ teaser */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-3">Have Questions?</h3>
          <p className="mb-4">Visit our FAQ page or contact us for more information about our plans.</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => navigate('/faq')}>View FAQ</Button>
            <Button onClick={() => navigate('/contact')}>Contact Sales</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
