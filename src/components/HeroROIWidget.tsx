import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroROIWidget: React.FC = () => {
  const { language } = useLanguage();
  const [teamSize, setTeamSize] = useState(100);
  const [isExpanded, setIsExpanded] = useState(false);

  // ROI Calculation
  const calculateROI = () => {
    const traditionalCost = 84000; // Annual cost of hiring a communication manager
    const lyyliCost = 7188; // Annual Lyyli subscription cost
    const savings = traditionalCost - lyyliCost;
    const roi = ((savings / lyyliCost) * 100);
    
    return {
      savings: savings.toLocaleString('en-US'),
      roi: Math.round(roi).toLocaleString('en-US')
    };
  };

  const { savings, roi } = calculateROI();

  const getText = (key: string) => {
    const texts = {
      en: {
        title: 'See Your Savings',
        subtitle: 'Calculate ROI in 30 seconds',
        teamSize: 'Team size',
        employees: 'employees',
        annualSavings: 'Annual Savings',
        roiPercentage: 'ROI',
        vs: 'vs hiring communication staff',
        calculateFull: 'Calculate Full ROI',
        bookDemo: 'Book Demo'
      },
      fi: {
        title: 'Katso säästösi',
        subtitle: 'Laske ROI 30 sekunnissa',
        teamSize: 'Tiimin koko',
        employees: 'työntekijää',
        annualSavings: 'Vuosisäästöt',
        roiPercentage: 'ROI',
        vs: 'vs viestintähenkilöstön palkkaaminen',
        calculateFull: 'Laske täysi ROI',
        bookDemo: 'Varaa demo'
      },
      sv: {
        title: 'Se dina besparingar',
        subtitle: 'Beräkna ROI på 30 sekunder',
        teamSize: 'Teamstorlek',
        employees: 'anställda',
        annualSavings: 'Årliga besparingar',
        roiPercentage: 'ROI',
        vs: 'vs att anställa kommunikationspersonal',
        calculateFull: 'Beräkna full ROI',
        bookDemo: 'Boka demo'
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
                <Link to={language === 'fi' ? '/fi/contact' : language === 'sv' ? '/sv/contact' : '/contact'}>
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
                  onChange={(e) => setTeamSize(Math.max(30, Math.min(1000, parseInt(e.target.value) || 100)))}
                  className="text-center"
                  min="30"
                  max="1000"
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
                <Link to={language === 'fi' ? '/fi/pricing' : language === 'sv' ? '/sv/pricing' : '/pricing'}>
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