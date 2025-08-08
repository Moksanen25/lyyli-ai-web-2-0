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
    <section style={{ backgroundColor: 'white', padding: '64px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>
            {t('howItWorks.title')}
          </h2>
          <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '32px', 
          position: 'relative' 
        }}>
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  padding: '24px', 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
                  border: '1px solid #f3f4f6' 
                }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#2F5D50', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 16px' 
                  }}>
                    <IconComponent style={{ width: '24px', height: '24px', color: 'white' }} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '8px' }}>
                    {t(step.titleKey)}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
                    {t(step.descriptionKey)}
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