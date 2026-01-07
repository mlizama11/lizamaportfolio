import { BlogPostCards } from '@/components/BlogPostCards';
import { NextLink } from '@/components/NextLink';
import { fetchBlogPosts } from '@/contentful/blogPosts';

export default async function BlogPage() {
  const blogPosts = await fetchBlogPosts();
  return (
    <main className="flex grow flex-col gap-6 px-4">
      <NextLink variant="primary" href="/#blog">
        ← Back
      </NextLink>
      <h1 className="text-3xl font-bold"> All Blog Posts</h1>
      <p className="text-lg">Here you&apos;ll find all my latest posts.</p>
      <BlogPostCards blogPosts={blogPosts} />
    </main>
  );
}
