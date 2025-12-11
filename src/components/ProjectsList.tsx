'use client';

import { works } from '@/constants/works';

import { ProjectsListCard } from './ProjectsListCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './ui/accordion';

export function ProjectsList() {
  return (
    <Accordion
      type="multiple"
      defaultValue={['Web Development']}
      className="flex flex-col gap-8"
    >
      {works.map(({ id, type, projects }) => {
        return (
          <AccordionItem value={type} key={id} className="flex flex-col gap-3">
            <AccordionTrigger>
              <h4>{type}</h4>
            </AccordionTrigger>
            <AccordionContent className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => {
                return (
                  <ProjectsListCard
                    key={project.id}
                    project={{ ...project, type }}
                  />
                );
              })}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
