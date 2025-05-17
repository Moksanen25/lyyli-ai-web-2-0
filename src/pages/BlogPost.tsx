
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import BlogContent from '@/components/blog/BlogContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogCTA from '@/components/blog/BlogCTA';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [postId, setPostId] = useState<string | null>(null);
  
  // Find the post with matching slug and language
  const post = useMemo(() => {
    console.log('Finding post for language:', language, 'and slug:', slug);
    
    // First try to find a direct match for both slug and language
    const exactMatch = blogPosts.find(p => 
      p.slug === slug && p.language === language
    );
    
    if (exactMatch) {
      console.log('Found exact language match:', exactMatch.title);
      setPostId(`${exactMatch.id}-${language}`);
      return exactMatch;
    }
    
    // If no match with current language, try finding a post without language specified
    const genericMatch = blogPosts.find(p => 
      p.slug === slug && !p.language
    );
    
    if (genericMatch) {
      console.log('Found generic match:', genericMatch.title);
      setPostId(`${genericMatch.id}-${language}`);
      return genericMatch;
    }
    
    // Final fallback: any post with the same slug
    const anyMatch = blogPosts.find(p => p.slug === slug);
    
    if (anyMatch) {
      console.log('Found fallback match:', anyMatch.title);
      setPostId(`${anyMatch.id}-${language}`);
      return anyMatch;
    }
    
    console.log('No match found for slug:', slug);
    setPostId(null);
    return null;
  }, [slug, language]); // Refresh when language or slug changes
  
  // Get the correct blog URL for redirects
  const getBlogUrl = () => {
    return language === 'fi' ? '/fi/full/blog' : '/full/blog';
  };
  
  // Redirect if post not found
  useEffect(() => {
    if (!post) {
      navigate(getBlogUrl(), { replace: true });
    }
  }, [post, navigate, getBlogUrl]);
  
  // If post is still loading or not found
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 pt-28">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-28 pb-16">
          {/* Key includes language to force re-render when language changes */}
          <BlogContent post={post} key={postId} />
          <RelatedPosts currentPost={post} posts={blogPosts} />
          <BlogCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
