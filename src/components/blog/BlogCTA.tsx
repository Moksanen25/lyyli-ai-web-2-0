
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const BlogCTA: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 md:p-10 my-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        {t('blog.ctaTitle')}
      </h2>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        {t('blog.ctaSubtitle')}
      </p>
      <Link to="/contact">
        <Button size="lg">
          {t('blog.ctaButton')}
        </Button>
      </Link>
    </div>
  );
};

export default BlogCTA;
