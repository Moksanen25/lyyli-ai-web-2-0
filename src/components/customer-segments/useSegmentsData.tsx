import { useMemo } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

// Define proper SegmentData interface
export interface SegmentData {
  id: string;
  name: string;
  icon?: React.ReactNode;
  description?: string;
  painPoints: string[];
  solutions: string[];
  caseStudyUrl?: string;
  image?: string;
  testimonial?: {
    quote: string;
    author: string;
    company: string;
    avatar?: string;
  };
}

export const useSegmentsData = () => {
  const { t } = useLanguage();
  
  const segments = useMemo<SegmentData[]>(() => {
    return [
      {
        id: 'tech-smes',
        name: t('customerSegments.techSMEs'),
        icon: React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: "w-6 h-6"
        }, React.createElement("path", {
          fillRule: "evenodd",
          d: "M9.315 7.585a1.5 1.5 0 00-2.122 2.122L2.25 16.5a3 3 0 002.25 5.205l1.131.377a3 3 0 002.014-.81l2.829-2.828a1.5 1.5 0 00-2.122-2.122L5.943 16.5a.75.75 0 01-.53.22l-.938-.313a.75.75 0 01-.504-.938l.313-.937a.75.75 0 01.22-.53l6.785-6.785zm7.37 9.635a1.5 1.5 0 002.122-2.122L7.5 2.25a3 3 0 00-5.205 2.25l-.377 1.131a3 3 0 00.81 2.014l2.828 2.829a1.5 1.5 0 002.122-2.122L7.5 5.943a.75.75 0 01-.22-.53l.313-.938a.75.75 0 01.938-.504l.937.313a.75.75 0 01.53.22l6.785 6.785z",
          clipRule: "evenodd"
        })),
        description: t('customerSegments.techSMEsDescription'),
        painPoints: [
          t('customerSegments.techSMEsPainPoint1'),
          t('customerSegments.techSMEsPainPoint2'),
          t('customerSegments.techSMEsPainPoint3'),
        ],
        solutions: [
          t('customerSegments.techSMESolution1'),
          t('customerSegments.techSMESolution2'),
          t('customerSegments.techSMESolution3'),
        ],
        caseStudyUrl: '/full/case-studies/tech-smes',
        image: '/images/segments/tech-smes.webp',
        testimonial: {
          quote: t('customerSegments.techSMEsQuote'),
          author: 'Jane Doe',
          company: 'Acme Corp',
          avatar: '/images/avatars/avatar-1.webp',
        },
      },
      {
        id: 'consulting',
        name: t('customerSegments.consulting'),
        icon: React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: "w-6 h-6"
        }, React.createElement("path", {
          d: "M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472.655-5.265.655-7.737 0a13.067 13.067 0 01-6.761-1.873.75.75 0 01-.363-.63l-.001-.119v-.003zM17.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472.655-5.265.655-7.737 0a13.067 13.067 0 01-6.761-1.873.75.75 0 01-.363-.63l-.001-.119v-.003z"
        })),
        description: t('customerSegments.consultingDescription'),
        painPoints: [
          t('customerSegments.consultingPainPoint1'),
          t('customerSegments.consultingPainPoint2'),
          t('customerSegments.consultingPainPoint3'),
        ],
        solutions: [
          t('customerSegments.consultingSolution1'),
          t('customerSegments.consultingSolution2'),
          t('customerSegments.consultingSolution3'),
        ],
        caseStudyUrl: '/full/case-studies/consulting',
        image: '/images/segments/consulting.webp',
        testimonial: {
          quote: t('customerSegments.consultingQuote'),
          author: 'John Smith',
          company: 'Consulting Firm',
          avatar: '/images/avatars/avatar-2.webp',
        },
      },
      {
        id: 'non-profits',
        name: t('customerSegments.nonProfits'),
        icon: React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: "w-6 h-6"
        }, React.createElement("path", {
          d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 5.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8.61 13.288a.75.75 0 00-1.222.724c-.173.697.097 1.417.687 1.943.697.643 1.723.982 2.713.982.99 0 2.016-.339 2.713-.982.59-.526.86-1.246.687-1.943a.75.75 0 00-1.222-.724l-.082.075a6 6 0 01-3.41 0l-.082-.075zM15.39 13.288a.75.75 0 011.222.724c.173.697-.097 1.417-.687 1.943-.697.643-1.723.982-2.713.982-.99 0-2.016-.339-2.713-.982-.59-.526-.86-1.246-.687-1.943a.75.75 0 011.222-.724l.082.075a6 6 0 003.41 0l.082-.075z"
        })),
        description: t('customerSegments.nonProfitsDescription'),
        painPoints: [
          t('customerSegments.nonProfitsPainPoint1'),
          t('customerSegments.nonProfitsPainPoint2'),
          t('customerSegments.nonProfitsPainPoint3'),
        ],
        solutions: [
          t('customerSegments.nonProfitsSolution1'),
          t('customerSegments.nonProfitsSolution2'),
          t('customerSegments.nonProfitsSolution3'),
        ],
        caseStudyUrl: '/full/case-studies/non-profits',
        image: '/images/segments/non-profits.webp',
        testimonial: {
          quote: t('customerSegments.nonProfitsQuote'),
          author: 'Peter Jones',
          company: 'Charity Org',
          avatar: '/images/avatars/avatar-3.webp',
        },
      },
      {
        id: 'education',
        name: t('customerSegments.education'),
        icon: React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: "w-6 h-6"
        }, React.createElement("path", {
          d: "M6.75 3h10.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75zM18 6.75v10.125c0 .966-.783 1.75-1.75 1.75H7.75c-.966 0-1.75-.783-1.75-1.75V6.75h12zM19.5 12h-1.5v2.25H6v-2.25H4.5a.75.75 0 010-1.5H6V8.25h12v2.25h1.5a.75.75 0 010 1.5z"
        })),
        description: t('customerSegments.educationDescription'),
        painPoints: [
          t('customerSegments.educationPainPoint1'),
          t('customerSegments.educationPainPoint2'),
          t('customerSegments.educationPainPoint3'),
        ],
        solutions: [
          t('customerSegments.educationSolution1'),
          t('customerSegments.educationSolution2'),
          t('customerSegments.educationSolution3'),
        ],
        caseStudyUrl: '/full/case-studies/education',
        image: '/images/segments/education.webp',
        testimonial: {
          quote: t('customerSegments.educationQuote'),
          author: 'Emily White',
          company: 'School District',
          avatar: '/images/avatars/avatar-4.webp',
        },
      },
      {
        id: 'creative-agencies',
        name: t('customerSegments.creativeAgencies'),
        icon: React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: "w-6 h-6"
        }, React.createElement("path", {
          d: "M1.5 8.625v-1.5c0-.621.504-1.125 1.125-1.125h1.5V3.75c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v2.25h1.5c.621 0 1.125.504 1.125 1.125v1.5h1.5c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-1.5v2.25c0 .621-.504 1.125-1.125 1.125H5.25c-.621 0-1.125-.504-1.125-1.125v-2.25h-1.5c-.621 0-1.125-.504-1.125-1.125V8.625zm16.5 1.5h-3.75c-.621 0-1.125-.504-1.125-1.125V5.25c0-.621.504-1.125 1.125-1.125h3.75v5.625zM5.25 5.25c0 .621.504 1.125 1.125 1.125h3.75v-5.625H6.375c-.621 0-1.125.504-1.125 1.125v3.375z"
        })),
        description: t('customerSegments.creativeAgenciesDescription'),
        painPoints: [
          t('customerSegments.creativeAgenciesPainPoint1'),
          t('customerSegments.creativeAgenciesPainPoint2'),
          t('customerSegments.creativeAgenciesPainPoint3'),
        ],
        solutions: [
          t('customerSegments.creativeAgenciesSolution1'),
          t('customerSegments.creativeAgenciesSolution2'),
          t('customerSegments.creativeAgenciesSolution3'),
        ],
        caseStudyUrl: '/full/case-studies/creative-agencies',
        image: '/images/segments/creative-agencies.webp',
        testimonial: {
          quote: t('customerSegments.creativeAgenciesQuote'),
          author: 'Richard Roe',
          company: 'Design Co',
          avatar: '/images/avatars/avatar-5.webp',
        },
      },
      {
        id: 'sports-organizations',
        name: t('customerSegments.sportsOrganizations'),
        icon: React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: "w-6 h-6"
        }, React.createElement("path", {
          d: "M2.25 2.25a.75.75 0 000 1.5h1.386c.17.003.341.006.513.006h5.414l.307 1.152a.052.052 0 01.013.028c.005.015.007.03.007.045v.255a.75.75 0 00.75.75h12.54a.75.75 0 000-1.5H3.787l-.307-1.152a.052.052 0 01-.013-.028c-.005-.015-.007-.03-.007-.045V3.75a.75.75 0 00-.75-.75H2.25z"
        }, React.createElement("path", {
          d: "M3.75 5.25h16.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75zM5.25 6.75a.75.75 0 00-.75.75v4.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75H5.25zm5.25.75v4.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75zm5.25.75v4.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75zM3 15h18a.75.75 0 00.75-.75V15c0-1.892-1.899-3.375-4.5-3.375h-9c-2.601 0-4.5 1.483-4.5 3.375v-.75a.75.75 0 00.75.75z"
        })),
        description: t('customerSegments.sportsOrganizationsDescription'),
        painPoints: [
          t('customerSegments.sportsOrganizationsPainPoint1'),
          t('customerSegments.sportsOrganizationsPainPoint2'),
          t('customerSegments.sportsOrganizationsPainPoint3'),
        ],
        solutions: [
          t('customerSegments.sportsOrganizationsSolution1'),
          t('customerSegments.sportsOrganizationsSolution2'),
          t('customerSegments.sportsOrganizationsSolution3'),
        ],
        caseStudyUrl: '/full/case-studies/sports-organizations',
        image: '/images/segments/sports-organizations.webp',
        testimonial: {
          quote: t('customerSegments.sportsOrganizationsQuote'),
          author: 'Carl Davis',
          company: 'Sports League',
          avatar: '/images/avatars/avatar-6.webp',
        },
      },
    ];
  }, [t]);
  
  return {
    segments,
    getSegmentById: (id: string) => segments.find(segment => segment.id === id),
  };
};
