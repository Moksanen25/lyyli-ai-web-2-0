'use client';

import { useLanguage } from '@/hooks/useLanguage'

const blogPosts = [
  {
    title: "Miten tekoäly muuttaa yritysviestintää vuonna 2024",
    description: "Tutustu viestintäteknologian uusimpiin trendeihin ja miten ne vaikuttavat yritysten viestintään.",
    date: "15.1.2024",
    category: "Tekoäly"
  },
  {
    title: "5 tapaa parantaa asiakasviestintää automaatiolla",
    description: "Käytännön vinkkejä siitä, miten automaatio voi tehostaa asiakasviestintääsi merkittävästi.",
    date: "12.1.2024",
    category: "Automaatio"
  },
  {
    title: "Tapaustutkimus: TechCorp Oy:n viestintämuutos",
    description: "Katso miten TechCorp Oy paransi viestintätehokkuuttaan 300% Lyylin avulla.",
    date: "10.1.2024",
    category: "Tapaustutkimus"
  }
]

export default function InsightsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('insights.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('insights.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.description}
                </p>
                <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                  Lue lisää →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Katso kaikki
          </button>
        </div>
      </div>
    </section>
  )
}
