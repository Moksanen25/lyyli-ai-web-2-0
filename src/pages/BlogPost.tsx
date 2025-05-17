import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import BlogContent from '@/components/blog/BlogContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogCTA from '@/components/blog/BlogCTA';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSafeTranslation } from '@/utils/safeTranslation';
import { toast } from '@/components/ui/use-toast';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { safeT } = useSafeTranslation();
  const [currentPost, setCurrentPost] = useState<typeof blogPosts[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get the correct blog URL for redirects
  const getBlogUrl = () => {
    return language === 'fi' ? '/fi/full/blog' : '/full/blog';
  };
  
  // Enhanced approach for finding posts based on language
  useEffect(() => {
    console.log('BlogPost: Finding post for language:', language, 'and slug:', slug);
    setIsLoading(true);
    
    if (!slug) {
      console.warn('No slug provided');
      navigate(getBlogUrl(), { replace: true });
      return;
    }
    
    // Find post regardless of language
    const findPost = () => {
      // Get all posts with the matching slug
      const postsWithSlug = blogPosts.filter(p => p.slug === slug);
      
      if (postsWithSlug.length === 0) {
        console.warn('No posts found with slug:', slug);
        
        toast({
          title: safeT('blog.postNotFound'),
          description: safeT('blog.redirecting'),
          variant: "destructive",
        });
        
        navigate(getBlogUrl(), { replace: true });
        return null;
      }
      
      console.log(`Found ${postsWithSlug.length} posts with slug ${slug}:`, 
        postsWithSlug.map(p => `${p.id} (${p.language || 'default'})`));
      
      // Try to find post based on language preference:
      // 1. First try exact match by language
      // 2. Then try language-agnostic post
      // 3. Finally fall back to any available post
      
      // In Finnish mode, we don't need to be strict - show all posts
      if (language === 'fi') {
        // Prioritize Finnish posts if available
        const fiPost = postsWithSlug.find(p => p.language === 'fi');
        if (fiPost) {
          console.log('Found Finnish post:', fiPost.id);
          return fiPost;
        }
        
        console.log('No Finnish post found, using first available post');
        // Otherwise show any post (will be translated by UI)
        return postsWithSlug[0];
      } else {
        // In English mode, prioritize English posts
        const enPost = postsWithSlug.find(p => !p.language || p.language === 'en');
        if (enPost) {
          console.log('Found English post:', enPost.id);
          return enPost;
        }
        
        console.log('No English post found, using first available post');
        // Fall back to any post if needed
        return postsWithSlug[0];
      }
    };
    
    const foundPost = findPost();
    setCurrentPost(foundPost);
    setIsLoading(false);
    
    if (!foundPost) {
      navigate(getBlogUrl(), { replace: true });
    }
  }, [slug, language, navigate, getBlogUrl, safeT]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 pt-28">
          <p>{safeT('blog.loading')}</p>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!currentPost) {
    return null; // Will redirect in useEffect
  }
  
  console.log('BlogPost: Rendering post:', currentPost.id, 'title:', currentPost.title, 'language:', currentPost.language || 'default');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-28 pb-16">
          <BlogContent 
            post={currentPost} 
            key={`post-${currentPost.id}-${language}`} 
          />
          <RelatedPosts currentPost={currentPost} posts={blogPosts} />
          <BlogCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
