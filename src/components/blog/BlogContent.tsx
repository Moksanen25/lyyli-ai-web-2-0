
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { ChevronLeft, FileImage } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { BlogPost } from '@/data/blogData';

interface BlogContentProps {
  post: BlogPost;
}

const BlogContent: React.FC<BlogContentProps> = ({ post }) => {
  const { t, language } = useLanguage();
  const publishDate = new Date(post.publishDate);
  
  // Get the correct blog URL based on the current language
  const getBlogUrl = () => {
    return language === 'fi' ? '/fi/full/blog' : '/full/blog';
  };
  
  return (
    <article className="max-w-3xl mx-auto">
      {/* Back to blog link */}
      <Link to={getBlogUrl()} className="text-muted-foreground hover:text-primary inline-flex items-center mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" /> {t('blog.backToBlog')}
      </Link>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <Badge key={index} variant="outline">
            {t(`blog.tags.${tag.toLowerCase().replace(/\s+/g, '')}`) || tag}
          </Badge>
        ))}
      </div>
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {post.title}
      </h1>
      
      {/* Meta info */}
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold mr-3">
          {post.author.name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{post.author.name}</p>
          <p className="text-sm text-muted-foreground">
            {post.author.title} • {t('blog.publishedOn')} {format(publishDate, 'MMMM d, yyyy')} • {post.readTime} {t('blog.minuteRead')}
          </p>
        </div>
      </div>
      
      {/* Featured image */}
      <div className="rounded-lg h-auto overflow-hidden mb-8">
        {post.featuredImage.startsWith('http') ? (
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-auto object-cover"
          />
        ) : (
          <div className="bg-primary/5 h-64 flex items-center justify-center">
            <FileImage className="h-16 w-16 text-muted-foreground" />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div 
        className="prose prose-lg max-w-none mb-10 blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      {/* Share */}
      <div className="border-t border-b py-6 my-10">
        <p className="font-medium mb-3">{t('blog.sharePost')}</p>
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
      
      {/* Author bio */}
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
          {t('blog.authorBio')}
        </p>
      </div>
    </article>
  );
};

export default BlogContent;
