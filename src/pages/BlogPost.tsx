
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
    
    // Find appropriate post for the current language and slug
    const findPost = () => {
      // Get all posts with the matching slug (different language versions)
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
      
      // Try to find exact language match
      const exactLanguageMatch = postsWithSlug.find(p => p.language === language);
      
      if (exactLanguageMatch) {
        console.log(`Found exact language match (${language}):`, exactLanguageMatch.id);
        return exactLanguageMatch;
      }
      
      // Try to find generic post (no language)
      const genericPost = postsWithSlug.find(p => !p.language);
      
      if (genericPost) {
        console.log('Found generic post:', genericPost.id);
        return genericPost;
      }
      
      // Last resort: use first available post
      console.log('Using first available post:', postsWithSlug[0].id);
      return postsWithSlug[0];
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
