
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FeatureFAQ = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t('features.faq.question1'),
      answer: t('features.faq.answer1'),
    },
    {
      question: t('features.faq.question2'),
      answer: t('features.faq.answer2'),
    },
    {
      question: t('features.faq.question3'),
      answer: t('features.faq.answer3'),
    },
    {
      question: t('features.faq.question4'),
      answer: t('features.faq.answer4'),
    }
  ];
  
  return (
    <div className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          {t('features.faq.title')}
        </h2>
        
        <Accordion type="single" collapsible className="w-full bg-card rounded-xl shadow-sm">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="px-6 text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FeatureFAQ;
