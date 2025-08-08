'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

const BlogCarousel: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Kenelle Lyyli on tehty: viestinnän näkymätön taakka",
      excerpt: "Tutustu siihen, miten Lyyli auttaa organisaatioita purkamaan viestinnän näkymättömän taakan ja tehostamaan sisäistä viestintää.",
      author: "Mikko Oksanen",
      date: "6 kuukautta sitten",
      readTime: "4 min lukuaika",
      category: "Blogi",
      image: "/placeholder-blog-1.jpg"
    },
    {
      id: 2,
      title: "Miten pk-yritys säästi 80% aikaa viestinnässä",
      excerpt: "Tapaustutkimus siitä, miten suomalainen pk-yritys automatisoiti viestintäprosessinsa ja paransi tuottavuuttaan.",
      author: "Lyyli-tiimi",
      date: "4 kuukautta sitten",
      readTime: "7 min lukuaika",
      category: "Tapaustutkimus",
      image: "/placeholder-blog-2.jpg"
    },
    {
      id: 3,
      title: "Tekoälyn rooli viestinnän automaatiossa",
      excerpt: "Miksi tekoäly on muuttamassa tapaa, jolla yritykset viestivät ja miten se vaikuttaa asiantuntijaorganisaatioihin.",
      author: "Mikko Oksanen",
      date: "3 kuukautta sitten",
      readTime: "5 min lukuaika",
      category: "Uutiset",
      image: "/placeholder-blog-3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ajankohtaisia artikkeleita
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lue uusimmat näkemyksemme tekoälyavusteisesta viestinnästä ja asiantuntijaorganisaatioiden haasteista
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📝</div>
                  <p className="text-sm">Blogin kuva</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary text-xs font-bold">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">{post.author}</span>
                </div>

                {/* Read More */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  asChild
                >
                  <Link href={`/blog/${post.id}`}>
                    Lue lisää
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/10 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                  Suositeltu
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Tekoälyavusteinen viestintä: Tulevaisuuden työkalu asiantuntijaorganisaatioille
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Syvällinen analyysi siitä, miten tekoäly muuttaa tapaa, jolla asiantuntijaorganisaatiot viestivät. Tutustu konkreettisiin esimerkkeihin ja oppi miten hyödyntää tekoälyä viestintässäsi.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>2 viikkoa sitten</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>8 min lukuaika</span>
                </div>
              </div>
              <Button 
                className="bg-primary text-white hover:bg-primary/90"
                asChild
              >
                <Link href="/blog/featured">
                  Lue koko artikkeli
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-sm">Suositellun artikkelin kuva</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/blog">
              Katso kaikki artikkelit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel; 