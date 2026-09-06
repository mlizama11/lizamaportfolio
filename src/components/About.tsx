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
        Between late 2020 and 2021, I completed my studies as a Full Stack
        Developer (MERN stack) at the Digital Career Institute (DCI) in Germany.
        From late 2021 to mid-2025, I worked at a startup called I Planted GmbH
        in Cologne. During this period, I applied the skills I acquired at DCI
        to develop a software application utilizing React and Nest with a SQL
        database. I collaborated closely with a talented team to implement
        innovative ideas, enhance the application’s functionality, and
        contribute to the development of digital tools for CO2 emissions
        reporting.
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
