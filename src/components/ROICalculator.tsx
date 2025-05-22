
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

  // Default state values
  const [personnel, setPersonnel] = useState(50);
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="p-6 space-y-6">
            <div className="space-y-6">
              {/* Company Size Slider */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <Label className="text-base font-medium">{calculatorT('employees')}</Label>
                </div>
                <Slider 
                  value={[personnel]} 
                  min={10} 
                  max={500}
                  step={10} 
                  onValueChange={(value) => setPersonnel(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>10</span>
                  <span>500</span>
                </div>
                <div className="text-center font-medium">{personnel}</div>
              </div>

              {/* Communication Strategy Toggle */}
              <div className="space-y-4 pt-2">
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
                <div className="space-y-4">
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
                  <div className="space-y-4">
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
                  <div className="space-y-4">
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
            <Card className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-primary/90">
                  {usePartner ? calculatorT('annualPartnerCost') : calculatorT('annualStaffCost')}
                </h3>
              </div>
              <p className="text-2xl font-bold">{traditionalCost}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {usePartner 
                  ? calculatorT('partnerCostDesc') 
                  : safeTr('calculator.staffCostDesc', { count: hiredPersonnel })}
              </p>
            </Card>
            <Card className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Euro className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-primary/90">{calculatorT('lyyliCost')}</h3>
              </div>
              <p className="text-2xl font-bold">{lyyliCost}</p>
              <p className="text-sm text-muted-foreground mt-2">{calculatorT('lyyliCostDesc')}</p>
            </Card>
            <Card className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-primary/90">{calculatorT('annualSavings')}</h3>
              </div>
              <p className="text-2xl font-bold text-emerald-600">{savings}</p>
              <p className="text-sm text-muted-foreground mt-2">{calculatorT('savingsDesc')}</p>
            </Card>
            <Card className="bg-white p-6 rounded-lg shadow-md border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-primary/90">{calculatorT('roi')}</h3>
              </div>
              <p className="text-3xl font-bold text-primary">{roi}%</p>
              <p className="text-sm text-muted-foreground mt-2">{calculatorT('roiDesc')}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
