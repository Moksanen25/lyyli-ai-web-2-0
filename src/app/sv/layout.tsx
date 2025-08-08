import React from 'react';
import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: 'Lyyli AI - Expertkommunikation för organisationer',
  description: 'AI-kommunikationsassistent som förstår expertorganisationers behov. Automatisk meddelandeformatering, proaktiv kommunikation och professionell ton.',
  keywords: 'AI, kommunikation, expertorganisationer, automation, meddelandeformatering',
};

export default function SwedishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider initialLanguage="sv">
      {children}
    </LanguageProvider>
  );
}
