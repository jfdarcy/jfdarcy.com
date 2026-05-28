import { site } from './site';

export const homeStats = [
  { value: '25+', label: 'Years in UX & human factors' },
  { value: 'Ph.D.', label: 'Cognitive science & AI' },
  { value: '5', label: 'Industries served' },
  { value: '6+', label: 'Research methods' },
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
    description: 'AI-assisted hiring workflows',
  },
  {
    name: 'Do users get it?',
    href: site.links.doUsersGetIt,
    description: 'Usability testing for product teams',
  },
] as const;

export const aiResearchToolkit = {
  name: 'AI UX Research Toolkit',
  href: site.links.aiToolkit,
  description: 'Open prompts and workflows for augmented rigor in UX research',
  philosophyHref: '/ux-research-philosophy',
} as const;
