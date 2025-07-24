
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Users, Briefcase, Euro, TrendingUp, BarChart3, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const ROICalculator = () => {
  const { calculatorT, language, safeTr } = useLanguage();

  // Updated state values based on new calculation parameters
  const [commSalary, setCommSalary] = useState(3500); // Changed default to €3,500
  const [usePartner, setUsePartner] = useState(false);
  const [partnerFee, setPartnerFee] = useState(3000);
  const [hiredPersonnel, setHiredPersonnel] = useState(1);

  // Professional subscription annual cost
  const annualSubscription = 599 * 12; // €7,188 per year

  const calculateSavings = () => {
    // Calculate traditional costs vs efficiency gains with Lyyli
    let traditionalCost = 0;
    let efficiencyValue = 0;
    
    if (usePartner) {
      // Partner costs (monthly fee * 12)
      traditionalCost = partnerFee * 12;
      // 80% efficiency improvement on partner work
      efficiencyValue = traditionalCost * 0.80;
    } else {
      // Internal personnel costs (salary * 1.4 multiplier for employer costs * 12 months * number of personnel)
      const annualSalaryWithCosts = commSalary * 1.4 * 12 * hiredPersonnel;
      traditionalCost = annualSalaryWithCosts;
      // 80% efficiency improvement = 80% of the salary costs saved through automation
      efficiencyValue = annualSalaryWithCosts * 0.80;
    }
    
    // Calculate net savings: efficiency value gained minus Lyyli subscription cost
    const netSavings = efficiencyValue - annualSubscription;
    
    // Calculate ROI percentage based on Lyyli investment
    const roi = (netSavings / annualSubscription) * 100;
    
    // Format currency based on current language
    const currencyFormatter = new Intl.NumberFormat(language === 'fi' ? 'fi-FI' : 'en-US', { 
      style: 'currency', 
      currency: 'EUR',
      maximumFractionDigits: 0
    });

    return {
      traditionalCost: currencyFormatter.format(traditionalCost),
      lyyliCost: currencyFormatter.format(annualSubscription),
      savings: currencyFormatter.format(netSavings),
      roi: roi.toFixed(1),
      efficiencyValue: currencyFormatter.format(efficiencyValue),
    };
  };

  const { traditionalCost, lyyliCost, savings, roi, efficiencyValue } = calculateSavings();

  return (
    <section className="py-16 md:py-24 bg-secondary/50" id="roi-calculator">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">{calculatorT('title')}</h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto mb-2">
            {calculatorT('subtitle')}
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            {language === 'fi' ? 
              'Laskuri perustuu 80% tehokkuusparannukseen viestintärutiineissa Lyyli.ai:n avulla' :
              language === 'sv' ?
              'Kalkylatorn baseras på 80% effektivitetsförbättring i kommunikationsrutiner med Lyyli.ai' :
              'Calculator based on 80% efficiency improvement in communication routines with Lyyli.ai'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Input Section + Core Results */}
          <div className="space-y-6">
            {/* Input Controls */}
            <Card className="p-8 space-y-8">
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

            {/* Current Cost */}
            <Card className="bg-white p-6 rounded-lg shadow-md">
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

            {/* Efficiency Value */}
            <Card className="bg-blue-50 p-6 rounded-lg shadow-md border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-700">
                  {language === 'fi' ? '80% tehokkuusarvo' : 
                   language === 'sv' ? '80% effektivitetsvärde' : 
                   '80% Efficiency Value'}
                </h3>
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-2">{efficiencyValue}</p>
              <p className="text-sm text-blue-600">
                {language === 'fi' ? 'Arvio säästetystä työajasta ja parantuneesta tehokkuudesta' :
                 language === 'sv' ? 'Uppskattat värde av sparad arbetstid och förbättrad effektivitet' :
                 'Estimated value of saved time and improved efficiency'}
              </p>
            </Card>
          </div>

          {/* Right Column - Final Results */}
          <div className="space-y-6">
            {/* ROI Card - Most Important Result First */}
            <Card className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-lg shadow-md border-2 border-emerald-200 relative overflow-hidden">
              {/* Background decoration inspired by Lyyli app */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-full opacity-20 transform translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-emerald-200 rounded-full opacity-15 transform -translate-x-4 translate-y-4"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-800">{calculatorT('roi')}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-emerald-600 font-medium">
                      {language === 'fi' ? 'Vuosituotto' : 
                       language === 'sv' ? 'Årlig avkastning' : 
                       'Annual Return'}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-5xl font-bold text-emerald-700 mb-2">{roi}%</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-emerald-100 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full transition-all duration-1000"
                        style={{width: `${Math.min(parseFloat(roi.replace(',', '')), 1000) / 10}%`}}
                      ></div>
                    </div>
                    <span className="text-xs text-emerald-600 font-medium">
                      {language === 'fi' ? 'Erinomainen' : language === 'sv' ? 'Utmärkt' : 'Excellent'}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-emerald-700">
                  {language === 'fi' ? 'Sijoitetun pääoman tuotto Lyyli-investoinnille' :
                   language === 'sv' ? 'Avkastning på investering för Lyyli-investering' :
                   'Return on investment for Lyyli investment'}
                </p>
              </div>
            </Card>

            {/* Net Savings */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md border border-blue-200 relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full opacity-30 transform translate-x-6 -translate-y-6"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Euro className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800">
                      {language === 'fi' ? 'Nettosäästöt' : 
                       language === 'sv' ? 'Nettobesparingar' : 
                       'Net Savings'}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {language === 'fi' ? 'Vuosittain' : language === 'sv' ? 'Årligen' : 'Annually'}
                    </div>
                  </div>
                </div>
                
                <p className="text-4xl font-bold text-blue-700 mb-3">{savings}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-blue-600">+15%</span>
                  <div className="text-xs text-blue-500">
                    {language === 'fi' ? 'vs edellinen vuosi' : language === 'sv' ? 'vs föregående år' : 'vs previous year'}
                  </div>
                </div>
                <p className="text-sm text-blue-600">
                  {language === 'fi' ? 'Tehokkuusarvo miinus Lyyli-kustannukset' :
                   language === 'sv' ? 'Effektivitetsvärde minus Lyyli-kostnader' :
                   'Efficiency value minus Lyyli costs'}
                </p>
              </div>
            </Card>

            {/* Lyyli Cost */}
            <Card className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <PieChart className="h-5 w-5 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700">{calculatorT('lyyliCost')}</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800 mb-2">{lyyliCost}</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-gray-400 h-1.5 rounded-full" style={{width: '25%'}}></div>
                </div>
                <span className="text-xs text-gray-500">25% of total value</span>
              </div>
              <p className="text-sm text-gray-600">{calculatorT('lyyliCostDesc')}</p>
            </Card>

            {/* Visual Summary - Enhanced with Lyyli app-style design */}
            <Card className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md border border-gray-100 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">
                    {language === 'fi' ? 'Laskelman yhteenveto' :
                     language === 'sv' ? 'Beräkningssammanfattning' :
                     'Calculation Summary'}
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        {language === 'fi' ? 'Tehokkuusarvo' : language === 'sv' ? 'Effektivitetsvärde' : 'Efficiency Value'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-blue-600">+{efficiencyValue}</span>
                      <div className="text-xs text-blue-500">80% improvement</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        {language === 'fi' ? 'Lyyli-kustannukset' : language === 'sv' ? 'Lyyli-kostnader' : 'Lyyli Costs'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-600">-{lyyliCost}</span>
                      <div className="text-xs text-gray-500">Annual subscription</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg px-4 -mx-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
                      <span className="font-semibold text-emerald-800">
                        {language === 'fi' ? 'Nettosäästöt' : language === 'sv' ? 'Nettobesparingar' : 'Net Savings'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-emerald-700">{savings}</span>
                      <div className="text-xs text-emerald-600">{roi}% ROI</div>
                    </div>
                  </div>
                </div>
              </div>
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

        {/* ROI Calculation Assumptions */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
              {language === 'fi' ? 'ROI-laskurin oletukset ja metodologia' :
               language === 'sv' ? 'ROI-kalkylatorn antaganden och metodik' :
               'ROI Calculator Assumptions & Methodology'}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-foreground mb-4">
                  {language === 'fi' ? 'Perusoletuket' :
                   language === 'sv' ? 'Grundantaganden' :
                   'Base Assumptions'}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-medium min-w-[120px]">
                      {language === 'fi' ? 'Oletuspalkka:' :
                       language === 'sv' ? 'Standardlön:' :
                       'Default Salary:'}
                    </span>
                    <span>€3,500/month ({language === 'fi' ? 'viestintäassistentti' : language === 'sv' ? 'kommunikationsassistent' : 'communication assistant'})</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium min-w-[120px]">
                      {language === 'fi' ? 'Työnantajakulut:' :
                       language === 'sv' ? 'Arbetsgivarkostnader:' :
                       'Employer Costs:'}
                    </span>
                    <span>+40% ({language === 'fi' ? 'edut, verot, yleiskulut' : language === 'sv' ? 'förmåner, skatter, omkostnader' : 'benefits, taxes, overhead'})</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium min-w-[120px]">
                      {language === 'fi' ? 'Lyyli Professional:' :
                       language === 'sv' ? 'Lyyli Professional:' :
                       'Lyyli Professional:'}
                    </span>
                    <span>€599/{language === 'fi' ? 'kk' : language === 'sv' ? 'månad' : 'month'} (€7,188/{language === 'fi' ? 'vuosi' : language === 'sv' ? 'år' : 'year'})</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-4">
                  {language === 'fi' ? 'Tehokkuusparannukset' :
                   language === 'sv' ? 'Effektivitetsförbättringar' :
                   'Efficiency Improvements'}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-medium min-w-[100px]">
                      {language === 'fi' ? 'Ajansäästö:' :
                       language === 'sv' ? 'Tidsbesparing:' :
                       'Time Savings:'}
                    </span>
                    <span>80% {language === 'fi' ? 'viestintärutiineissa' : language === 'sv' ? 'i kommunikationsrutiner' : 'in communication routines'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium min-w-[100px]">
                      {language === 'fi' ? 'Automaatio:' :
                       language === 'sv' ? 'Automation:' :
                       'Automation:'}
                    </span>
                    <span>{language === 'fi' ? 'Sisällönluonti, jakelu, seuranta' : language === 'sv' ? 'Innehållsskapande, distribution, uppföljning' : 'Content creation, distribution, tracking'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium min-w-[100px]">
                      {language === 'fi' ? 'Laatuparannus:' :
                       language === 'sv' ? 'Kvalitetsförbättring:' :
                       'Quality Improvement:'}
                    </span>
                    <span>{language === 'fi' ? 'Johdonmukainen brändiviestintä' : language === 'sv' ? 'Konsekvent varumärkeskommunikation' : 'Consistent brand messaging'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-medium text-foreground mb-4">
                {language === 'fi' ? 'Laskentakaava' :
                 language === 'sv' ? 'Beräkningsformel' :
                 'Calculation Formula'}
              </h4>
              <div className="bg-white rounded p-4 text-sm">
                <div className="font-mono text-center space-y-2">
                  <div className="text-blue-600">
                    {language === 'fi' ? 'Tehokkuusarvo' : language === 'sv' ? 'Effektivitetsvärde' : 'Efficiency Value'} = {language === 'fi' ? 'Vuosikustannukset' : language === 'sv' ? 'Årskostnader' : 'Annual Costs'} × 80%
                  </div>
                  <div className="text-emerald-600">
                    {language === 'fi' ? 'Nettosäästöt' : language === 'sv' ? 'Nettobesparingar' : 'Net Savings'} = {language === 'fi' ? 'Tehokkuusarvo' : language === 'sv' ? 'Effektivitetsvärde' : 'Efficiency Value'} - {language === 'fi' ? 'Lyyli-kustannukset' : language === 'sv' ? 'Lyyli-kostnader' : 'Lyyli Costs'}
                  </div>
                  <div className="text-primary">
                    ROI = ({language === 'fi' ? 'Nettosäästöt' : language === 'sv' ? 'Nettobesparingar' : 'Net Savings'} ÷ {language === 'fi' ? 'Lyyli-kustannukset' : language === 'sv' ? 'Lyyli-kostnader' : 'Lyyli Costs'}) × 100%
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-muted-foreground text-center">
              {language === 'fi' ? 
                'Huomaa: Tulokset ovat arvioita ja todelliset säästöt voivat vaihdella organisaation ja käyttötavan mukaan.' :
                language === 'sv' ?
                'Obs: Resultaten är uppskattningar och faktiska besparingar kan variera beroende på organisation och användning.' :
                'Note: Results are estimates and actual savings may vary based on organization and usage patterns.'
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
