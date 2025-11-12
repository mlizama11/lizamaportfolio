import React from 'react';

import { Section, SectionTitle } from './layout/Section';
import { education } from '@/constants';
import { EducationItem } from '@/types';

export default function Education() {
  return (
    <Section id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="flex flex-col gap-12">
        {education.map(
          ({
            id,
            institution,
            degree,
            location,
            startDate,
            endDate,
            details,
          }: EducationItem) => (
            <div
              key={id || institution}
              className="flex flex-col gap-2 border-l-2 border-gray-900 pl-4 dark:border-gray-100"
            >
              <div>
                <h3 className="text-2xl font-semibold">{institution}</h3>
                <p>
                  {location} | {startDate} - {endDate}
                </p>
              </div>
              <div>
                <p className="font-medium">{degree}</p>
                {details && (
                  <ul className="list-inside list-disc space-y-1">
                    {details.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </Section>
  );
}
