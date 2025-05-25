
import React, { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { ChevronLeft, FileImage } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useSafeTranslation } from '@/utils/safeTranslation';
import type { BlogPost } from '@/data/blogData';
import TranslatedContent from './TranslatedContent';
import { blogTranslations } from './blogTranslations';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';

interface BlogContentProps {
  post: BlogPost;
}

const BlogContent: React.FC<BlogContentProps> = ({ post }) => {
  const { language } = useLanguage();
  const { safeT } = useSafeTranslation();
  const publishDate = new Date(post.publishDate);
  
  // Get the correct blog URL based on the current language
  const getBlogUrl = () => {
    return language === 'fi' ? '/fi/full/blog' : '/full/blog';
  };
  
  // Check if we have a translation for this post
  const translationKey = `${post.slug}-${language}`;
  const translation = language === 'fi' ? blogTranslations[translationKey] : null;
  
  // Use translated title/content when available
  const title = translation?.title || post.title;
  const content = translation?.content || post.content;
  
  useEffect(() => {
    console.log('BlogContent: Mounted/updated with:', {
      postId: post.id,
      postTitle: post.title,
      postLanguage: post.language || 'default',
      currentLanguage: language,
      hasTranslation: !!translation,
      isFinnishMode: language === 'fi'
    });
  }, [post.id, post.title, post.language, language, translation]);
  
  // Check if the image URL is valid
  const isValidImageUrl = (url: string) => {
    return url && 
           url.startsWith('http') && 
           !url.includes('placeholder') &&
           !url.includes('example.com');
  };
  
  return (
    <article className="max-w-3xl mx-auto">
      {/* Back to blog link - translated */}
      <Link to={getBlogUrl()} className="text-muted-foreground hover:text-primary inline-flex items-center mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" /> {safeT('blog.backToBlog')}
      </Link>
      
      {/* Tags - translated */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => {
          const tagKey = tag.toLowerCase().replace(/\s+/g, '');
          const translatedTag = safeT(`blog.tags.${tagKey}`, { fallback: tag });
          
          return (
            <Badge key={`${tag}-${index}-${language}`} variant="outline">
              {translatedTag}
            </Badge>
          );
        })}
      </div>
      
      {/* Use TranslatedContent wrapper for the blog content */}
      <TranslatedContent post={post}>
        {/* Title - use translated title if available */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h1>
        
        {/* Meta info - partially translated */}
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold mr-3">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">
              {post.author.title} • {safeT('blog.publishedOn')} {format(publishDate, 'MMMM d, yyyy')} • {post.readTime} {safeT('blog.minuteRead')}
            </p>
          </div>
        </div>
        
        {/* Featured image with improved fallback */}
        <div className="rounded-lg h-auto overflow-hidden mb-8">
          {isValidImageUrl(post.featuredImage) ? (
            <ImageWithFallback
              src={post.featuredImage}
              alt={title}
              className="w-full h-64 md:h-80 object-cover"
              fallbackSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            />
          ) : (
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 h-64 md:h-80 flex items-center justify-center border border-primary/20 rounded-lg">
              <div className="text-center">
                <FileImage className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                <p className="text-primary/60 font-medium">{title}</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Content - use translated content if available */}
        <div 
          className="prose prose-lg max-w-none mb-10 blog-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </TranslatedContent>
      
      {/* Share - translated */}
      <div className="border-t border-b py-6 my-10">
        <p className="font-medium mb-3">{safeT('blog.sharePost')}</p>
        <div className="flex space-x-4">
          {/* Placeholder for social share buttons */}
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200">
            <span className="text-blue-700">F</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200">
            <span className="text-blue-700">T</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200">
            <span className="text-blue-700">L</span>
          </div>
        </div>
      </div>
      
      {/* Author info - partially translated */}
      <div className="bg-secondary/10 p-6 rounded-lg mb-10">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-semibold mr-4">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-lg">{post.author.name}</p>
            <p className="text-muted-foreground">{post.author.title}</p>
          </div>
        </div>
        <p className="text-muted-foreground">
          {safeT('blog.authorBio')}
        </p>
      </div>
    </article>
  );
};

export default BlogContent;
