export type Link = {
  href: string;
  label: string;
};

export type TechStackItem = {
  title: string;
  logo: string;
};

export enum ProjectType {
  WEBDEV = 'Web Development',
  AUDIOVISUAL = 'Audiovisual',
  COMMUNICATIONS = 'Communications',
  PHOTOGRAPHY = 'Photography',
}

export type Project = {
  id: number;
  title: string;
  description: string;
  img: string;
  techStack?: Array<TechStackItem>;
  link?: string;
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
