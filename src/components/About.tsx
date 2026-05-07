import { Section, SectionTitle } from './layout/Section';

export default function About() {
  return (
    <Section id="about">
      <SectionTitle className="text-3xl font-bold">About Me</SectionTitle>
      <p>
        I am a Full Stack Developer with expertise in TypeScript, React and
        NestJS. With four years of practical experience in software development,
        I have developed products while always considering scalability,
        maintainability, performance, user-friendliness, and responsiveness.
        Additionally, I am also a professional journalist with a strong
        motivation for the use of new technologies. I am particularly interested
        in sustainable development, the environment, nature conservation,
        politics, and ecotourism.
      </p>
    </Section>
  );
}
