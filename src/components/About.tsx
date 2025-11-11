import React from 'react';
import { Section, SectionTitle } from './layout/Section';

export default function About() {
  return (
    <Section id="about">
      <SectionTitle className="text-3xl font-bold">About Me</SectionTitle>
      <p>
        I am a Web Developer with four years of hands-on experience in software
        application development. I am enthusiastic about communication, and I
        firmly believe that teamwork, fun, and commitment are key to achieving
        successful results. I am also a trained journalist with a special
        motivation for the use of new technologies.
      </p>
    </Section>
  );
}
