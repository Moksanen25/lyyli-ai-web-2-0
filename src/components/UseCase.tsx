
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { segments } from './use-case/segmentsData';
import SegmentDetails from './use-case/SegmentDetails';
import MobileSegmentCard from './use-case/MobileSegmentCard';

const UseCase = () => {
  const { language } = useLanguage();
  const [activeSegment, setActiveSegment] = useState('tech');

  const currentSegment = segments.find(s => s.id === activeSegment) || segments[0];
  const waitlistPath = language === 'fi' ? '/fi/waitlist' : '/waitlist';

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#295045]">
            {language === 'fi' 
              ? 'Ratkaisuja jokaiselle toimialalle' 
              : 'Solutions for every industry'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'fi'
              ? 'Lyyli mukautuu toimialasi tarpeisiin ja ratkaisee alan suurimmat viestintähaasteet'
              : 'Lyyli adapts to your industry needs and solves the biggest communication challenges'}
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          <Tabs value={activeSegment} onValueChange={setActiveSegment} className="w-full">
            <TabsList className="grid grid-cols-5 mb-8 h-auto">
              {segments.map((segment) => {
                const IconComponent = segment.icon;
                return (
                  <TabsTrigger 
                    key={segment.id} 
                    value={segment.id}
                    className="flex flex-col gap-2 py-4 px-3 h-auto"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="text-sm text-center">
                      {language === 'fi' ? segment.nameFi : segment.nameEn}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {segments.map((segment) => (
              <TabsContent key={segment.id} value={segment.id}>
                <SegmentDetails segment={segment} language={language} />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {segments.map((segment) => (
            <MobileSegmentCard 
              key={segment.id} 
              segment={segment} 
              language={language} 
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold text-[#295045]">
            {language === 'fi' 
              ? 'Valmis näkemään, miten Lyyli voi auttaa organisaatiotasi?' 
              : 'Ready to see how Lyyli can help your organization?'}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#295045] hover:bg-[#1f3c34] text-white px-8">
              {language === 'fi' ? 'Varaa demo' : 'Book a Demo'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#295045] text-[#295045] hover:bg-[#295045] hover:text-white px-8"
              asChild
            >
              <Link to={waitlistPath}>
                {language === 'fi' ? 'Aloita nyt' : 'Start Now'}
                <Zap className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
