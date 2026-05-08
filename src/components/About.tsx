import { Section, SectionTitle } from './layout/Section';

export default function About() {
  return (
    <Section id="about">
      <SectionTitle className="text-3xl font-bold">About Me</SectionTitle>
      <p>
        I am a Full Stack Developer skilled in <b>TypeScript</b>,<b>React</b>,
        and <b>NestJS</b>. With four years of hands-on experience in software
        development, I understand that effective teamwork and a sense of
        ownership are crucial for creating scalable, high-performance products
        that are user-friendly and responsive. Furthermore, I am a professional
        journalist driven by a keen interest in new technologies. My passions
        include sustainable development, nature conservation, politics, and
        ecotourism.
      </p>
    </Section>
  );
}
