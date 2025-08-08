'use client';

import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

const tabs = [
  { key: 'sales', labelKey: 'solutions.tabs.sales' },
  { key: 'marketing', labelKey: 'solutions.tabs.marketing' },
  { key: 'customerService', labelKey: 'solutions.tabs.customerService' }
]

export default function SolutionsSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('sales')

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-[#2F5D50] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t(tab.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Problem/Solution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problems Card */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <X className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-900">
                {t('solutions.problems.title')}
              </h3>
            </div>
            <ul className="space-y-3">
              {t('solutions.problems.list').map((problem: string, index: number) => (
                <li key={index} className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-red-800">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Card */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-900">
                {t('solutions.solutions.title')}
              </h3>
            </div>
            <ul className="space-y-3">
              {t('solutions.solutions.list').map((solution: string, index: number) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-green-800">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-12 space-x-4">
          <button className="bg-[#2F5D50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3A6A5C] transition-colors">
            {t('hero.cta')}
          </button>
          <button className="bg-white text-[#2F5D50] border border-[#2F5D50] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            {t('hero.demoCta')}
          </button>
        </div>
      </div>
    </section>
  )
}
