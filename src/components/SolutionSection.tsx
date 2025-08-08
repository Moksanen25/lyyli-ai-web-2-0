'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Shield, Users, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const SolutionSection: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-green-500" />,
      title: "80% aikaa säästetty",
      description: "Automatisoi rutiiniviestintäsi ja keskitty tärkeisiin asioihin",
      metric: "2-4h → 15-30min"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Ammattimainen viestintä",
      description: "Kaikki viestit ovat yhtenäisiä ja ammattimaisia",
      metric: "100% johdonmukaisuus"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "GDPR-yhteensopiva",
      description: "Tietoturva ja yhteensopivuus on taattu",
      metric: "EU-palvelimet"
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: "Tiimiyhteistyö",
      description: "Kaikki tiimisi ovat samalla sivulla",
      metric: "Yhdistetty viestintä"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Solution Image */}
          <div className="relative">
            <img 
              src="/images/solution-illustration.png" 
              alt="Lyyli AI - Tekoälyavusteinen viestintäratkaisu" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-medium mb-6">
                <CheckCircle className="h-4 w-4 mr-2" />
                Ratkaisu
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Lyyli AI automatisoi viestintäsi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tekoälyavusteinen viestintäassistentti, joka yhdistää kaikki viestintäkanavasi ja varmistaa ammattimaisen viestinnän. Säästä aikaa ja paranna asiakastyytyväisyyttä.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {benefit.description}
                    </p>
                    <div className="text-sm font-medium text-green-600">
                      📈 {benefit.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-white px-8 py-4 text-lg rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Aloita ilmainen kokeilu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/features">
                  <Play className="mr-2 h-5 w-5" />
                  Katso demo
                </Link>
              </Button>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">80%</div>
                <div className="text-sm text-gray-600">Aikaa säästetty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
                <div className="text-sm text-gray-600">Johdonmukaisuus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Käytettävissä</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection; 