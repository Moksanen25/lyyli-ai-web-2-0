import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Calendar, TrendingUp } from 'lucide-react';

const ImplementationTimeline: React.FC = () => {
  const { language } = useLanguage();

  // Static data with fallbacks for different languages
  const getTranslatedText = (fallback: string) => {
    // Simple fallback for now - can be enhanced with proper translations later
    return fallback;
  };

  const timelineData = [
    {
      phase: getTranslatedText(language === 'fi' ? 'Viikko 1' : 'Week 1'),
      title: getTranslatedText(language === 'fi' ? 'Asennus ja integraatio' : 'Setup & Integration'),
      description: getTranslatedText(language === 'fi' ? 'Yhdistä olemassa olevat työkalut, konfiguroi AI-assistentti, tiimin perehdytys' : 'Connect existing tools, configure AI assistant, team onboarding'),
      icon: CheckCircle,
      status: 'current',
      deliverables: [
        language === 'fi' ? 'Slack/Teams integraatio' : 'Slack/Teams integration',
        language === 'fi' ? 'AI:n koulutus yrityksen äänellä' : 'AI training on company voice',
        language === 'fi' ? 'Alkuperäinen käyttäjäpääsy' : 'Initial user access'
      ]
    },
    {
      phase: getTranslatedText(language === 'fi' ? 'Viikko 2' : 'Week 2'),
      title: getTranslatedText(language === 'fi' ? 'Pilottilanseeraus' : 'Live Pilot'),
      description: getTranslatedText(language === 'fi' ? 'Live-pilotti avaintiimien kanssa, palautteen keruu, optimointi' : 'Active pilot with key teams, feedback collection, optimization'),
      icon: Clock,
      status: 'upcoming',
      deliverables: [
        language === 'fi' ? 'Pilottitiimin koulutus' : 'Pilot team training',
        language === 'fi' ? 'Ensimmäiset automatisoidut kampanjat' : 'First automated campaigns',
        language === 'fi' ? 'Menestysmetriikkojen lähtötaso' : 'Success metrics baseline'
      ]
    },
    {
      phase: getTranslatedText(language === 'fi' ? 'Kuukausi 1' : 'Month 1'),
      title: getTranslatedText(language === 'fi' ? 'Täysi käyttöönotto' : 'Full Deployment'),
      description: getTranslatedText(language === 'fi' ? 'Organisaatiolaajuinen lanseeraus, edistyneet ominaisuudet, hallinnon setup' : 'Organization-wide rollout, advanced features, governance setup'),
      icon: Calendar,
      status: 'upcoming',
      deliverables: [
        language === 'fi' ? 'Yrityslaajuinen pääsy' : 'Company-wide access',
        language === 'fi' ? 'Edistyneet työnkulut' : 'Advanced workflows',
        language === 'fi' ? 'Vaatimustenmukaisuuskäytännöt' : 'Compliance policies'
      ]
    },
    {
      phase: getTranslatedText(language === 'fi' ? 'Jatkuva' : 'Ongoing'),
      title: getTranslatedText(language === 'fi' ? 'Optimointi' : 'Optimization'),
      description: getTranslatedText(language === 'fi' ? 'Jatkuva parantaminen, uudet käyttötapaukset, ROI:n seuranta' : 'Continuous improvement, new use cases, ROI tracking'),
      icon: TrendingUp,
      status: 'future',
      deliverables: [
        language === 'fi' ? 'Kuukausittaiset ROI-raportit' : 'Monthly ROI reports',
        language === 'fi' ? 'Ominaisuuksien laajentaminen' : 'Feature expansion',
        language === 'fi' ? 'Parhaiden käytäntöjen jakaminen' : 'Best practice sharing'
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
            {language === 'fi' ? 'Saa arvoa 2 viikossa' : 'Get Value in 2 Weeks'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'fi' ? 'Todistettu toteutusmenetelmämme tuottaa välitöntä arvoa ja skaalautuu organisaatiosi kanssa' : 'Our proven implementation methodology delivers immediate value and scales with your organization'}
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
                      {language === 'fi' ? 'Keskeiset tuotokset' : 'Key Deliverables'}:
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
              {language === 'fi' ? 'Viikkoa' : 'Weeks'}
            </div>
            <div className="text-xs text-muted-foreground">
              {language === 'fi' ? 'ensimmäiseen arvoon' : 'to first value'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">87%</div>
            <div className="text-sm font-medium text-foreground mb-1">
              {language === 'fi' ? 'Tehokkuuden kasvu' : 'Efficiency gain'}
            </div>
            <div className="text-xs text-muted-foreground">
              {language === 'fi' ? 'ensimmäisessä kuussa' : 'in first month'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm font-medium text-foreground mb-1">
              {language === 'fi' ? 'Tuki' : 'Support'}
            </div>
            <div className="text-xs text-muted-foreground">
              {language === 'fi' ? 'koko prosessin ajan' : 'throughout process'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationTimeline;