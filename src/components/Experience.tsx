import React from 'react';
import { experiences } from '@/constants';
import { Section, SectionTitle } from './layout/Section';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="flex flex-col gap-12">
        {experiences.map(
          ({ company, location, period, role, responsibilities }) => (
            <div
              key={company}
              className="flex flex-col gap-4 border-l-2 border-gray-900 pl-4"
            >
              <div>
                <h3 className="text-2xl font-semibold">{company}</h3>
                <p>
                  {location} | {period}
                </p>
                <p className="font-medium">{role}</p>
              </div>
              <ul className="list-inside list-disc space-y-1">
                {responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </Section>
  );
}
