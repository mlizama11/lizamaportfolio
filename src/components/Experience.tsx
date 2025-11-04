import React from 'react';
import { experiences } from '@/constants';

export const Experience = () => {
  return (
    <section id="experience">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="flex flex-col gap-12 text-lg">
          {experiences.map(
            ({ company, location, period, role, responsibilities }) => (
              <div key={company} className="border-l-2 border-gray-900 pl-4">
                <h3 className="text-2xl font-semibold">{company}</h3>
                <p className="text-sm">
                  {location} | {period}
                </p>
                <p className="font-medium">{role}</p>
                <ul className="list-inside list-disc space-y-1">
                  {responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
