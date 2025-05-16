
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import BookDemoDialog from '@/components/BookDemoDialog';

interface SegmentBlockProps {
  id: string;
  title: string;
  tagline: string;
  description: string[];
  caseStudy?: {
    quote: string;
    author: string;
  };
  image?: string;
  reverse?: boolean;
}

const SegmentBlock: React.FC<SegmentBlockProps> = ({
  id,
  title,
  tagline,
  description,
  caseStudy,
  image,
  reverse = false,
}) => {
  const { t } = useLanguage();
  const [showDemoDialog, setShowDemoDialog] = useState(false);

  return (
    <section id={id} className="py-16 md:py-24 scroll-mt-20">
      <div className="container-padding container mx-auto">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
            <p className="text-xl font-light text-primary/80 mb-6">{tagline}</p>
            
            {description.map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
            ))}
            
            {caseStudy && (
              <Card className="mt-8 bg-primary/5 border-none">
                <CardContent className="p-6">
                  <p className="italic mb-4">"{caseStudy.quote}"</p>
                  <p className="font-semibold text-sm">— {caseStudy.author}</p>
                </CardContent>
              </Card>
            )}
            
            <Button 
              className="mt-8 bg-primary hover:bg-primary/90"
              onClick={() => setShowDemoDialog(true)}
            >
              {t('common.bookDemo')}
            </Button>
          </div>
          
          {/* Image */}
          <div className="flex-1">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video bg-primary/10 flex items-center justify-center">
              {image ? (
                <img src={image} alt={title} className="w-full h-auto" />
              ) : (
                <div className="text-primary/50 text-lg">
                  {title} visualization
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Demo Dialog */}
      <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </section>
  );
};

export default SegmentBlock;
