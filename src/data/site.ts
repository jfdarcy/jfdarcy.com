export const site = {
  name: "Jean-François D'Arcy, Ph.D",
  url: 'https://www.jfdarcy.com',
  email: 'jfdarcy@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jfdarcy',
  github: 'https://github.com/jfdarcy',
  hero: {
    image: '/images/hero/biosphere-matthieu.jpg',
    credit: {
      photographer: 'Matthieu Joannon',
      photographerUrl: 'https://unsplash.com/@matt_j?utm_source=jfdarcy&utm_medium=referral',
      source: 'Unsplash',
      sourceUrl: 'https://unsplash.com/?utm_source=jfdarcy&utm_medium=referral',
    },
  },
  links: {
    felicitous: 'http://www.felicitous.tech',
    fairHireAi: 'http://www.fairhireai.com',
    doUsersGetIt: 'https://www.dousersgetit.com',
    aiToolkit: 'https://jfdarcy.github.io/ai-ux-research-toolkit/',
    startupToolkit: 'https://startup-toolkit-landing-page.vercel.app/',
    uxpaArticle: 'https://uxpamagazine.org/aligning_ux_business_goals/',
    literatureReviewSlides:
      'https://docs.google.com/presentation/d/1cwCK5EKy34htOQ1g6rsLT-p6Ahbx3Haz6lRMD54b7JM/present',
    standardizedQuestionnaireSlides:
      'https://docs.google.com/presentation/d/1xkCdEfrMLj3AVuQoHohnPMXAtul1IEg8S0ITwcdpQ3I/present',
  },
} as const;

export const navItems = [
  { label: 'Home', href: '/home' },
  { label: 'About Me', href: '/about-me' },
  { label: 'UX Research Philosophy', href: '/ux-research-philosophy' },
  {
    label: 'Portfolio',
    href: '/portfolio',
    children: [
      { label: 'Literature review', href: '/portfolio/literature-review' },
      { label: 'Design sprint usability test', href: '/portfolio/design-sprint-usability-test' },
      { label: 'Standardized questionnaire', href: '/portfolio/standardized-questionnaire' },
      { label: 'Latent class analysis', href: '/portfolio/latent-class-analysis' },
      { label: 'Usability test', href: '/portfolio/usability-test' },
    ],
  },
  { label: 'Leadership', href: '/leadership' },
] as const;

export const searchPages = [
  { title: 'Home', href: '/home', description: 'UX researcher and human factors engineer with 25+ years of experience in safety-critical systems, enterprise SaaS, and product building' },
  { title: 'About Me', href: '/about-me', description: 'Background, education (Ph.D., UdeM, UQAM), and professional experience' },
  {
    title: 'UX Research Philosophy',
    href: '/ux-research-philosophy',
    description: 'Research philosophy and augmented rigor co-researcher model',
  },
  { title: 'Leadership', href: '/leadership', description: 'Servant leadership and collaboration philosophy' },
  { title: 'Portfolio', href: '/portfolio', description: 'Selected UX research work samples' },
  {
    title: 'Literature review',
    href: '/portfolio/literature-review',
    description: 'Retirement planning behavioral finance literature review',
  },
  {
    title: 'Usability test',
    href: '/portfolio/usability-test',
    description: 'Fair Hire AI RITE usability test case study',
  },
  {
    title: 'Standardized questionnaire',
    href: '/portfolio/standardized-questionnaire',
    description: 'UEQ performance perception questionnaire study',
  },
  {
    title: 'Latent class analysis',
    href: '/portfolio/latent-class-analysis',
    description: 'Persona validation case study in progress',
  },
  {
    title: 'Design sprint usability test',
    href: '/portfolio/design-sprint-usability-test',
    description: 'Services representative support case study in progress',
  },
] as const;

export const portfolioItems = [
  {
    title: 'Can recruiters and hiring managers intuitively use this new tool?',
    subtitle: 'RITE usability test',
    href: '/portfolio/usability-test',
    image: '/images/portfolio/cards/usability-test-card.jpg',
    imageAlt: 'People reviewing documents during a usability test session',
    credit: 'Photo by Aaron Burden on Unsplash',
  },
  {
    title: 'How do people feel about retirement planning and saving?',
    subtitle: 'Literature review',
    href: '/portfolio/literature-review',
    image: '/images/portfolio/cards/literature-review-card.jpg',
    imageAlt: 'Hands holding coins above a table',
    credit: 'Photo by Nick Abrams on Unsplash',
  },
  {
    title: 'Do users perceive a performance delay?',
    subtitle: 'Standardized questionnaire',
    href: '/portfolio/standardized-questionnaire',
    image: '/images/portfolio/cards/standardized-questionnaire-card.jpg',
    imageAlt: 'Person using a laptop for a survey',
    credit: 'Photo by UX Indonesia on Unsplash',
  },
  {
    title: 'How can we empirically validate our personas?',
    subtitle: 'Latent class analysis',
    href: '/portfolio/latent-class-analysis',
    image: '/images/portfolio/cards/latent-class-analysis-card.jpg',
    imageAlt: 'Team collaborating around a whiteboard',
    credit: 'Photo by Charanjeet Dhiman on Unsplash',
    inProgress: true,
  },
  {
    title: 'How can we better support our services representatives?',
    subtitle: 'Design sprint usability test',
    href: '/portfolio/design-sprint-usability-test',
    image: '/images/portfolio/cards/design-sprint-card.jpg',
    imageAlt: 'Team collaborating during a design sprint',
    credit: '',
    inProgress: true,
  },
] as const;
