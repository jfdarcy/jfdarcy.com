import { site } from './site';

export const homeStats = [
  {
    value: '25+ years',
    label: 'Building products around human behavior',
  },
  {
    value: 'Interdisciplinary',
    label: 'From aviation and defense to SaaS and AI products',
  },
  {
    value: 'Ph.D.',
    label: 'Experimental Cognitive Psychology',
  },
  {
    value: 'Founder',
    label: 'Building AI products and UX research tools',
  },
] as const;

export const formerEmployers = [
  'Lockheed Martin',
  'Paychex',
  'Westinghouse Electric',
  'Sauce Labs',
  'University at Buffalo',
  'ARA',
  'Mosaic ATM',
  'Titan Corp',
] as const;

export const formerClients = [
  'FAA',
  'NASA',
  'DoD',
  'U.S. Navy',
  'U.S. Marines',
  'U.S. Air Force',
] as const;

export const buildingProducts = [
  {
    name: 'Fair Hire AI',
    href: site.links.fairHireAi,
    linkLabel: 'fairhireai.com',
    description: 'Fair tools for everyone in hiring',
    audiences: [
      {
        label: 'For employers',
        text: 'Reduce bias in hiring—anonymize resumes, mask identifying details, write inclusive job postings, and ask safer interview questions.',
      },
      {
        label: 'For job seekers',
        text: 'Query Builder is live—build Boolean queries for direct ATS listings on Lever, Greenhouse, Ashby, and more.',
      },
    ],
  },
  {
    name: 'Do users get it?',
    href: site.links.doUsersGetIt,
    linkLabel: 'dousersgetit.com',
    description: 'Affordable UX research tools for teams of any size',
    audiences: [
      {
        label: 'Coming soon',
        text: '5-second test, card sort, first-click test, and AI-assisted heuristic review—four tools to help you understand your users.',
      },
      {
        label: 'Pay as you go',
        text: 'No subscriptions. Pay only for what you use.',
      },
    ],
  },
  {
    name: 'AI UX Research Toolkit',
    href: site.links.aiToolkit,
    linkLabel: 'Explore the toolkit',
    description: 'Augmented rigor and the co-researcher model',
    audiences: [
      {
        label: 'Live now',
        text: 'UX Research Interview Refiner—co-researcher that stress-tests draft guides for blind spots, framing bias, and missed angles.',
      },
      {
        label: 'In development',
        text: 'Thematic Analyzer, Research Plan Challenger, and Insight Rigidity Checker—tools that challenge researcher assumptions and strengthen insight quality.',
      },
    ],
  },
] as const;

export const aiResearchToolkit = {
  name: 'AI UX Research Toolkit',
  href: site.links.aiToolkit,
  description: 'Open prompts and workflows for augmented rigor in UX research',
  philosophyHref: '/ux-research-philosophy',
} as const;
