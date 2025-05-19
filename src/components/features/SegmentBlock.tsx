
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';
import BookDemoDialog from '@/components/BookDemoDialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Building, 
  Briefcase, 
  Handshake, 
  School, 
  Lightbulb, 
  Flag 
} from 'lucide-react';

interface SegmentBlockProps {
  id: string;
  title: string;
  tagline: string;
  description: string | string[];
  caseStudy?: {
    quote: string;
    author: string;
  };
  image?: string;
  icon?: 'tech' | 'consulting' | 'nonprofit' | 'education' | 'creative' | 'sports';
  reverse?: boolean;
}

const SegmentBlock: React.FC<SegmentBlockProps> = ({
  id,
  title,
  tagline,
  description,
  caseStudy,
  image,
  icon,
  reverse = false,
}) => {
  const { t } = useLanguage();
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  
  // Process description to ensure it's always an array
  const descriptionArray = Array.isArray(description) ? description : [description];

  // Helper function to render the appropriate icon
  const renderIcon = () => {
    switch (icon) {
      case 'tech':
        return <Building size={48} className="text-primary" />;
      case 'consulting':
        return <Briefcase size={48} className="text-primary" />;
      case 'nonprofit':
        return <Handshake size={48} className="text-primary" />;
      case 'education':
        return <School size={48} className="text-primary" />;
      case 'creative':
        return <Lightbulb size={48} className="text-primary" />;
      case 'sports':
        return <Flag size={48} className="text-primary" />;
      default:
        return null;
    }
  };

  return (
    <section id={id} className="py-16 md:py-24 scroll-mt-20">
      <div className="container-padding container mx-auto">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
            <p className="text-xl font-light text-primary/80 mb-6">{tagline}</p>
            
            {descriptionArray.map((paragraph, idx) => (
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
          
          {/* Image or Icon Visualization */}
          <div className="flex-1">
            <AspectRatio ratio={16 / 9}>
              {image ? (
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover rounded-lg shadow-lg" 
                />
              ) : (
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 flex flex-col items-center justify-center">
                  {renderIcon()}
                  <div className="mt-4 text-primary/80 text-lg font-medium">
                    {title}
                  </div>
                </div>
              )}
            </AspectRatio>
          </div>
        </div>
      </div>
      
      {/* Demo Dialog */}
      <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </section>
  );
};

export default SegmentBlock;
