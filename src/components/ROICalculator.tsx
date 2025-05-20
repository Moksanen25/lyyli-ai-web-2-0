
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const ROICalculator = () => {
  const { calculatorT, language } = useLanguage();

  const [employees, setEmployees] = useState(50);
  const [avgSalary, setAvgSalary] = useState(75000);
  const [timeSpent, setTimeSpent] = useState(20);
  const [lyyliCost, setLyyliCost] = useState(10000);

  const calculateSavings = () => {
    const totalSalaryCost = employees * avgSalary;
    const timeCost = totalSalaryCost * (timeSpent / 100);
    const savings = timeCost - lyyliCost;
    const roi = ((savings - lyyliCost) / lyyliCost) * 100;

    // Format currency based on current language
    const currencyFormatter = new Intl.NumberFormat(language === 'fi' ? 'fi-FI' : 'en-US', { 
      style: 'currency', 
      currency: 'EUR' 
    });

    return {
      timeCost: currencyFormatter.format(timeCost),
      savings: currencyFormatter.format(savings),
      roi: roi.toFixed(2),
    };
  };

  const { timeCost, savings, roi } = calculateSavings();

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">{calculatorT('title')}</h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto">
            {calculatorT('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-primary/80">{calculatorT('employees')}</label>
              <input
                type="number"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value) || 0)}
                min="1"
                className="mt-1 block w-full rounded-md border-primary/30 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary/80">{calculatorT('avgSalary')}</label>
              <input
                type="number"
                value={avgSalary}
                onChange={(e) => setAvgSalary(parseInt(e.target.value) || 0)}
                min="0"
                className="mt-1 block w-full rounded-md border-primary/30 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary/80">{calculatorT('timeSpent')}</label>
              <input
                type="number"
                value={timeSpent}
                onChange={(e) => setTimeSpent(parseInt(e.target.value) || 0)}
                min="0"
                max="100"
                className="mt-1 block w-full rounded-md border-primary/30 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary/80">{calculatorT('lyyliCost')}</label>
              <input
                type="number"
                value={lyyliCost}
                onChange={(e) => setLyyliCost(parseInt(e.target.value) || 0)}
                min="0"
                className="mt-1 block w-full rounded-md border-primary/30 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary/90">{calculatorT('totalSalaryCost')}</h3>
              <p className="text-2xl">{timeCost}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary/90">{calculatorT('potentialSavings')}</h3>
              <p className="text-2xl">{savings}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary/90">{calculatorT('roi')}</h3>
              <p className="text-2xl">{roi}%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
