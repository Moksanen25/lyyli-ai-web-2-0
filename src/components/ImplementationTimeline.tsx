import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Calendar, TrendingUp } from 'lucide-react';

const ImplementationTimeline: React.FC = () => {
  const { language } = useLanguage();

  // Static data with fallbacks for different languages
  const getTranslatedText = (key: string, fallback: string) => {
    // Simple fallback for now - can be enhanced with proper translations later
    return fallback;
  };

  const timelineData = [
    {
      phase: getTranslatedText('week1.phase', language === 'fi' ? 'Viikko 1' : language === 'sv' ? 'Vecka 1' : 'Week 1'),
      title: getTranslatedText('week1.title', language === 'fi' ? 'Asennus ja integraatio' : language === 'sv' ? 'Installation och integration' : 'Setup & Integration'),
      description: getTranslatedText('week1.desc', language === 'fi' ? 'Yhdistä olemassa olevat työkalut, konfiguroi AI-assistentti, tiimin perehdytys' : language === 'sv' ? 'Anslut befintliga verktyg, konfigurera AI-assistent, teamintroduktion' : 'Connect existing tools, configure AI assistant, team onboarding'),
      icon: CheckCircle,
      status: 'current',
      deliverables: [
        language === 'fi' ? 'Slack/Teams integraatio' : language === 'sv' ? 'Slack/Teams integration' : 'Slack/Teams integration',
        language === 'fi' ? 'AI:n koulutus yrityksen äänellä' : language === 'sv' ? 'AI-träning på företagsröst' : 'AI training on company voice',
        language === 'fi' ? 'Alkuperäinen käyttäjäpääsy' : language === 'sv' ? 'Initial användaråtkomst' : 'Initial user access'
      ]
    },
    {
      phase: getTranslatedText('week2.phase', language === 'fi' ? 'Viikko 2' : language === 'sv' ? 'Vecka 2' : 'Week 2'),
      title: getTranslatedText('week2.title', language === 'fi' ? 'Pilottilanseeraus' : language === 'sv' ? 'Pilotlansering' : 'Live Pilot'),
      description: getTranslatedText('week2.desc', language === 'fi' ? 'Live-pilotti avaintiimien kanssa, palautteen keruu, optimointi' : language === 'sv' ? 'Live-pilot med nyckelteam, feedbackinsamling, optimering' : 'Active pilot with key teams, feedback collection, optimization'),
      icon: Clock,
      status: 'upcoming',
      deliverables: [
        language === 'fi' ? 'Pilottitiimin koulutus' : language === 'sv' ? 'Pilotteamträning' : 'Pilot team training',
        language === 'fi' ? 'Ensimmäiset automatisoidut kampanjat' : language === 'sv' ? 'Första automatiserade kampanjer' : 'First automated campaigns',
        language === 'fi' ? 'Menestysmetriikkojen lähtötaso' : language === 'sv' ? 'Baslinjer för framgångsmått' : 'Success metrics baseline'
      ]
    },
    {
      phase: getTranslatedText('month1.phase', language === 'fi' ? 'Kuukausi 1' : language === 'sv' ? 'Månad 1' : 'Month 1'),
      title: getTranslatedText('month1.title', language === 'fi' ? 'Täysi käyttöönotto' : language === 'sv' ? 'Full utrullning' : 'Full Deployment'),
      description: getTranslatedText('month1.desc', language === 'fi' ? 'Organisaatiolaajuinen lanseeraus, edistyneet ominaisuudet, hallinnon setup' : language === 'sv' ? 'Organisationsomfattande lansering, avancerade funktioner, styrningsuppsättning' : 'Organization-wide rollout, advanced features, governance setup'),
      icon: Calendar,
      status: 'upcoming',
      deliverables: [
        language === 'fi' ? 'Yrityslaajuinen pääsy' : language === 'sv' ? 'Företagsomfattande åtkomst' : 'Company-wide access',
        language === 'fi' ? 'Edistyneet työnkulut' : language === 'sv' ? 'Avancerade arbetsflöden' : 'Advanced workflows',
        language === 'fi' ? 'Vaatimustenmukaisuuskäytännöt' : language === 'sv' ? 'Compliance-policyer' : 'Compliance policies'
      ]
    },
    {
      phase: getTranslatedText('ongoing.phase', language === 'fi' ? 'Jatkuva' : language === 'sv' ? 'Pågående' : 'Ongoing'),
      title: getTranslatedText('ongoing.title', language === 'fi' ? 'Optimointi' : language === 'sv' ? 'Optimering' : 'Optimization'),
      description: getTranslatedText('ongoing.desc', language === 'fi' ? 'Jatkuva parantaminen, uudet käyttötapaukset, ROI:n seuranta' : language === 'sv' ? 'Kontinuerlig förbättring, nya användningsfall, ROI-spårning' : 'Continuous improvement, new use cases, ROI tracking'),
      icon: TrendingUp,
      status: 'future',
      deliverables: [
        language === 'fi' ? 'Kuukausittaiset ROI-raportit' : language === 'sv' ? 'Månatliga ROI-rapporter' : 'Monthly ROI reports',
        language === 'fi' ? 'Ominaisuuksien laajentaminen' : language === 'sv' ? 'Funktionsexpansion' : 'Feature expansion',
        language === 'fi' ? 'Parhaiden käytäntöjen jakaminen' : language === 'sv' ? 'Delning av bästa praxis' : 'Best practice sharing'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'bg-primary text-primary-foreground';
      case 'upcoming': return 'bg-orange-100 text-orange-800';
      case 'future': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {language === 'fi' ? 'Saa arvoa 2 viikossa' : language === 'sv' ? 'Få värde på 2 veckor' : 'Get Value in 2 Weeks'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'fi' ? 'Todistettu toteutusmenetelmämme tuottaa välitöntä arvoa ja skaalautuu organisaatiosi kanssa' : language === 'sv' ? 'Vår beprövade implementeringsmetodik levererar omedelbart värde och skalar med din organisation' : 'Our proven implementation methodology delivers immediate value and scales with your organization'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {timelineData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getStatusColor(item.status)}>
                      {item.phase}
                    </Badge>
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">
                      {language === 'fi' ? 'Keskeiset tuotokset' : language === 'sv' ? 'Viktiga leverabler' : 'Key Deliverables'}:
                    </h4>
                    <ul className="space-y-1">
                      {item.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="text-xs text-muted-foreground flex items-start">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                {/* Progress indicator */}
                {index < timelineData.length - 1 && (
                  <div className="absolute top-6 -right-3 hidden lg:block">
                    <div className="w-6 h-0.5 bg-primary/20" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-sm font-medium text-foreground mb-1">
              {language === 'fi' ? 'Viikkoa' : language === 'sv' ? 'Veckor' : 'Weeks'}
            </div>
            <div className="text-xs text-muted-foreground">
              {language === 'fi' ? 'ensimmäiseen arvoon' : language === 'sv' ? 'till första värdet' : 'to first value'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">87%</div>
            <div className="text-sm font-medium text-foreground mb-1">
              {language === 'fi' ? 'Tehokkuuden kasvu' : language === 'sv' ? 'Effektivitetsökning' : 'Efficiency gain'}
            </div>
            <div className="text-xs text-muted-foreground">
              {language === 'fi' ? 'ensimmäisessä kuussa' : language === 'sv' ? 'första månaden' : 'in first month'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm font-medium text-foreground mb-1">
              {language === 'fi' ? 'Tuki' : language === 'sv' ? 'Support' : 'Support'}
            </div>
            <div className="text-xs text-muted-foreground">
              {language === 'fi' ? 'koko prosessin ajan' : language === 'sv' ? 'under hela processen' : 'throughout process'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationTimeline;