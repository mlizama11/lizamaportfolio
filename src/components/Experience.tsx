import { experiences } from '@/constants/experience';

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
              className="flex flex-col gap-4 border-l-2 border-gray-900 pl-4 dark:border-gray-100"
            >
              <div>
                <h3 className="max-[500px]:text-lg">{company}</h3>
                <p className="text-gray-500">{location}</p>
                <h5 className="uppercase max-[500px]:text-sm">{role}</h5>
                <p className="text-sm text-gray-500">{period}</p>
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
