import { EducationItem, Experience, Link, Project } from '@/types';

// Layout and Site Constants
export const siteTitle: string = 'Mauricio Lizama - Portfolio';
export const siteDescription: string =
  'Welcome to my portfolio website where I showcase my projects, skills, and experience as a developer.';
export const siteUrl: string = 'https://www.mlizama.eu';
// Navigation Links
export const links: Link[] = [
  { href: '#home', label: 'Intro' },
  { href: '#about', label: 'About' },
  { href: '#works', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#stack', label: 'Stack' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];
// Projects Data
export const projects: Project[] = [
  {
    id: 1,
    name: 'Planted Green CO2 Reporting Software',
    description:
      'I PLANTED GmbH is a startup focused on combating climate change through innovative solutions. As part of their team, I colaborated building a comprehensive CO2 reporting software that enables businesses to accurately track and report their carbon emissions. I worked with React in the frontend and NestJS and Prisma ORM in the backend. Please feel free to click in the more information button and check in their website their free version where you could see the software capabilities.',
    img: '/assets/plantedgreen.jpg',
    techStack: [
      { name: 'TypeScript', logo: 'typescript' },
      { name: 'Next.js', logo: 'next.js' },
      { name: 'React', logo: 'react' },
      { name: 'Tailwind CSS', logo: 'tailwindcss' },
      { name: 'Shadcn', logo: 'shadcnui' },
      { name: 'Auth0', logo: 'auth0' },
      { name: 'NestJS', logo: 'nestjs' },
      { name: 'Prisma', logo: 'prisma' },
      { name: 'MySQL', logo: 'mysql' },
    ],
  },
  {
    id: 2,
    name: 'Emilia Prieto',
    description:
      'The Emilia Prieto Project is one that aims to promote and keep the memory alive of an artist, educator, singer and scholar of folklore from Costa Rica. The website collects its most important artistic and intellectual work legacy. I created this website initially with bootstrap and recently I updated to NextJS. Visit the website clicking in the more information button to explore the rich cultural heritage of Emilia Prieto through this digital platform.',
    img: '/assets/emiliaprietoproject.jpg',
    techStack: [
      { name: 'TypeScript', logo: 'typescript' },
      { name: 'Next.js', logo: 'next.js' },
      { name: 'React', logo: 'react' },
      { name: 'Tailwind CSS', logo: 'tailwindcss' },
      { name: 'Shadcn', logo: 'shadcnui' },
      { name: 'Motion', logo: 'framer' },
      { name: 'MDX', logo: 'markdown' },
    ],
  },
];
// Experience Data
export const experiences: Experience[] = [
  {
    company: 'I Planted GmbH',
    location: 'Cologne, Germany',
    period: 'Nov 2021 — Jun 2025',
    role: 'Full Stack Web Developer',
    responsibilities: [
      'Developed a software application using React and Nest with a SQL database.',
      'Collaborated with cross-functional teams to enhance project delivery and user experience.',
      'Supported the Webflow main website (planted.green).',
      'Participated in tree-planting initiatives around Cologne.',
      'Completed the learning certificate "The Joy of React" by Josh W. Comeau.',
    ],
  },
  {
    company: 'Organization of American States (OAS)',
    location: 'Washington, DC, USA',
    period: 'May 2014 — Dec 2016',
    role: 'Multimedia and Communications Officer',
    responsibilities: [
      'Developed strategic, political, and corporate communications for the Press and Communications Department.',
      'Produced multimedia content, including videos and photography, to support OAS initiatives.',
      'Supported and participated in high-level political events.',
    ],
  },
  {
    company: 'National Theatre of Costa Rica',
    location: 'San José, Costa Rica',
    period: 'Oct 2008 — Dec 2011',
    role: 'Communications Officer',
    responsibilities: [
      'Handled corporate and strategic communications for the Cultural Promotion Department.',
      'Analyzed audience feedback to refine promotional strategies and improve outreach effectiveness.',
      'Developed engaging press releases and created marketing materials to boost visibility of events, exhibitions, and activities.',
    ],
  },
];
// Education Data
export const education: EducationItem[] = [
  {
    institution: 'Digital Career Institute GmbH',
    degree: 'Full-Stack Web and Software Developer Certificate',
    location: 'Germany',
    startDate: '2020',
    endDate: '2021',
    details: ['Professional training in MERN stack.'],
  },
  {
    institution: 'Federated University',
    degree: 'Bachelor in Audiovisual Production',
    location: 'Costa Rica',
    startDate: '2012',
    endDate: '2013',
    details: [],
  },
  {
    institution: 'Creativity University',
    degree: 'Diploma in Motion Graphics',
    location: 'Costa Rica',
    startDate: '2007',
    endDate: '2007',
    details: [],
  },
  {
    institution: 'Latina University',
    degree: 'Bachelor in Journalism',
    location: 'Costa Rica',
    startDate: '2002',
    endDate: '2005',
    details: [],
  },
];
