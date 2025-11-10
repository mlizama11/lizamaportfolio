import React from 'react';
import { experiences } from '@/constants';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-2">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="flex flex-col gap-12">
          {experiences.map(
            ({ company, location, period, role, responsibilities }) => (
              <div key={company} className="border-l-2 border-gray-900 pl-4">
                <h3 className="text-2xl font-semibold">{company}</h3>
                <p>
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
}
