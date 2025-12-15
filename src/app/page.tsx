import About from '@/components/About';
import Blog from '@/components/Blog';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Stack from '@/components/Stack';
import Works from '@/components/Works';

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Works />
      <Experience />
      <Education />
      <Stack />
      <Blog />
    </>
  );
}
