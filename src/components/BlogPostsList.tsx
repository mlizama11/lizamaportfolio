import Image from 'next/image';

import { fetchBlogPosts } from '@/contentful/blogPosts';
import { formatDate } from '@/lib/dateFormat';

import { NextLink } from './NextLink';

export async function BlogPostsList() {
  const blogPosts = await fetchBlogPosts();

  return (
    <div className="mt-6 space-y-4">
      {blogPosts.slice(0, 4).map((post) => {
        const formattedDate = formatDate(post.date);
        const formattedUpdatedAt = formatDate(post.updatedAt);
        return (
          <div
            key={post.id}
            className="flex items-start gap-4 max-[700px]:flex-col"
          >
            {post.image && (
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width={150}
                height={150}
                className="shrink-0 rounded"
                loading="eager"
              />
            )}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">{post.title}</h3>
              <div className="flex items-center gap-1 max-[700px]:flex-col max-[700px]:items-start">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Published on {formattedDate}
                </span>
                <span className="max-[700px]:hidden">|</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Updated on {formattedUpdatedAt}
                </span>
              </div>
              <p className="text-sm text-gray-600">{post.description}</p>
              <div className="flex w-full items-center justify-end">
                <NextLink
                  className="text-xs text-gray-600 underline"
                  href={`/blog/${post.slug}`}
                >
                  Read Article
                </NextLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
