import { ProjectsList } from './ProjectsList';
import { Section, SectionTitle } from './layout/Section';

export default function Works() {
  return (
    <Section id="works">
      <SectionTitle>Works</SectionTitle>
      <p>
        Below are key projects that demonstrate my commitment to high-quality
        results across web development, audiovisual work, photography, and
        communications.
      </p>
      <ProjectsList />
    </Section>
  );
}
