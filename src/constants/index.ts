import { Link, Project } from '@/types';

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
      'I PLANTED GmbH is a startup focused on combating climate change through innovative solutions. As part of their team, I colaborated building a comprehensive CO2 reporting software that enables businesses to accurately track and report their carbon emissions. This software not only simplifies the reporting process but also provides actionable insights to help companies reduce their carbon footprint effectively.',
    img: '/assets/plantedgreen.jpg',
  },
  {
    id: 2,
    name: 'Emilia Prieto',
    description:
      'The Emilia Prieto Project is one that aims to promote and keep the memory alive of an artist, educator, singer and scholar of folklore from Costa Rica. I created a website with bootstrap that collects its most important artistic and intellectual work legacy. At the current moment, I am working to launch and disseminate its content through social media and other communicational means.',
    img: '/assets/emiliaprietoproject.jpg',
  },
];
