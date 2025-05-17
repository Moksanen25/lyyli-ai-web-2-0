
import React, { useEffect, useState } from 'react';
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
  const [currentPost, setCurrentPost] = useState<typeof blogPosts[0] | null>(null);
  
  // Find the post with matching slug and language
  useEffect(() => {
    console.log('Finding post for language:', language, 'and slug:', slug);
    
    // Function to find the appropriate post based on slug and language
    const findPost = () => {
      if (!slug) return;
      
      // First try: exact match for both slug and specified language
      const exactMatch = blogPosts.find(p => 
        p.slug === slug && p.language === language
      );
      
      if (exactMatch) {
        console.log('Found exact language match:', exactMatch.title, 'language:', exactMatch.language);
        setCurrentPost(exactMatch);
        return;
      }
      
      // Second try: find a generic post (no language specified)
      const genericMatch = blogPosts.find(p => 
        p.slug === slug && !p.language
      );
      
      if (genericMatch) {
        console.log('Found generic match:', genericMatch.title);
        setCurrentPost(genericMatch);
        return;
      }
      
      // Last resort: any post with the matching slug
      const anyMatch = blogPosts.find(p => p.slug === slug);
      if (anyMatch) {
        console.log('Found fallback match:', anyMatch.title);
        setCurrentPost(anyMatch);
        return;
      }
      
      console.log('No match found for slug:', slug);
      setCurrentPost(null);
    };
    
    findPost();
  }, [slug, language]); // Re-run when language or slug changes
  
  // Get the correct blog URL for redirects
  const getBlogUrl = () => {
    return language === 'fi' ? '/fi/full/blog' : '/full/blog';
  };
  
  // Redirect if post not found
  useEffect(() => {
    if (slug && !currentPost) {
      navigate(getBlogUrl(), { replace: true });
    }
  }, [currentPost, navigate, slug, getBlogUrl]);
  
  // If post is still loading or not found
  if (!currentPost) {
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
  
  console.log('Rendering post in BlogPost component:', currentPost.title, 'in language:', currentPost.language || 'generic');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-28 pb-16">
          <BlogContent 
            post={currentPost} 
            key={`${currentPost.id}-${language}`} 
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
