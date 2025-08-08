import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blogData'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Artikkelia ei löytynyt - Lyyli AI',
    }
  }

  return {
    title: `${post.title} - Lyyli AI`,
    description: post.excerpt,
  }
}

export default function BlogPostPageFi({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>{post.publishDate}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} min luku</span>
            </div>
            
            {post.featuredImage && (
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg mb-8"
              />
            )}
          </header>
          
          <div 
            className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  )
}