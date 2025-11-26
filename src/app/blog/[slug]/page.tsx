import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import RichText from '@/contentful/RichText';
import { fetchBlogPost, fetchBlogPosts } from '@/contentful/blogPosts';

interface BlogPostPageParams {
  slug: string;
}

interface BlogPostPageProps {
  params: BlogPostPageParams;
}

export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
  const blogPosts = await fetchBlogPosts({ preview: false });

  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const slug = params.slug;
  const blogPost = await fetchBlogPost({
    slug: slug,
    preview: (await draftMode()).isEnabled,
  });

  if (!blogPost) {
    return notFound();
  }

  return {
    title: blogPost.title,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: (await draftMode()).isEnabled,
  });

  if (!blogPost) {
    return notFound();
  }

  return (
    <main className="p-[6vw]">
      <Link href="/">← Posts</Link>
      <div className="prose mt-8 border-t pt-8">
        {blogPost.image && (
          <Image
            src={`https:${blogPost.image.src}`}
            width={blogPost.image.width}
            height={blogPost.image.height}
            alt={blogPost.image.alt}
          />
        )}
        <h1>{blogPost.title}</h1>
        <RichText document={blogPost.body} />
      </div>
    </main>
  );
}
