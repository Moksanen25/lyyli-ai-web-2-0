
import React, { useEffect, useMemo } from 'react';
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
  
  // Find the post with matching slug
  const post = useMemo(() => {
    return blogPosts.find(p => p.slug === slug);
  }, [slug]);
  
  // Get the correct blog URL for redirects
  const getBlogUrl = () => {
    return language === 'fi' ? '/fi/full/blog' : '/full/blog';
  };
  
  // Redirect if post not found
  useEffect(() => {
    if (!post) {
      navigate(getBlogUrl(), { replace: true });
    }
  }, [post, navigate]);
  
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
          <BlogContent post={post} />
          <RelatedPosts currentPost={post} posts={blogPosts} />
          <BlogCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
