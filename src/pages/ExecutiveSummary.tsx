import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  Users, 
  Target, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BookDemoDialog from '@/components/BookDemoDialog';
import ImplementationTimeline from '@/components/ImplementationTimeline';
import { useSafeTranslation } from '@/utils/safeTranslation';

const ExecutiveSummary: React.FC = () => {
  const { language } = useLanguage();
  const { safeTr } = useSafeTranslation();
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
    } else if (language === 'sv') {
      return {
        title: 'Ledningssammanfattning: AI-driven intern kommunikation',
          subtitle: 'Strateginen yleiskatsaus C-tason päättäjille',
        hero: {
          title: 'Muuta asiantuntijaorganisaatiosi viestinnän tehokkuus',
          subtitle: 'Lyyli.ai tuottaa mitattavaa ROI:ta AI-pohjaisella sisäisen viestinnän automaatiolla asiantuntijaorganisaatioille',
          cta: 'Boka ledningsbriefing',
          secondaryCta: 'Se implementeringsplan'
        },
        businessCase: {
          title: 'Affärsargumentet',
          problem: {
            title: 'Kommunikationsutmaningar kostar pengar',
            points: [
              '75% av arbetstiden försvinner på ineffektiv intern kommunikation',
              'Genomsnittlig kostnad 620 000 kr årligen per kommunikationschef',
              '47% av anställdas oengagemang på grund av dålig intern kommunikation',
              '3,2x längre projekttidslinjer på grund av kommunikationsflaskhalsar'
            ]
          },
          solution: {
            title: 'AI-driven lösning levererar resultat',
            points: [
              '87% minskning av manuella kommunikationsuppgifter',
              '340% ROI inom första året',
              '450 000+ kr årliga besparingar vs att anställa ytterligare personal',
              '2-veckors implementering med omedelbart värde'
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
      <Helmet>
        <title>{content.title} | Lyyli.ai</title>
        <meta name="description" content={content.subtitle} />
        <link rel="canonical" href={`https://lyyli.ai${language === 'fi' ? '/fi' : language === 'sv' ? '/sv' : ''}/executive-summary`} />
        {language === 'fi' && <link rel="alternate" hrefLang="en" href="https://lyyli.ai/executive-summary" />}
        {language === 'sv' && <link rel="alternate" hrefLang="en" href="https://lyyli.ai/executive-summary" />}
        {language === 'en' && <link rel="alternate" hrefLang="fi" href="https://lyyli.ai/fi/executive-summary" />}
        {language === 'en' && <link rel="alternate" hrefLang="sv" href="https://lyyli.ai/sv/executive-summary" />}
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container-padding container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 text-primary border-primary/20">
                {language === 'fi' ? 'Johtotasolle' : language === 'sv' ? 'För ledning' : 'For Executives'}
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
                  <Link to="#implementation">
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
                 language === 'sv' ? 'Varför expertorganisationer väljer Lyyli.ai' : 
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
                 language === 'sv' ? 'Strategiska fördelar för ledningen' : 
                 'Strategic Benefits for Leadership'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    {language === 'fi' ? 'Operatiivinen tehokkuus' : 
                     language === 'sv' ? 'Operativ effektivitet' : 
                     'Operational Efficiency'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {language === 'fi' ? 'Vähennä viestinnän yleiskustannuksia samalla kun parannat viestin laatua ja kattavuutta' : 
                     language === 'sv' ? 'Minska kommunikationskostnader samtidigt som du förbättrar meddelandekvalitet och räckvidd' : 
                     'Reduce communication overhead while improving message quality and reach'}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{language === 'fi' ? 'Aikasäästö' : language === 'sv' ? 'Tidsbesparingar' : 'Time savings'}</span>
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
                     language === 'sv' ? 'Tillväxtmöjliggörande' : 
                     'Growth Enablement'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {language === 'fi' ? 'Skaalaa viestintäinfrastruktuuria ilman suhteellisia henkilöstölisäyksiä' : 
                     language === 'sv' ? 'Skala kommunikationsinfrastruktur utan proportionella personalökningar' : 
                     'Scale communication infrastructure without proportional headcount increases'}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{language === 'fi' ? 'Skaalautuvuus' : language === 'sv' ? 'Skalbarhet' : 'Scalability'}</span>
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
                     language === 'sv' ? 'Konkurrensfördel' : 
                     'Competitive Advantage'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {language === 'fi' ? 'Nopeampi päätöksenteko ja toteutus parannetun tiedonkulun kautta' : 
                     language === 'sv' ? 'Snabbare beslutsfattande och utförande genom förbättrat informationsflöde' : 
                     'Faster decision-making and execution through improved information flow'}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{language === 'fi' ? 'Nopeampi koordinaatio' : language === 'sv' ? 'Snabbare koordinering' : 'Faster coordination'}</span>
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
                 language === 'sv' ? 'Investeringssammanfattning' : 
                 'Investment Summary'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'fi' ? 'Selkeä ROI joustavalla hinnoittelulla' : 
                 language === 'sv' ? 'Tydlig ROI med flexibel prissättning' : 
                 'Clear ROI with flexible pricing'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>
                    {language === 'fi' ? 'Professional-suunnitelma' : 
                     language === 'sv' ? 'Professional Plan' : 
                     'Professional Plan'}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {language === 'fi' ? '599€/kk' : 
                     language === 'sv' ? '5 990 kr/månad' : 
                     '€599/month'}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {language === 'fi' ? 'Täydellinen 100-500 hengen asiantuntijaorganisaatioille' :
                     language === 'sv' ? 'Perfekt för 100-500 personers organisationer' : 
                     'Perfect for 100-500 person professional services companies'}
                  </p>
                  <ul className="space-y-2">
                    {[
                      language === 'fi' ? 'Rajoittamattomat AI-pohjaiset viestit' : language === 'sv' ? 'Obegränsade AI-drivna meddelanden' : 'Unlimited AI-powered messages',
                      language === 'fi' ? 'Monikanavainen jakelu' : language === 'sv' ? 'Flerkanaldistribution' : 'Multi-channel distribution',
                      language === 'fi' ? 'Edistynyt analytiikka' : language === 'sv' ? 'Avancerad analys' : 'Advanced analytics',
                      language === 'fi' ? 'Prioriteettituki' : language === 'sv' ? 'Prioriterad support' : 'Priority support'
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
                     language === 'sv' ? 'Typisk ROI-analys' : 
                     'Typical ROI Analysis'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>{language === 'fi' ? 'Viestintäpäällikön palkkaaminen' : language === 'sv' ? 'Anställa kommunikationschef' : 'Hiring Communication Manager'}</span>
                      <span className="font-bold text-red-600">
                        {language === 'fi' ? '84 000€/v' : language === 'sv' ? '840 000 kr/år' : '€84,000/year'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Lyyli.ai Professional</span>
                      <span className="font-bold text-primary">
                        {language === 'fi' ? '7 188€/v' : language === 'sv' ? '71 880 kr/år' : '€7,188/year'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                      <span className="font-medium">{language === 'fi' ? 'Vuosisäästöt' : language === 'sv' ? 'Årliga besparingar' : 'Annual Savings'}</span>
                      <span className="font-bold text-emerald-600">
                        {language === 'fi' ? '76 812€' : language === 'sv' ? '768 120 kr' : '€76,812'}
                      </span>
                    </div>
                    <div className="text-center p-4 bg-emerald-100 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">1,068%</div>
                      <div className="text-sm text-emerald-700">
                        {language === 'fi' ? 'ROI ensimmäisenä vuonna' : 
                         language === 'sv' ? 'ROI år ett' : 
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
               language === 'sv' ? 'Nästa steg' : 
               'Next Steps'}
            </h2>
            <p className="text-xl mb-12 text-white/80">
              {language === 'fi' ? 'Valmis muuttamaan viestintääsi?' : 
               language === 'sv' ? 'Redo att transformera din kommunikation?' : 
               'Ready to transform your communication?'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">
                    {language === 'fi' ? 'Demo päättäjille' : 
                     language === 'sv' ? 'Ledningsdemo' :
                     'Executive Demo'}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {language === 'fi' ? '30 minuutin henkilökohtainen esittely' : 
                     language === 'sv' ? '30-minuters personlig demonstration' : 
                     '30-minute personalized demonstration'}
                  </p>
                  <Button 
                    variant="secondary" 
                    onClick={() => setShowDemoDialog(true)}
                    className="w-full"
                  >
                    {language === 'fi' ? 'Varaa demo' : 
                     language === 'sv' ? 'Boka demo' : 
                     'Schedule Demo'}
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Calculator className="h-8 w-8 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">
                    {language === 'fi' ? 'ROI-analyysi' : 
                     language === 'sv' ? 'ROI-analys' : 
                     'ROI Analysis'}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {language === 'fi' ? 'Räätälöity ROI-laskenta organisaatiollesi' : 
                     language === 'sv' ? 'Anpassad ROI-kalkylering för din organisation' : 
                     'Custom ROI calculation for your organization'}
                  </p>
                  <Button 
                    variant="secondary" 
                    asChild
                    className="w-full"
                  >
                    <Link to={language === 'fi' ? '/fi/pricing' : language === 'sv' ? '/sv/pricing' : '/pricing'}>
                      {language === 'fi' ? 'Hanki analyysi' : 
                       language === 'sv' ? 'Få analys' : 
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
                     language === 'sv' ? 'Ledningskontakt' :
                     'Executive Contact'}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {language === 'fi' ? 'Keskustele suoraan johtotiimimme kanssa' : 
                     language === 'sv' ? 'Tala direkt med vårt ledningsteam' : 
                     'Speak directly with our leadership team'}
                  </p>
                  <Button 
                    variant="secondary" 
                    asChild
                    className="w-full"
                  >
                    <Link to={language === 'fi' ? '/fi/contact' : language === 'sv' ? '/sv/contact' : '/contact'}>
                      {language === 'fi' ? 'Ota yhteyttä' : 
                       language === 'sv' ? 'Kontakta oss' : 
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