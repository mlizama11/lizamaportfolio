import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { NextLink } from '@/components/NextLink';
import { SocialMediaShareBlog } from '@/components/SocialMediaShareBlog';
import { siteUrl } from '@/constants/site';
import RichText from '@/contentful/RichText';
import { RichTextCarousel } from '@/contentful/RichTextCarousel';
import { fetchBlogPost, fetchBlogPosts } from '@/contentful/blogPosts';
import { formatDate } from '@/lib/dateFormat';

type Params = Promise<{ slug: string }>;

type BlogPostPageProps = {
  params: Params;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogPosts = await fetchBlogPosts();

  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata> {
  try {
    const blogPost = await fetchBlogPost({
      slug: (await params).slug
    });

    if (!blogPost) {
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.'
      };
    }

    return {
      title: blogPost.title,
      description: blogPost.description,
      openGraph: {
        title: blogPost.title,
        description: blogPost.description,
        images: blogPost.image
          ? {
              url: blogPost.image.src,
              width: blogPost.image.width,
              height: blogPost.image.height,
              alt: blogPost.image.alt
            }
          : undefined
      },
      twitter: {
        card: 'summary_large_image',
        title: blogPost.title,
        description: blogPost.description,
        images: blogPost.image?.src
      }
    };
  } catch {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogPost = await fetchBlogPost({
    slug: slug
  });

  if (!blogPost) {
    return notFound();
  }
  if (!blogPost.image) return null;
  const imageUrl = blogPost.image?.src;
  const blogPostDate = formatDate(blogPost.date);

  return (
    <main className="flex grow flex-col gap-6 px-4">
      <NextLink variant="primary" href="/">
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
                className="h-full w-full rounded object-cover object-[80%_40%]"
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
              {blogPostDate}
            </span>
          </div>
        </div>
        <article className="max-[700px]:flex max-[700px]:flex-col max-[700px]:items-start max-[700px]:justify-center">
          <RichText document={blogPost.body} />
        </article>
        {blogPost.images && (
          <div className="mt-4 flex flex-col items-center justify-center">
            <RichTextCarousel document={blogPost.images} />
          </div>
        )}
        <div className="my-5 flex flex-col gap-4">
          <p className="font-bold">Share this post</p>
          <SocialMediaShareBlog
            url={`${siteUrl}/blog/${blogPost.slug}`}
            sharingDefaultTitle={blogPost.title}
            siteDescription={blogPost.description}
          />
        </div>
      </div>
    </main>
  );
}
