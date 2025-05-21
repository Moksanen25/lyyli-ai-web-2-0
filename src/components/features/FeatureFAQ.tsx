
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FeatureFAQ = () => {
  const { featuresT } = useLanguage();
  
  const faqs = [
    {
      question: featuresT('faq.question1'),
      answer: featuresT('faq.answer1'),
    },
    {
      question: featuresT('faq.question2'),
      answer: featuresT('faq.answer2'),
    },
    {
      question: featuresT('faq.question3'),
      answer: featuresT('faq.answer3'),
    },
    {
      question: featuresT('faq.question4'),
      answer: featuresT('faq.answer4'),
    }
  ];
  
  return (
    <div className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          {featuresT('faq.title')}
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
