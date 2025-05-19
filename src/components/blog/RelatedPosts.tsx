
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import BlogCard from './BlogCard';
import type { BlogPost } from '@/data/blogData';

interface RelatedPostsProps {
  currentPost: BlogPost;
  posts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPost, posts }) => {
  const { t } = useLanguage();
  
  // Find posts with at least one matching tag
  const relatedPosts = posts
    .filter(post => 
      post.id !== currentPost.id && 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, 3);
    
  if (relatedPosts.length === 0) return null;
  
  return (
    <div className="max-w-6xl mx-auto my-16">
      <h2 className="text-2xl font-bold mb-6">{t('blog.relatedPosts')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
