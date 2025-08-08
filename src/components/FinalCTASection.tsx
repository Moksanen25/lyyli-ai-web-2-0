'use client';

import { useLanguage } from '@/hooks/useLanguage'

export default function FinalCTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-[#2F5D50]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          {t('finalCta.title')}
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          {t('finalCta.subtitle')}
        </p>
        <button className="bg-white text-[#2F5D50] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          {t('finalCta.button')}
        </button>
      </div>
    </section>
  )
}
