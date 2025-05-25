
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Users, Briefcase, Euro, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ROICalculator = () => {
  const { calculatorT, language, safeTr } = useLanguage();

  // Default state values (removed personnel state)
  const [commSalary, setCommSalary] = useState(3500);
  const [usePartner, setUsePartner] = useState(false);
  const [partnerFee, setPartnerFee] = useState(3000);
  const [hiredPersonnel, setHiredPersonnel] = useState(1);

  // Professional subscription annual cost
  const annualSubscription = 599 * 12; // 599€ per month * 12 months

  const calculateSavings = () => {
    // Calculate traditional costs
    let traditionalCost = 0;
    
    if (usePartner) {
      // Partner costs (monthly fee * 12)
      traditionalCost = partnerFee * 12;
    } else {
      // Internal personnel costs (salary * 1.4 multiplier for employer costs * 12 months * number of personnel)
      traditionalCost = commSalary * 1.4 * 12 * hiredPersonnel;
    }
    
    // Calculate savings compared to Lyyli subscription
    const savings = traditionalCost - annualSubscription;
    
    // Calculate ROI percentage
    const roi = (savings / annualSubscription) * 100;
    
    // Format currency based on current language
    const currencyFormatter = new Intl.NumberFormat(language === 'fi' ? 'fi-FI' : 'en-US', { 
      style: 'currency', 
      currency: 'EUR',
      maximumFractionDigits: 0
    });

    return {
      traditionalCost: currencyFormatter.format(traditionalCost),
      lyyliCost: currencyFormatter.format(annualSubscription),
      savings: currencyFormatter.format(savings),
      roi: roi.toFixed(1),
    };
  };

  const { traditionalCost, lyyliCost, savings, roi } = calculateSavings();

  return (
    <section className="py-16 md:py-24 bg-secondary/50" id="roi-calculator">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">{calculatorT('title')}</h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto">
            {calculatorT('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Section */}
          <Card className="p-8 space-y-8 h-fit">
            <div className="space-y-8">
              {/* Communication Strategy Toggle */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <Label htmlFor="partner-toggle" className="text-base font-medium">
                      {calculatorT('usePartner')}
                    </Label>
                  </div>
                  <Switch 
                    id="partner-toggle" 
                    checked={usePartner} 
                    onCheckedChange={setUsePartner}
                  />
                </div>
              </div>

              {/* Conditional inputs based on strategy */}
              {usePartner ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Euro className="h-5 w-5 text-primary" />
                    <Label className="text-base font-medium">{calculatorT('partnerFee')}</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input 
                      type="number" 
                      value={partnerFee}
                      onChange={(e) => setPartnerFee(Math.max(1000, Math.min(10000, parseInt(e.target.value) || 1000)))}
                      className="text-right" 
                    />
                    <span>€/{calculatorT('month')}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 000 €</span>
                    <span>10 000 €</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <Label className="text-base font-medium">{calculatorT('commPersonnel')}</Label>
                    </div>
                    <div className="flex justify-center gap-4">
                      <Button 
                        variant={hiredPersonnel === 0.5 ? "default" : "outline"}
                        onClick={() => setHiredPersonnel(0.5)} 
                        className="w-20"
                      >
                        0.5
                      </Button>
                      <Button 
                        variant={hiredPersonnel === 1 ? "default" : "outline"}
                        onClick={() => setHiredPersonnel(1)}
                        className="w-20"
                      >
                        1
                      </Button>
                      <Button 
                        variant={hiredPersonnel === 1.5 ? "default" : "outline"}
                        onClick={() => setHiredPersonnel(1.5)}
                        className="w-20"
                      >
                        1.5
                      </Button>
                      <Button 
                        variant={hiredPersonnel === 2 ? "default" : "outline"}
                        onClick={() => setHiredPersonnel(2)}
                        className="w-20"
                      >
                        2
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Euro className="h-5 w-5 text-primary" />
                      <Label className="text-base font-medium">{calculatorT('avgSalary')}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input 
                        type="number"
                        value={commSalary}
                        onChange={(e) => setCommSalary(Math.max(2500, Math.min(6000, parseInt(e.target.value) || 3500)))}
                        className="text-right"
                      />
                      <span>€/{calculatorT('month')}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>2 500 €</span>
                      <span>6 000 €</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Card>

          {/* Output Section */}
          <div className="space-y-6">
            <Card className="bg-white p-6 rounded-lg shadow-md h-fit">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-primary/90">
                  {usePartner ? calculatorT('annualPartnerCost') : calculatorT('annualStaffCost')}
                </h3>
              </div>
              <p className="text-3xl font-bold mb-2">{traditionalCost}</p>
              <p className="text-sm text-muted-foreground">
                {usePartner 
                  ? calculatorT('partnerCostDesc') 
                  : safeTr('calculator.staffCostDesc', { count: hiredPersonnel })}
              </p>
            </Card>
            
            <Card className="bg-white p-6 rounded-lg shadow-md h-fit">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-primary/90">{calculatorT('lyyliCost')}</h3>
              </div>
              <p className="text-3xl font-bold mb-2">{lyyliCost}</p>
              <p className="text-sm text-muted-foreground">{calculatorT('lyyliCostDesc')}</p>
            </Card>
            
            <Card className="bg-white p-6 rounded-lg shadow-md h-fit">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-primary/90">{calculatorT('annualSavings')}</h3>
              </div>
              <p className="text-3xl font-bold text-emerald-600 mb-2">{savings}</p>
              <p className="text-sm text-muted-foreground">{calculatorT('savingsDesc')}</p>
            </Card>
            
            <Card className="bg-white p-6 rounded-lg shadow-md border-2 border-primary/20 h-fit">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-primary/90">{calculatorT('roi')}</h3>
              </div>
              <p className="text-4xl font-bold text-primary mb-2">{roi}%</p>
              <p className="text-sm text-muted-foreground">{calculatorT('roiDesc')}</p>
            </Card>
          </div>
        </div>

        {/* Get Started CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="px-8 py-4 text-lg">
            Get Started
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Start saving today with Lyyli.ai
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
