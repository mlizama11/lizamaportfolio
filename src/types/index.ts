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
  techStack: Array<TechStackItem>;
};
