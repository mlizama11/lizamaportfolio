'use client';

import { works } from '@/constants/works';

import { ProjectsListCard } from './ProjectsListCard';

export function ProjectsList() {
  return (
    <div className="flex flex-col gap-8">
      {works.map(({ id, type, projects }) => {
        return (
          <div key={id} className="flex flex-col gap-3">
            <h4>{type}</h4>
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => {
                return (
                  <ProjectsListCard
                    key={project.id}
                    project={{ ...project, type }}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
