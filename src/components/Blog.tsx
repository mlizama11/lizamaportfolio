import Image from 'next/image';
import { fetchBlogPosts } from '../contentful/blogPosts';

import { Card, CardContent, CardHeader } from './Card';
import { NextLink } from './NextLink';
import { Section, SectionTitle } from './layout/Section';

export default async function Blog() {
  const blogPosts = await fetchBlogPosts({ preview: true });
  return (
    <Section id="blog">
      <SectionTitle>Blog</SectionTitle>
      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((singlePost) => {
          const { id, updatedAt, title, description, date, slug, image } =
            singlePost;

          if (!image) return null;
          const { src, alt, width, height } = image;

          return (
            <Card key={id}>
              <CardHeader className="h-50">
                <Image
                  alt={alt}
                  src={src}
                  className="h-full w-full object-cover"
                  width={width}
                  height={height}
                />
              </CardHeader>
              <CardContent className="min-h-70 max-h-90">
                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold dark:text-white dark:hover:text-blue-400">
                    {title}
                  </h4>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="mx-2 text-[12px] text-gray-500">|</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Updated on{' '}
                      {new Date(updatedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {description}
                  </p>
                </div>
                <div className="flex justify-end gap-4">
                  <NextLink
                    href={`/blog/${slug}`}
                    rel="noopener noreferrer"
                    variant="secondary"
                  >
                    Read More
                  </NextLink>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
