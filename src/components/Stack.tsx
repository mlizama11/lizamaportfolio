import { myStack } from '@/constants/stack';

import { Section, SectionTitle } from './layout/Section';

export default function Stack() {
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
