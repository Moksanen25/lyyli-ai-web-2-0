'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calculator, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroROIWidget: React.FC = () => {
  const { language } = useLanguage();
  const [teamSize, setTeamSize] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  // ROI Calculation based on communication assistants
  const calculateROI = () => {
    const monthlySalary = 3500; // €3,500 monthly salary for communication assistant
    const annualSalary = monthlySalary * 12; // €42,000 annual salary
    const employerCosts = annualSalary * 1.4; // €58,800 with employer costs (benefits, taxes, etc.)
    const efficiencyImprovement = 0.80; // 80% improvement in performance (time saved on routines)
    const timeSavingsValue = employerCosts * efficiencyImprovement * teamSize; // Value from 80% time savings per assistant
    const lyyliAnnualCost = 599 * 12; // €7,188 Professional subscription annual cost
    
    const netSavings = timeSavingsValue - lyyliAnnualCost; // Net savings
    const roi = (netSavings / lyyliAnnualCost) * 100; // ROI percentage
    
    return {
      savings: Math.round(netSavings).toLocaleString('en-US'),
      roi: Math.round(roi).toLocaleString('en-US'),
      timeSavingsValue: Math.round(timeSavingsValue).toLocaleString('en-US'),
      lyyliCost: lyyliAnnualCost.toLocaleString('en-US')
    };
  };

  const { savings, roi, timeSavingsValue, lyyliCost } = calculateROI();

  const getText = (key: string) => {
    const texts = {
      en: {
        title: 'See Your Savings',
        subtitle: 'ROI from 80% efficiency gain',
        teamSize: 'Communication assistants',
        employees: 'assistant(s)',
        annualSavings: 'Annual Savings',
        roiPercentage: 'ROI',
        vs: 'vs 80% time savings value',
        calculateFull: 'Calculate Full ROI',
        bookDemo: 'Book Demo',
        timeSavings: 'Time Savings Value'
      },
      fi: {
        title: 'Katso säästösi',
        subtitle: 'ROI 80% tehokkuuskasvusta',
        teamSize: 'Viestintäassistentit',
        employees: 'assistentti(a)',
        annualSavings: 'Vuosisäästöt',
        roiPercentage: 'ROI',
        vs: 'vs 80% ajansäästön arvo',
        calculateFull: 'Laske täysi ROI',
        bookDemo: 'Varaa demo',
        timeSavings: 'Ajansäästön arvo'
      }
    };
    return texts[language as keyof typeof texts]?.[key as keyof typeof texts.en] || texts.en[key as keyof typeof texts.en];
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm border-primary/20 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">{getText('title')}</h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">{getText('subtitle')}</p>
        
        {!isExpanded ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">€{savings}</div>
                <div className="text-xs text-muted-foreground">{getText('annualSavings')}</div>
              </div>
              <div className="text-center p-3 bg-emerald-50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-600">{roi}%</div>
                <div className="text-xs text-muted-foreground">{getText('roiPercentage')}</div>
              </div>
            </div>
            
            <p className="text-xs text-center text-muted-foreground">
              {getText('vs')}
            </p>
            
            <div className="text-xs text-center text-muted-foreground mb-2">
              {getText('timeSavings')}: €{timeSavingsValue} - Lyyli: €{lyyliCost}
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={() => setIsExpanded(true)}
              >
                {getText('calculateFull')}
              </Button>
              <Button 
                size="sm" 
                className="flex-1"
                asChild
              >
                <Link href={language === 'fi' ? '/fi/contact' : '/contact'}>
                  {getText('bookDemo')}
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {getText('teamSize')}
              </label>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Math.max(1, Math.min(5, parseInt(e.target.value) || 1)))}
                  className="text-center"
                  min="1"
                  max="5"
                />
                <span className="text-sm text-muted-foreground">{getText('employees')}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-xl font-bold text-primary">€{savings}</div>
                <div className="text-xs text-muted-foreground">{getText('annualSavings')}</div>
              </div>
              <div className="text-center p-3 bg-emerald-50 rounded-lg">
                <div className="text-xl font-bold text-emerald-600">{roi}%</div>
                <div className="text-xs text-muted-foreground">{getText('roiPercentage')}</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={() => setIsExpanded(false)}
              >
                ←
              </Button>
              <Button 
                size="sm" 
                className="flex-1"
                asChild
              >
                <Link href={language === 'fi' ? '/fi/pricing' : '/pricing'}>
                  {getText('calculateFull')} <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default HeroROIWidget;