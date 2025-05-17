
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import BlogContent from '@/components/blog/BlogContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogCTA from '@/components/blog/BlogCTA';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [currentPost, setCurrentPost] = useState<typeof blogPosts[0] | null>(null);
  
  // Enhanced approach for finding posts based on language
  useEffect(() => {
    console.log('BlogPost: Finding post for language:', language, 'and slug:', slug);
    
    if (!slug) {
      console.warn('No slug provided');
      return;
    }
    
    // Group posts by slug to find translations
    const findAppropriatePost = () => {
      // Get all posts with the matching slug (different language versions)
      const postsWithSlug = blogPosts.filter(p => p.slug === slug);
      
      if (postsWithSlug.length === 0) {
        console.warn('No posts found with slug:', slug);
        setCurrentPost(null);
        return;
      }
      
      console.log(`Found ${postsWithSlug.length} posts with slug ${slug}:`, 
        postsWithSlug.map(p => `${p.id} (${p.language || 'default'})`));
      
      // Try to find exact language match
      const languageMatch = postsWithSlug.find(p => p.language === language);
      
      if (languageMatch) {
        console.log(`Found exact language match (${language}):`, languageMatch.id);
        setCurrentPost(languageMatch);
        return;
      }
      
      // Try to find generic post (no language)
      const genericPost = postsWithSlug.find(p => !p.language);
      
      if (genericPost) {
        console.log('Found generic post:', genericPost.id);
        setCurrentPost(genericPost);
        return;
      }
      
      // Last resort: use first available post
      console.log('Using first available post:', postsWithSlug[0].id);
      setCurrentPost(postsWithSlug[0]);
    };
    
    findAppropriatePost();
  }, [slug, language]);
  
  // Get the correct blog URL for redirects
  const getBlogUrl = () => {
    return language === 'fi' ? '/fi/full/blog' : '/full/blog';
  };
  
  // Redirect if post not found
  useEffect(() => {
    if (slug && !currentPost) {
      console.log('Post not found, redirecting to blog list');
      
      toast({
        title: "Post not found",
        description: "Redirecting to blog list",
        variant: "destructive",
      });
      
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
