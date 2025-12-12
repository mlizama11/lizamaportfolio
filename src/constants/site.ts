import { Link } from '@/types';

// Layout and Site Constants
export const siteTitle: string = 'Mauricio Lizama - Portfolio';
export const siteDescription: string =
  'Full Stack Developer showcasing projects, skills, and experience. Explore my work in web development and latest blog posts.';
export const siteUrl: string = 'https://www.mlizama.eu';
export const siteImage: string = `${siteUrl}/opengraph-image.jpg`;

// Navigation Links
export const links: Link[] = [
  { href: '/#home', label: 'Intro' },
  { href: '/#about', label: 'About' },
  { href: '/#works', label: 'Works' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#education', label: 'Education' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' }
];
