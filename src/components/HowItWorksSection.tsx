'use client';

import { Clock, Sparkles, Users, Send } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

const steps = [
  {
    icon: Clock,
    titleKey: 'howItWorks.step1.title',
    descriptionKey: 'howItWorks.step1.description'
  },
  {
    icon: Sparkles,
    titleKey: 'howItWorks.step2.title',
    descriptionKey: 'howItWorks.step2.description'
  },
  {
    icon: Users,
    titleKey: 'howItWorks.step3.title',
    descriptionKey: 'howItWorks.step3.description'
  },
  {
    icon: Send,
    titleKey: 'howItWorks.step4.title',
    descriptionKey: 'howItWorks.step4.description'
  }
]

export default function HowItWorksSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(step.descriptionKey)}
                  </p>
                </div>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-primary"></div>
                    <div className="w-2 h-2 bg-primary rounded-full absolute -top-1 right-0"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Lue lisää
          </button>
        </div>
      </div>
    </section>
  )
} 