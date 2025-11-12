export type Link = {
  href: string;
  label: string;
};

export type TechStackItem = {
  name: string;
  logo: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  img: string;
  techStack?: Array<TechStackItem>;
  type: 'web development' | 'journalism' | 'audiovisual' | 'photography';
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

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};
