'use client';


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';
import BookDemoDialog from '@/components/BookDemoDialog';

const SegmentCTA: React.FC = () => {
  const { t, language } = useLanguage();
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const waitlistPath = language === 'fi' ? '/fi/waitlist' : '/waitlist';
  
  return (
    <div className="text-center mt-16">
      <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
        {t('customerSegments.closingText')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          className="bg-primary hover:bg-primary/90 h-10 px-4 py-2"
          onClick={() => setShowDemoDialog(true)}
        >
          {t('common.bookDemo')}
        </Button>
        <Button 
          variant="outline" 
          className="border-primary text-primary h-10 px-4 py-2"
          asChild
        >
          <Link href={waitlistPath}>
            {t('customerSegments.viewComparisonButton')}
          </Link>
        </Button>
      </div>
      
      {/* Demo Booking Dialog */}
      <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </div>
  );
};

export default SegmentCTA;
