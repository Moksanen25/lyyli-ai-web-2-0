
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Lightbulb, 
  Heart, 
  GraduationCap, 
  Palette, 
  Trophy,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Users,
  MessageSquare,
  Zap
} from 'lucide-react';

const UseCase = () => {
  const { language } = useLanguage();
  const [activeSegment, setActiveSegment] = useState('tech');

  // Customer segments data with challenges and solutions
  const segments = [
    {
      id: 'tech',
      icon: Building2,
      nameEn: 'Tech Companies',
      nameFi: 'Teknologiayritykset',
      descEn: 'Fast-paced development teams need streamlined communication',
      descFi: 'Nopeatempoiset kehitystiimit tarvitsevat virtaviivaista viestintää',
      challengesEn: [
        'Product updates scattered across multiple channels',
        'Technical documentation becomes outdated quickly',
        'Developer teams struggle with consistent messaging'
      ],
      challengesFi: [
        'Tuotepäivitykset hajallaan useissa kanavissa',
        'Tekninen dokumentaatio vanhenee nopeasti',
        'Kehittäjätiimit kamppailevat johdonmukaisen viestinnän kanssa'
      ],
      solutionsEn: [
        'Automated product update distribution',
        'Real-time documentation synchronization',
        'Unified communication across all development tools'
      ],
      solutionsFi: [
        'Automatisoitu tuotepäivitysten jakelu',
        'Reaaliaikainen dokumentaation synkronointi',
        'Yhtenäinen viestintä kaikissa kehitystyökaluissa'
      ],
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50'
    },
    {
      id: 'consulting',
      icon: Lightbulb,
      nameEn: 'Consulting Firms',
      nameFi: 'Konsultointiyritykset',
      descEn: 'Professional services requiring client-focused communication',
      descFi: 'Asiantuntijapalvelut vaativat asiakaskeskeistä viestintää',
      challengesEn: [
        'Managing communication across multiple client projects',
        'Creating professional reports takes too much time',
        'Maintaining consistent brand voice across teams'
      ],
      challengesFi: [
        'Viestinnän hallinta useissa asiakasprojekteissa',
        'Ammattimaisten raporttien luominen vie liikaa aikaa',
        'Johdonmukaisen brändiäänen ylläpito tiimeissä'
      ],
      solutionsEn: [
        'Client-specific communication portals',
        'Automated professional report generation',
        'Brand-consistent messaging templates'
      ],
      solutionsFi: [
        'Asiakaskohtaiset viestintäportaalit',
        'Automatisoitu ammattimaisten raporttien luonti',
        'Brändimukaiset viestipohjat'
      ],
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50'
    },
    {
      id: 'nonprofit',
      icon: Heart,
      nameEn: 'Nonprofits',
      nameFi: 'Voittoa tavoittelemattomat',
      descEn: 'Mission-driven organizations with limited resources',
      descFi: 'Missiolähtöiset organisaatiot rajallisilla resursseilla',
      challengesEn: [
        'Limited staff for content creation and communication',
        'Need to engage diverse stakeholder groups effectively',
        'Grant applications and reporting consume too much time'
      ],
      challengesFi: [
        'Rajallinen henkilöstö sisällöntuotantoon ja viestintään',
        'Tarve sitouttaa erilaisia sidosryhmiä tehokkaasti',
        'Apurahahakemukset ja raportointi vievät liikaa aikaa'
      ],
      solutionsEn: [
        'Automated donor and volunteer engagement',
        'Multi-channel campaign management',
        'Streamlined grant application processes'
      ],
      solutionsFi: [
        'Automatisoitu lahjoittajien ja vapaaehtoisten sitouttaminen',
        'Monikanavainen kampanjanhallinta',
        'Virtaviivaistetut apurahahakuprosessit'
      ],
      color: 'bg-green-500',
      lightColor: 'bg-green-50'
    },
    {
      id: 'education',
      icon: GraduationCap,
      nameEn: 'Educational Institutions',
      nameFi: 'Koulutusinstituutiot',
      descEn: 'Schools and universities connecting diverse communities',
      descFi: 'Koulut ja yliopistot yhdistävät moninaisia yhteisöjä',
      challengesEn: [
        'Communicating with students, parents, and faculty efficiently',
        'Keeping all stakeholders informed about important updates',
        'Managing multilingual communication needs'
      ],
      challengesFi: [
        'Tehokas viestintä opiskelijoiden, vanhempien ja henkilökunnan kanssa',
        'Kaikkien sidosryhmien pitäminen ajan tasalla tärkeistä päivityksistä',
        'Monikielisten viestintätarpeiden hallinta'
      ],
      solutionsEn: [
        'Automated student and parent notifications',
        'Faculty collaboration platforms',
        'Multilingual content distribution'
      ],
      solutionsFi: [
        'Automatisoidut opiskelija- ja vanhempailmoitukset',
        'Henkilökunnan yhteistyöalustat',
        'Monikielinen sisällönjakelu'
      ],
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50'
    },
    {
      id: 'creative',
      icon: Palette,
      nameEn: 'Creative Industries',
      nameFi: 'Luovat alat',
      descEn: 'Agencies and studios showcasing creative work',
      descFi: 'Toimistot ja studiot esittelevät luovaa työtä',
      challengesEn: [
        'Showcasing portfolio work effectively across platforms',
        'Managing client feedback and project communications',
        'Maintaining creative brand voice consistently'
      ],
      challengesFi: [
        'Portfoliotyön tehokas esittely eri alustoilla',
        'Asiakaspalautteen ja projektviestinnän hallinta',
        'Luovan brändiäänen johdonmukainen ylläpito'
      ],
      solutionsEn: [
        'Visual-first content presentation tools',
        'Streamlined client feedback workflows',
        'Creative-focused communication templates'
      ],
      solutionsFi: [
        'Visuaalisuutta korostavat sisällönesitystyökalut',
        'Virtaviivaistetut asiakaspalautetyönkulut',
        'Luovuuteen keskittyvät viestintäpohjat'
      ],
      color: 'bg-pink-500',
      lightColor: 'bg-pink-50'
    },
    {
      id: 'sports',
      icon: Trophy,
      nameEn: 'Sports Organizations',
      nameFi: 'Urheiluorganisaatiot',
      descEn: 'Teams and leagues engaging fans and members',
      descFi: 'Joukkueet ja liigat sitouttavat faneja ja jäseniä',
      challengesEn: [
        'Keeping fans engaged throughout the season',
        'Managing communications across multiple teams',
        'Coordinating events and announcements effectively'
      ],
      challengesFi: [
        'Fanien pitäminen sitoutuneina koko kauden ajan',
        'Viestinnän hallinta useissa joukkueissa',
        'Tapahtumien ja ilmoitusten tehokas koordinointi'
      ],
      solutionsEn: [
        'Automated fan engagement campaigns',
        'Multi-team communication coordination',
        'Event promotion and management tools'
      ],
      solutionsFi: [
        'Automatisoidut fanien sitoutumiskampanjat',
        'Usean joukkueen viestinnän koordinointi',
        'Tapahtumien edistämis- ja hallintatyökalut'
      ],
      color: 'bg-red-500',
      lightColor: 'bg-red-50'
    }
  ];

  const currentSegment = segments.find(s => s.id === activeSegment) || segments[0];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#295045]">
            {language === 'fi' 
              ? 'Ratkaisuja Jokaiselle Toimialalle' 
              : 'Solutions for Every Industry'}
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
            <TabsList className="grid grid-cols-6 mb-8 h-auto">
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
            <Card key={segment.id} className="border-none shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg ${segment.lightColor} flex items-center justify-center`}>
                    <segment.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <CardTitle className="text-xl text-[#295045]">
                    {language === 'fi' ? segment.nameFi : segment.nameEn}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground">
                  {language === 'fi' ? segment.descFi : segment.descEn}
                </p>
              </CardHeader>
              <CardContent>
                <SegmentDetails segment={segment} language={language} compact />
              </CardContent>
            </Card>
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
            <Button size="lg" variant="outline" className="border-[#295045] text-[#295045] hover:bg-[#295045] hover:text-white px-8">
              {language === 'fi' ? 'Aloita nyt' : 'Start Now'}
              <Zap className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Segment details component
const SegmentDetails = ({ segment, language, compact = false }: { 
  segment: any; 
  language: string; 
  compact?: boolean; 
}) => {
  const challenges = language === 'fi' ? segment.challengesFi : segment.challengesEn;
  const solutions = language === 'fi' ? segment.solutionsFi : segment.solutionsEn;

  return (
    <div className={`grid gap-8 ${compact ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
      {/* Challenges */}
      <Card className="border-red-200 bg-red-50/50">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <CardTitle className="text-lg text-red-700">
              {language === 'fi' ? 'Haasteet' : 'Challenges'}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {challenges.map((challenge: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
              <p className="text-sm text-gray-700">{challenge}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Solutions */}
      <Card className="border-green-200 bg-green-50/50">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <CardTitle className="text-lg text-green-700">
              {language === 'fi' ? 'Lyylin ratkaisut' : 'Lyyli Solutions'}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {solutions.map((solution: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-700">{solution}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default UseCase;
