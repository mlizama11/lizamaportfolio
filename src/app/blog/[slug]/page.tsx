import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { NextLink } from '@/components/NextLink';
import RichText from '@/contentful/RichText';
import { fetchBlogPost, fetchBlogPosts } from '@/contentful/blogPosts';

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
      <NextLink className="cursor-pointer dark:text-white" href="/">
        ← Home
      </NextLink>
      <div className="flex flex-col">
        {blogPost.image && (
          <>
            <div className="h-80 w-full">
              <Image
                src={imageUrl.toString()}
                width={blogPost.image.width}
                height={blogPost.image.height}
                className="h-full w-full rounded object-cover"
                alt={blogPost.image.alt}
                priority
              />
            </div>
            <div className="my-2 h-fit text-xs leading-5 text-gray-500 dark:text-gray-400">
              {blogPost.image.alt}
            </div>
          </>
        )}
        <div className="my-5 flex flex-col gap-3 px-8 text-center">
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
          </div>
        </div>
        <article className="max-[700px]:flex max-[700px]:flex-col max-[700px]:items-start max-[700px]:justify-center">
          <RichText document={blogPost.body} />
        </article>
      </div>
    </main>
  );
}
