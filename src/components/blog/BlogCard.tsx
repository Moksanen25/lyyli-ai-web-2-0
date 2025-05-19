import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';
import { useLanguage } from '@/hooks/useLanguage';
import { useSafeTranslation } from '@/utils/safeTranslation';
import { FileImage } from 'lucide-react';
import type { BlogPost } from '@/data/blogData';
import { blogTranslations } from './blogTranslations';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
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
  
  return (
    <Card 
      className={`overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col ${
        featured ? 'bg-secondary/10' : 'bg-white'
      }`}
    >
      <Link to={getBlogPostUrl()} className="flex-grow flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Image area with tags */}
          <div className="relative bg-primary/5 h-48 overflow-hidden">
            {post.featuredImage.startsWith('http') ? (
              <img 
                src={post.featuredImage} 
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <FileImage className="h-12 w-12 text-muted-foreground" />
              </div>
            )}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag, index) => {
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
          
          {/* Content area */}
          <div className="p-5 flex-grow flex flex-col">
            <div className="text-xs text-muted-foreground mb-2 flex items-center">
              {formatDistanceToNow(publishDate, { addSuffix: true })} • {post.readTime} {safeT('blog.minuteRead')}
            </div>
            
            <h3 className={`${featured ? 'text-xl' : 'text-lg'} font-semibold mb-2 line-clamp-2`}>
              {title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {excerpt}
            </p>
            
            <div className="mt-auto flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold mr-2">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-medium">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.title}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BlogCard;
