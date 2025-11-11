import React from 'react';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Works from '@/components/Works';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Stack from '@/components/Stack';

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
