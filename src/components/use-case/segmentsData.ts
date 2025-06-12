
import { 
  Building2, 
  Lightbulb, 
  Heart, 
  GraduationCap, 
  Palette, 
  Trophy
} from 'lucide-react';
import { Segment } from './types';

export const segments: Segment[] = [
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
