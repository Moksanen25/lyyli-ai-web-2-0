import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const ROICalculator = () => {
  const { t } = useLanguage();

  const [employees, setEmployees] = useState(50);
  const [avgSalary, setAvgSalary] = useState(75000);
  const [timeSpent, setTimeSpent] = useState(20);
  const [lyyliCost, setLyyliCost] = useState(10000);

  const calculateSavings = () => {
    const totalSalaryCost = employees * avgSalary;
    const timeCost = totalSalaryCost * (timeSpent / 100);
    const savings = timeCost - lyyliCost;
    const roi = ((savings - lyyliCost) / lyyliCost) * 100;

    return {
      timeCost: timeCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      savings: savings.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      roi: roi.toFixed(2),
    };
  };

  const { timeCost, savings, roi } = calculateSavings();

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">{t('roi.title')}</h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto">
            {t('roi.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-primary/80">{t('roi.employees')}</label>
              <input
                type="number"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="mt-1 block w-full rounded-md border-primary/30 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary/80">{t('roi.avgSalary')}</label>
              <input
                type="number"
                value={avgSalary}
                onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                className="mt-1 block w-full rounded-md border-primary/30 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary/80">{t('roi.timeSpent')}</label>
              <input
                type="number"
                value={timeSpent}
                onChange={(e) => setTimeSpent(parseInt(e.target.value))}
                className="mt-1 block w-full rounded-md border-primary/30 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary/80">{t('roi.lyyliCost')}</label>
              <input
                type="number"
                value={lyyliCost}
                onChange={(e) => setLyyliCost(parseInt(e.target.value))}
                className="mt-1 block w-full rounded-md border-primary/30 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary/90">{t('roi.totalSalaryCost')}</h3>
              <p className="text-2xl">{timeCost}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary/90">{t('roi.potentialSavings')}</h3>
              <p className="text-2xl">{savings}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary/90">{t('roi.roi')}</h3>
              <p className="text-2xl">{roi}%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
