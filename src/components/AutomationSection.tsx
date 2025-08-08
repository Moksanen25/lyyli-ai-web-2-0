'use client';

import { Shield, Users, Database, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

const features = [
  {
    icon: Shield,
    titleKey: 'automation.features.security.title',
    descriptionKey: 'automation.features.security.description'
  },
  {
    icon: Users,
    titleKey: 'automation.features.management.title',
    descriptionKey: 'automation.features.management.description'
  },
  {
    icon: Database,
    titleKey: 'automation.features.integrations.title',
    descriptionKey: 'automation.features.integrations.description'
  },
  {
    icon: TrendingUp,
    titleKey: 'automation.features.scalability.title',
    descriptionKey: 'automation.features.scalability.description'
  }
]

export default function AutomationSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('automation.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('automation.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-[#2F5D50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#2F5D50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3A6A5C] transition-colors">
            Lue lisää
          </button>
        </div>
      </div>
    </section>
  )
}
