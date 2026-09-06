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
      <p>
        I was born in Costa Rica (🇨🇷), and I also have family roots in Chile
        (🇨🇱) and France (🇫🇷). In the past few years, from late 2021 to mid-2025,
        I worked at I Planted GmbH in Cologne. From late 2020 to 2021, I studied
        and graduated as a full-stack developer (MERN stack) at the Digital
        Career Institute (DCI) in Germany (🇩🇪).
      </p>
      <p>
        Currently, I am learning German with the goal of reaching the B2 level
        and taking courses on master.dev to improve my frontend and backend
        skills in topics such as Python, DevOps, PHP, AI, Angular, Vue, among
        others.
      </p>
    </Section>
  );
}
