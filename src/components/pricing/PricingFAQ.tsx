import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/hooks/useLanguage';

const PricingFAQ = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t('pricing.faq.question1'),
      answer: t('pricing.faq.answer1'),
    },
    {
      question: t('pricing.faq.question2'),
      answer: t('pricing.faq.answer2'),
    },
    {
      question: t('pricing.faq.question3'),
      answer: t('pricing.faq.answer3'),
    },
    {
      question: t('pricing.faq.question4'),
      answer: t('pricing.faq.answer4'),
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">{t('pricing.faq.title')}</h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto">
            {t('pricing.faq.subtitle')}
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-medium text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-primary/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PricingFAQ;
