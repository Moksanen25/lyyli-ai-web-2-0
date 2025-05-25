import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import BlogContent from '@/components/blog/BlogContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogCTA from '@/components/blog/BlogCTA';
import { useLanguage } from '@/hooks/useLanguage';
import { useSafeTranslation } from '@/utils/safeTranslation';
import { toast } from '@/components/ui/use-toast';
import { blogTranslations } from '@/components/blog/blogTranslations';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { safeT, blogT } = useSafeTranslation();
  const [currentPost, setCurrentPost] = useState<typeof blogPosts[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get the correct blog URL for redirects
  const getBlogUrl = () => {
    return language === 'fi' ? '/fi/full/blog' : '/full/blog';
  };
  
  // Get SEO metadata based on language and translation
  const getSEOData = () => {
    if (!currentPost) return null;
    
    const translationKey = `${currentPost.slug}-${language}`;
    const translation = language === 'fi' ? blogTranslations[translationKey] : null;
    
    const title = translation?.title || currentPost.title;
    const description = translation?.excerpt || currentPost.excerpt;
    
    const siteUrl = window.location.origin;
    const postUrl = `${siteUrl}${language === 'fi' ? '/fi' : ''}/full/blog/${currentPost.slug}`;
    
    return {
      title: `${title} | Lyyli.ai`,
      description,
      url: postUrl,
      image: currentPost.featuredImage,
      keywords: 'internal communication, AI assistant, founder story, leadership, organizational culture'
    };
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
      {seoData && (
        <Helmet>
          <title>{seoData.title}</title>
          <meta name="description" content={seoData.description} />
          <meta name="keywords" content={seoData.keywords} />
          
          {/* Open Graph tags */}
          <meta property="og:title" content={seoData.title} />
          <meta property="og:description" content={seoData.description} />
          <meta property="og:image" content={seoData.image} />
          <meta property="og:url" content={seoData.url} />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Lyyli.ai" />
          
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoData.title} />
          <meta name="twitter:description" content={seoData.description} />
          <meta name="twitter:image" content={seoData.image} />
          
          {/* Article specific tags */}
          <meta property="article:author" content={currentPost?.author.name} />
          <meta property="article:published_time" content={currentPost?.publishDate} />
          <meta property="article:section" content="Blog" />
          {currentPost?.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </Helmet>
      )}
      
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
