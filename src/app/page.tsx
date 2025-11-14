import React from 'react';

import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Stack from '@/components/Stack';
import Works from '@/components/Works';

export default function Home() {
  return (
    <main className="flex grow flex-col gap-15 px-4">
      <Intro />
      <About />
      <Works />
      <Experience />
      <Education />
      <Stack />
    </main>
  );
}
