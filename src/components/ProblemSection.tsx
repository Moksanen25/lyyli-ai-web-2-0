import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Clock, MessageSquareX, TrendingDown, AlertTriangle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const { language } = useLanguage();

  const problems = [
    {
      icon: <MessageSquareX className="h-12 w-12 text-destructive" />,
      title: language === 'fi' ? 'Tärkeät viestit jäävät lähettämättä' : 'Important messages go undelivered',
      description: language === 'fi' 
        ? 'Kiireessä unohtuu informoida kollegoita tärkeistä asioista, mikä johtaa väärinkäsityksiin ja viivästyksiin.'
        : 'In the rush of daily work, colleagues forget to inform about important matters, leading to misunderstandings and delays.'
    },
    {
      icon: <Clock className="h-12 w-12 text-destructive" />,
      title: language === 'fi' ? 'Aikaa kuluu viestien kirjoittamiseen' : 'Time wasted writing messages',
      description: language === 'fi'
        ? 'Sähköpostien ja viestien muotoilu vie aikaa varsinaiselta työltä, erityisesti kun pitää viestiä ammattimaisesti.'
        : 'Formatting emails and messages takes time away from actual work, especially when communicating professionally.'
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-destructive" />,
      title: language === 'fi' ? 'Epäjohdonmukainen viestintä' : 'Inconsistent communication',
      description: language === 'fi'
        ? 'Eri tiimiläiset viestivät eri tavoin, mikä luo epäselvyyttä ja heikentää ammatillista imagoa.'
        : 'Different team members communicate differently, creating confusion and weakening professional image.'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="h-4 w-4" />
            {language === 'fi' ? 'Ongelma' : 'The Problem'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {language === 'fi' 
              ? 'Asiantuntijaorganisaatioissa viestintä ontuu'
              : 'Communication struggles in expert organizations'
            }
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'fi'
              ? 'Nykyiset viestintätyökalut eivät tue asiantuntijoiden tarpeita. Tärkeä tieto jää jakamatta ja aika kuluu muotoiluun.'
              : 'Current communication tools don\'t support experts\' needs. Important information goes unshared and time is wasted on formatting.'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-background rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="bg-destructive/10 p-4 rounded-full mb-6">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;