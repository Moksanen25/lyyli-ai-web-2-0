'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Calendar,
  Calculator,
  Phone
} from 'lucide-react';
import Link from 'next/link';
import BookDemoDialog from '@/components/BookDemoDialog';
import ImplementationTimeline from '@/components/ImplementationTimeline';

const ExecutiveSummary: React.FC = () => {
  const { language } = useLanguage();
  const [showDemoDialog, setShowDemoDialog] = useState(false);

  // Get translations based on language
  const getContent = () => {
    if (language === 'fi') {
      return {
        title: 'Johtajuuden yhteenveto: AI-pohjainen sisäinen viestintä',
        subtitle: 'Strateginen yleiskatsaus C-tason päättäjille',
        hero: {
          title: 'Muuta asiantuntijaorganisaatiosi viestinnän tehokkuus',
          subtitle: 'Lyyli.ai tuottaa mitattavaa ROI:ta AI-pohjaisella sisäisen viestinnän automaatiolla asiantuntijaorganisaatioille',
          cta: 'Varaa demo päättäjille',
          secondaryCta: 'Katso toteutussuunnitelma'
        },
        businessCase: {
          title: 'Liiketoimintaperustelu',
          problem: {
            title: 'Viestintähaasteet maksavat rahaa',
            points: [
              '75% työajasta menee hukkaan tehottomaan sisäiseen viestintään',
              'Keskimäärin 62 000€ vuosikustannus viestintäpäällikköä kohden',
              '47% työntekijöiden sitoutumattomuutta huonon sisäisen viestinnän vuoksi',
              '3,2x pidemmät projektiaikataulut viestintäpullonkaulojen vuoksi'
            ]
          },
          solution: {
            title: 'AI-pohjainen ratkaisu tuottaa tuloksia',
            points: [
              '87% vähennys manuaalisissa viestintätehtävissä',
              '340% ROI ensimmäisen vuoden aikana',
              '45 000€+ vuosisäästöt vs. lisähenkilöstön palkkaaminen',
              '2 viikon käyttöönotto välittömällä arvolla'
            ]
          }
        }
      };
    } else {
      return {
        title: 'Executive Summary: AI-Powered Internal Communication',
          subtitle: 'Strategic overview for C-level decision makers',
        hero: {
          title: 'Transform Your Organization\'s Communication Efficiency',
          subtitle: 'Lyyli.ai delivers measurable ROI through AI-powered internal communication automation for professional services companies',
          cta: 'Schedule Executive Briefing',
          secondaryCta: 'View Implementation Plan'
        },
        businessCase: {
          title: 'The Business Case',
          problem: {
            title: 'Communication Challenges Cost You Money',
            points: [
              '75% of work time lost to inefficient internal communication',
              'Average $62,000 annual cost per communication manager',
              '47% employee disengagement due to poor internal communication',
              '3.2x longer project timelines due to communication bottlenecks'
            ]
          },
          solution: {
            title: 'AI-Powered Solution Delivers Results',
            points: [
              '87% reduction in manual communication tasks',
              '340% ROI within first year',
              '$45,000+ annual savings vs. hiring additional staff',
              '2-week implementation with immediate value'
            ]
          }
        }
      };
    }
  };

  const content = getContent();

  return (
    <>

      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container-padding container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 text-primary border-primary/20">
                {language === 'fi' ? 'Johtotasolle' : 'For Executives'}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                {content.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {content.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => setShowDemoDialog(true)}
                  className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  {content.hero.cta}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
                >
                  <Link href="#implementation">
                    {content.hero.secondaryCta}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Business Case Section */}
        <section className="py-16 md:py-24">
          <div className="container-padding container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.businessCase.title}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'fi' ? 'Miksi asiantuntijaorganisaatiot valitsevat Lyyli.ai:n' : 
                 'Why professional services companies choose Lyyli.ai'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Problem */}
              <Card className="border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <Target className="h-6 w-6" />
                    {content.businessCase.problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {content.businessCase.problem.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card className="border-emerald-200 bg-emerald-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle className="h-6 w-6" />
                    {content.businessCase.solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {content.businessCase.solution.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-padding container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'fi' ? 'Strategiset hyödyt johdolle' : 
                 'Strategic Benefits for Leadership'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    {language === 'fi' ? 'Operatiivinen tehokkuus' : 
                     'Operational Efficiency'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {language === 'fi' ? 'Vähennä viestinnän yleiskustannuksia samalla kun parannat viestin laatua ja kattavuutta' : 
                     'Reduce communication overhead while improving message quality and reach'}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{language === 'fi' ? 'Aikasäästö' : 'Time savings'}</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    {language === 'fi' ? 'Kasvun mahdollistaminen' : 
                     'Growth Enablement'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {language === 'fi' ? 'Skaalaa viestintäinfrastruktuuria ilman suhteellisia henkilöstölisäyksiä' : 
                     'Scale communication infrastructure without proportional headcount increases'}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{language === 'fi' ? 'Skaalautuvuus' : 'Scalability'}</span>
                      <span>10x</span>
                    </div>
                    <Progress value={90} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    {language === 'fi' ? 'Kilpailuetu' : 
                     'Competitive Advantage'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {language === 'fi' ? 'Nopeampi päätöksenteko ja toteutus parannetun tiedonkulun kautta' : 
                     'Faster decision-making and execution through improved information flow'}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{language === 'fi' ? 'Nopeampi koordinaatio' : 'Faster coordination'}</span>
                      <span>50%</span>
                    </div>
                    <Progress value={50} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section id="implementation">
          <ImplementationTimeline />
        </section>

        {/* Investment Summary */}
        <section className="py-16 md:py-24">
          <div className="container-padding container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'fi' ? 'Investointiyhteenveto' : 
                 'Investment Summary'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'fi' ? 'Selkeä ROI joustavalla hinnoittelulla' : 
                 'Clear ROI with flexible pricing'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>
                    {language === 'fi' ? 'Professional-suunnitelma' : 
                     'Professional Plan'}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {language === 'fi' ? '599€/kk' : 
                     '€599/month'}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {language === 'fi' ? 'Täydellinen 100-500 hengen asiantuntijaorganisaatioille' :
                     'Perfect for 100-500 person professional services companies'}
                  </p>
                  <ul className="space-y-2">
                    {[
                      language === 'fi' ? 'Rajoittamattomat AI-pohjaiset viestit' : 'Unlimited AI-powered messages',
                      language === 'fi' ? 'Monikanavainen jakelu' : 'Multi-channel distribution',
                      language === 'fi' ? 'Edistynyt analytiikka' : 'Advanced analytics',
                      language === 'fi' ? 'Prioriteettituki' : 'Priority support'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>
                    {language === 'fi' ? 'Tyypillinen ROI-analyysi' : 
                     'Typical ROI Analysis'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>{language === 'fi' ? 'Viestintäpäällikön palkkaaminen' : 'Hiring Communication Manager'}</span>
                      <span className="font-bold text-red-600">
                        {language === 'fi' ? '84 000€/v' : '€84,000/year'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Lyyli.ai Professional</span>
                      <span className="font-bold text-primary">
                        {language === 'fi' ? '7 188€/v' : '€7,188/year'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                      <span className="font-medium">{language === 'fi' ? 'Vuosisäästöt' : 'Annual Savings'}</span>
                      <span className="font-bold text-emerald-600">
                        {language === 'fi' ? '76 812€' : '€76,812'}
                      </span>
                    </div>
                    <div className="text-center p-4 bg-emerald-100 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">1,068%</div>
                      <div className="text-sm text-emerald-700">
                        {language === 'fi' ? 'ROI ensimmäisenä vuonna' : 
                         'ROI in year one'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container-padding container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'fi' ? 'Seuraavat askeleet' : 
               'Next Steps'}
            </h2>
            <p className="text-xl mb-12 text-white/80">
              {language === 'fi' ? 'Valmis muuttamaan viestintääsi?' : 
               'Ready to transform your communication?'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">
                    {language === 'fi' ? 'Demo päättäjille' : 
                     'Executive Demo'}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {language === 'fi' ? '30 minuutin henkilökohtainen esittely' : 
                     '30-minute personalized demonstration'}
                  </p>
                  <Button 
                    variant="secondary" 
                    onClick={() => setShowDemoDialog(true)}
                    className="w-full"
                  >
                    {language === 'fi' ? 'Varaa demo' : 
                     'Schedule Demo'}
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Calculator className="h-8 w-8 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">
                    {language === 'fi' ? 'ROI-analyysi' : 
                     'ROI Analysis'}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {language === 'fi' ? 'Räätälöity ROI-laskenta organisaatiollesi' : 
                     'Custom ROI calculation for your organization'}
                  </p>
                  <Button 
                    variant="secondary" 
                    asChild
                    className="w-full"
                  >
                    <Link href={language === 'fi' ? '/fi/pricing' : '/pricing'}>
                      {language === 'fi' ? 'Hanki analyysi' : 
                       'Get Analysis'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">
                    {language === 'fi' ? 'Yhteystiedot' : 
                     'Executive Contact'}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {language === 'fi' ? 'Keskustele suoraan johtotiimimme kanssa' : 
                     'Speak directly with our leadership team'}
                  </p>
                  <Button 
                    variant="secondary" 
                    asChild
                    className="w-full"
                  >
                    <Link href={language === 'fi' ? '/fi/contact' : '/contact'}>
                      {language === 'fi' ? 'Ota yhteyttä' : 
                       'Contact Us'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </>
  );
};

export default ExecutiveSummary;