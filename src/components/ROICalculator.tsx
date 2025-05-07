
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter 
} from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Slider 
} from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const ROICalculator: React.FC = () => {
  const { t } = useLanguage();
  
  // Calculator state
  const [companySize, setCompanySize] = useState<string>("medium");
  const [specialistSalary, setSpecialistSalary] = useState<number>(5000); // Monthly salary
  const [replacementRatio, setReplacementRatio] = useState<number>(30); // 30%
  
  // Calculated results
  const [monthlySavings, setMonthlySavings] = useState<number>(0);
  const [annualSavings, setAnnualSavings] = useState<number>(0);
  const [roi, setROI] = useState<number>(0);
  
  // Company sizes map to content creators
  const companySizeMap = {
    small: 2,
    medium: 5,
    large: 10
  };
  
  // Monthly Lyyli cost based on company size
  const monthlyLyyliCost = {
    small: 99,
    medium: 199,
    large: 399
  };
  
  const calculateROI = () => {
    // Get number of content creators based on company size
    const contentCreators = companySizeMap[companySize as keyof typeof companySizeMap];
    
    // Calculate time saved per month (in hours)
    const hoursPerCreatorPerMonth = 160; // Assuming 40h/week, 4 weeks
    const hoursSaved = hoursPerCreatorPerMonth * (replacementRatio / 100) * contentCreators;
    
    // Calculate cost of those hours
    const hourlyRate = specialistSalary / hoursPerCreatorPerMonth;
    const monthlySavingsValue = hourlyRate * hoursSaved;
    
    // Calculate ROI
    const monthlyCost = monthlyLyyliCost[companySize as keyof typeof monthlyLyyliCost];
    const roiValue = ((monthlySavingsValue - monthlyCost) / monthlyCost) * 100;
    
    // Update state
    setMonthlySavings(Math.round(monthlySavingsValue));
    setAnnualSavings(Math.round(monthlySavingsValue * 12));
    setROI(Math.round(roiValue));
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="calculator">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('calculator.title')}</h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            {t('calculator.subtitle')}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 animate-fade-in">
          <Card className="flex-1 border-none card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">{t('calculator.title')}</CardTitle>
              <CardDescription>{t('calculator.subtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('calculator.companySize')}
                </label>
                <Select
                  value={companySize}
                  onValueChange={(value) => setCompanySize(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t('calculator.companySize')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">{t('calculator.small')}</SelectItem>
                    <SelectItem value="medium">{t('calculator.medium')}</SelectItem>
                    <SelectItem value="large">{t('calculator.large')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">
                    {t('calculator.specialistSalary')}
                  </label>
                  <span className="text-sm font-medium">
                    €{specialistSalary.toLocaleString()}
                  </span>
                </div>
                <Slider 
                  value={[specialistSalary]} 
                  min={2000} 
                  max={12000} 
                  step={500} 
                  onValueChange={(value) => setSpecialistSalary(value[0])}
                  className="my-6"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">
                    {t('calculator.replacementRatio')}
                  </label>
                  <span className="text-sm font-medium">
                    {replacementRatio}%
                  </span>
                </div>
                <Slider 
                  value={[replacementRatio]} 
                  min={10} 
                  max={50} 
                  step={5} 
                  onValueChange={(value) => setReplacementRatio(value[0])}
                  className="my-6" 
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-primary hover:bg-primary/90" 
                onClick={calculateROI}
              >
                {t('calculator.calculate')}
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="flex-1 border-none card-shadow bg-accent/10">
            <CardHeader>
              <CardTitle className="text-2xl">Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-sm text-primary/70 mb-1">{t('calculator.monthlySavings')}</div>
                <div className="text-4xl font-bold font-playfair">€{monthlySavings.toLocaleString()}</div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-primary/70 mb-1">{t('calculator.annualSavings')}</div>
                <div className="text-4xl font-bold font-playfair">€{annualSavings.toLocaleString()}</div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-primary/70 mb-1">{t('calculator.roi')}</div>
                <div className="text-4xl font-bold font-playfair">{roi}%</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
