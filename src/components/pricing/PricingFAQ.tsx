
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PricingFAQ: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-bold mb-3">Have Questions?</h3>
      <p className="mb-4">Visit our FAQ page or contact us for more information about our plans.</p>
      <div className="flex justify-center gap-4">
        <Button variant="outline" onClick={() => navigate('/faq')}>View FAQ</Button>
        <Button onClick={() => navigate('/contact')}>Contact Sales</Button>
      </div>
    </div>
  );
};

export default PricingFAQ;
