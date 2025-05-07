
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PricingFAQ: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-bold mb-3">{t('pricing.faqTitle')}</h3>
      <p className="mb-4">{t('pricing.faqText')}</p>
      <div className="flex justify-center gap-4">
        <Button variant="outline" onClick={() => navigate('/faq')}>{t('pricing.faqButton')}</Button>
        <Button onClick={() => navigate('/contact')}>{t('pricing.contactButton')}</Button>
      </div>
    </div>
  );
};

export default PricingFAQ;
