import { draftMode } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import RichText from '@/contentful/RichText';
import { fetchBlogPost, fetchBlogPosts } from '@/contentful/blogPosts';
import { Metadata } from 'next';

type Params = Promise<{ slug: string }>;

type BlogPostPageProps = {
  params: Params;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogPosts = await fetchBlogPosts({ preview: false });

  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata> {
  const blogPost = await fetchBlogPost({
    slug: (await params).slug,
    preview: (await draftMode()).isEnabled
  });

  if (!blogPost) {
    return notFound();
  }

  return {
    title: blogPost.title
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogPost = await fetchBlogPost({
    slug: slug,
    preview: (await draftMode()).isEnabled
  });

  if (!blogPost) {
    return notFound();
  }

  const imageUrl = new URL(
    blogPost.image ? blogPost.image.src : '',
    'https://images.ctfassets.net'
  );

  return (
    <main className="flex grow flex-col gap-6 px-4">
      <Link className="cursor-pointer" href="/">
        ← Posts
      </Link>
      <div className="flex flex-col gap-5">
        {blogPost.image && (
          <div className="h-80 w-full">
            <Image
              src={imageUrl.toString()}
              width={blogPost.image.width}
              height={blogPost.image.height}
              className="h-full w-full object-cover rounded"
              alt={blogPost.image.alt}
              priority
            />
          </div>
        )}
        <div className="flex flex-col gap-3 px-8">
          <h2>{blogPost.title}</h2>
          <ul className="list-disc px-5">
            <li className="italic">{blogPost.description}</li>
          </ul>
          <div className="flex items-center justify-end">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(blogPost.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="mx-2 text-[12px] text-gray-500">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Updated on{' '}
              {new Date(blogPost.updatedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
        <article>
          <RichText document={blogPost.body} />
        </article>
      </div>
    </main>
  );
}
