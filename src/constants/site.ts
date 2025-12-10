import { Link } from '@/types';

// Layout and Site Constants
export const siteTitle: string = 'Mauricio Lizama - Portfolio';
export const siteDescription: string =
  'Welcome to my portfolio website where I showcase my projects, skills, and experience as a developer.';
export const siteUrl: string = 'https://mlizama.netlify.app';
export const siteImage: string = `${siteUrl}/og-image.png`;
// Navigation Links
export const links: Link[] = [
  { href: '/#home', label: 'Intro' },
  { href: '/#about', label: 'About' },
  { href: '/#works', label: 'Works' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#education', label: 'Education' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' }
];
