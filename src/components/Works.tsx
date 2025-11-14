import React from 'react';

import { ProjectsList } from './ProjectsList';
import { Section, SectionTitle } from './layout/Section';

export default function Works() {
  return (
    <Section id="works">
      <SectionTitle>Works</SectionTitle>
      <p>
        Here are some of the projects I have worked on. Each project reflects my
        dedication to quality and my passion for web development, journalism,
        audiovisual and photography.
      </p>
      <ProjectsList />
    </Section>
  );
}
