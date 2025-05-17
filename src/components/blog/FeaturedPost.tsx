
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, FileImage } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSafeTranslation } from '@/utils/safeTranslation';
import type { BlogPost } from '@/data/blogData';

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
  
  return (
    <div className="bg-primary/5 rounded-xl overflow-hidden shadow-lg mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Featured image */}
        <div className="relative h-56 lg:h-auto overflow-hidden">
          {post.featuredImage.startsWith('http') ? (
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-primary/10 p-6">
              <FileImage className="h-16 w-16 text-muted-foreground" />
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
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 lg:p-8">
          <div className="text-sm text-muted-foreground mb-2 flex items-center">
            {formatDistanceToNow(publishDate, { addSuffix: true })} • {post.readTime} {safeT('blog.minuteRead')}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {post.title}
          </h2>
          
          <p className="text-muted-foreground mb-6">
            {post.excerpt}
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
          
          <Link to={getBlogPostUrl()}>
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
