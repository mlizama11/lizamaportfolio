import { Section, SectionTitle } from './layout/Section';

export default function About() {
  return (
    <Section id="about">
      <SectionTitle className="text-3xl font-bold">About Me</SectionTitle>
      <p>
        I am a Full Stack Developer skilled in <b>TypeScript</b>, <b>React</b>{' '}
        and <b>NestJS</b>, with professional experience in software development
        since 2021. Also, as a professional journalist, I have strong skills in
        communications. I’m passionate about sustainable development, nature
        conservation, politics, and ecotourism.
      </p>
    </Section>
  );
}
