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
    <section style={{ backgroundColor: 'white', padding: '64px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>
            {t('automation.title')}
          </h2>
          <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            {t('automation.subtitle')}
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px' 
        }}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#f9fafb', 
                  borderRadius: '12px', 
                  padding: '32px', 
                  height: '100%',
                  border: '1px solid #f3f4f6',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#2F5D50', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 24px' 
                  }}>
                    <IconComponent style={{ width: '24px', height: '24px', color: 'white' }} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '12px' }}>
                    {t(feature.titleKey)}
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button 
            style={{ 
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
            onMouseOut={(e) => e.target.style.backgroundColor = '#2F5D50'}
          >
            Lue lisää
          </button>
        </div>
      </div>
    </section>
  )
}