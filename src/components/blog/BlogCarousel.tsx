'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { formatDistanceToNow } from 'date-fns';
import { Badge } from '@/components/ui/badge';

const BlogCarousel: React.FC = () => {
  const router = useRouter();
  const {
    t,
    language
  } = useLanguage();
  // const navigate = useRouter(); // Unused variable removed

  // Get the 5 newest blog posts
  const newestPosts = [...blogPosts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0, 5);

  // Get the path prefix based on language
  const getPathPrefix = () => {
    return language === 'fi' ? '/fi' : '';
  };
  return <section className="py-12 md:py-24 bg-white">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold py-1 px-3 rounded-full mb-3">
            <BookOpen className="w-4 h-4 inline-block mr-1" />
            {t('blog.title')}
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('blog.subtitle')}</h2>
          
        </div>
        
        {/* Blog Carousel */}
        <div className="relative px-4 md:px-12 mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {newestPosts.map((post, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300" onClick={() => router.push(`${getPathPrefix()}/full/blog/${post.slug}`)}>
                      <CardContent className="p-0 flex flex-col h-full">
                        {/* Image area with tags */}
                        <div className="relative bg-primary/5 h-48 overflow-hidden">
                          {post.featuredImage && <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />}
                          <div className="absolute top-2 left-2">
                            {post.tags.slice(0, 1).map(tag => <Badge key={tag} variant="secondary" className="bg-white/90">
                                {tag}
                              </Badge>)}
                          </div>
                        </div>
                        
                        {/* Content area */}
                        <div className="p-4 flex-grow flex flex-col">
                          <div className="text-xs text-muted-foreground mb-2">
                            {formatDistanceToNow(new Date(post.publishDate), {
                          addSuffix: true
                        })} • {post.readTime} min read
                          </div>
                          
                          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-4" />
            <CarouselNext className="right-0 md:-right-4" />
          </Carousel>
        </div>
        
        {/* "View All" button */}
        <div className="text-center">
          <Button variant="outline" className="mt-4" onClick={() => router.push(`${getPathPrefix()}/full/blog`)}>
            {t('blog.readMore')} <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>;
};
export default BlogCarousel;
