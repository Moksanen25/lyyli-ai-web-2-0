
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, FileImage } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useLanguage } from '@/hooks/useLanguage';
import { useSafeTranslation } from '@/utils/safeTranslation';
import type { BlogPost } from '@/data/blogData';
import { blogTranslations } from './blogTranslations';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  const { language } = useLanguage();
  const { safeT } = useSafeTranslation();
  const publishDate = new Date(post.publishDate);
  
  // Get the correct blog post URL based on language
  const getBlogPostUrl = () => {
    return language === 'fi' ? `/fi/full/blog/${post.slug}` : `/full/blog/${post.slug}`;
  };
  
  // Get translated title and excerpt if available
  const translationKey = `${post.slug}-${language}`;
  const translation = language === 'fi' ? blogTranslations[translationKey] : null;
  const title = translation?.title || post.title;
  const excerpt = translation?.excerpt || post.excerpt;
  
  // Add a visual indicator for translated posts in Finnish mode
  const hasTranslation = language === 'fi' && !!translation;
  
  // Check if the image URL is valid
  const isValidImageUrl = (url: string) => {
    return url && 
           url.startsWith('http') && 
           !url.includes('placeholder') &&
           !url.includes('example.com');
  };
  
  return (
    <div className="bg-primary/5 rounded-xl overflow-hidden shadow-lg mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Featured image */}
        <div className="relative h-56 lg:h-auto overflow-hidden">
          {isValidImageUrl(post.featuredImage) ? (
            <ImageWithFallback
              src={post.featuredImage}
              alt={title}
              className="w-full h-full object-cover"
              fallbackSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 p-6">
              <div className="text-center">
                <FileImage className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                <p className="text-primary/60 font-medium text-sm">{title}</p>
              </div>
            </div>
          )}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag, index) => {
              const tagKey = tag.toLowerCase().replace(/\s+/g, '');
              const translatedTag = safeT(`blog.tags.${tagKey}`, { fallback: tag });
              
              return (
                <Badge key={`${tag}-${index}-${language}`} variant="secondary" className="bg-white/90 hover:bg-white">
                  {translatedTag}
                </Badge>
              );
            })}
            {/* Add badge for translated content */}
            {hasTranslation && (
              <Badge className="bg-primary text-primary-foreground">
                {safeT('blog.translated', { fallback: 'Käännetty' })}
              </Badge>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 lg:p-8">
          <div className="text-sm text-muted-foreground mb-2 flex items-center">
            {formatDistanceToNow(publishDate, { addSuffix: true })} • {post.readTime} {safeT('blog.minuteRead')}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {title}
          </h2>
          
          <p className="text-muted-foreground mb-6">
            {excerpt}
          </p>
          
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold mr-3">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.author.title}</p>
            </div>
          </div>
          
          <Link href={getBlogPostUrl()}>
            <Button className="flex items-center">
              {safeT('blog.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
