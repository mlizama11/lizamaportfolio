import { fetchBlogPosts } from '../contentful/blogPosts';
import { BlogPostsList } from './BlogPostsList';
import { Section, SectionTitle } from './layout/Section';

export default async function Blog() {
  const blogPosts = await fetchBlogPosts();
  return (
    <Section id="blog">
      <SectionTitle>Blog</SectionTitle>
      <BlogPostsList blogPosts={blogPosts} />
    </Section>
  );
}
