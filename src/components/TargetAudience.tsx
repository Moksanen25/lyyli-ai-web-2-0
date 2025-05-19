import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const TargetAudience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t('targetAudience.title')}</h2>
        <p className="text-gray-600 mb-8">{t('targetAudience.subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-xl font-semibold">{t('targetAudience.smallBusinesses.title')}</h3>
            <p className="text-gray-500">{t('targetAudience.smallBusinesses.description')}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{t('targetAudience.mediumBusinesses.title')}</h3>
            <p className="text-gray-500">{t('targetAudience.mediumBusinesses.description')}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{t('targetAudience.largeEnterprises.title')}</h3>
            <p className="text-gray-500">{t('targetAudience.largeEnterprises.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
