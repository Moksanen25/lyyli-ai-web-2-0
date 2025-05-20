
import React from 'react';
import { SegmentIcons } from '../utils/segmentIcons';
import { SegmentData } from '../types/segmentTypes';

/**
 * Creates segment data objects with translations
 * @param t Translation function
 * @returns Array of segment data objects
 */
export const createSegmentsData = (t: (key: string) => string): SegmentData[] => {
  // For tech segment
  const techName = t('customerSegments.techSMEs.name') || 'Technology Companies';
  const techDesc = t('customerSegments.techSMEs.description') || 'Streamline technical communication and product updates';
  const techPainPoints = [
    t('customerSegments.techSMEs.painPoints.0') || 'Product update communication to multiple stakeholders',
    t('customerSegments.techSMEs.painPoints.1') || 'Maintaining and updating technical documentation',
    t('customerSegments.techSMEs.painPoints.2') || 'Consistency of messaging across channels',
  ];
  const techSolutions = [
    t('customerSegments.techSMEs.solutions.0') || 'Automated communication workflow for product updates',
    t('customerSegments.techSMEs.solutions.1') || 'Integrated documentation management',
    t('customerSegments.techSMEs.solutions.2') || 'Unified communication platform across all channels',
  ];
  const techQuote = t('customerSegments.techSMEs.quote') || 'Lyyli helped us reduce documentation time by 60% while improving the quality and consistency of our technical content.';
  const techAuthor = t('customerSegments.techSMEs.author') || 'Maria T., CTO, DevStack';

  // For consulting segment
  const consultingName = t('customerSegments.consulting.name') || 'Consulting Firms';
  const consultingDesc = t('customerSegments.consulting.description') || 'Enhance client communication and project updates';
  const consultingPainPoints = [
    t('customerSegments.consulting.painPoints.0') || 'Coordinating communication across multiple client projects',
    t('customerSegments.consulting.painPoints.1') || 'Efficiency in creating client reports and presentations',
    t('customerSegments.consulting.painPoints.2') || 'Brand customization across different client projects',
  ];
  const consultingSolutions = [
    t('customerSegments.consulting.solutions.0') || 'Client-specific communication portals',
    t('customerSegments.consulting.solutions.1') || 'Automated reporting workflow',
    t('customerSegments.consulting.solutions.2') || 'Dynamic branding tool',
  ];
  const consultingQuote = t('customerSegments.consulting.quote') || 'We\'ve seen a 40% improvement in client engagement since implementing Lyyli into our client communication program.';
  const consultingAuthor = t('customerSegments.consulting.author') || 'James W., Managing Partner, Insight Consulting';

  // For nonprofits segment
  const nonprofitName = t('customerSegments.nonprofits.name') || 'Nonprofit Organizations';
  const nonprofitDesc = t('customerSegments.nonprofits.description') || 'Streamline donor communication and volunteer programs';
  const nonprofitPainPoints = [
    t('customerSegments.nonprofits.painPoints.0') || 'Limited resources for creating impactful communication',
    t('customerSegments.nonprofits.painPoints.1') || 'Reaching different stakeholders (donors, volunteers, beneficiaries)',
    t('customerSegments.nonprofits.painPoints.2') || 'Managing campaign content with limited staff',
  ];
  const nonprofitSolutions = [
    t('customerSegments.nonprofits.solutions.0') || 'Efficient communication templates for different stakeholders',
    t('customerSegments.nonprofits.solutions.1') || 'Automated campaign workflow for limited resources',
    t('customerSegments.nonprofits.solutions.2') || 'Integrated donor engagement tracking',
  ];
  const nonprofitQuote = t('customerSegments.nonprofits.quote') || 'With Lyyli, we can create impactful campaign materials in minutes instead of days, allowing us to focus on our mission.';
  const nonprofitAuthor = t('customerSegments.nonprofits.author') || 'Sarah L., Communications Director, Global Hope Initiative';

  // For education segment
  const educationName = t('customerSegments.education.name') || 'Educational Institutions';
  const educationDesc = t('customerSegments.education.description') || 'Connect students, parents and faculty with effective communication';
  const educationPainPoints = [
    t('customerSegments.education.painPoints.0') || 'Maintaining consistent communication across departments',
    t('customerSegments.education.painPoints.1') || 'Reaching multiple audiences with the right tone',
    t('customerSegments.education.painPoints.2') || 'Efficiently managing regular updates and announcements',
  ];
  const educationSolutions = [
    t('customerSegments.education.solutions.0') || 'Integrated communication management system for all departments',
    t('customerSegments.education.solutions.1') || 'Targeted communication tools for different audiences',
    t('customerSegments.education.solutions.2') || 'Automated scheduling and publishing',
  ];
  const educationQuote = t('customerSegments.education.quote') || 'Lyyli has transformed how we communicate with our diverse community, saving time and making our messages more relevant to each audience.';
  const educationAuthor = t('customerSegments.education.author') || 'Dr. Robert Chen, Dean of Communications, Westfield University';

  // For creative segment
  const creativeName = t('customerSegments.creative.name') || 'Creative Industries';
  const creativeDesc = t('customerSegments.creative.description') || 'Showcase your creative work professionally and win new clients';
  const creativePainPoints = [
    t('customerSegments.creative.painPoints.0') || 'Communicating unique brand vision',
    t('customerSegments.creative.painPoints.1') || 'Creating portfolio and project presentations',
    t('customerSegments.creative.painPoints.2') || 'Personalizing client communication efficiently',
  ];
  const creativeSolutions = [
    t('customerSegments.creative.solutions.0') || 'Communication platform highlighting visual elements',
    t('customerSegments.creative.solutions.1') || 'Dynamic portfolio presentation tool',
    t('customerSegments.creative.solutions.2') || 'Client-specific communication templates',
  ];
  const creativeQuote = t('customerSegments.creative.quote') || 'The AI understands creative language in a way that\'s truly impressive. It\'s like having our own copywriter on staff.';
  const creativeAuthor = t('customerSegments.creative.author') || 'Emma D., Creative Director, Design Forward';

  // For sports segment
  const sportsName = t('customerSegments.sports.name') || 'Sports Organizations';
  const sportsDesc = t('customerSegments.sports.description') || 'Engage fans, members and sponsors with effective communication';
  const sportsPainPoints = [
    t('customerSegments.sports.painPoints.0') || 'Keeping fans and members informed and engaged',
    t('customerSegments.sports.painPoints.1') || 'Efficiently promoting events and activities',
    t('customerSegments.sports.painPoints.2') || 'Maximizing value from sponsorship agreements',
  ];
  const sportsSolutions = [
    t('customerSegments.sports.solutions.0') || 'Automated fan and member communication system',
    t('customerSegments.sports.solutions.1') || 'Integrated event promotion tool',
    t('customerSegments.sports.solutions.2') || 'Enhanced sponsor visibility',
  ];
  const sportsQuote = t('customerSegments.sports.quote') || 'We\'ve seen a 35% increase in event attendance since streamlining our communication to members with Lyyli.';
  const sportsAuthor = t('customerSegments.sports.author') || 'Mark J., Communications Manager, Metropolitan Sports League';

  return [
    {
      id: 'tech-smes',
      name: techName,
      icon: SegmentIcons.techSMEs,
      description: techDesc,
      painPoints: techPainPoints,
      solutions: techSolutions,
      caseStudyUrl: '/full/case-studies/tech-smes',
      image: '/images/segments/tech-smes.webp',
      testimonial: {
        quote: techQuote,
        author: techAuthor,
        company: 'Acme Corp',
        avatar: '/images/avatars/avatar-1.webp',
      },
    },
    {
      id: 'consulting',
      name: consultingName,
      icon: SegmentIcons.consulting,
      description: consultingDesc,
      painPoints: consultingPainPoints,
      solutions: consultingSolutions,
      caseStudyUrl: '/full/case-studies/consulting',
      image: '/images/segments/consulting.webp',
      testimonial: {
        quote: consultingQuote,
        author: consultingAuthor,
        company: 'Consulting Firm',
        avatar: '/images/avatars/avatar-2.webp',
      },
    },
    {
      id: 'non-profits',
      name: nonprofitName,
      icon: SegmentIcons.nonprofits,
      description: nonprofitDesc,
      painPoints: nonprofitPainPoints,
      solutions: nonprofitSolutions,
      caseStudyUrl: '/full/case-studies/non-profits',
      image: '/images/segments/non-profits.webp',
      testimonial: {
        quote: nonprofitQuote,
        author: nonprofitAuthor,
        company: 'Charity Org',
        avatar: '/images/avatars/avatar-3.webp',
      },
    },
    {
      id: 'education',
      name: educationName,
      icon: SegmentIcons.education,
      description: educationDesc,
      painPoints: educationPainPoints,
      solutions: educationSolutions,
      caseStudyUrl: '/full/case-studies/education',
      image: '/images/segments/education.webp',
      testimonial: {
        quote: educationQuote,
        author: educationAuthor,
        company: 'School District',
        avatar: '/images/avatars/avatar-4.webp',
      },
    },
    {
      id: 'creative-agencies',
      name: creativeName,
      icon: SegmentIcons.creative,
      description: creativeDesc,
      painPoints: creativePainPoints,
      solutions: creativeSolutions,
      caseStudyUrl: '/full/case-studies/creative-agencies',
      image: '/images/segments/creative-agencies.webp',
      testimonial: {
        quote: creativeQuote,
        author: creativeAuthor,
        company: 'Design Co',
        avatar: '/images/avatars/avatar-5.webp',
      },
    },
    {
      id: 'sports-organizations',
      name: sportsName,
      icon: SegmentIcons.sports,
      description: sportsDesc,
      painPoints: sportsPainPoints,
      solutions: sportsSolutions,
      caseStudyUrl: '/full/case-studies/sports-organizations',
      image: '/images/segments/sports-organizations.webp',
      testimonial: {
        quote: sportsQuote,
        author: sportsAuthor,
        company: 'Sports League',
        avatar: '/images/avatars/avatar-6.webp',
      },
    },
  ];
};
