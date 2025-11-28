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
          const {
            id,
            createdAt,
            updatedAt,
            title,
            description,
            date,
            slug,
            image
          } = singlePost;

          if (!image) return null;
          const { src, alt, width, height } = image;

          return (
            <NextLink key={id} href={`/blog/${slug}`}>
              <Card>
                <CardHeader>
                  <Image
                    alt={alt}
                    src={src}
                    className="h-full w-full object-cover"
                    width={width}
                    height={height}
                  />
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="flex flex-col gap-3">
                      <h4 className="font-semibold">{title}</h4>
                      <div className="flex flex-col items-end">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {description}
                        </p>
                      </div>
                      <div className="flex items-center justify-end">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(date || createdAt).toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            }
                          )}
                        </span>
                        <span className="mx-2 text-[12px] text-gray-500">
                          |
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Updated on{' '}
                          {new Date(updatedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </NextLink>
          );
        })}
      </div>
    </Section>
  );
}
