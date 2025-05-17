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
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);
  
  // Find the post with matching slug and language
  useEffect(() => {
    console.log('Finding post for language:', language, 'and slug:', slug);
    
    // Function to find the appropriate post based on slug and language
    const findPost = () => {
      // First try: exact match for both slug and specified language
      const exactMatch = blogPosts.find(p => 
        p.slug === slug && p.language === language
      );
      
      if (exactMatch) {
        console.log('Found exact language match:', exactMatch.title);
        setCurrentPostId(exactMatch.id);
        return;
      }
      
      // Second try: find a generic post (no language specified)
      const genericMatch = blogPosts.find(p => 
        p.slug === slug && !p.language
      );
      
      if (genericMatch) {
        console.log('Found generic match:', genericMatch.title);
        setCurrentPostId(genericMatch.id);
        return;
      }
      
      // Last resort: any post with the matching slug
      const anyMatch = blogPosts.find(p => p.slug === slug);
      if (anyMatch) {
        console.log('Found fallback match:', anyMatch.title);
        setCurrentPostId(anyMatch.id);
        return;
      }
      
      console.log('No match found for slug:', slug);
      setCurrentPostId(null);
    };
    
    findPost();
  }, [slug, language]); // Re-run when language or slug changes
  
  // Get the current post based on currentPostId
  const post = currentPostId 
    ? blogPosts.find(p => p.id === currentPostId) 
    : null;
  
  // Get the correct blog URL for redirects
  const getBlogUrl = () => {
    return language === 'fi' ? '/fi/full/blog' : '/full/blog';
  };
  
  // Redirect if post not found
  useEffect(() => {
    if (slug && !post) {
      navigate(getBlogUrl(), { replace: true });
    }
  }, [post, navigate, slug]);
  
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
  
  // Determine which content to show based on current language
  const getLocalizedContent = () => {
    // If the post's language matches current language, use it
    if (post.language === language) {
      return post;
    }
    
    // Otherwise, try to find a translation of this post
    const translatedVersion = blogPosts.find(p => 
      p.slug === post.slug && p.language === language
    );
    
    return translatedVersion || post; // Use translated version or fall back to current post
  };
  
  const displayPost = getLocalizedContent();
  console.log('Displaying post:', displayPost.title, 'in language:', displayPost.language || 'generic');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-28 pb-16">
          {/* Include language and post ID in the key to force re-render when either changes */}
          <BlogContent 
            post={displayPost} 
            key={`${displayPost.id}-${language}`} 
          />
          <RelatedPosts currentPost={displayPost} posts={blogPosts} />
          <BlogCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
