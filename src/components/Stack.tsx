import React from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiSwr,
  SiGithub,
  SiStyledcomponents,
  SiFramer,
  SiShadcnui,
  SiRadixui,
  SiMui,
  SiChakraui,
  SiReacthookform,
  SiPostman,
  SiAuth0,
  SiReactrouter,
} from 'react-icons/si';
import { Section, SectionTitle } from './layout/Section';

export default function Stack() {
  const myStack = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'React', icon: SiReact, color: 'text-blue-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
    { name: 'HTML', icon: SiHtml5, color: 'text-orange-600' },
    { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
    { name: 'SASS', icon: SiCss3, color: 'text-pink-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
      color: 'text-purple-500',
    },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
    {
      name: 'Shadcn UI',
      icon: SiShadcnui,
      color: 'text-gray-900 dark:text-white',
    },
    {
      name: 'Radix UI',
      icon: SiRadixui,
      color: 'text-gray-900 dark:text-white',
    },
    { name: 'MUI', icon: SiMui, color: 'text-blue-500' },
    { name: 'Chakra UI', icon: SiChakraui, color: 'text-teal-400' },
    { name: 'React Hook Form', icon: SiReacthookform, color: 'text-pink-500' },
    { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500' },
    { name: 'Redux', icon: SiRedux, color: 'text-indigo-500' },
    { name: 'SWR', icon: SiSwr, color: 'text-black dark:text-white' },
    {
      name: 'React Router',
      icon: SiReactrouter,
      color: 'text-gray-900 dark:text-white',
    },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Auth0', icon: SiAuth0, color: 'text-black dark:text-white' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
    {
      name: 'Express',
      icon: SiExpress,
      color: 'text-gray-700 dark:text-white',
    },
    { name: 'NestJS', icon: SiNestjs, color: 'text-red-600' },
    { name: 'Prisma', icon: SiPrisma, color: 'text-gray-900 dark:text-white' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-700' },
    { name: 'MySQL', icon: SiMysql, color: 'text-cyan-700' },
    {
      name: 'Git & GitHub',
      icon: SiGithub,
      color: 'text-gray-900 dark:text-white',
    },
  ];
  return (
    <Section id="stack">
      <SectionTitle>Tech Stack | Skills</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {myStack.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="flex items-center gap-4 rounded-lg border border-gray-200 p-3 shadow-sm transition-shadow hover:shadow-md dark:border-white dark:hover:bg-gray-700"
          >
            <div>
              <Icon className={`inline-block text-3xl ${color}`} />
            </div>
            <div>
              <div className="font-semibold">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
