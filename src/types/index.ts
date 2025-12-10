import { LinkProps } from 'next/link';

export type Link = {
  href: string;
  label: string;
};

export type NextLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    className?: string;
  };

export type TechStackItem = {
  title: string;
  logo: string;
};

export enum ProjectType {
  WEBDEV = 'Web Development',
  AUDIOVISUAL = 'Audiovisual',
  COMMUNICATIONS = 'Communications',
  PHOTOGRAPHY = 'Photography'
}

export type Project = {
  id: number;
  title: string;
  description: string;
  img: string;
  techStack?: Array<TechStackItem>;
  link?: string;
  sourceCode?: string;
};

export type Works = {
  id: number;
  type: ProjectType;
  projects: Array<Project>;
};

export type Experience = {
  company: string;
  location: string;
  period: string;
  role: string;
  responsibilities: string[];
};

export type EducationItem = {
  id?: string;
  institution: string;
  degree: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  details?: string[];
};

export type ContactFormData = {
  firstName: string;
  lastName: string;
  companyName?: string;
  email: string;
  message: string;
  altcha: string;
};

export type SimpleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BlogPost = {
  id: string;
  updatedAt: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  image: SimpleImage | null;
};

export type BlogPostsListProps = {
  blogPosts: BlogPost[];
};

export type SocialMediaShareProps = {
  url: string;
  siteDescription: string;
  sharingDefaultTitle: string;
};
