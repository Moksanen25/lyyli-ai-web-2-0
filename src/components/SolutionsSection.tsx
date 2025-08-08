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
    <section style={{ backgroundColor: '#f9fafb', padding: '64px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>
            {t('solutions.title')}
          </h2>
          <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '8px' }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: '8px 24px',
                borderRadius: '6px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: activeTab === tab.key ? '#2F5D50' : 'transparent',
                color: activeTab === tab.key ? 'white' : '#6b7280'
              }}
              onMouseOver={(e) => {
                if (activeTab !== tab.key) {
                  e.target.style.color = '#1f2937'
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab.key) {
                  e.target.style.color = '#6b7280'
                }
              }}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {/* Problems Card */}
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            padding: '32px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <X style={{ width: '24px', height: '24px', color: '#ef4444', marginRight: '12px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>
                {t('solutions.problems.title')}
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {(t(`solutions.${activeTab}.problems.list`) || []).map((problem, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '16px',
                  padding: '12px',
                  backgroundColor: '#fef2f2',
                  borderRadius: '8px',
                  border: '1px solid #fecaca'
                }}>
                  <X style={{ width: '20px', height: '20px', color: '#ef4444', marginRight: '12px', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#7f1d1d', lineHeight: '1.6' }}>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Card */}
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            padding: '32px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <Check style={{ width: '24px', height: '24px', color: '#10b981', marginRight: '12px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>
                {t('solutions.solutions.title')}
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {(t(`solutions.${activeTab}.solutions.list`) || []).map((solution, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '16px',
                  padding: '12px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '8px',
                  border: '1px solid #bbf7d0'
                }}>
                  <Check style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '12px', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#14532d', lineHeight: '1.6' }}>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{ 
            backgroundColor: '#2F5D50', 
            color: 'white', 
            padding: '12px 32px', 
            borderRadius: '8px', 
            fontWeight: '600', 
            border: 'none', 
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#3A6A5C'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2F5D50'}>
            {t('hero.cta')}
          </button>
          <button style={{ 
            backgroundColor: 'white', 
            color: '#2F5D50', 
            border: '2px solid #2F5D50',
            padding: '12px 32px', 
            borderRadius: '8px', 
            fontWeight: '600', 
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f9fafb'
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'white'
          }}>
            {t('hero.demoCta')}
          </button>
        </div>
      </div>
    </section>
  )
}