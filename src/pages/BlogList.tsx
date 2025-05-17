
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSafeTranslation } from '@/utils/safeTranslation';
import { blogPosts } from '@/data/blogData';
import FeaturedPost from '@/components/blog/FeaturedPost';
import BlogCard from '@/components/blog/BlogCard';
import TagFilter from '@/components/blog/TagFilter';
import BlogCTA from '@/components/blog/BlogCTA';

const BlogList: React.FC = () => {
  const { language } = useLanguage();
  const { safeT } = useSafeTranslation();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Filter posts based on language preference
  const languageFilteredPosts = useMemo(() => {
    // Get posts for current language or language-agnostic posts
    return blogPosts.filter(post => !post.language || post.language === language);
  }, [language]);
  
  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    languageFilteredPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [languageFilteredPosts]);
  
  // Filter posts based on selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return languageFilteredPosts;
    return languageFilteredPosts.filter(post => post.tags.includes(selectedTag));
  }, [selectedTag, languageFilteredPosts]);
  
  // Find featured post (either first highlighted or first post)
  const featuredPost = useMemo(() => {
    const highlightedPost = languageFilteredPosts.find(post => post.isHighlighted);
    return highlightedPost || (languageFilteredPosts.length > 0 ? languageFilteredPosts[0] : null);
  }, [languageFilteredPosts]);
  
  // Remove featured post from regular posts list
  const regularPosts = useMemo(() => {
    if (!featuredPost) return filteredPosts;
    return filteredPosts.filter(post => post.id !== featuredPost.id);
  }, [filteredPosts, featuredPost]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Blog header */}
        <div className="bg-gradient-to-b from-primary/10 to-background pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{safeT('blog.title')}</h1>
              <p className="text-xl text-muted-foreground">{safeT('blog.subtitle')}</p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          {/* Featured post - only show on "All" filter */}
          {!selectedTag && featuredPost && <FeaturedPost post={featuredPost} />}
          
          {/* Tag filtering */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">{safeT('blog.filterByTag')}:</h2>
            <TagFilter 
              tags={allTags} 
              selectedTag={selectedTag} 
              onSelectTag={setSelectedTag} 
            />
          </div>
          
          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={`${post.id}-${language}`} post={post} />
            ))}
          </div>
          
          {/* No results message */}
          {regularPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">{safeT('blog.noFilteredResults')}</p>
            </div>
          )}
          
          {/* CTA */}
          <BlogCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
