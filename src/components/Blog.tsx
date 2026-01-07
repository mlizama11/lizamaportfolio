import { BlogPostsList } from './BlogPostsList';
import { NextLink } from './NextLink';
import { Section, SectionTitle } from './layout/Section';

export default function Blog() {
  return (
    <Section id="blog">
      <div className="flex items-center justify-between">
        <SectionTitle>Blog</SectionTitle>
        <NextLink variant="primary" href="/blog">
          All Blog Posts &rarr;
        </NextLink>
      </div>
      <BlogPostsList />
    </Section>
  );
}
